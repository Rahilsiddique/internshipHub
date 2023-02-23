import React from "react";

const Post = ({
  company,
  stipend,
  jobTitle,
  technologies,
  duration,
  internshipType,
  experienceLevel
}) => {
  const postContent = {
    Stipend: stipend,
    Duration: duration,
    Type: internshipType,
    Level: experienceLevel
  };
  return (
    <div className="card w-full bg-base-100 shadow-xl border border-primary">
      <div className="card-body">
        <h2 className="card-title">
          {jobTitle}
        </h2>
        <div className="flex gap-4 flex-wrap">
          {technologies.map(e =>
            <div className="badge-lg badge">
              {e}
            </div>
          )}
        </div>
        <div className="grid sm:grid-cols-4 border grid-cols-2">
          {Object.keys(postContent).map(e =>
            <div className="border-r">
              <div className="border-b text-2xl p-3 font-bold">
                {e}
              </div>
              <div className="p-3">
                {postContent[e]}
              </div>
            </div>
          )}
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
