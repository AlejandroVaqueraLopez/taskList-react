import PropTypes from "prop-types";

const Header = (props) => {
    const { title } = props;
    return (
        <header>
            <h1 style={ headerStyles }>{ title }</h1>
        </header>
    );
};

Header.defaultProps = {
    title: "my title"
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

const headerStyles = {
    color: "red",
    outline: "solid purple"
};

export default Header;