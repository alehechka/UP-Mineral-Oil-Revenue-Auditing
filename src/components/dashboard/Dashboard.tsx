import React from "react";
import OperatorModel from "../../models/Operator";
import { connect, RootStateOrAny } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import OperatorList from "../operators/OperatorList";

interface Props {
  operators: [OperatorModel],
}

const Dashboard = (props: Props) => {

  return (
    <div className="dashboard container">
      <h5>Operators</h5>
      <div className="row">
        <div className="col s12 m6">
          <OperatorList operators={props.operators} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: RootStateOrAny) => {
  return {
    operators: state.firestore.ordered.operators,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "operators", orderBy: ['name', 'desc'] },
  ])
)(Dashboard);