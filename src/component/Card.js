import Button from "./Button";
const Card = (props) => {
    const { title, text } = props;

    return (
        <div class="card">
            <div class="card-body">
                <h5 class="title">{title}</h5>
                <p class="text">{text}</p>
            </div>
            <Button color="primary" text="submit" />
        </div>
    );
};
export default Card;
