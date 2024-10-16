import React from 'react'
import Carousel from "../components/Carousel";
import ToDetails from '../components/ToDetails';
import Departments from '../components/Departments';
import Programs from '../components/Programs';
import Gallery from '../components/Gallery';
import BibleVerses from '../components/BibleVerses';
import Branches from '../components/Branches';
import Pages from '../components/Pages';
import Footer from '../components/Footer';
function HomePage() {
    return (
        <div>
            <Carousel />
            <ToDetails />
            <Departments />
            <Programs />
            <Gallery />
            <BibleVerses />
            <Branches />
        </div>
    )
}

export default HomePage
