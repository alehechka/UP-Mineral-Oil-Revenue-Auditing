import * as React from 'react';
import OperatorModel from '../../models/Operator';
import { History } from "history";
import { connect } from "react-redux";
import { createOperator, removeOperator } from "../../store/actions/operatorActions";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

interface Props {
  history: History
  createOperator: (operator: OperatorModel) => any
  removeOperator: () => any
}

const OperatorForm = (props: Props) => {

  const { handleSubmit, register, formState } = useForm<OperatorModel>({ mode: "onChange" });

  React.useEffect(() => {
    props.removeOperator();
    // eslint-disable-next-line
  }, [])


  const [submit, setSubmit] = React.useState(false);
  const onSubmit = (values: OperatorModel) => {
    setSubmit(true);
    props.createOperator(values);
  };

  const operator = useSelector((state: any) => state.operator);
  if (operator.operator && submit) {   
    return <Redirect to={`/operator/${operator.operator.id}`} />
  }

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit(onSubmit)}>
        <h5 className="grey-text text-darken-3">Create Operator</h5>
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" ref={register({ required: true })} />
        </div>
        <div className="input-field">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" ref={register({ required: true })} />
        </div>
        <div className="input-field">
          <label htmlFor="zip">Zip Code</label>
          <input type="number" id="zip" name="zip" ref={register({ required: true })} />
        </div>
        <div className="input-field">
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" ref={register({ required: true })} />
        </div>
        <div className="input-field">
          <label htmlFor="state">State</label>
          <input type="text" id="state" name="state" maxLength={2} ref={register({ required: true })} />
        </div>
        <div className="input-field">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="text" id="phoneNumber" name="phoneNumber" ref={register({ required: true })} />
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
    createOperator: (operator: OperatorModel) => dispatch(createOperator(operator)),
    removeOperator: () => dispatch(removeOperator())
  }
}

export default connect(null, mapDispatchToProps)(OperatorForm);
