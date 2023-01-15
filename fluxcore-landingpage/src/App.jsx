import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import NossoTrabalho from "./components/NossoTrabalho";
import SobreNos from "./components/SobreNos";
import QuemSomos from "./components/QuemSomos";
function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/nosso-trabalho' element={<NossoTrabalho/>}></Route>
          <Route exact path='/sobre-nos' element={<SobreNos/>}></Route>
          <Route exact path='/quem-somos' element={<QuemSomos/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App