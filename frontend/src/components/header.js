import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import { handleSuccess } from '../pages/util';

// import title from '../assets/img/title.png'

function Header({ }) {

    const [currentPage, setCurrentPage] = useState('home');
    useEffect(() => {
        const path = window.location.pathname;
        let result = path.slice(1);
        setCurrentPage(result);
    }, []);

    const [loggedInUser, setloggedInUser] = useState('');
    useEffect(() => {
        setloggedInUser(localStorage.getItem('loggedInUser'));
    }, [])
    const navigate = useNavigate();
    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');

        navigate("/login")
        handleSuccess('Logout successfully');
    }
    const token = localStorage.getItem('token')
    const isLoggedIn = () => {
        if (!token) {
            return false;
        }
        else {
            return true;
        }
    }


    // const currentUrl = window.location.href;
    // console.log(currentUrl);
    // const divClassName = 'notactive';
    // if (currentUrl == 'http://localhost:3000/') {
    // divClassName = 'active';
    // }
    return (
        <>
            {/* <h1>{loggedInUser}</h1> */}
            <nav nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0" >
                <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 className="m-0 text-primary"><img src={logo} alt="" className="titleimg"></img><span id='title1'>Super</span><span id='title2'>Seminar</span></h2>

                    {/* <img src={title} alt="" className="titleimg"></img> */}
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">

                        {/* visitor routes */}

                        <Link id='home' to="/" className={currentPage === '' ? 'active nav-item nav-link ' : 'nav-item nav-link '}>Home</Link>
                        <Link id='about' to="/about" className={currentPage === 'about' ? 'active nav-item nav-link ' : 'nav-item nav-link '}>About</Link>
                        <Link id='contact' to="/contact" className={currentPage === 'contact' ? 'active nav-item nav-link' : 'nav-item nav-link '}>Contact</Link>
                        <Link id='workshops' to="/seminars" className={currentPage === 'seminars' ? 'active nav-item nav-link' : 'nav-item nav-link '}>Seminars</Link>

                        {/* student routes */}

                        {isLoggedIn() && <Link id='profile' to="/profile" className={currentPage === 'profile' ? 'active nav-item nav-link' : 'nav-item nav-link '}>Profile</Link>}
                        {isLoggedIn() && <Link id='profile' to="/profile" className={currentPage === 'profile' ? 'active nav-item nav-link' : 'nav-item nav-link '}>Profile</Link>}



                        {/* <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu fade-down m-0">
                                <a href="team.html" className="dropdown-item">Our Team</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div> */}
                    </div>
                    {
                        isLoggedIn() ?
                            (<button onClick={handleLogout} className="btn btn-danger py-4 px-lg-5 d-none d-lg-block">Logout
                                <i className="fa fa-arrow-right ms-3"></i></button>)
                            :
                            (<Link to="/login" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Login
                                <i className="fa fa-arrow-right ms-3"></i></Link>
                            )
                    }

                </div>
            </nav >
        </>

    )
}

export default Header
