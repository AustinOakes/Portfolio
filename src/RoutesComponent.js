import { HashRouter, Routes, Route } from "react-router-dom"
import { ProjectsPage } from "./pages/ProjectsPage"
import { ContactPage } from "./pages/ContactPage"
import { HomePage } from "./pages/HomePage"
import { NotFoundPage } from "./pages/NotFoundPage"

export const RoutesComponent = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={ <HomePage/> } />
                <Route path="/projects" element={ <ProjectsPage/> } />    
                <Route path="/contact" element={ <ContactPage/> }/>
                <Route path="*" element={ <NotFoundPage/> }/>
            </Routes>
        </HashRouter>
    )
}