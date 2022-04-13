import logo from './logo.svg';
import './App.css';
import Fun from './components/fun';
import Clas from './components/clas';

function App() {
  return (
    <div className="App">
      <Fun name="ahmad" age="24">
        <p1>hello</p1>
      </Fun>
      <Clas></Clas>
    </div>
  );
}

export default App;
