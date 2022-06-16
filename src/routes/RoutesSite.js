import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../pages/Layout";
import Advice from "../pages/Advice";
import CreateAdvice from "../pages/CreateAdvice";
import DownloadAdvice from "../pages/DownloadAdvice";
import Notification from "../pages/Notification";
import CreateNotification from "../pages/CreateNotification";
import DownloadNotification from "../pages/DownloadNotification";

const RoutesSite = () => {
  const [close, onClose] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout close={close} onClose={onClose} />}>
          <Route index element={<Advice />} />
          <Route path="/CreateAdvice" element={<CreateAdvice />} />
          <Route path="/DownloadAdvice" element={<DownloadAdvice />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/CreateNotification" element={<CreateNotification />} />
          <Route
            path="/DownloadNotification"
            element={<DownloadNotification />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesSite;
