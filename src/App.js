import EightBall from './eight-ball/EightBall';
import answers from './eight-ball/answers';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <EightBall answers={answers}/>
    </div>
  );
}

export default App;
