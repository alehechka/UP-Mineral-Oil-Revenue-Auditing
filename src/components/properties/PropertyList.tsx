import React from "react";
import PropertySummary from "./PropertySummary";
// import { Link } from "react-router-dom";
import PropertyModel from "../../models/Property";

interface Props {
    properties: PropertyModel[];
}

const OperatorList = ({ properties }: Props) => {
  return (
    <div className="project-list section">
      <h5>Properties</h5>
      {properties &&
        properties.map((property) => (
          // <Link to={`/editProperty/${property.uid.id}`} key={property.id}>
            <PropertySummary property={property} key={property.uid}/>
          // </Link>
        ))}
    </div>
  );
};

export default OperatorList;
