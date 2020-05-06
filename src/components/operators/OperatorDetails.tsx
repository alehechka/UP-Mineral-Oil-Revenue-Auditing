import React from "react";
import OperatorModel from "../../models/Operator";
import PropertyModel from "../../models/Property";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import PropertyList from "../properties/PropertyList";
import CheckList from "../checks/CheckList";
import OperatorCard from "./OperatorCard";

interface Props {
    operator: OperatorModel;
    operatorUID: string,
    properties: PropertyModel[]
}

const OperatorDetails = ({ operator, properties, operatorUID }: Props) => {
    if (operator) {
        return (
            <div>
                <OperatorCard operator={operator} />
                <div className="dashboard container">
                    <div className="row">
                        <div className="col s12 m5">
                            <PropertyList properties={properties} operator={operator} operatorUID={operatorUID}/>
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
        operatorUID: id,
        operator,
        properties: state.firestore.ordered.properties
    };
};

const firestoreCollections = (props: any) => {
    let operatorID = props.match.params.id
    return [
        { collection: "operators", doc: operatorID },
        { collection: "properties", queryParams: [["operator.uid", "==", operatorID]] }
    ]
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props: any) => firestoreCollections(props))
)(OperatorDetails);
