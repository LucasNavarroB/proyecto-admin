import Login from "./components/Login";
import SingIn from './components/SingIn'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import Root from "./components/Root";
import Inicio from "./components/Inicio";
import Blog from "./components/Blog";
import AcercaDe from "./components/AcercaDe";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact={true} element={<Root />}>
          <Route index exact={true} element={<Login />} />
          <Route path='singin' exact={true} element={<SingIn />} />
          <Route path="*" element={<Navigate replace to='/' />} />
        </Route>
        <Route path='/home' exact={true} element={<Home />}>
          <Route index element={<Inicio />} />
          <Route path='blog' element={<Blog />} />
          <Route path='about' element={<AcercaDe />} />
          <Route path="*" element={<Navigate replace to='/' />} />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
