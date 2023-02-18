import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";import './index.css';
import App from './App';
import Loading from './Loading';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
        <Route index element={<App />} />
        <Route path="loading" element={<Loading />} />
    </Routes>
  </BrowserRouter>
);
