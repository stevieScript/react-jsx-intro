const Person = (props) => {
    const ofAge = props.age >= 18 ? 'please go vote!' : 'you must be 18.';
    const name = props.name.length > 8 ? props.name.slice(0, 6) : props.name;
    return (
        <div>
            <p>Learn som information about this person</p>
            <h3>{name}</h3>
            <h3>{ofAge}</h3>
            <ul>
                {props.hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>
    );
};