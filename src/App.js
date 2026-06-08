import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
const Home = lazy(() => import("./pages/Home"));
const FreeDownloads = lazy(() => import("./pages/FreeDownloads"));

function App() {
  return (
    <div className="App" style={{ maxWidth: "31.25rem" }}>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/free-downloads" element={<FreeDownloads />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
