import './About.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function About() {
    return (
        <>
            <div className='about d-flex justify-content-center align-items-center min-vh-100'>
                <div className='container text-white d-flex flex-column align-items-center'>
                    <h1 className='fw-bold mb-3'> ABOUT COMPONENT </h1>
                    <div className='d-flex justify-content-center align-items-center mb-3'>
                        <span className='star'></span>
                        <i className='light fa-solid fa-star mx-3'></i>
                        <span className='star'></span>
                    </div>
                    <div className='d-flex justify-content-center align-items-center gap-4'>
                        <div className='col-md-5 col-sm-10'>
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </div>
                        <div className='col-md-5 col-sm-10'>
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
