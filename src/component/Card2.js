const Card2 = (props) => {
    const { object } = props;
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{object.title}</h5>
                <p class="card-text">{object.text}</p>
                <a href="#" class="btn btn-danger">
                    CLICK
                </a>
            </div>
        </div>
    );
};
export default Card2;
