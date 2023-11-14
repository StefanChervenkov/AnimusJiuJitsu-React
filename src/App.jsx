
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import AllStudents from './pages/AllStudents';
import Register from './pages/Register';


import { Route, Routes } from 'react-router-dom';



function App() {
    return (
        <>
         

                <Navigation />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/students' element={<AllStudents />} />
                </Routes>
           



        </>




    );
}

export default App
