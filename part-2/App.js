const App = () => {
    return (
        <div>
        <h1>JSX exercises part two</h1>
        <Tweet
        username='Guitarzan'
        name='Stevie'
        date={new Date().toDateString()}
        message='This is my first tweet'
        />
        <Tweet
        username='Guitarzan'
        name='Stevie'
        date={new Date().toDateString()}
        message='This is my second tweet'
        />
        <Tweet
        username='Guitarzan'
        name='Stevie'
        date={new Date().toDateString()}
        message='This is my third tweet'
        />
        </div>
    );
};   

ReactDOM.render(<App />, document.getElementById('root'));