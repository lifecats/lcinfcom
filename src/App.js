import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>./lifecats/infrastructures</h1>
      <div className="cards">
        <div className="card" onClick={()=>{window.location.href="https://media.lcinf.com"}}>
          <h4>beta!</h4>
          <h2>media streaming service</h2>
          <p>
            free media streaming service. using Jellyfin technology. please
            email ivan@lcinf.com for registration
          </p>
        </div>
        <div className="card2">
          <h4>in development</h4>
          <h2>cdn</h2>
          <p>free cloud storage. still in development. please be patient.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
