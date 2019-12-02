/**
 * 
 *
 * @package Webapplication
 * @module 
 * @author Mario <Mario.Grasser@autark.com>
 * @version v1.0.0
 * @since 2019-12-02
 * @license MIT License <https://opensource.org/licenses/MIT>
 * @copyright (c) 2019 Mario Grasser, Baunatal
 */

!(function () {
    'use strict';
    // declaration
    let myNumber = 15, // Variablentyp Number
        myString = 'Lorem ipsum dolor sit.', // Variablentyp String
        myBoolean = false, // Variablentyp Boolean
        myArray = ['Lorem', 'ipsum', 'dolor', 'sit.'], // Variablentyp Array
        myObject = { // Variablentyp Object
            text: 'Lorem',
            link: 'index.html'
        },
        myFunction = function () {
            return 'Lorem'
        } // Variablentyp Function

    // function
    function _log(_name, _variablenTyp) {
        try {
            let _Type;
             
            if(Array.isArray(_variablenTyp)) _Type = 'array';
            else _Type = typeof (_variablenTyp);

            console.log(_name, '{' + _Type + '}:', _variablenTyp);     
        } catch (_error) {
            console.log('ERROR:' + _error);
        }
    }

    function _main() {
        try {
            window.module = {} || window.module;
            window.module.log = _log;

            _log('myNumber', myNumber);
            _log('myString', myString);
            _log('myBoolean', myBoolean);
            _log('myArray', myArray);
            _log('myObject', myObject);
            _log('myFunction', myFunction);
        } catch (_error) {
            console.log('ERROR:' + _error);
        }
    }

    // control
    _main();
})()