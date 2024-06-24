import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import AboutUs from './AboutUs/AboutUs';
import Contact from './Contact/Contact';
import Sustainability from './Sustainability/Sustainability';
import Work from './Work/Work';
import News from './News/News';
import Cleaning from './Cleaning/Cleaning'
import Order from './Order/Order';
import CleaningItem from './Cleaning/CleaningItem/CleaningItem';
import NewsItem from './News/NewsItem/NewsItem';

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
  },
  {
    path: '/sustainability',
    element:(
      <Sustainability />
    )
  },
  {
    path: '/work',
    element:(
      <Work/>
    )
  },
  {
    path: '/news',
    element:(
      <News/>
    )
  },
  {
    path: '/news/newsItem',
    element:(
      <NewsItem />
    )
  },
  {
    path: '/cleaning',
    element:(
      <Cleaning />
    )
  },
  {
    path: '/cleaning/home-cleaning',
    element:(
      <CleaningItem/>
    )
  },
  {
    path: '/order',
    element: (
      <Order />
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
