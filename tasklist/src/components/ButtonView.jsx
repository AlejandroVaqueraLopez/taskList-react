const ButtonView = ({text, onShow, bg}) => {
    return (
        <button 
            className="btn" 
            style={{background: bg}}
            onClick={ () => onShow() }>
                { text }
        </button>
    );
}

export default ButtonView;
