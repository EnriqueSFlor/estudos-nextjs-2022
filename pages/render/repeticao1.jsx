
export default function repeticao1() {

    const listaAprovados = [
        'Enrique',
        'Regina',
        'Eduardo',
        'Camila',
        'Rebeca'
    ]


    function renderizarLIsta() {
       return listaAprovados.map((nome,i) => <li key={i}>{nome}</li>)
    }

    return (
        <ul>
            {renderizarLIsta()}
        </ul>
    )
}




/*function renderizarLIsta() {
    const itens = []

    for (let i = 0; i < listaAprovados.length; i++) {
        itens.push(<li key={i}>{listaAprovados[i]}</li>)
        
    }
    return(itens)
}*/
