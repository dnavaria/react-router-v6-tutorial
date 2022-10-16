import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import SingleProduct from './pages/SingleProduct';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';
import SharedProductLayout from './pages/SharedProductLayout';
import { useState } from 'react';


function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      {/* <nav>Navbar</nav> */}
      <Routes>
        <Route path='/' element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />

          <Route path='products' element={<SharedProductLayout />} >
            <Route index element={
              <ProtectedRoute user={user}>
                <Products user={user} />
              </ProtectedRoute>
            } />
            <Route path=':productId' element={
              <ProtectedRoute user={user}>
                <SingleProduct user={user} />
              </ProtectedRoute>
            } />

          </Route>

          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='dashboard' element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          } />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
      {/* <footer>Footer</footer> */}
    </BrowserRouter>
  );
}

export default App;
