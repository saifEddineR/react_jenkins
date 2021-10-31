import './App.css';
import Student from './components/Student'
import Child1 from './components/Child1';


function App() {
  let fname = 'warda'
  let studentsList = ['ashraf','ayoub','raoua','oussama','warda']
  var count = 0
  const increment = () => {
    count++
    console.log(count)
  }
  const getData = (data)=>{
    console.log('data received',data)
  }
  const moviesList =[{moviename:'the revenant',movieImg :'https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',gender:'adventure'},{moviename:'the revenant',movieImg :'https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',gender:'adventure'}]
  return (
    <div className="App">
      <Student getData={getData} studentsList={studentsList} studentName={fname} profession='web dev' moviesList={moviesList}></Student>

      <Child1 textColor='blue' backgroundColor='dodgerblue' />
      <Child1 textColor='red' backgroundColor='black' />
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
