import React from "react";
import OperatorModel from "../../models/Operator";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import PropertyList from "../properties/PropertyList";
import CheckList from "../checks/CheckList";
import OperatorCard from "./OperatorCard";

interface Props {
    operator: OperatorModel
}

const OperatorDetails = ({ operator }: Props) => {
    if (operator) {
        return (
            <div>
                <OperatorCard operator={operator} />
                <div className="dashboard container">
                    <div className="row">
                        <div className="col s12 m5">
                            <PropertyList properties={operator.properties} />
                        </div>
                        <div className="col s12 m5 offset-m1">
                            <CheckList checks={operator.checks} />
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        );
    }
};

const mapStateToProps = (state: any, ownProps: any) => {
    const id = ownProps.match.params.id;
    const operators = state.firestore.data.operators;
    const operator = operators ? operators[id] : null;
    return {
        operator,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props: any) => [{ collection: "operators", doc: props.match.params.id }])
)(OperatorDetails);
