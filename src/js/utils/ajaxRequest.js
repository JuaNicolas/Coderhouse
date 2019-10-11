/**
 * 1° Hacer un request. /
 * 
 * 2° Mostrar 10 personajes.
 * 
 * 3° Apretar 'ver más' carga 10 personajes más.
 * 
 * 4° Apretar en 'Guardar', guarda el personaje en el localStorage y lo elimina de la página.
 */

import translater from '../utils/translater'

const SWAPI_URL = "https://swapi.co/api/people/"
let contador = 1


// Main controller
function ajaxRequest() {

    // Function to get data from the URL
    function getData(url) {
        $.ajax(url)
            .done(function (data) {
                getNext(data)
            })
            .fail(function (error) {
                showError(error)
            })
    }

    function getNext(data) {

        if (data.results) {
            showChars(data.results)
        }
    }

    let seeMore = $('#seeMore')
    seeMore.on('click', function () {
        getData(data.next)
    })

    function showError(_error) {
        console.log("El error es: " + _error);
    }

    // Create Table Row
    function showChars(data) {

        let tableBody = $('#tableBody')

        for (let index = 0; index < data.length; index++) {
            const element = data[index];

            // Translate gende and color eyes
            translater(element)

            let char = $('<tr/>')
            let charId = $('<td>').text(`${contador}`)
            let charName = $('<td>').text(`${element.name}`)
            let charGender = $('<td>').text(`${element.gender}`)
            let charHeight = $('<td>').text(`${element.height} cm`)
            let charMass = $('<td>').text(`${element.mass} kg`)
            let charEyes = $('<td>').text(`${element.eye_color}`)
            let charSave = $('<td>').append($('<button>').text('Guardar').addClass('btn btn-danger').attr('type', 'button').attr('id', `add${contador}`))

            contador++

            char.append(charId)
                .append(charName)
                .append(charGender)
                .append(charHeight)
                .append(charMass)
                .append(charEyes)
                .append(charSave)
            tableBody.append(char)

        }
    }
    getData(SWAPI_URL)
}

export default ajaxRequest