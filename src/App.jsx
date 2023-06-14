import {createBrowserRouter, Outlet, ScrollRestoration, RouterProvider} from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import { serveProjects } from './components/projects/ProjectsData';
import ProjectDetailPage from './components/projects/ProjectDetailPage';
import Resume from './pages/Resume';
import './App.css';


function App() {
    const Layout = () => {
        return (
            <div>
                <Header />
                <ScrollRestoration />
                <Outlet />
                <Footer />
            </div>
        )
    }
    const router = createBrowserRouter([{
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: serveProjects
            }, 
            {
                path: '/project/:id',
                element: <ProjectDetailPage />
            },
            {
                path:'/cv',
                element: <Resume />
            }
        ]
    }])
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
