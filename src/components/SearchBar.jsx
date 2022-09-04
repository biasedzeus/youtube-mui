import { Search } from '@mui/icons-material';
import { IconButton, Paper } from '@mui/material';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


const SearchBar = () => {
  
  const [searchWord, setSearchWord] = useState("");
  const navigate = useNavigate();   
  


  const handleSubmit = (e) =>{
             e.preventDefault();
             if(searchWord) {
              navigate(`/search/${searchWord}`)
              setSearchWord('');
             }
  }

  return (
    <Paper
    component="form"
    onSubmit={handleSubmit}
    sx={{
        borderRadius:20,
        border: '1px solid #e3e3e3',
        boxShadow: 'none',
        mr:{sm:5,lg:20}
    }}

    
    >
        <input 
         className='search-bar' 
         placeholder='search...'
         value={searchWord}
         onChange={(e) => setSearchWord(e.target.value)}
        />
        <IconButton sx={{p:'10px'}} type='submit'><Search/></IconButton>
    </Paper>
  )
}

export default SearchBar;