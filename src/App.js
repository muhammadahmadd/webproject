import logo from './logo.svg';
import './App.css';
import Fun from './components/fun';
import Clas from './components/clas';
const port =process.env.PORT ||3000;

function App() {
  return (
    <div className="App">
      <Fun name="ahmad" age="24">s
        <p1>hello</p1>
      </Fun>
      <Clas></Clas>
    </div>
  );
}

export default App;
