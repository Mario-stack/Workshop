/**
 * 
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


    // declaration


    // function

    /** function _getType()
     * 
     * @param {*} _typeOfVariable 
     * @return {string} 
     */
    function _getType(_typeOfVariable) {
        try {
            return Array.isArray(_typeOfVariable) ? 'array' : typeof (_typeOfVariable);
        } catch (_error) {
            console.log('ERROR: function _getType' + _error);
        }
    }


    /** function _log
     * 
     * @param {string} _name 
     * @param {*} _typeOfVariable 
     * @return void
     */
    function _log(_name, _typeOfVariable) {
        try {
            console.log(_name, '{' + _getType(_typeOfVariable) + '}:', _typeOfVariable);
        } catch (_error) {
            console.log('ERROR: function _log: ' + _error);
        }
    }

    /** function _addNavigation
     * 
     * @param {object} _navigationData  
     * @return void
     */
    function _addNavigation(_navigationData = []) {
        let logInfo = "";
        try {
            if (_navigationData === null)
                return;
            logInfo = ' - Parameter 1: navigationData ' + '{' + _getType(_navigationData) + '}: ' + _navigationData.text;

            let nav = document.createElement('nav');
            let ul = nav.appendChild(document.createElement('ul'));

            for (let i = 0; i < _navigationData.length; i++) {
                let li = ul.appendChild(document.createElement('li'));
                let a = li.appendChild(document.createElement('a'));
                let text = document.createTextNode(_navigationData[i].text);
                a.setAttribute('href', _navigationData[i].link);
                a.appendChild(text);
            }
            document.body.appendChild(nav); // Erst, wenn die Liste erzeugt ist wird sie verfügbar gemacht <- besserer Weg

        } catch (_error) {
            console.log('ERROR: function _addNavigation: ' + _error + logInfo);
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
            window.tools.addNavigation = _addNavigation;
        } catch (_error) {
            console.log('ERROR: function _main' + _error);
        }
    }


    // - - - - - - - - - -
    // Control
    // - - - - - - - - - -
    _main();
})()