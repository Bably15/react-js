const Button = (props) => {
    const { color, text } = props;
    return (
        <button type="button" class={`btn btn-${color}`}>
            {text}
        </button>
    );
};
export default Button;
