import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react";

import { BackgroundDiv } from "../style/style"
import MobileMenu from "./MobileMenu"
import NoSSR from 'react-no-ssr'
import PowMenu from "./PowMenu"

const Layout = (props) => {
    const [currentPage, setCurrentPage] = useState('/');
    const controls = useAnimation()

    useEffect(() => {
        currentPage === '/' ? changeBackgroundToDefault() : changeBackgroundToBlank()
    })

    const changeBackgroundToBlank = () => {
        controls.start({
            backgroundImage: 'none',
            backgroundSize: '75%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '-4% 100%',
            transition: { duration: 2 }
          })
    }

    const changeBackgroundToDefault = () => {
        const backgroundImg = "url('/mountain.png')"
        controls.start({
            transition: { duration: 1 },
            transitionEnd: {
                backgroundPosition: '-4% 100%',
                height: '103vh',
                backgroundImage: backgroundImg,
                backgroundSize: '75%',
                backgroundRepeat: 'no-repeat',
            }
          })
    }


    const handleMenuChange = (event) => {
        const value = event.value
        switch (value) {
            case '/What':
                changeBackgroundToBlank()
                break;
            case '/LiftStatus':
                changeBackgroundToBlank()
                break
            default:
                changeBackgroundToDefault()
                break;
        }
        setCurrentPage(value)
    }

    let menu
    // menu =  <PowMenu handleMenuChange={handleMenuChange}/>
        // menu = <MobileMenu width={size.width} handleMenuChange={handleMenuChange}/>
    return (
        <div className="main-container">
            <motion.div animate={controls} style={{backgroundPosition: '-4% 100%'}}>
                <NoSSR>
                <PowMenu handleMenuChange={handleMenuChange}/>
                <MobileMenu handleMenuChange={handleMenuChange}/>
                </NoSSR>
                {props.children}
            </motion.div>
        </div>
    )
}
export default Layout