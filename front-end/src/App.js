import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './About'
import Comments from './Comments'
import Help from './Help'
import Home from './Home'
import Login from './Login'
import Search from './Search'
import Settings from './Settings'
import Stories from './Stories'

//npm install react-router-dom@6

const App = props => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/comments" element={<Comments />}></Route>
          <Route path="/help" element={<Help />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/stories" element={<Stories />}></Route>
        </Routes>
      </Router>
    </div>
  )
}
export default App;
