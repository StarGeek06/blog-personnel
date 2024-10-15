import '../assets/scss/app.scss';
import 'primeicons/primeicons.css';
import '../assets/scss/app.scss';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  
import 'primereact/resources/primereact.min.css';  
import illImage from '../assets/images/ill1.png'
import { Button } from 'primereact/button';
        

export default function Section()
{
    return (
        <>
            <div className="section">
                <div className="text">

                    <h1>
                        Blog Personnel de LotusArt <br />
                        Bienvenue dans ma communauté
                    </h1>

                    <Button 
                            label="Bonne Visite" 
                            icon="pi pi-arrow-right" 
                            iconPos="right" 
                            style={ 
                                    {backgroundColor: 'var(--cyan-200)', color:'var(--black-500)'}
                                  }     
                            raised   
                    />

                </div>

                <div className="ill">
                    <img src={illImage} alt="" />
                </div>

        
            </div>
        </>
    )
}