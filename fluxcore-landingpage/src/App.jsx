import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route, HashRouter} from 'react-router-dom';
import Home from "./components/Home";
import NossoTrabalho from "./components/NossoTrabalho";
import SobreNos from "./components/SobreNos";
import QuemSomos from "./components/QuemSomos";
import Modal from "./components/Modal";
import { useState } from "react";
function App() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <HashRouter hashType="noslash">
        {modal && <Modal setModal={setModal}/>}
        <Header setModal={setModal}/>
        <Routes>
          <Route exact path='/' element={<Home setModal={setModal}/>}></Route>
          <Route exact path='/nosso-trabalho' element={<NossoTrabalho/>}></Route>
          <Route exact path='/sobre-nos' element={<SobreNos/>}></Route>
          <Route exact path='/quem-somos' element={<QuemSomos/>}></Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App