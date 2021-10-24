import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Home';
import UploadPage from './UploadPage';
import Photobook from './Photobook';
import Manage from './Manage';



function App() {
  return (
    <BrowserRouter>  
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/upload' exact component={UploadPage}></Route>
          <Route path='/photobook' exact component={Photobook}></Route>
          <Route path='/manage' exact component={Manage}></Route>

          
        </Switch>
      </BrowserRouter>
  );
}

export default App;
