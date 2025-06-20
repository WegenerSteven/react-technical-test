import JobCard from './JobCard';
import { jobsData } from '../data/data';
import type { Job } from '../types';

const JobList = () => {
    return (
        <div>
            {jobsData.map((job: Job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    );
}

export default JobList;