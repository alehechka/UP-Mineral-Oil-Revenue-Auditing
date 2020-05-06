import React from "react";
import PropertySummary from "./PropertySummary";
// import { Link } from "react-router-dom";
import PropertyModel from "../../models/Property";
import OperatorModel from "../../models/Operator";
import PropertyForm from "./PropertyForm";
import { AddRemoveButton } from '../reusable/Components';

interface Props {
  properties: PropertyModel[];
  operator: OperatorModel;
  operatorUID: string;
}

const OperatorList = ({ properties, operator, operatorUID }: Props) => {

  const active = React.useState(false);

  return (
    <div className="project-list section">
      <AddRemoveButton title="Properties" active={active} />
      {active[0] && <PropertyForm active={active} operator={operator} operatorUID={operatorUID}/>}
      {properties &&
        properties.map((property) => (
          // <Link to={`/editProperty/${property.uid.id}`} key={property.id}>
          <PropertySummary property={property} key={property.id} />
          // </Link>
        ))}
    </div>
  );
};

export default OperatorList;
