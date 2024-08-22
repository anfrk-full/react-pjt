function Button(props) {
    return (
        <button className={`btn btn-${props.color}`}>
            <b>
                { props.children }
            </b>
        </button>
    );
}

export default Button;