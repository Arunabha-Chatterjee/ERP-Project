const Message = ({message}) => {
    return (
        <div className="w-full py-6 flex items-center justify-center">
            <div className="text-gray-500 text-lg font-medium">
                {message}
            </div>
        </div>
    );
};

export default Message;