import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './routes/router';
import './index.css';
import { RouterProvider} from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={router}>
    </RouterProvider>
);

