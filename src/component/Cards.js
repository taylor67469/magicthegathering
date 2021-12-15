import "./cards.css";
import React, { useEffect, useState } from "react";
import axios from "axios";


const Cards = () => {
    const [card, setCard] = useState([""]);
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
        //random #
    }
    const newCards = () => {
let myNum = getRandomInt(100)
        axios.get(`https://api.magicthegathering.io/v1/cards?page=${myNum}`)
            .then(data => {
                
                //grabs cards from api
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
            //displays card image
        )
        )
        }

    </div>)
}
export default Cards;