/** Some node tools to use 
 *
 * @package Webapplication
 * @module tools
 * @author Mario <Mario.Grasser@autark.com>
 * @version v1.0.0
 * @since 2019-12-05
 * @license MIT License <https://opensource.org/licenses/MIT>
 * @copyright (c) 2019 Mario Grasser, Baunatal
 */

!(function () {
    'use strict';
    // - - - - - - - - - -
    // Declarations
    // - - - - - - - - - -

    // - - - - - - - - - -
    // Functions
    // - - - - - - - - - -
    /** function _getType()
     * 
     * @param  {*}      t  _typeOfVariable 
     * @return {string} 
     */
    function _getType(t) {
        let _typeOfVariable = t || undefined;

        // early exit
        if (_typeOfVariable === undefined) return false;

        try {
            return Array.isArray(_typeOfVariable) ? 'array' : typeof (_typeOfVariable);
        } catch (_error) {
            console.log('ERROR: function _getType' + _error);
        }
    }

    /** function _log
     * 
     * @param  {string} n  _nameOfVariable
     * @param  {*}      t  _typeOfVariable 
     * @return void
     */
    function _log(n, t) {
        let
            _nameOfVariable = n || undefined,
            _typeOfVariable = t || undefined;

        // early exits
        if (_nameOfVariable === undefined) return false;
        if (_typeOfVariable === undefined) return false;

        try {
            console.log(_nameOfVariable, '{' + _getType(_typeOfVariable) + '}:', _typeOfVariable);
        } catch (_error) {
            console.log('ERROR: function _log: ' + _error);
        }
    }

    /**
     * Calls the main procedure of scopes and types
     * @return void
     */
    function _main() {
        try {
            window.tools = {} || window.tools;
            window.tools.log = _log;
        } catch (_error) {
            console.log('ERROR: function _main' + _error);
        }
    }


    // - - - - - - - - - -
    // Module Control
    // - - - - - - - - - -
    _main();
})()