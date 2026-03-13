import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";


export default function AppRoutes() {
    const Home = lazy(() => import("../src/pages/Home/home.jsx"));
    const Portfolio = lazy(() => import("./pages/Portfolio/portfolio.jsx"));
    const ProductPage=lazy(() => import("./pages/ProductPage/productPage.jsx"));
    const McqChatBotPage=lazy(()=>import("./pages/ChatBot/mcq_chat_bot.jsx"))
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/portfolio" element={<Portfolio />}></Route>
                <Route path="/product" element={<ProductPage/>}></Route>
                <Route path="/mcq-test" element={<McqChatBotPage />}></Route>
            </Routes>
        </Suspense>
    )

}