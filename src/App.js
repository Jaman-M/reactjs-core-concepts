import logo from './logo.svg';
import './App.css';

const number = 6666;
const singers = [
  {name: 'Dr. Mahfujur Rahman', job: 'singer'},
  {name:'Eva Rahman', job:'singer2'},
  {name:'Agun', job:'sopno'},
  {name:'Shuvro', job:'pathor'}
]

const singerStyle = {
  color: 'purple',  //string howar jonne '' er vetor value gulo likha hoy
  backgroundColor: 'White',
  padding: '10px'
  // border radious use korte pari ni kno ....
}

{/* niche object hobar karone {} er vetor abr {} neya hoyeche */}

function App() {
  const nayoks = ['Rubel', 'BappaRaz', 'Kuber', 'Jashim', 'SalmanShah', 'Riyaz', 'Rajjak', 'Anwoar']
  return (
    <div className="App">
      {
        // nayoks.map(nayok => nayok)
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}


      {/* nicher tate singers er vetor theke prottekta k singer hisebe dhora hoyeche..ar sei singer hocche prottektai object */}

      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello dude.react How are you?</h3>
        </div>
        <div className="music">
          <p>Name: {number}</p>
          <p style={singerStyle}>Name: {singer.name} {singer.job}</p>
          
          <p style={{color: 'blue', backgroundColor:'yellow'}}>Name: {singer2.name} {singer2.job}</p>
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
      </header> */}

      {/* <Person name={nayoks[0]} nayika = "moushumi"></Person>
      <Person name={nayoks[1]} nayika= "cheka" ></Person>
      <Person name={nayoks[2]} nayika="Kopila"></Person> */}
      
      <h4>New component: Huh</h4>
      <Friend movie="singam" phone="017555"></Friend>
      <Friend phone="017555"></Friend>
      


    </div>
  );
}

function Person(props){
  // console.log(props)
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
  )
}

function Friend(props){
  console.log(props)
  return(
    <div className='container'>
      <h3>Name: {props.movie}</h3>
      <p>phone: {props.phone}</p>
    </div>
  )
}
//data pathanor jonne props
export default App;
