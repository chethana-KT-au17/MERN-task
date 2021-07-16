import './App.css';
import Todo from './Components/Todo'
// import Fbc from './Components/Fbc'
import Cbc from './Components/Cbc'
function App() {
  return (
    <div className="App">

      <Cbc/>
      {/* <Fbc/> */}
      <Todo/>
    </div>
  );
}

export default App;
