
function Avatar(props) {
    return (
        <img className="avatar"
            src={props.user.avararUrl}
            alt={props.user.name}
        />
    );
}

export default Avatar;