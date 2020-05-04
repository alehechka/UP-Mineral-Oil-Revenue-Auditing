import React from "react";
import PropertyModel from "../../models/Property";

interface Props {
    property: PropertyModel;
}

const ProjectSummary= ({ property }: Props) => {
  return (
    <div className="card z-depth-1 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{property.name}</span>
        <p>{property.county}, {property.state}</p>
        <p className="grey-text">UID: {property.uid}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;