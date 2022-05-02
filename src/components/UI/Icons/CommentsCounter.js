import styles from "./CommentsCounter.module.css";


const CommentsCounter = (props) => {

    return (
      <div>
          <svg
            className = {styles.icon}
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5312 14.5312H13.1476L11.1108 10.7812H1.17188C0.985461 10.781 0.806745 10.7069 0.67493 10.5751C0.543116 10.4433 0.468967 10.2645 0.46875 10.0781V1.17188C0.468967 0.985461 0.543116 0.806745 0.67493 0.67493C0.806745 0.543116 0.985461 0.468967 1.17188 0.46875H13.8281C14.0145 0.468967 14.1933 0.543116 14.3251 0.67493C14.4569 0.806745 14.531 0.985461 14.5312 1.17188V14.5312ZM1.40625 9.84375H11.6685L13.5938 13.3885V1.40625H1.40625V9.84375Z"
              fill="#444444"
            />
          </svg>
        {props.comment || 0} Comment
      </div>
    );
};

export default CommentsCounter;