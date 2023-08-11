import React, { useState } from 'react';
import { Typography, Container } from '@mui/material';
import {Web, Palette, BarChart, Create, Api, DataUsage, Menu as MenuIcon} from '@mui/icons-material';
import { tags, generateRandomJobs } from '../utils/jobUtils'; 
import Banner from '../components/Banner';
import JobList from '../components/JobList';
import Header from '../components/Header';
import TagMenu from '../components/TagMenu';

function HomePage() {
  const jobs = generateRandomJobs(5);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

  const handleTagClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleTagClose = (tag) => {
    setAnchorEl(null);
    setSelectedTag(tag);
  };

  const handleClearFilter = () => {
    setSelectedTag(null);
  };

  
return (
  <div>
    <Header />
    <Container>
     <Banner/>
        <Typography variant="h4" align="center" style={{ marginTop: '1rem' }}>
          Search the Projects
        </Typography>

        {/* TagMenu*/}
        <TagMenu
        anchorEl={anchorEl}
        handleTagClick={handleTagClick}
        handleTagClose={handleTagClose}
        tags={tags}
        getIcon={getIcon}
        handleClearFilter={handleClearFilter}
        setAnchorEl={setAnchorEl}
        MenuIcon={MenuIcon}
        />
        <JobList jobs={jobs} selectedTag={selectedTag} getIcon={getIcon} />
      </Container>
    </div>
  );
}

// Function to map tags to icons
function getIcon(tag) {
  switch (tag) {
    case 'Web Development':
      return <Web />;
    case 'Design':
      return <Palette />;
    case 'Marketing':
      return <BarChart />;
    case 'Writing':
      return <Create />;
    case 'Data Science':
      return <DataUsage />;
      case 'Api':
      return <Api />;
    default:
      return null;
  }
}

export default HomePage;
