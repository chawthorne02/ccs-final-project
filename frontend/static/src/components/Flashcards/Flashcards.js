import { useState, useEffect, useCallback } from "react";
import { handleError } from "../../errorhandling";




function Flashcards() {
    const [flashcards, setFlashCards] = useState([]);


const getFlashCards = async () => {
    const options = {
        method: 'GET',
	    headers: {
		'X-RapidAPI-Key': "872f9cf82fmsh5e106747e04c426p121256jsn19520a9f3512",
		'X-RapidAPI-Host': 'sameerbhatia-proprofs-flashcards-maker.p.rapidapi.com'
	}
};
const data = await fetch('https://sameerbhatia-proprofs-flashcards-maker.p.rapidapi.com/', options).catch(handleError)
	.then(response => response.json())
	// .then(response => console.log(response))
    setFlashCards(data);
    }


    useEffect(() => {
        getFlashCards();
      }, []);
      


    return (
        <div>hey</div>
    )
}


export default Flashcards;