export const tags = ['Web Development', 'Design', 'Marketing', 'Writing', 'Api', 'Build'];

export const generateRandomJobs = (count) => {
  const jobs = [];
  for (let i = 0; i < count; i++) {
    jobs.push({
      title: `Job Title ${i + 1}`,
      requester: `Requester ${i + 1}`,
      details: 'Description...',
    });
  }
  return jobs;
};
