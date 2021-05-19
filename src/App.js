import './App.css';
import { Switch, Route } from "react-router-dom"
import Dogs from "./Dogs/Dogs"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/dog" component={Dogs}/>
      </Switch>
    </div>
  );
}

export default App;
