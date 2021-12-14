import "./cards.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
const Cards = () => {
    const [card, setCard] = useState([""]);
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const newCards = () => {
        // axios.get("https://api.magicthegathering.io/v1/cards",{
        // })
        // .then(data=>{console.log(data)})
        axios.get(`https://api.magicthegathering.io/v1/cards`)
            .then(data => {
                
                let myNum = getRandomInt(data.data.cards.length)
                setCard(data.data.cards);
            })
    }
    return (<div>
        <button className="myCards" onClick={newCards}>
            New set
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