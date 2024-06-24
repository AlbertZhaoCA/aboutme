import { Route, createBrowserRouter, createRoutesFromElements, redirect, Routes, Router } from 'react-router-dom'
import { Root, Contact, About, NotFound, Notes, UnderDev, RandomCat, Login, GeneralEditor, Home } from '../views/index';
import Editor from '../views/components/editor';
import Register from '../views/Register';
import RequireAuth from '../views/RequireAuth';

/**
 * router of the app
 */

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/"  loader={() => redirect("/albert")} />,
        <Route path="/albert"  element={<Root />}>
            <Route index element={<RandomCat />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="notes" element={<Notes />} >
                <Route path=":id" loader={async ({ params }) => {
                    try {
                        const response = await fetch(`https://${process.env.REACT_APP_CAT_API_URL}/notes/${params.id}`);
                        return response.json();
                    } catch (error) {
                        throw new Error(error,'Failed to fetch notes');
                    }
                }} element={<NotFound /> } errorElement={<NotFound />} >
                    <Route element={<RequireAuth />} >
                        <Route path=":id/edit" element={<Editor />} />
                    </Route>
                </Route>
            </Route>
            <Route path="portfolio" element={<UnderDev />} />
            <Route path="thinking" element={<UnderDev />} />
        </Route>,
        <Route element={<RequireAuth />} >
            <Route path='edit' element={<GeneralEditor />} />
            <Route path='home/:id' element={<Home />} />
        </Route>,
        <Route path="*" element={<NotFound />} />,
    ]
    )
);

export default router;
