import PropTypes from "prop-types";

const Header = (props) => {
    const { title } = props;
    return (
        <header>
            <h1>{ title }</h1>
        </header>
    );
};

Header.defaultProps = {
    title: "my title"
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};


export default Header;