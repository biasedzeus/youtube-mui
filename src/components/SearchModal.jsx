import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

import { Search } from "@mui/icons-material";

const SearchModal = ({ open, handleClose }) => {
  const [searchWord, setSearchWord] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchWord) {
      handleClose();
      navigate(`/search/${searchWord}`);
      setSearchWord("");
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ top: "0", backgroundColor: "#3f3f3f" }} p={2}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            display="flex"
            sx={{
              // borderRadius: 1,
              // border: "1px solid #e3e3e3",
              // boxShadow: "none",
              mr: { sm: 5, lg: 20 },
              height: "1%",
              // width:{xs:'10px'}
            }}
          >
            <Box>
             
              <input
                className="search-bar"
                placeholder="search..."
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
              />
            </Box>
            <Box>
              <IconButton
                type="submit"
                sx={{
                  backgroundColor: { xs: "#3e3e3e" },
                  borderRadius: "3px",
                  color: "white",
                }}
              >
                <Search sx={{ paddingLeft: "1px" }} />
              </IconButton>

              
            </Box>
            <Box>
            <IconButton onClick={handleClose}>
                <CancelIcon sx={{color:'white'}}/>
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default SearchModal;
