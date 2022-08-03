import React from 'react'
import './Main.scss';
import Smallcup from '../../assets/smallcup.png';
import Medium from '../../assets/medium.png';
import Large from '../../assets/large.png';
import Cup from '../../assets/cup.png';
import Sidemenus from '../../assets/sidemenus.png';

const Main = () => {
  return (
    <section>
      <div className='main_container'>
         <div className='product-Section'>
            <div className='product-Description left'>
              <div className='sizesofCup'>
                <div className='sizes'>
                     <img src={Smallcup} alt = 'images of small cup' className='cups'/>
                     <span className='dots'></span>
                     <p className='para'>Small</p>                  
                </div>
                <div className='sizes'>
                     <img src={Medium} alt= 'images of small cup' className='cups'/>
                     <p className='para'>Medium</p>
                 </div>          
                <div className='sizes'>
                     <img src={Large} alt= 'images of small cup' className='cups'/>
                     <p className='para'>Large</p>
                </div>

              </div>

              <div className='cup-Heading'>
                 <h1 className='heading'>Classic Matka Tea</h1>
                 <p className='description'>
                          This tea is imported from Darjeeling which makes it more valuable. It is only grown in Nepal.
                 </p>
              </div>
              <div className="prices-Order">
                        <p className="prices">Rs. 45 <span className="cupPrice">/cup</span></p>
                        <a href="/" className="order-Now">Order Now</a>

              </div>

            </div>

            <div className='containerRight'>
               <img src={Cup} alt= 'images of small cup' className='cupOriginal'/>
               <img src={Sidemenus} alt= 'images of small cup' className='menus'/>
            </div>

        </div>

        </div>
      
    </section>
  )
}

export default Main