import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Project from "./components/projects/Project";

function AppRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="project/:id" element={<Project />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter