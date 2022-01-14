export default function Somentepar(props) {
    const numeroPar = props.numero % 2 === 0
    return numeroPar ? <h1>{props.numero}</h1> : null
}


/*if(props.numero % 2 === 0) {
    return (
        <div>
            <h1>{props.numero}</h1>
        </div>
    )
} else {
    return null
}*/