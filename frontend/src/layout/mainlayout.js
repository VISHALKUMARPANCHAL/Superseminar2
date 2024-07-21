import Header from '../components/header'
import Footer from '../components/footer'

import amin from '../assets/lib/animate/animate.min.css'
import cmin from '../assets/lib/owlcarousel/assets/owl.carousel.min.css'
import bmin from '../assets/css/bootstrap.min.css'
import style from '../assets/css/style.css'

import logo from '../assets/img/logo.png'

// import wmin from '../assets/lib/wow/wow.min.js'
// import emin from '../assets/lib/easing/easing.min.js'
// import pmin from '../assets/lib/waypoints/waypoints.min.js'
// import csmin from '../assets/lib/owlcarousel/owl.carousel.min.js'
// import main from '../assets/js/main.js'


function Mainlayout({ children }) {
    return (
        <>
            <html lang="en">

                <head>
                    <meta charset="utf-8"></meta>
                    <meta content="width=device-width, initial-scale=1.0" name="viewport"></meta>
                    <meta content="" name="keywords"></meta>
                    <meta content="" name="description"></meta>
                    <title>Super seminar</title>
                    {/* <link href="img/favicon.ico" rel="icon"></link> */}
                    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&display=swap" rel="stylesheet"></link>
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"></link>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"></link>
                    <link rel="shortcut icon" type="x-icon" href={logo}></link>
                    <link href={amin} rel="stylesheet"></link>
                    <link href={bmin} rel="stylesheet"></link>
                    <link href={cmin} rel="stylesheet"></link>
                    <link href={style} rel="stylesheet"></link>
                </head>

                <body>













                    <Header ></Header>
                    {children}
                    <Footer></Footer>












                    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>

                    {/* <script src={wmin}></script>
                    <script src={emin}></script>
                    <script src={pmin}></script>
                    <script src={csmin}></script> */}
                    {/* <script src={main}></script> */}
                </body>

            </html>
        </>
    )
}

export default Mainlayout