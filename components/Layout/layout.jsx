import Header from "../Header/header";

const Layout = ({ children }) => {
    return(
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout;