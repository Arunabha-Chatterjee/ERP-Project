
const Button = ({text, buttonClassName, onSubmit}) => {
    return (
        <div className={buttonClassName}>
            <button className={"w-full h-full cursor-pointer"} onClick={onSubmit}>{text}</button>
        </div>
    );
};

export default Button;