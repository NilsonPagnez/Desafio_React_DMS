import Container from "./components/layouts/Container";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import Notas from "./components/pages/Notas";
import Financeiro from "./components/pages/Financeiro";
import Aside from "./components/layouts/Aside";
import User from "./components/pages/User";

function App() {
  return (
    <Router>

        <Navbar/>
        
        <Aside>

          <Container>
            <Routes basename={process.env.PUBLIC_URL}>
              
              <Route exact path="/" element={<Home/>} > </Route>
              <Route exact path="/Notas" element={<Notas/>} > </Route>
              <Route exact path="/Financeiro" element={<Financeiro/>} > </Route>
              <Route exact path="/User" element={<User/>} > </Route>

            </Routes>
          </Container>
        </Aside>

    </Router>
  );
}

export default App;
