import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import LeadPage from './Components/LeadPage/LeadPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/lead' element={<LeadPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
