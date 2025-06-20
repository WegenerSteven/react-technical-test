import JobCard from './JobCard';
import { jobsData } from '../data/data';
import type { Job } from '../types';

const JobList = () => {
    const handleTagClick = (tag: string) => {
        // Implement tag click logic here
        console.log('Tag clicked:', tag);
    };

    return (
       <div>
            {jobsData.map((job: Job) => (
                <JobCard key={job.id} job={job} onTagClick={handleTagClick} />
            ))}
        </div>
    );
}

export default JobList;