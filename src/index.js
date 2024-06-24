import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './routes/router';
import './index.css';
import { RouterProvider} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stateManagement/store/store'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
        <Provider store={store}>
            <RouterProvider router={router}>
            </RouterProvider>
        </Provider>
);

