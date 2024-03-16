import React, {useState, useEffect} from "react";
import {Routes, Route} from 'react-router-dom';
import { Discuss } from 'react-loader-spinner'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You also need to import the CSS file for styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaWhatsapp } from "react-icons/fa6";
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import NavContext from "./NavContext";
import MissionPage from "./components/MissonPage";
import CommitmentPage from "./components/CommitmentPage";
import FoundingPage from "./components/FoundingPage";
import ProductPage from "./components/ProductPage";
import NotFound from "./components/NotFound";
import TeamPage from "./components/TeamPage";
import AchievementPage from "./components/AchievementPage";
import KnowledgeCenter from "./components/KnowledgeCenter";
import StructuredData from "./components/StructuredData";
import './App.css'


const PreLoader = () => (
    <div className="loader-container">
        <Discuss
            visible={true}
            height="80"
            width="80"
            ariaLabel="discuss-loading"
            wrapperStyle={{}}
            wrapperClass="discuss-wrapper"
            color="#fff"
            backgroundColor="#F4442E"
        />
    </div>
)

const App = () => {
    const [mobileNav, updateMobileNav] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const customUpdateNav = () => {
        updateMobileNav(prev => !prev);
    }

    useEffect(() => {
        const handleLoad = () => {
          setLoaded(true);
        };
    
        // Event listener for document load
        window.addEventListener('load', handleLoad);
    
        // Cleanup
        return () => {
          window.removeEventListener('load', handleLoad);
        };
      }, []);

      useEffect(() => {
        const checkFontsLoaded = () => {
          document.fonts.ready.then(() => {
            setLoaded(true);
          });
        };
    
        checkFontsLoaded();
    
        // Cleanup (no need to clean up since we're not adding any event listeners)
      }, []);


    useEffect(() => {
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
            
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 750, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: true, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
        });
    }, []);


    return (
        <div className={`app-container ${mobileNav ? "stop-scroll" : ""}`}>
            <StructuredData />
            {loaded ? (
                <>
                <button type="button" className="whatsapp-icon"><a href="https://wa.me/919789757178" rel="noreferrer" target="_blank"><FaWhatsapp color="#ffffff" size={35} /></a></button>
                <NavContext.Provider value={{mobileNav, customUpdateNav}}>
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route exact path="/mission-vision" element={<MissionPage />} />
                        <Route exact path="/value-commitment" element={<CommitmentPage />} />
                        <Route exact path="/founding-story" element={<FoundingPage />} />
                        <Route exact path="/product" element={<ProductPage />} />
                        <Route exact path="/knowledge-center" element={<KnowledgeCenter />} />
                        <Route exact path="/contact" element={<ContactPage />} />
                        <Route exact path="/our-team" element={<TeamPage />} />
                        <Route exact path="/achievements" element={<AchievementPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </NavContext.Provider>
                </>
            ) : <PreLoader />}
        </div>
    )
}

export default App