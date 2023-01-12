import Header from "./components/Header"
import Background from "./components/Background";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
function App() {
  return (
    <>
      <Header/>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
        </Routes>
      </Router>
      <Background/>
    </>
  )
}

export default App