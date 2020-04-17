import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react";

import { BackgroundDiv } from "../style/style"
import MobileMenu from "./MobileMenu"
import PowMenu from "./PowMenu"

const Layout = ({ children, getWidth }) => {
    console.log(getWidth)

    const [currentPage, setCurrentPage] = useState('/');

    const controls = useAnimation()

    useEffect(() => {
        currentPage === '/' ? changeBackgroundToDefault() : null
    })
    

    const changeBackgroundToBlank = () => {
        console.log('changing to blank')
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
        console.log('changing to default')
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

    return (
        <div className="main-container">
            <motion.div animate={controls} style={{backgroundPosition: '-4% 100%'}}>
                <PowMenu getWidth={getWidth} handleMenuChange={handleMenuChange} getWidth={getWidth}/>
                <MobileMenu getWidth={getWidth} handleMenuChange={handleMenuChange} getWidth={getWidth}/>
                {children}
            </motion.div>
        </div>
    )
}

export default Layout