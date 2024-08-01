import { Route, Routes } from "react-router-dom";

import { AuthContextProvider } from "./context/AuthContext";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Products from "./components/products/Products";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import Home from "./components/home/Home";

function App() {
    return (
        <AuthContextProvider>
            <Header />
            <main>
                <section className="wrapper">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/category/:categoryId" element={<Home />} />
                        {/* <Route path="/about" element={<p>dfdaadf</p>}>
                            <Route path="mission" element="" />
                            <Route path="our-team" element="" />
                            <Route path="contact-us" element="" />
                        </Route> */}
                        <Route path="/articles" element="" />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/articles/:articleId" element="" />
                        <Route path="/pricing" element="" />
                        <Route path="/not-found" element="" />
                        <Route path="/*" element="" />
                    </Routes>
                </section>
            </main>
            <Footer />
        </AuthContextProvider>
    );
}

export default App;
