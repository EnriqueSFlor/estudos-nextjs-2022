import Filho from "./Filho";

export default function Pai(props) {
    return (
        <div>
           <Filho nome="Enrique" familia={props.familia}/>
           <Filho nome="Joana" familia={props.familia}/>
           <Filho {...props} nome="Camila" />
        </div>
    )
}