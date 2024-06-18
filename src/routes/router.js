import { Route, createBrowserRouter,createRoutesFromElements,redirect } from 'react-router-dom'
import { Root,Contact,About,NotFound,Notes,UnderDev,RandomCat } from '../views/index';
/**
 * router of the app
 */

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" loader={ ()=>redirect("/albert")} />,
        <Route path="/albert" element={<Root />}>
            <Route index element={<RandomCat />} />  
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
