import "./App.css"
import Cards from "./component/Cards"
function App() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 jumbo">Magic the Gathering</h1>
          <p className="lead">An app about Magic the Gathering</p>
        </div>  
      </div>
      <Cards/>
    </div>
  );
}

export default App;
