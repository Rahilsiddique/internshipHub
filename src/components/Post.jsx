import React from "react";

const Post = ({ company, stipend, jobTitle, technologies }) => {
  console.log(technologies);
  return (
    <div className="card w-full bg-base-100 shadow-xl">
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
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
