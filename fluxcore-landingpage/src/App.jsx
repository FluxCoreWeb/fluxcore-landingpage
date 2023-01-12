import Header from "./components/Header"
import Background from "./components/Background";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
      <Header/>
      <Router>
        <Routes>
          <Route exact path='/x' element={<Background/>}></Route>
        </Routes>
      </Router>
      <Background/>
    </>
  )
}

export default App