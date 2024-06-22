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
            <Route path="notes"  element={<Notes />} >
            <Route path=":id" loader={async (params)=>{
               return fetch(`https://${process.env.REACT_APP_CAT_API_URL}/notes/${params.id}`).
                then(response => response.json()).then(data => {return data;}).catch(error => {
                    return error;
                });
            } } element={<NotFound />} >
            
            </Route>
            </Route>
            <Route path="portfolio" element={<UnderDev/>} />
            <Route path="thinking" element={<UnderDev/>} />
        </Route>,
        <Route path="*" element={<NotFound />} />  
    ]   
    )
);

export default router;
