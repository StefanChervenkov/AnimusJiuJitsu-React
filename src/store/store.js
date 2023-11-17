// store.js
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';

// Import your reducers here
//import myReducer from './path-to-your-reducer';

const store = configureStore({
  reducer: {
    // Add your reducers here
   users: usersReducer
    
  },
});

export default store;
