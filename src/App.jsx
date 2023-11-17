
import NavigationAuthenticated from './components/NavigationAuthenticated';
import NavigationBasic from './components/NavigationBasic';
import Home from './pages/Home';
import Login from './pages/Login';
import AllStudents from './pages/AllStudents';
import Register from './pages/Register';
import { selectUsers } from './features/users/usersSlice';
import { useSelector } from 'react-redux';

import { Route, Routes } from 'react-router-dom';

function App() {
    const user = useSelector(selectUsers);

    if (user.currentUser) {
        return (<>

            <NavigationAuthenticated />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/students' element={<AllStudents />} />
            </Routes>

        </>)
    } else {
        return (
            <>

                <NavigationBasic />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>

            </>)
    }

}

export default App
