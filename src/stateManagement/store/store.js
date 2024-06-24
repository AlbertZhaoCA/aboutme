import { configureStore } from '@reduxjs/toolkit'
import  authSlice  from '../authSlice'
     
/*
 * Do it latter, lazy boy :(
 */
export default configureStore({
      reducer: {
            auth: authSlice
      },
}
);

