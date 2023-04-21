const App = () => {
    return (
        <div>
            <h1>JSX exercises part three</h1>
            <Person
            name="John"
            age={19}
            hobbies={['Skiing', 'Hiking', 'Coding']}
            />
            <Person
            name="Jane"
            age={17}
            hobbies={['Music', 'Painting', 'Coding']}
            />
            <Person
            name="James"
            age={18}
            hobbies={['Gaming', 'Crying', 'Coding']}
            />
        </div>
    );
};   

ReactDOM.render(<App />, document.getElementById('root'));