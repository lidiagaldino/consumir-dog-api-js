const searchDog = async (breed) => {

    const url = `https://dog.ceo/api/breed/${breed}/images`
    
    const response = await fetch(url)
    const listaCachorros = await response.json()

    return listaCachorros.message 
}

export{
    searchDog
}