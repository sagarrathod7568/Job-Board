import jobs from "../data/jobs";

const APPLIED_JOBS_KEY = "appliedJobs";

const getAppliedJobIds = () => {
  const appliedJobs = localStorage.getItem(APPLIED_JOBS_KEY);

  if (!appliedJobs) {
    return [];
  }

  try {
    return JSON.parse(appliedJobs);
  } catch {
    return [];
  }
};

export const getAppliedJobs = () => {
  const appliedJobIds = getAppliedJobIds();

  return jobs.filter((job) => appliedJobIds.includes(job.id));
};

export const isJobApplied = (jobId) => {
  return getAppliedJobIds().includes(Number(jobId));
};

export const saveAppliedJob = (jobId) => {
  const appliedJobIds = getAppliedJobIds();
  const numericJobId = Number(jobId);

  if (appliedJobIds.includes(numericJobId)) {
    return;
  }

  localStorage.setItem(
    APPLIED_JOBS_KEY,
    JSON.stringify([...appliedJobIds, numericJobId])
  );
};
