import jobs from "../data/jobs";

export const getJobs = () => jobs;

export const getJobById = (id) => {
  return jobs.find((job) => job.id === Number(id));
};