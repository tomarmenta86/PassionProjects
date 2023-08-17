import React from 'react';
import { Card, CardContent, Typography, Button, Divider } from '@mui/material';
import { useQuery } from "@apollo/client";
import { QUERY_ALL_POSTS } from "../utils/queries";

function JobList({ jobs, selectedTag }) {
  const { loading, data } = useQuery(QUERY_ALL_POSTS);

  const posts = data?.posts || [];
  console.log(posts);
  
  return (
    <div>
      {selectedTag ? (
        jobs
          .filter((job) => job.tags && job.tags.includes(selectedTag))
          .map((job, index) => (
            <Card key={index} style={{ marginBottom: '1rem' }}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {job.title}
                </Typography>
                <Typography color="textSecondary">
                  {job.description}
                </Typography>
                <Divider style={{ margin: '10px 0' }}/>
                <Typography>{job.details}</Typography>
                <Divider style={{ margin: '10px 0' }}/>
                <div className="buttons">
                  {/* Assuming the jobs might have some actions in the future */}
                  <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
                    Apply
                  </Button>
                  <Button variant="contained" color="secondary">
                    More Info
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
      ) : (
        jobs.map((job, index) => (
          <Card key={index} style={{ marginBottom: '1rem' }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {job.title}
              </Typography>
              <Typography color="textSecondary">
                {job.description}
              </Typography>
              <Divider style={{ margin: '10px 0' }}/>
              <Typography>{job.details}</Typography>
              <Divider style={{ margin: '10px 0' }}/>
              <div className="buttons">
                {/* Assuming the jobs might have some actions in the future */}
                <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
                  Apply
                </Button>
                <Button variant="contained" color="secondary">
                  More Info
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}

export default JobList;
