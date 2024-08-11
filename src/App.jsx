import { Navigate, Route, Routes } from "react-router-dom";

import { ErrorBoundary } from "./components/errorBoundary/ErrorBoundary";
import { AuthContextProvider } from "./context/AuthContext";
import { ProductContextProvider } from "./context/ProductContext";
import { AuthGuard, GuestGuard } from "./common/PrivateGuard";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import Products from "./components/products/Products";
import Home from "./components/home/Home";
import NotFound from "./components/notfound/NotFound";
import AboutUs from "./components/about-us/About-us";
import Category from "./components/category/Category";
import Cart from "./components/cart/Cart";
import ProductCreate from "./components/product-create/ProductCreate";
import ProductEdit from "./components/product-edit/ProductsEdit";
import ProductDetails from "./components/product-details/ProducDetails";

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
                                <Route path="/products/:productId/details" element={<ProductDetails />} />

                                <Route element={<AuthGuard />}>
                                    <Route path="/logout" element={<Logout />} />
                                    <Route path="/products/create" element={<ProductCreate />} />
                                    <Route path="/products/:productId/edit" element={<ProductEdit />} />
                                </Route>
                                <Route path="/category/:categoryPath" element={<Category />} />

                                <Route path="/cart" element={<Cart />} />
                                <Route path="/about-us" element={<AboutUs />} />

                                <Route element={<GuestGuard />}>
                                    <Route path="/login" element={<Login />} />
                                    <Route path="/register" element={<Register />} />
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
