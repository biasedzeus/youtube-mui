import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";

// Components
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchhFeed,
} from "./components";

function App() {
  return (
    <Box sx={{ backgroundColor: "#181818" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchWord" element={<SearchhFeed />} />
        <Route
          path="*"
          element={
            <main>
              {" "}
              <h1>Error 404</h1>
            </main>
          }
        />
      </Routes>
    </Box>
  );
}

export default App;
