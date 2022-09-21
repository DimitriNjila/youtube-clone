import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import { Feed, Navbar, SearchFeed, VideoDetails, ChannelDetails } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetails />} />
          <Route path='/video/:id' element={<ChannelDetails />} />
          <Route path='/search/:searchTerm' exact element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App
