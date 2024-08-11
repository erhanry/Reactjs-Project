import { Navigate, Route, Routes } from "react-router-dom";

import { ErrorBoundary } from "./components/errorBoundary/ErrorBoundary";
import { AuthContextProvider } from "./context/AuthContext";
import { ProductContextProvider } from "./context/ProductContext";
import { AuthGuard, GuestGuard } from "./common/PrivateGuard";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Products from "./components/products/Products";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import Home from "./components/home/Home";
import NotFound from "./components/notfound/NotFound";
import AboutUs from "./components/about-us/About-us";
import Sale from "./components/sale/Sale";
import Category from "./components/category/Category";
import Cart from "./components/cart/Cart";

function App() {
    return (
        <ErrorBoundary>
            <AuthContextProvider>
                <ProductContextProvider>
                    <Header />
                    <main>
                        <section className="wrapper">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/products" element={<Products />} />
                                <Route path="/products/:pageId/page" element={<Products />} />
                                <Route path="/products/:productId/details" element={<Products />} />
                                <Route path="/products/:productId/edit" element={<Products />} />
                                <Route path="/products/:productId/create" element={<Products />} />

                                <Route path="/sale" element={<Sale />} />
                                <Route path="/sale/:pageId/page" element={<Sale />} />

                                <Route path="/category/:categoryPath" element={<Category />} />

                                <Route path="/cart" element={<Cart />} />
                                <Route path="/about-us" element={<AboutUs />} />

                                <Route element={<GuestGuard />}>
                                    <Route path="/login" element={<Login />} />
                                    <Route path="/register" element={<Register />} />
                                </Route>
                                <Route element={<AuthGuard />}>
                                    <Route path="/logout" element={<Logout />} />
                                </Route>

                                <Route path="/not-found" re element={<NotFound />} />
                                <Route path="/*" element={<Navigate to="/not-found" />} />
                            </Routes>
                        </section>
                    </main>
                    <Footer />
                </ProductContextProvider>
            </AuthContextProvider>
        </ErrorBoundary>
    );
}

export default App;
