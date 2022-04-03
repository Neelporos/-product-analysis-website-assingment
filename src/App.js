import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import Dashboard from './component/Dashboard/Dashboard';
import Error from './component/Error/Error';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Review from './component/Review/Review';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/Review' element={<Review></Review>}></Route>
        <Route path='/Blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
