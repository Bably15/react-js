const List = (props) => {
    const { array } = props;
    console.log(props);

    return (
        <ul class="list-group">
            {array.map((element) => (
                <li class="list-group-item">{element}</li>
            ))}

            {/* <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li> */}
        </ul>
    );
};
export default List;
