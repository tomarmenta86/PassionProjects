import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function JobList({ jobs, selectedTag}) {
  return (
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
  );
}

export default JobList;
