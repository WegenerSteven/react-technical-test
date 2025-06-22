import Tag from "./Tag";
import type { Job } from "../types/index";

type JobCardProps = {
  job: Job;
  onTagClick: (tag: string) => void;
};

export default function JobCard({ job, onTagClick }: JobCardProps) {
  const tags = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <div
      className={`p-4 mx-auto max-w-4xl sm:flex grid items-center justify-between gap-4 bg-gray-50 rounded-md shadow border-l-4 border-cyan-400${
        job.featured ? "border-cyan-700" : "border-transparent"
      }`}
    >
      <div className="flex items-center gap-6">
        <img
          src={job.logo}
          alt={job.company}
          className="w-14 h-14 -mt-10 lg:mt-0 lg:w-16 lg:h-16"
        />
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-cyan-700 font-bold text-sm">
              {job.company}
            </span>
            {job.new && (
              <span className="bg-cyan-700 text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                New!
              </span>
            )}
            {job.featured && (
              <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                Featured
              </span>
            )}
          </div>
          <h2 className="font-bold text-lg text-black mt-1 hover:text-cyan-700 cursor-pointer">
            {job.position}
          </h2>
          <div className="text-gray-500 text-sm mt-1">
            {job.postedAt} • {job.contract} • {job.location}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 pt-4 lg:pt-0 lg:pl-8 border-t lg:border-t-0 mt-4 lg:mt-0">
        {tags.map((tag, i) => (
          <Tag key={i} label={tag} onClick={() => onTagClick(tag)} />
        ))}
      </div>
    </div>
  );
}
