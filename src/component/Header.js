const Header = ({ data }) => {
    console.log(data);
    return (
        <div>
            This is the navbar
            {data}
        </div>
    );
};

export default Header;
