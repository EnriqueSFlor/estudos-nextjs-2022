import { useState } from "react/cjs/react.development"
import NumeroDisplay from "../../components/NumeroDisplay"

export default function contador(){

    const [numero, setNumero] = useState(0)



    const subtrair = () =>  setNumero(numero - 1)



    
    return(
        <div style={{display:"flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"}}>
            <h1>contador</h1>
            <NumeroDisplay numero={numero}/>
                <div>
                    <button onClick={subtrair}>-</button>
                     <button onClick={() => setNumero(numero + 1)}>+</button>
                </div>
        </div>   
    )
}