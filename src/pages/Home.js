import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Chip,
  Card,
  CardContent,
  Menu,
  MenuItem,
} from '@mui/material';
import { Link } from 'react-router-dom'
import { tags, generateRandomJobs } from '../utils/jobUtils'; 
import {
  Web,
  Palette,
  BarChart,
  Create,
  DataUsage,
  Menu as MenuIcon,
} from '@mui/icons-material';
import Banner from '../components/Banner';

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
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">The Passion Projects</Typography>
          <Link to="/signin" style={{ textDecoration: 'none', color: 'white' }}>
          <Button color="inherit">Sign In</Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Container>
     <Banner/>

        <Typography variant="h4" align="center" style={{ marginTop: '1rem' }}>
          Find Your Next Passion Project
        </Typography>

        {/* Tags dropdown */}
        <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <Button
            aria-controls="tag-menu"
            aria-haspopup="true"
            onClick={handleTagClick}
            startIcon={<MenuIcon />}
          >
            Filter by Tag
          </Button>
          <Menu
            id="tag-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            {tags.map((tag, index) => (
              <MenuItem key={index} onClick={() => handleTagClose(tag)}>
                <Chip
                  icon={getIcon(tag)}
                  label={tag}
                  variant="outlined"
                  style={{ margin: '0.2rem' }}
                />
              </MenuItem>
            ))}
            <MenuItem onClick={handleClearFilter}>Clear Filter</MenuItem>
          </Menu>
        </div>

        {/* Filtered jobs */}
        <div>
          {selectedTag ? (
            jobs
              .filter((job) => job.tags.includes(selectedTag))
              .map((job, index) => (
                <Card key={index} style={{ marginBottom: '1rem' }}>
                  <CardContent>
                    <Typography variant="h6">{job.title}</Typography>
                    <Typography variant="subtitle1">{job.requester}</Typography>
                    <Typography>{job.details}</Typography>
                  </CardContent>
                </Card>
              ))
          ) : (
            jobs.map((job, index) => (
              <Card key={index} style={{ marginBottom: '1rem' }}>
                <CardContent>
                  <Typography variant="h6">{job.title}</Typography>
                  <Typography variant="subtitle1">{job.requester}</Typography>
                  <Typography>{job.details}</Typography>
                </CardContent>
              </Card>
            ))
          )}
        </div>
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
    default:
      return null;
  }
}

export default HomePage;
