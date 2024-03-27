
// function somar(parametros)
// somar(argumentos)
// REACT -> function Button(props) 
// PROPS -> Propriedades

export default function Button({title, color, handleClick}){
   return (
    <button onClick={handleClick} style={{color, fontFamily: "Rakkas"}}>{title}</button>
   )
}




