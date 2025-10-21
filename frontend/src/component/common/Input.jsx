import {useId} from "react";


const Input = ({label, register, name, rules, error,
                   componentClassName="", labelClassName="",
                   inputClassName="", errorClassName="", ...rest}) => {
    const id = useId();

    return (
        <div className={componentClassName}>
            <label className={labelClassName} htmlFor={id}>{label}</label>
            <input className={`${inputClassName}`} type={rest.type} id={id} {...register(name, rules)} {...rest}/>
            <p className={errorClassName}>{error && <span>{error}</span>}</p>
        </div>
    );
};

export default Input;