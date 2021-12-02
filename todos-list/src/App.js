import './App.css';
import {Header} from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';

function App() {
  let todos = [
    {
      sno : 1,
      title: "Got to the market",
      desc: "you need to go at market for get some fruits"
    },
    {
      sno : 2,
      title: "Got to the gym",
      desc: "go to the gym for workout session"
    },
    {
      sno : 3,
      title: "Got to the office",
      desc: "need to reach at office 8:00 AM"
    }
  ]
  return (
    <div className="App">
      <Header title="MyTodosList" />
      <Footer />
      <Todos  todos={todos}/>
    </div>
  );
}

export default App;
