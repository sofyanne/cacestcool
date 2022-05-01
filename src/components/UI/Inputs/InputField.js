const InputField = (props) => {
    return (
        <input className="w-2/4 max-w-lg min-w-[80%] h-10 p-3 rounded-full text-gray-300 focus:border-blue-400 focus:text-gray-500" placeholder={props.placeholder} />
    );
};

export default InputField;