const Tweet = ({username, name, date, message}) => {
    return (
        <div>
        <h3>{name}</h3>
        <p>{date}</p>
        <p>{message}</p>
        </div>
    );
};