import React from 'react'
import Nav from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Pages from '../components/Pages'

function Layout() {
    return (
        <>
            <Nav />
            <Outlet/>
            <Pages />
            <Footer />
        </>
    )
}

export default Layout
