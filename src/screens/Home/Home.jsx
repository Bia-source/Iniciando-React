import { useState } from "react";
import Button from "../../components/Button/Button";

// importacao modular
import style from "./style.module.css";
// <p className={style.firstInfo}> {personagem.gender} </p>

// importacao default
// import "./style.css"
// <p className="firstInfo"> {personagem.gender} </p>


export default function Home() {
    const [personagens, setPersonagens] = useState([]);
    
    async function handlePersonagens() {
        await fetch("https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=265")
            .then(res => res.json())
            .then(setPersonagens)
    }

    function showPersonagens() {
        console.log(personagens)
    }

    function deleteAll() {
        setPersonagens([]);
    }

    return (
        <>

            <Button title="Buscar" color="yellow" handleClick={handlePersonagens} />
            <Button title="Mostrar" color="green" handleClick={showPersonagens} />
            <Button title="Deletar" color="red" handleClick={deleteAll} />


            <h1>{contador}</h1>
            {/* presentinho para voces pesquisarem e tentarem entender kk */}
            <div style={{overflow: scroll}}>
                {personagens.map(personagem => (

                    <div key={personagem.id} style={{flexDirection: "row"}} className={style.card}>
                        <img src={personagem.image} />
                        <h1>{personagem.name}</h1>
                        <div className={style.infos}>
                            <p className={style.firstInfo}> {personagem.gender} </p>
                            <p className={style.secondInfo}> {personagem.hair} </p>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}