import { useState } from "react";
import { NavBar } from "./NavBar";
import '../assets/scss/app.scss';
import { Card } from 'primereact/card';
import '../assets/scss/app.scss';
import 'primeicons/primeicons.css';

// Définition du modèle (classe)
class Realisation 
{
    constructor(title, imageUrl, description) {
      this.title = title;
      this.imageUrl = imageUrl;
      this.description = description;
    }
}

//Etats pour gérer la liste de réalisations

export function Realisations()
{
    
    
    const [realisations, setRealisations] = useState([
        new Realisation('Anniversaire', 'https://i.pinimg.com/564x/a8/86/6f/a8866ff0b947f96e56e7ef2b0c616bfc.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, pariatur distinctio, aspernatur nemo non dolorem ipsam odit voluptatibus ipsa explicabo id minima? Quisquam aut dolor consequuntur quod quas? Deserunt, aliquid.'),
        new Realisation('Circle', 'https://i.pinimg.com/736x/63/6f/ef/636fef7f9f3d4e3b873993a78140afe8.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, pariatur distinctio, aspernatur nemo non dolorem ipsam odit voluptatibus ipsa explicabo id minima? Quisquam aut dolor consequuntur quod quas? Deserunt, aliquid.'),
        new Realisation('Nazuna', 'https://i.pinimg.com/564x/b1/c5/db/b1c5dbc5c928e4d79bf6d9c1cd1ca74a.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, pariatur distinctio, aspernatur nemo non dolorem ipsam odit voluptatibus ipsa explicabo id minima? Quisquam aut dolor consequuntur quod quas? Deserunt, aliquid.'),
        new Realisation('Mitsuri', 'https://i.pinimg.com/736x/18/80/71/188071cb99c0f069dac86f4bd10180b3.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, pariatur distinctio, aspernatur nemo non dolorem ipsam odit voluptatibus ipsa explicabo id minima? Quisquam aut dolor consequuntur quod quas? Deserunt, aliquid.'),
        new Realisation('Neferupito','https://i.pinimg.com/564x/5e/0a/74/5e0a7431757ed6eb0bfc81de4e10d0b9.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, pariatur distinctio, aspernatur nemo non dolorem ipsam odit voluptatibus ipsa explicabo id minima? Quisquam aut dolor consequuntur quod quas? Deserunt, aliquid.'),
        new Realisation('Kirua','https://i.pinimg.com/564x/1e/be/e9/1ebee97fe2c27d287fa81155a677695f.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, pariatur distinctio, aspernatur nemo non dolorem ipsam odit voluptatibus ipsa explicabo id minima? Quisquam aut dolor consequuntur quod quas? Deserunt, aliquid.'),
        new Realisation('Gon','https://i.pinimg.com/564x/23/74/a6/2374a6296671600a8846f2ba3ea9a035.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, pariatur distinctio, aspernatur nemo non dolorem ipsam odit voluptatibus ipsa explicabo id minima? Quisquam aut dolor consequuntur quod quas? Deserunt, aliquid.'),
        new Realisation('Raizel','https://i.pinimg.com/564x/4c/33/b6/4c33b6f3bb48856a080d55c4868f8e67.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, pariatur distinctio, aspernatur nemo non dolorem ipsam odit voluptatibus ipsa explicabo id minima? Quisquam aut dolor consequuntur quod quas? Deserunt, aliquid.'),
        new Realisation('Isagi','https://i.pinimg.com/564x/03/3c/ed/033cedadad538f893a1752eaab93bda3.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, pariatur distinctio, aspernatur nemo non dolorem ipsam odit voluptatibus ipsa explicabo id minima? Quisquam aut dolor consequuntur quod quas? Deserunt, aliquid.'),
        new Realisation('Nanami','https://i.pinimg.com/564x/00/33/06/0033060a0bd254549d17b864f451a455.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, pariatur distinctio, aspernatur nemo non dolorem ipsam odit voluptatibus ipsa explicabo id minima? Quisquam aut dolor consequuntur quod quas? Deserunt, aliquid.'),
    ])

    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');

    const addCard = (e) =>
    {
        e.preventDefault();
        const newCard = new Realisation(title, link, description);
        setRealisations([...realisations, newCard]);
        setTitle('');
        setLink('')
        setDescription('');

    }

    return (
        
        <>
            <NavBar/>

            <div className="Cards">
            {
                realisations.map((real, index) => 
                
                    <div className="Cards-Card" key={index}>
                      <Card title={real.title}  className="md:w-25rem">
                        <img className="Cards-Card-img" src={real.imageUrl} alt="" />
                        <p className="Cards-Card-p m-0">
                            {real.description}
                        </p>
                      </Card>
                    </div>
                )
            }  
            </div>

            <form onSubmit={addCard} className="Form">
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" value={link} onChange={(e) => setLink(e.target.value)}/>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </>
        
    )
}