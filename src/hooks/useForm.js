import { useState } from "react";

export function useForm(initialValues, submitCallback) {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        submitCallback(values);

        setValues(initialValues);
    };

    const changeValues = (newValues) => {
        setValues(newValues);
    };

    return {
        values,
        changeHandler,
        submitHandler,
        changeValues,
    };
}
