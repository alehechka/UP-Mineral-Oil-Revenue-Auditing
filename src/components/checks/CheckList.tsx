import React from "react";
import CheckSummary from "./CheckSummary";
import { Link } from "react-router-dom";
import CheckModel from "../../models/Check";

interface Props {
    checks: CheckModel[];
}

const OperatorList = ({ checks }: Props) => {
  return (
    <div className="project-list section">
      <h5>Checks</h5>
      {checks &&
        checks.map((check) => (
          <Link to={`/check/${check.uid}`} key={check.uid}>
            <CheckSummary check={check} />
          </Link>
        ))}
    </div>
  );
};

export default OperatorList;
