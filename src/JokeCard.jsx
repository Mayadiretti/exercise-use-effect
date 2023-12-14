import { useEffect, useState } from "react"

const jokeCard = ()=>{
    const [joke, setJoke] = useState(undefined);

    useEffect(() =>{
    const fetchJoke = async()=>{
        try{
            const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=twopart');
            if(!response.ok){
                throw new Error ('ipossibile caricare la battuta');
            }
            const data = await response.json();
            setJoke(data)
        }catch (error){
            console.error('errore nel caricamento della battuta');
            setJoke(null);
        }
    };
    fetchJoke();
}, []);

return (
    <div className="joke-card">
      {joke === undefined && <div>Loading...</div>}
      {joke && (
        <>
          <div>{joke.setup}</div>
          {joke.answer && <div>{joke.answer}</div>}
        </>
      )}
      {joke === null && <div>Error loading joke. Please try again later.</div>}
    </div>
  );
}

export default jokeCard;

