import { useEffect, useState } from "react";
import { jobsData } from "../data/data";
import JobCard from "./JobCard";
import FilterBar from "./FilterBar";

// Define the Job type based on the structure of jobsData
type Job = (typeof jobsData)[number];

export default function JobListingPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    setJobs(jobsData);
  }, []);

  const addFilter = (filter: string) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  const removeFilter = (filter: string) => {
    setFilters(filters.filter((f) => f !== filter));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const filteredJobs =
    filters.length === 0
      ? jobs
      : jobs.filter((job: Job) => {
          const tags = [job.role, job.level, ...job.languages, ...job.tools];
          return filters.every((filter) => tags.includes(filter));
        });

  return (
    <div className="bg-cyan-50 min-h-screen font-sans">
      <div className="bg-cyan-700 h-32 mb-20"></div>
      {filters.length > 0 && (
        <FilterBar
          filters={filters}
          removeFilter={removeFilter}
          clearFilters={clearFilters}
        />
      )}
      <div className="space-y-10 px-6 pb-10 max-w-6xl mx-auto">
        {filteredJobs.map((job, idx) => (
          <JobCard key={idx} job={job} onTagClick={addFilter} />
        ))}
      </div>
    </div>
  );
}
