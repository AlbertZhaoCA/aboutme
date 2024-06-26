import { Route, createBrowserRouter, createRoutesFromElements, redirect, Routes, Router } from 'react-router-dom'
import { Root, Contact, About, NotFound, Notes, UnderDev, RandomCat, Login, GeneralEditor, Home } from '../views/index';
import Editor from '../views/components/editor';
import Register from '../views/Register';
import RequireAuth from '../views/RequireAuth';
import { useRouteError } from 'react-router-dom';

/**
 * router of the app
 */

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/"  loader={() => redirect("/albert")} />,
        <Route path="/albert"  errorElement={<h1>Error</h1>}  element={<Root />}>
            <Route index element={<RandomCat />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="notes"  element={<Notes />} >
                <Route path=":id" loader={async ({ params }) => {
                        const response = await fetch(`https://${process.env.REACT_APP_CAT_API_URL}/notes/${params.id}`);
                        if (!response.ok) {
                            return null;
                        }
                        else
                        return response.json()
                    
                }} element={<NotFound />  } >
                    <Route element={<RequireAuth />}  >
                        <Route path="edit" element={<Editor />} />
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

function ErrorBoundary() {
    let error = useRouteError();
    console.error(error);
    return <div>Dang!</div>;
  }
export default router;
