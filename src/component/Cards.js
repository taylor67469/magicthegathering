import "./cards.css";
import React, { useEffect, useState } from "react";
import axios from "axios";


const Cards = () => {
    const [card, setCard] = useState([""]);
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const newCards = () => {
let myNum = getRandomInt(100)
        axios.get(`https://api.magicthegathering.io/v1/cards?page=${myNum}`)
            .then(data => {
                
                
                setCard(data.data.cards);
            })
    }
    return (<div>
        <button className="myCards" onClick={newCards}>
            New set of cards
        </button>
        <br />
        <br/>
        {card.map((data =>
            <img src={data.imageUrl} />
        )
        )
        }

    </div>)
}
export default Cards;