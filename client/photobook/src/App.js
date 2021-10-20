import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Home';
import Upload from './Upload';
import Photobook from './Photobook';



function App() {
  return (
    <BrowserRouter>  
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/upload' exact component={Upload}></Route>
          <Route path='/photobook' exact component={Photobook}></Route>
          
        </Switch>
      </BrowserRouter>
  );
}

export default App;
