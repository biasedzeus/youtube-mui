import { Search } from "@mui/icons-material";
import { IconButton, Paper,Box } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchModal from "./SearchModal";

const SearchBar = ({handleClose}) => {
  const [searchWord, setSearchWord] = useState("");
 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchWord) {
      navigate(`/search/${searchWord}`);
      setSearchWord("");
    }
  };


  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display= 'flex'
      sx={{
        // borderRadius: 1,
        // border: "1px solid #e3e3e3",
        // boxShadow: "none",
        mr: { sm: 5, lg: 20 },
        height: "1%",
        // width:{xs:'10px'}
      }}
    >
        

      <Box
      
      sx={{
        display:{xs:'none',sm:'block'}
      }}>
      <input
        className="search-bar"
        placeholder="search..."
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      </Box>
      <Box sx={{display:{xs:'none',sm:'block'}}}>
      <IconButton type="submit" sx={{backgroundColor:{xs:'#3e3e3e'},borderRadius:{xs:'20px',sm:'inherit'},color:'white'}}>
        <Search sx={{paddingLeft:'1px'}} />
      </IconButton>
      </Box>
      <Box sx={{display:{xs:'block',sm:'none'}}}>
      <IconButton onClick={handleClose} sx={{backgroundColor:{xs:'#3e3e3e'},borderRadius:{xs:'20px',sm:'inherit'},color:'white'}}>
        <Search sx={{paddingLeft:'1px'}} />
      </IconButton>
      </Box>
    </Box>
  );
};

export default SearchBar;
