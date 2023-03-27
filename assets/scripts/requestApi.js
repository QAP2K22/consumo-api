async function conectaAPI(type) {
    const httpsLink = "https://dadosabertos.camara.leg.br/api/v2/"+type
    const conecta = await fetch(httpsLink)
    const conectaTraduzido = await conecta.json()


    return conectaTraduzido["dados"]
}

export default conectaAPI;