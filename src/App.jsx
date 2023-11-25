import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Counter from './components/Counter';
import UserList from './components/UserList';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import Products from './components/Products';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<p>Home Page!</p>} />
                    <Route path='counter' element={<Counter />} />
                    <Route path='products' element={<Products />} />
                    <Route path='users' element={<UserList />} />
                    <Route path='about' element={<About />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
