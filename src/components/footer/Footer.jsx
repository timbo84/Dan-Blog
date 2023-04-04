import "./footer.css";

export default function Footer() {

    return (
        <>
            <footer id="footer" class="text-center mt-5">
                <div className="logoFooter">
                    <a className="navbar-brand align-items-center" href="/">
                        <img src={process.env.PUBLIC_URL + '/Images/logo-vector-white.png'} height="100" alt="Evince" /></a>
                </div>

                <div className="text-center pb-3 text-light ">
                    <p className="p" >© 2023 Evince</p>
                </div>
            </footer>
        </>
    )
}

