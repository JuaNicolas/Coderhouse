import { getLocalList } from "./localStorage/localStorage"
import deleteChar from "./deleteChar"

export default function showSavedChars() {
    console.log('guardados')

    let savedCharList = getLocalList('chars')


    let tableBody = $('#tableBody')

    savedCharList.forEach(charSaved => {

        console.log(charSaved.charName)

        let char = $('<tr/>').attr('id', `char${charSaved.charId}`)
        let charId = $('<td>').text(`${charSaved.charId}`)
        let charName = $('<td>').text(`${charSaved.charName}`)
        let charGender = $('<td>').text(`${charSaved.charGender}`)
        let charHeight = $('<td>').text(`${charSaved.charHeight}`)
        let charMass = $('<td>').text(`${charSaved.charMass}`)
        let charEyes = $('<td>').text(`${charSaved.charColorEyes}`)
        let charDelete = $('<td>').append($('<button>').text('Eliminar').addClass('btn btn-danger deleteChar').attr('type', 'button'))

        char.append(charId)
            .append(charName)
            .append(charGender)
            .append(charHeight)
            .append(charMass)
            .append(charEyes)
            .append(charDelete)
        tableBody.append(char)
    })

    deleteChar()

}
