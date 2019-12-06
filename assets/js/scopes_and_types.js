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
     * Calls the main procedure of scopes and types
     * @return void
     */
    function _main() {
        tools.log('myNumber', myNumber);
        tools.log('myString', myString);
        tools.log('myBoolean', myBoolean);
        tools.log('myArray', myArray);
        tools.log('myObject', myObject);
        tools.log('myFunction', myFunction);
    }

    
    // - - - - - - - - - -
    // Control
    // - - - - - - - - - -
    window.onload = function () {
        _main();
    };
})()