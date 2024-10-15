import logoImage from '../assets/images/logo.png';
import '../assets/scss/_app.scss';
import '../assets/scss/_media.scss';
import 'primeicons/primeicons.css';
import { Avatar } from 'primereact/avatar';
import { Link } from 'react-router-dom';
        
export function NavBar()
{
   return (
       <>
          <div className="Header">

            <Link to='/'>
             <div className="Header-logo">
                <img className='Header-img' src={logoImage} alt="Logo-LotusArt" />
             </div>
            </Link>

             <div className="Links">
                <Link className='Links-a' to='/realisations'> Réalisations </Link>
                <Link className='Links-a' to="/articles"> Articles </Link>
                <Link className='Links-a' to="/contacts"> Contacts </Link>               
             </div>

             <div className="annexes">
              
                <div className="notifs">
                    <i className='pi pi-bell'></i>
                </div> 

                <div className="avatar">
                    <Avatar label="U" style={{ backgroundColor: '#29a4fd', color: '#ffffff', borderRadius: '5px' }} />
                </div>            

             </div>
          </div>
       </>

   );

}