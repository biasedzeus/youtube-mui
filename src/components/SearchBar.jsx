import { Search } from '@mui/icons-material';
import { IconButton, Paper } from '@mui/material';
import React,{useState} from 'react';


const SearchBar = () => {

    const [searchWord, setSearchWord] = useState("");


  const handleSubmit = (e) =>{
             e.preventDefault();
             alert('form submitted')
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

export default SearchBar