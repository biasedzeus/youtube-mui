import React from "react";
import { useState, useEffect } from "react";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";


const SearchhFeed = () => {
   const [videos, setVideos] = useState(null);
   const {searchWord} =  useParams()


  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchWord}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchWord]);

  console.log("feed", videos);

  return (
    <Stack
      sx={{
        flexDirection: {
          sx: "column",
          md: "row",
        },
      }}
    >
      {videos === null && (
        <div>
          <CircularProgress />
        </div>
      )}
      <Box
        sx={{
          overflowY: "auto",
          height: "90vh",
          // backgroundColor: "yellowgreen",
        }}
        p={2}
      >
        <Typography variant="h4" fontWeight="bold" mb="2">
         Search Results for : <span style={{ color: "red" }}>{searchWord}</span>
        </Typography>
        {videos && <Videos videos={videos} />}
      </Box>
    </Stack>
  );
};

export default SearchhFeed;
