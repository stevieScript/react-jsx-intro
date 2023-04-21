const App = () => {
    return (
        <div>
        <h1>JSX exercises part one</h1>
        <FirstComponent />
        <NamedComponent name='Stevie'/>
        </div>
    );
};   

ReactDOM.render(<App />, document.getElementById('root'));