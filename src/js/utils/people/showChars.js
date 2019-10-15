import translater from './translater'
import saveChar from './saveChar'
import nextPage from './nextPage';
import searchCharacter from '../localStorage/searchChar';


export default function showChars(_data) {

    let tableBody = $('#tableBody')
    let charList = _data.results

    if (charList) {

        // For each character from the data.results list, select the inner data and put it in html
        for (let index = 0; index < charList.length; index++) {
            const char = charList[index];

            // Translate gender  - height - mass - color eyes
            translater(char)

            // Grab ID from the specific unique URL
            let id = parseInt(char.url.slice(28, -1))

            let searchChar = searchCharacter(id)
            console.log(searchChar)
            if (!searchChar) {

                // Character root table row
                let character = $('<tr/>').attr('id', `char${id}`)

                // Character information: id - name - gender - height - mass - eye color and a save button
                let charId = $('<td>').text(`${id}`)
                let charName = $('<td>').text(`${char.name}`)
                let charGender = $('<td>').text(`${char.gender}`)
                let charHeight = $('<td>').text(`${char.height}`)
                let charMass = $('<td>').text(`${char.mass}`)
                let charEyes = $('<td>').text(`${char.eye_color}`)
                let charSave = $('<td>').append($('<button>').text('Guardar').addClass('btn btn-danger saveChar').attr('type', 'button'))

                character.append(charId)
                    .append(charName)
                    .append(charGender)
                    .append(charHeight)
                    .append(charMass)
                    .append(charEyes)
                    .append(charSave)
                tableBody.append(character)
            }

        }
    }

    saveChar()
    nextPage(_data)
}