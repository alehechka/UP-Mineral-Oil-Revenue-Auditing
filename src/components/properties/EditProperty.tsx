import * as React from 'react';
import PropertyModel from '../../models/Property';
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

interface Props {
    property: PropertyModel
}

function EditProperty ({property}: Props) {
  return (
    <div>
      Edit {property && property.name}
    </div>
  );
}

const mapStateToProps = (state: any, ownProps: any) => {
    const id = ownProps.match.params.id;
    const properties = state.firestore.data.properties;
    const property = properties ? properties[id] : null;
    return {
        property
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: "properties" }])
)(EditProperty);
