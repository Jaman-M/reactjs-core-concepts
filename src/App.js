import logo from './logo.svg';
import './App.css';

const number = 6666;
const singer = {name: 'Dr. Mahfujur Rahman', job: 'singer'};
const singer2= {name:'Eva Rahman', job:'singer2'}

const singerStyle = {
  color: 'purple',  //string howar jonne '' er vetor value gulo likha hoy
  backgroundColor: 'White',
  padding: '10px'
  // border radious use korte pari ni kno ....
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello dude.react How are you?</h3>
        </div>
        <div className="music">
          <p>Name: {number}</p>
          <p style={singerStyle}>Name: {singer.name} {singer.job}</p>
          <p>Name: {singer2.name} {singer2.job}</p>
        </div>
        <p>
        <h1></h1>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
