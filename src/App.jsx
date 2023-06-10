
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from '/components/login';
import Register from '/components/register';
import Graficos from '/components/graficos';
import NavbarComponent from '/components/navbar';
function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/graficos" element={<NavbarComponent />} >
            <Route path='' element={<Graficos />} />
          </Route>
        </Routes>

      </BrowserRouter>


    </>
  );
}
export default App;
