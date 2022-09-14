'use strict'

import { searchDog } from "./dogapi.js"

const createImg = (endImg) => {
    const img = document.createElement('img')
    img.src = endImg
    return img
}

const loadImage = async () => {
    const raca = document.getElementById('raca').value
    const data = await searchDog(raca)

    const galeria = document.getElementById('galeria')
    const images = data.map(createImg)
    
    galeria.replaceChildren(...images)
}

const handleKey = (event) => {
    if (event.key == 'Enter') { 
        loadImage()
    }
}

document.getElementById('raca').addEventListener('keypress', handleKey)