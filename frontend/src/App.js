import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about-us' component={AboutUsPage} />
          <Route path='/services' component={ServicesPage} />
          <Route path='/blog' component={BlogPage} />
          <Route path='/contact' component={ContactPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
