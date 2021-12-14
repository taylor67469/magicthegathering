import "./cards.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
const Cards = () => {
    const [card, setCard] = useState([""]);
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const newCards = () => {
        axios.get("https://api.magicthegathering.io/v1/sets")
        .then(data=>{console.log(data)})
        axios.get(`https://api.magicthegathering.io/v${1}/cards`)
            .then(data => {
                
                let myNum = getRandomInt(data.data.cards.length)
                // setCard(data.data);
                // console.log(data.data.cards[0]);
                setCard(data.data.cards);
                //console.log(data.data.cards);
                //console.log(arr);
                // setCard(data.data);
                // for (let i=0;i<data.data.cards.length;i++){
                //     setCard(data.data.cards[i].imageUrl);
                // }

                //    data.data.cards.map(myData=>{
                //         console.log(myData.imageUrl);
                //         setCard(myData.imageUrl);
                //     })
                //console.log(getRandomInt(data.data.cards.length));
                //console.log(data.data.cards[myNum].imageUrl);
                //setCard(data.data.cards[myNum].imageUrl);
                // console.log(card);
            })
    }
    return (<div>
        <button className="myCards" onClick={newCards}>
            New set
        </button>
        <br />
        {card.map((data =>
            <img src={data.imageUrl} />
        )
        )
        }

    </div>)
}
export default Cards;