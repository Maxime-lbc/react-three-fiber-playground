import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound404 from './pages/NotFound404';
import ThreeCubes from './pages/ThreeCubes';
import Home from './pages/Home';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/three-cubes-project" exact component={ThreeCubes} />
          <Route component={NotFound404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
