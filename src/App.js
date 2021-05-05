import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Inicio from './views/inicio';
import Login from './views/login';
import NoFound from './views/noFound';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/inicio" component={Inicio}/>
        <Route exact path="/login" component={Login}/>
        <Route component={NoFound} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
