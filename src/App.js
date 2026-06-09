import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Loader from "./components/Loader";
import SharedHeader from "./components/SharedHeader";
import HomeCSS from "./css/Home.module.css";
const Home = lazy(() => import("./pages/Home"));
const Downloads = lazy(() => import("./pages/Downloads"));

function App() {
  return (
    <div className="App" style={{ maxWidth: "31.25rem" }}>
      <Router>
        <div className={HomeCSS.page}>
          <div className={HomeCSS.column}>
            <SharedHeader />
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/downloads" element={<Downloads />} />
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
