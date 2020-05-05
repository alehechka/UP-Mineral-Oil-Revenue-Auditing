import React from "react";
import { useForm } from "react-hook-form";

interface FormProps {
    defaultValues?: {},
    children: any,
    onSubmit: (values: any) => void;
}

export function Form({ defaultValues, children, onSubmit }: FormProps) {
    const methods = useForm({ defaultValues });
    const { handleSubmit } = methods;

    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit(onSubmit)}>
                {Array.isArray(children)
                    ? children.map(child => {
                        return child.props.name
                            ? React.createElement(child.type, {
                                ...{
                                    ...child.props,
                                    register: methods.register,
                                    key: child.props.name
                                }
                            })
                            : child;
                    })
                    : children}
            </form>
        </div>
    );
}

interface InputProps {
    register?: () => any;
    name?: string,
    label?: string,
    type?: string,
    value?: string
}

export function Input({ register, name, label, ...rest }: InputProps) {
    return (
        <div className="input-field">
            <label htmlFor={name}>{label}</label>
            <input id={name} name={name} ref={register} {...rest} />
        </div>
    );
}

interface SelectProps {
    register?: () => any;
    name: string,
    label?: string,
    options: string[];
}

export function Select({ register, options, name, label, ...rest }: SelectProps) {
    return (
        <div className="input-field">
            <label htmlFor={name}>{label}</label>
            <select id={name} name={name} ref={register} {...rest}>
                {options.map((value, index) => (
                    <option key={index} value={value}>{value}</option>
                ))}
            </select>
        </div>
    );
}