
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Users from './page/Users/Users';
import UsersDetails from './page/Users/UsersDetails';
import Posts from './page/Posts/Posts';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path="/" element={<Users />} />
          <Route exact path="/UsersDetails/:id" element={<UsersDetails />} />
          <Route exact path='/UsersDetails/Posts/:id' element={<Posts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
