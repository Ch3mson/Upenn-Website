"use client"

import './page.css'
import Header from "../components/docs/Header";
import FrontPage from '../components/docs/FrontPage';
import TeamMembers from '../components/docs/TeamMembers';
import AboutUs from '../components/docs/AboutUs';


export default function Home() {

    return <>
        
        <div className="antialiased">

            <div className="relative z-50"><Header></Header></div>

            <FrontPage></FrontPage>
            <AboutUs></AboutUs>
            <TeamMembers></TeamMembers>

        </div>
    </>
}