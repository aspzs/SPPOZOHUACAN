import React from "react";

const ProjectResume = ({ dates, type }) => {

  return (
    <div className="mt-5 w-full flex mob:flex-col desktop:flex-row justify-between">
      <div className="text-lg w-2/5">
        <h2>{dates}</h2>
        <h3 className="text-sm opacity-70">{type}</h3>
      </div>
      </div>
  );
};

export default ProjectResume;
