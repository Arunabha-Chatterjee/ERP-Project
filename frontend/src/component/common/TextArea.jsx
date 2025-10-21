import React, {useId} from 'react';

const Textarea = ({label, inputClassName, labelClassName, errorClassName,
                      register, name, rules, error, ...rest}) => {
    const id = useId();
    return (
        <div>
            <label className={labelClassName} htmlFor={id}>{label}</label>
            <textarea className={inputClassName} id={id}
                      {...register(name, rules)} {...rest}>
            </textarea>
            <p className={errorClassName}>{error && <span>{error}</span>}</p>
        </div>
    );
};

export default Textarea;