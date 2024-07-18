import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Header />
            <main>
                <section className="wrapper">
                    <Routes>
                        <Route path="/" element="" />
                        <Route path="/products" element={<Products />} />
                        <Route path="/about" element={<p>dfdaadf</p>}>
                            <Route path="mission" element="" />
                            <Route path="our-team" element="" />
                            <Route path="contact-us" element="" />
                        </Route>
                        <Route path="/articles" element="" />
                        <Route path="/articles/:articleId" element="" />
                        <Route path="/pricing" element="" />
                        <Route path="/not-found" element="" />
                        <Route path="/*" element="" />
                    </Routes>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default App;
