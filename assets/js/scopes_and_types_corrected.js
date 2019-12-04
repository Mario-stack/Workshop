/**
 * Scopes And Variables
 *
 * @package Webapplication
 * @module scope_and_variables
 * @author Mario <Mario.Grasser@autark.com>
 * @version v1.0.0
 * @since 2019-12-02
 * @license MIT License <https://opensource.org/licenses/MIT>
 * @copyright (c) 2019 Mario Grasser, Baunatal
 */

!(function () {
    'use strict';
    // - - - - - - - - - -
    // Declaration
    // - - - - - - - - - -
    let
        myNumber = 15,
        myString = 'Lorem ipsum dolor sit.',
        myBoolean = false,
        myArray = ['Lorem', 'ipsum', 'dolor', 'sit.'],
        myObject = {
            text: 'Lorem',
            link: 'index.html'
        },
        myFunction = function () {
            return 'Lorem'
        }

    // - - - - - - - - - -
    // Functions
    // - - - - - - - - - -

    /**
     * 
     * @param {string} _name 
     * @param {*} _typeOfVariable 
     * @return void
     */
    function _log(_name, _typeOfVariable) {
        try {
            let _type;

            if (Array.isArray(_typeOfVariable)) _type = 'array';
            else _type = typeof (_typeOfVariable);

            console.log(_name, '{' + _type + '}:', _typeOfVariable);
        } catch (_error) {
            console.log('ERROR:' + _error);
        }
    }

    /**
     * Calls the main procedure of scopes and types
     * @return void
     */
    function _main() {
        try {
            window.module = {} || window.module;
            window.module.log = _log;
        } catch (_error) {
            console.log('ERROR:' + _error);
        }
        _log('myNumber', myNumber);
        _log('myString', myString);
        _log('myBoolean', myBoolean);
        _log('myArray', myArray);
        _log('myObject', myObject);
        _log('myFunction', myFunction);
    }

    // - - - - - - - - - -
    // Control
    // - - - - - - - - - -
    window.onload = function () {
        _main();
    };

})()