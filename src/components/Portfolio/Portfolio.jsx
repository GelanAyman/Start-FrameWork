import './Portfolio.css';
import { useState } from "react";
import port1 from './port1.png';
import port2 from './port2.png';
import port3 from './port3.png';


const portfolioItems = [
  { id: 1, img: port1 },
  { id: 2, img: port2 },
  { id: 3, img: port3 },
  { id: 4, img: port1 },
  { id: 5, img: port2 },
  { id: 6, img: port3 },
];

export default function Portfolio() {
  const [activeCardImage, setActiveCardImage] = useState(null);
  return (
    <>

      <section className='portfolio-section'>
        <div className='container text-center d-flex flex-column'>
        <h1 className='fw-bold mb-3 title'> PORTFOLIO COMPONENT </h1>
          <div className='d-flex justify-content-center align-items-center mb-3'>
            <span className='line'></span>
            <i className='fa-solid fa-star mx-3'></i>
            <span className='line'></span>
          </div>

          <div className='row g-4'>
            {portfolioItems.map((item) => (
              <div key={item.id} className='col-md-4'>
                <div
                  className='portfolio-item'
                  onClick={() => setActiveCardImage(item.img)}
                >
                  <img src={item.img} alt='Item Image' className='img-fluid' />
                  <div className='hover-overlay'>
                    <i className='fa-solid fa-plus'></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {activeCardImage && (
            <div className='modal-overlay' onClick={() => setActiveCardImage(null)}>
              <div className='modal-content'>
                <img src={activeCardImage} alt='' />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}