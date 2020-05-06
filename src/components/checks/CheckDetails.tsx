import React from "react";
import moment from "moment/moment";
import CheckModel from "../../models/Check";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import OperatorSummary from "../operators/OperatorSummary";
import QuantityTable from "../productions/QuantityTable";

interface Props {
    check: CheckModel;
}

const CheckDetails = ({ check }: Props) => {
    if (check) {
        return (
            <div className="container dashboard project-list section">
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card z-depth-1">
                            <div className="card-content">
                                <span className="card-title">Check {check.checkNumber}</span>
                                <p>Amount: ${check.amount}</p>
                            </div>
                            <div className="card-action grey lighten-4 grey-text">
                                <div>Date: {moment(check.checkDate?.toDate()).calendar()}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <h6>Operator</h6>
                        <OperatorSummary operator={check.operator} />
                    </div>
                </div>
                <QuantityTable productionQuantities={check.productionQuantities} />
            </div>
        );
    } else {
        return (
            <div className="container center">
                <p>Loading check...</p>
            </div>
        );
    }
};

const mapStateToProps = (state: any, ownProps: any) => {
    const id = ownProps.match.params.id;
    const checks = state.firestore.data.checks;
    const check = checks ? checks[id] : null;
    return {
        check,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props: any) => {
        const checkUID = props.match.params.id;
        return [
            { collection: "checks", doc: checkUID },
        ];
    })
)(CheckDetails);
