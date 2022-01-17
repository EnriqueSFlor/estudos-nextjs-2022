export default function ContadorDisplay(props){

    const estilo = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50px",
        width: "50px",
        backgroundColor: "black",
        color: "white",
        borderRadius: "25px",
        fontSize:"2rem",
        margin: "20px"}

    return(
        <div style={estilo}>
                    
                  {props.numero}
        </div>
    )
}