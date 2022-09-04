import { Category } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../utils/constants";

// const seletedCategory = "ReactJS";

const SideBar = ({selectedCat,ChangeSelectedCat}) => {

 
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { xs: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((element) => {
        return (
          <Button
            className="category-btn"
            sx={{
              gap: 2,
              backgroundColor: element.name === selectedCat && "white",
              color: element.name === selectedCat ? "red" : "white",
            }}
            key={element.name}
            onClick={() => ChangeSelectedCat(element.name)}
          >
            <span >{element.icon}</span>
            <span>{element.name}</span>
          </Button>
        );
      })}
    </Stack>
  );
};

export default SideBar;
