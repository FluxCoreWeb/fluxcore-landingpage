import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import NossoTrabalho from "./components/NossoTrabalho";
function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/nosso-trabalho' element={<NossoTrabalho/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App