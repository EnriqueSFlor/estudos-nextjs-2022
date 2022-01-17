import { useState } from "react/cjs/react.development"
import ContadorDisplay from "../../components/Contadordisplay"

export default function contador(){

    const [numero, setNumero] = useState(0)



    const subtrair = () =>  setNumero(numero - 1)



    
    return(
        <div style={{display:"flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"}}>
            <h1>contador</h1>
            <ContadorDisplay numero={numero}/>
                <div>
                    <button onClick={subtrair}>-</button>
                     <button onClick={() => setNumero(numero + 1)}>+</button>
                </div>
        </div>   
    )
}