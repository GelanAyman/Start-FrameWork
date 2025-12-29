import './NotFound.css';

export default function NotFound() {
  return (
    <>
    <section>
        <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
          <h1 className="error text-danger">404</h1>
          <p className="text">Not Found ❌</p>
        </div>
      </section>
    </>
  )
}
