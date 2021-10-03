const List2 = (props) => {
    const { tasks } = props;
    return (
        <ul className="list-group">
            {tasks.map((element) => {
                return (
                    <li className="class">
                        {element.taskName}
                        <span className="ms-5">{element.taskTime}</span>
                    </li>
                );
            })}
        </ul>
    );
};
export default List2;
