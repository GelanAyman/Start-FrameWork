import './Home.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import avatar from '../../assets/avatars.svg';

export default function Home() {
    return (
        <>
            <div className='home d-flex justify-content-center align-items-center min-vh-100'>
                <div className='container text-center text-white d-flex flex-column align-items-center'>
                    <img src={avatar} alt='Avatar' className='w-25 mb-4' />
                    <h1 className='fw-bold mb-3'>START FRAMEWORK</h1>
                    <div className='d-flex justify-content-center align-items-center mb-3'>
                        <span className='star'></span>
                        <i className='light fa-solid fa-star mx-3'></i>
                        <span className='star'></span>
                    </div>
                    <p>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </>
    )
}
