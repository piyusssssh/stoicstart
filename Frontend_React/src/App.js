import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import './App.css';
import UserCard from './UserCard';
import { UserStatusProvider } from './userContextStatus';
import Home from './Home';
import UserList from './UserList';
import About from './About';
import Counter from './counter';

function App() {
  return (
    <UserStatusProvider>
      <Router>

      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/">Cards</Link></li>
          <li><Link to="/users">User List</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/counter">Counter</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={
          <div>
          <h1>Hello, React!</h1>
          <p>This is my first React app.</p>
          <UserCard name='Person1' email='person1@gmail.com'/>
          <UserCard name='Person2' email='person2@gmail.com'/>
        </div>
        } />
        <Route path="/home" element={<Home/>} />
        <Route path="/users" element={<UserList/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/counter" element={<Counter/>} />
      </Routes>

      </Router>
    </UserStatusProvider>
    
  );
}

export default App;
