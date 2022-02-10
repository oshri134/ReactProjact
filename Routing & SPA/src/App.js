
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Users from './page/Users/Users';
import UsersDetails from './page/Users/UsersDetails';
import Posts from './page/Posts/Posts';
import Todos from './page/Todos/Todos';



function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path="/" element={<Users />} />
          <Route exact path="/UsersDetails/:id" element={<UsersDetails />} />
          <Route exact path='/UsersDetails/Posts/:id' element={<Posts />} />
          <Route exact path='/UsersDetails/Todos/:id' element={<Todos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
