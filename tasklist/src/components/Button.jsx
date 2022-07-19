const Button = ({ text, background, onToggle, id }) => {
    return (
        <button 
            className="btn" 
            style={{ background: background }}
            onClick={ () => onToggle(id) }>
            { text }
        </button>
    );
}

export default Button;
