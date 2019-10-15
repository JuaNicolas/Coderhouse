/**
 * !Orden de Funciones
 * 
 * ? Actualizar la clase (valid - invalid)
 *  *Dentro de esta función se intercambia entre 'valid' / 'in-valid', a su vez, se ejecuta enableButton para detectar si el BOTON ENVIAR debe habilkitarse o no
 * 
 * ? Otorgar mensaje de feedback por nombre
 *  *Mensaje personañlizado para un feedback positivo/negativo
 * 
 * ? Otorgar mensaje de feedback por email
 *  *Mensaje personañlizado para un feedback positivo/negativo
 * 
 * ? Ejecutar Nombre
 *  *Se ejecutan los eventos sobre NOMBRE
 * ? Validar Nombre
 *  *Se verifica si cumple o no los requisitos
 * 
 * ? Ejecutar Email
 *  *Se ejecutan los eventos sobre EMAIL
 * ? Validar Email
 *  *Se verifica si cumple o no los requisitos
 * 
 * ? Ejecutar Comentario
 *  *Se ejecutan los eventos sobre COMENTARIO
 * ? Validar Comentario
 *  *Se verifica si cumple o no los requisitos
 * 
 * ? Habilitar el Botón Enviar
 *  *Se verifica si cumple o no los requisitos
 * 
 */

import {validName, validEmail, validComment} from '../utils/contact/validFields'

// Funciones

// Inicio
export default function contactController() {

    // Ejecutar Nombre
    $('#inputName').one('blur', function () {
        validName($(this))

    }).keyup(function () {
        validName($(this))
    })

    // Ejecutar Email
    $('#inputEmail').one('blur', function () {
        validEmail($(this))

    }).keyup(function () {
        validEmail($(this))
    })

    // Ejecutar Comentario
    $('#inputComment').one('blur', function () {
        validComment($(this))

    }).keyup(function () {
        validComment($(this))
    })
}