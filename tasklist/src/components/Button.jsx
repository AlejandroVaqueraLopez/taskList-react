const Button = (props) => {
    const { background } = props;
    let num = 0;

    const counter = () => {
        console.log(num);
        return ++num;
    }

    return (
        <button 
            className="btn" 
            style={{ background: background }}
            onClick={ counter }>
                Add
        </button>
    );
}

export default Button;
