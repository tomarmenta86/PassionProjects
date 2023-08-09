export const tags = ['Web Development', 'Design', 'Marketing', 'Writing', 'Data Science'];

export const generateRandomJobs = (count) => {
  const jobs = [];
  for (let i = 0; i < count; i++) {
    jobs.push({
      title: `Job Title ${i + 1}`,
      requester: `Requester ${i + 1}`,
      details: 'Short job description here...',
    });
  }
  return jobs;
};
