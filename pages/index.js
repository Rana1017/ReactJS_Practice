import Navbar from "../components/Navbar";
import TeaCup from '../public/tea.png'; 
import Image from 'next/image'
import Styles from '../styles/index.module.css';


const index = () => {
  return (
      <div>
        <Navbar/>
        <main className={Styles.hero_section}>
           <div className={Styles.hero_container}>
              <div className={Styles.hero_container_left}>
                   <h1>World Class Masala Tea</h1>
                   <h2>There is something in this tea.</h2>
                   <p>Place your order for the tea. For more enquiry please contact us.</p>
                       <div className={Styles.button}>
                       <button className={Styles.main_container_btn}>
                              <a href="/signin">Register Here</a>
                       </button>
                       </div>
              </div>
              <div className= {Styles.hero_container_right}>
                    <Image src={TeaCup} alt='cup of tea' width='450' height='400'/>
              </div>
           </div>          
        </main>  
      </div>
  )
}

export default index