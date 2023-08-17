import React from 'react';
import { Button, Menu, MenuItem, Chip } from '@mui/material';
import { Menu as MenuIcon, Web, Palette, BarChart, Create, Api, DataUsage } from '@mui/icons-material';
import HtmlIcon from '@mui/icons-material/Html';

function TagMenu({ anchorEl, handleTagClick, handleTagClose, tags, handleClearFilter }) {
  const getIcon = (tag) => {
    switch (tag) {
      case 'Web Development':
        return <Web />;
        case 'HTML':
        return <HtmlIcon />;
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
  };
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column'}}>
      <Button
        aria-controls="tag-menu"
        aria-haspopup="true"
        onClick={handleTagClick}
        startIcon={<MenuIcon />}
        style={{ marginBottom: '1rem', padding: '0rem'}}
      >
        Filter by Tag
      </Button>
    
      <Menu
        id="tag-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => handleTagClose(null)}
      >
        {tags.map((tag, index) => (
          <MenuItem key={index} onClick={() => handleTagClose(tag)}>
            <Chip icon={getIcon(tag)} label={tag} variant="outlined" style={{ margin: '0.2rem' }} />
          </MenuItem>
        ))}
        <MenuItem onClick={handleClearFilter}>Clear Filter</MenuItem>
      </Menu>
    </div>
  );
}

export default TagMenu;