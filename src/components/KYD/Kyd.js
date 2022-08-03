import React from 'react';
import './Kyd.scss';
import Lines from '../../assets/line.svg';
import Nepal from '../../assets/nepal.png';

const Kyd = () => {
  return (
    <section className="KYD">
           <div className="main-KYD">
           
            
                <div className="section-Left">
                    <div className="main-Heading">
                        <h1 className="heading-KYD">Know Your Drink</h1>
                        <img src={Lines} alt="simple arrow"/>
                     </div>
                     <div className="tea-Description">
                        <h2 className="tea-Heading">The Leaves</h2>
                        <p className="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Repudiandae dolorem commodi necessitatibus quia fuga atque libero, doloribus beatae?
                             Hic ad alias labore reiciendis iste dignissimos pariatur facere eligendi modi, 
                            rerum explicabo in dicta minima fugit doloremque quia molestias iusto quaerat.</p>
                     </div>
                     
                     <div className="leaves-Container">
                        <div className="leaves-Property">
                            <div className="properties">
                                <h2 className="properties-One">Taste</h2>
                                <ul className="taste">
                                    <li>Fruity</li>
                                    <li>Fresh</li>
                                </ul>
                            </div>
                            <div className="properties">
                                <h2 className="properties-One">Aroma</h2>
                                <ul className="taste">
                                    <li>Woody</li>
                                    <li>Earthy</li>
                                </ul>
                            </div>
                            <div className="properties">
                                <h2 className="properties-One">Texture</h2>
                                <ul className="taste">
                                    <li>Smooth</li>
                                    <li>Creamy</li>
                                </ul>
                            </div>
                         </div>    
                     </div>

                     <div className="ingredients-Section">
                        <h1 className="ingredient-Heading">
                            The Magic Ingredients
                        </h1>
                        <ul className="ingredient-list">
                            <li className="list-items">Lorem</li>
                            <li className="list-items">Sugar</li>
                            <li className="list-items">Masala</li>
                            <li className="list-items">Coconuts</li>
                            <li className="list-items">Milk</li>
                            <li className="list-items">Sandal Woods</li>
                        </ul>
                     </div>
                </div>

             
                <div className="section-Right">
                    <div className="origin-of-Leaves">
                        <h2 className="sub-heading">The Origin</h2>
                        <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Delectus cupiditate ipsam reprehenderit nesciunt nisi quidem pariatur ipsum accusamus perferendis,
                             sunt aperiam quibusdam, officiis ducimus, magnam fugit sint iure eius alias distinctio? </p>
                    </div>
                    <div className="map-of-Nepal">
                          <img src={Nepal} alt="simple arrow" className='nepal'/>
                    </div>

                    <div className="no-of-Calories">
                        <h1 className="sub-heading">
                            The Numbers
                        </h1>

                       <div className="section-Content">
                        <div className="calories-main">
                            <div className="calories-Container">
                                <div className="calories-description">
                                    <h3>Nutrition Facts Per Servings</h3>
                                    <ul className="contents">
                                        <li className="items">Carbohydrate</li>
                                        <li className="items">Total Sugar</li>
                                        <li className="items">Protein</li>
                                        <li className="items">Dietary Fibres</li>
                                        <li className="items">Sodium</li>
                                        <li className="items">Total Calories</li>
                                    </ul>
                                </div>
                                <div className="calories-number">
                                    <h3>Small</h3>
                                    <ul className="contents">
                                        <li className="items">10g</li>
                                        <li className="items">24g</li>
                                        <li className="items">8g</li>
                                        <li className="items">5g</li>
                                        <li className="items">18g</li>
                                        <li className="items">127kcal</li>
                                    </ul>
    
                                </div>
                            </div>
                        </div>
                       </div>
                    </div>

                </div>
          </div>
        </section>
  )
}

export default Kyd