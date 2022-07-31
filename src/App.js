import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Register from './components/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Checkout from './components/Checkout';
import Login from './components/Login';
import Footer from './components/Footer';
import { AuthContextProvider } from './context/AuthContext';


function App() {
  return (
  <Router>
    <div className="App">

      <AuthContextProvider>
      <Switch>
        
        
        <Route path='/register'>
          <Register />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/checkout'>
          <Nav />
          <Checkout />
          <Footer />
        </Route>


        <Route path='/'>
          <Nav />
          <Home />
          <Footer />
        </Route>

        
        
      </Switch>
      </AuthContextProvider>

      
    </div>
  </Router>
  );
}

export default App;
