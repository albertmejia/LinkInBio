import React, { Suspense, lazy, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Loader from "./components/Loader";
import SharedHeader from "./components/SharedHeader";
import HomeCSS from "./css/Home.module.css";
const Home = lazy(() => import("./pages/Home"));
const Downloads = lazy(() => import("./pages/Downloads"));
const DownloadDetail = lazy(() => import("./pages/DownloadDetail"));
const Mixes = lazy(() => import("./pages/Mixes"));

function RouteChangeTracker() {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <div className="App" style={{ width: "100%", maxWidth: "31.25rem" }}>
      <Router>
        <RouteChangeTracker />
        <div className={HomeCSS.page}>
          <div className={HomeCSS.column}>
            <SharedHeader />
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/downloads" element={<Downloads />} />
                <Route path="/downloads/:slug" element={<DownloadDetail />} />
                <Route path="/mixes" element={<Mixes />} />
                <Route path="/free-downloads" element={<Navigate to="/downloads" replace />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
