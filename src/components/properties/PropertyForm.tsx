import React from "react";
import PropertyModel from "../../models/Property";
import OperatorModel from "../../models/Operator";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { createProperty } from '../../store/actions/propertyActions';

interface Props {
    active: any;
    createProperty: (property: any) => any;
    operator: OperatorModel;
    operatorUID: string;
}

const ProjectForm = ({active, createProperty, operatorUID, operator}: Props) => {

    const { handleSubmit, register, formState, reset } = useForm<PropertyModel>({ mode: "onChange" });
    const [submit, setSubmit] = React.useState(false);
    const onSubmit = (values: PropertyModel) => {
        setSubmit(true);
        console.log(values)
        createProperty({
            ...values,
            operator: {
                uid: operatorUID,
                name: operator.name
            }
        });
        reset({});
        active[1](false);
        setSubmit(false);
    };

    return (
        <div className="card z-depth-1 project-summary">
            <form className="white" onSubmit={handleSubmit(onSubmit)} style={{marginTop:"0px"}}>
                <h5 className="grey-text text-darken-3">Create Property</h5>
                <div className="input-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" ref={register({ required: true })} />
                </div>
                <div className="input-field">
                    <label htmlFor="propertyNumber">Property Number</label>
                    <input type="number" id="propertyNumber" name="propertyNumber" ref={register({ required: true })} />
                </div>
                <div className="input-field">
                    <label htmlFor="county">County</label>
                    <input type="text" id="county" name="county" ref={register({ required: true })} />
                </div>
                <div className="input-field">
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" name="state" maxLength={2} ref={register({ required: true })} />
                </div>
                <div className="input-field">
                    <button type="submit" disabled={!formState.isValid || submit} className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch: (action: any) => any) => {
    return {
        createProperty: (property: PropertyModel) => dispatch(createProperty(property))
    }
}

export default connect(null, mapDispatchToProps)(ProjectForm);