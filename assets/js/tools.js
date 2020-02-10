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

    /** function _getType()
     * 
     * @param {*} _typeOfVariable 
     * @return {string} 
     */
    function _getType(_typeOfVariable) {
        try {
            return Array.isArray(_typeOfVariable) ? 'array' : typeof (_typeOfVariable);
        } catch (_error) {
            console.log('ERROR: function tools::_getType' + _error);
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
            console.log('ERROR: function tools::_log: ' + _error);
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
                a.addEventListener(eventType, callback); // Nachteil, es werden X Events etabliert
                a.appendChild(text);
            }
            //            nav.addEventListener(eventType, callback);  // Nachteil -> event wird auch bei klick auf li, ul, nav + etc. ausgelöst
            document.body.appendChild(nav); // Erst, wenn die Liste erzeugt ist wird sie verfügbar gemacht <- besserer Weg

        } catch (_error) {
            console.log('ERROR: function tools::_addNavigation: ' + _error + logInfo);
        }
    }

    // declaration
    let eventType = 'click';
    let request = new XMLHttpRequest();
    // function
    /** function callback()
     * 
     */
    function callback(event) {
        try {
            event.preventDefault();
            event.stopImmediatePropagation();

            if (event.target.attributes.length > 0)
                loadContent(event.target.attributes[0].value, event.target.text);
        } catch (_error) {
            console.log('ERROR: function tools::callback(event)' + _error);
        }
    }

    /** function onReadyStateChange
     * 
     * @return void
     */
    function onReadyStateChange() {
        try {
            switch (request.readyState) {
                case 0:
                    console.log('there is no request');
                    break;
                case 1:
                    console.log('request opened');
                    break;
                case 2:
                    console.log('request sent');
                    break;
                case 3:
                    console.log('response first part ...');
                    break;
                case 4:
                    console.log('response more parts and finished!');
                    if (request.status === 200 || request.status === 304) {
                        console.log(request.response);
                        console.log('evaluation');

                        let ressource = document.getElementById('content');
                        ressource.innerHTML = request.response;
                    }
                    break;
                default:
                    console.log('something strange happened!');
                    break;
            }
        } catch (_error) {
            console.log('ERROR: function tools::onReadyStateChange: ' + _error);
        }
    }

    /** function loadContent
     * 
     * @param {string} url 
     * @param {HTMLAnchorElement} context 
     * @return void
     */
    function loadContent(url, context) {
        try {
            request.addEventListener('readystatechange', onReadyStateChange);
            request.open('GET', url);
            request.send(context);
        } catch (_error) {
            console.log('ERROR: function tools::loadContent: ' + _error);
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
            console.log('ERROR: function tools::_main' + _error);
        }
    }


    // - - - - - - - - - -
    // Control
    // - - - - - - - - - -
    _main();
})()