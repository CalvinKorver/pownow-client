import PowMenu from "./PowMenu"

const Layout = ({ children }) => (
    <div className="main-continer">
        <PowMenu />
        {children}
    </div>

)

export default Layout