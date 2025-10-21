import React from 'react';

const Select = ({label, optionList, componentClassName,
                    labelClassName, selectClassName, optionClassName }) => {
    return (
        <div className={componentClassName}>
            <label>{label}</label>
            <select className={selectClassName}>
                {optionList.map((item, index) =>(
                    <option className={optionClassName} value={item.value} key={index}>{item.name}</option>
                ))}
            </select>
        </div>
    );
};

export default Select;