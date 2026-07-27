function Footer({ autor, ano, estaLogado, redesSociais }) {
    return (
        <div>
            <h1>Desenvolvido com muito carinho por <strong>{autor}</strong></h1>
            <p>Ele está logado desde {estaLogado}</p>
            <p>O ano foi {ano}</p>
            <h1>Minhas redes:</h1>
            <ul>
                {redesSociais.map((redes) => (
                    <li>{redes}</li>
                ))}
            </ul>
        </div>
    )
}

export default Footer