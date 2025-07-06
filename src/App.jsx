import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './shared/components/Header';
import Section from './shared/components/Section';
import LandingPages from './features/landing/pages/LandingPages';
import CartPages from './features/cart/pages/CartPages';
import Login from './features/auth/components/Login';
import ProtectedRoute from './features/auth/components/ProtectedRoute';
import { AuthProvider } from './features/auth/hooks/UseAuth';

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <CartPages>
                                <Header>
                                </Header>
                                <Section>
                                    <LandingPages />
                                </Section>
                            </CartPages>
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </AuthProvider>
    );
}

export default App;