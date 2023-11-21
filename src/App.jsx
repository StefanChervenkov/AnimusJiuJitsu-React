
import NavigationAuthenticated from './components/NavigationAuthenticated';
import NavigationBasic from './components/NavigationBasic';
import Home from './pages/Home';
import Login from './pages/Login';
import AllStudents from './pages/AllStudents';
import Register from './pages/Register';
import { selectUsers, setUser } from './features/users/usersSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

import { Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';

function App() {
    const user = useSelector(selectUsers);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                
                dispatch(setUser({ id: user.uid, email: user.email }));
            } else {
                // User is signed out
                dispatch(setUser(null));
            }
        });

        // Cleanup the subscription when the component unmounts
        return () => unsubscribe();
    }, []); // Empty dependency array ensures the effect runs only once

    if (user.currentUser) {
        return (<>

            <NavigationAuthenticated />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/students' element={<AllStudents />} />
                <Route path='/profile' element={<Profile />} />
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
