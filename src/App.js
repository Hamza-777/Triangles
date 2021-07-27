import './App.css';
import Make from './components/Make';
import Areas from './components/Areas';
import Hypotenuse from './components/Hypotenuse';
import Quiz from './components/Quiz';

const App = () => {
  return (
    <div className="App">
    <nav>
      <h1>All About Triangles</h1>
    </nav>
      <Make />
      <Areas />
      <Hypotenuse />
      <Quiz />
    </div>
  );
}

export default App;