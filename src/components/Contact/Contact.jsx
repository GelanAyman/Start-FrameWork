import './Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Contact() {
  return (
    <>
      <div className='contact min-vh-100 pt-5'>
        <div className='container text-center text-white d-flex flex-column align-items-center'>
          <h1 className='fw-bold mb-3 title'>CONTACT SECTION </h1>
          <div className='d-flex justify-content-center align-items-center mb-3'>
            <span className='line'></span>
            <i className='fa-solid fa-star mx-3'></i>
            <span className='line'></span>
          </div>
          <form action="">
            <input className='my-3' type="text" placeholder='userName' />
            <input className='my-3' type="number" placeholder='userAge' />
            <input className='my-3' type="email" placeholder='userEmail' />
            <input className='my-3' type="password" placeholder='userPassword' />
            <button type="button" class="btn btn-primary w-100"> Send message </button>
          </form>
        </div>
      </div>
    </>
  )
}
