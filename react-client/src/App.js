import logo from './logo.svg';
import './App.css';
import API from './Utils/API';

function testApi(){
  API.Test.helloWorld()
    .then(res => {
      console.log(res);
      document.querySelectorAll('.api-catch')[0].textContent = res.data.result;
    })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
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

        <section>
          <h1>Test API</h1>
          <button onClick={testApi} children="Test Hit" />
          <p className="api-catch"></p>
        </section>
      </header>
    </div>
  );
}

export default App;
