import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import AboutUs from './AboutUs/AboutUs';
import Contact from './Contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Main/>
    )
  },
  {
    path: '/aboutus',
    element: (
      <AboutUs/>
    )
  },
  {
    path: '/contact',
    element: (
      <Contact/>
    )
  }
])

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
