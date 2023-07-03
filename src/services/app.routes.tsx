import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "../pages/components/Menu";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}