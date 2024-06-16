import { Route, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import { Root,Contact,About,NotFound,Notes,UnderDev } from '../views/index';
/**
 * router of the app
 */

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<UnderDev/>} />,
        <Route path="/albert" element={<Root />}>
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="notes" element={<Notes />} />
            <Route path="portfolio" element={<UnderDev/>} />
            <Route path="thinking" element={<UnderDev/>} />


        </Route>,
        <Route path="*" element={<NotFound />} />  
    ]   
    )
);

export default router;
