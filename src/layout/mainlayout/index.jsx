import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Nav from '../../components/nav';
import {Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <>
        <Header/>
        <Nav/>
        <Outlet/>
        <Footer/>
        </>
    )
}
