import React from 'react';
import { Button, Menu, MenuItem, Chip } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

function TagMenu({ anchorEl, handleTagClick, handleTagClose, tags, getIcon, selectedTag, handleClearFilter }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '2rem', marginRight: '3rem' }}>
      <Button
        aria-controls="tag-menu"
        aria-haspopup="true"
        onClick={handleTagClick}
        startIcon={<MenuIcon />}
        style={{ marginBottom: '1rem', padding: '0rem'}}
      >
        Filter by Tag
      </Button>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            color={tag === selectedTag ? 'primary' : 'default'}
            onClick={() => handleTagClick(tag)}
            style={{ marginBottom: '2rem', cursor: 'pointer' }}
          />
        ))}
      </div>
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
