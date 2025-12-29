import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './Footer.css'

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">

                    <div className="footer-col">
                        <h4>LOCATION</h4>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>

                    <div className="footer-col center">
                        <h4>AROUND THE WEB</h4>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-facebook-f text-white"></i></a>
                            <a href="#"><i className="fab fa-twitter text-white"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in text-white"></i></a>
                            <a href="#"><i className="fas fa-globe text-white"></i></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>ABOUT FREELANCER</h4>
                        <p>
                            Freelance is a free to use, licensed Bootstrap theme created by Gelan Ayman
                        </p>
                    </div>

                </div>
            </footer>

            <footer className="s-footer bg-body-tertiary text-center py-4">
                <div className="container">
                    <p className="mb-0"> &copy; 2025 Start FrameWork. All rights reserved. </p>
                </div>
            </footer>
        </>
    )
}
