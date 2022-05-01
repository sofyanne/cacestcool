const ValidateButton = (props) => {

    return (
      <button
        className="min-w-[60%] h-10 rounded-full bg-blue-500 text-white font-semibold text-sm"
        type={props.type}
        onClick={props.onClickHandler}
      >
        {props.label}
      </button>
    );
};

export default ValidateButton;