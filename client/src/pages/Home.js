import React, { useState } from 'react';
import { Web, Palette, BarChart, Create, Api, DataUsage, Menu as MenuIcon } from '@mui/icons-material';
import { tags, generateRandomJobs } from '../utils/jobUtils';
import Banner from '../components/Banner';
import JobList from '../components/JobList';
import Header from '../components/Header';
import TagMenu from '../components/TagMenu';
import { Grid, TextField } from '@mui/material';

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
  const handleSearch = (searchTerm) => {
    // Implement your search logic here
  };

  return (
    <div>
      <Header />
      <div className="bg-gray-100">
        <Banner />
        <Grid container direction="row" justifyContent="flex-start" alignItems="stretch">
          <Grid item xs={2}>
          <TextField
            label="Search"
            variant="outlined"
            size="medium"
            onChange={(e) => handleSearch(e.target.value)}
            style={{ margin: '0.5rem' }}
          />
            <TagMenu
              anchorEl={anchorEl}
              handleTagClick={handleTagClick}
              handleTagClose={handleTagClose}
              tags={tags}
              getIcon={getIcon}
              handleClearFilter={handleClearFilter}
              selectedTag={selectedTag}
              setAnchorEl={setAnchorEl}
              MenuIcon={MenuIcon}
            />
          </Grid>
          <Grid item xs={6}>
            <JobList jobs={jobs} selectedTag={selectedTag} getIcon={getIcon} />
          </Grid>
        </Grid>
      </div>
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
