/**
 * 
 *
 * @package Webapplication
 * @module app
 * @author Mario <Mario.Grasser@autark.com>
 * @version v1.0.0
 * @since 2020-01-22
 * @license MIT License <https://opensource.org/licenses/MIT>
 * @copyright (c) 2019 Mario Grasser, Baunatal
 */

!(function () {
    'use strict';
    // - - - - - - - - - -
    // Declarations
    // - - - - - - - - - -

    let navigationData = [{
            text: "Home",
            link: 'assets/content/home.html'
        },
        {
            text: "Work",
            link: 'assets/content/work.html'
        },
        {
            text: "Contact",
            link: 'assets/content/contact.html'
        },
        {
            text: "Imprint",
            link: 'assets/content/imprint.html'
        }
    ]

    // - - - - - - - - - -
    // Functions
    // - - - - - - - - - -

    /**
     * Calls the main procedure of app
     * @return void
     */
    function _main() {
        try {
            tools.addNavigation(navigationData);
        } catch (_error) {
            console.log('ERROR: function app::_main: ' + _error);
        }
    }

    // - - - - - - - - - -
    // Control
    // - - - - - - - - - -
    window.onload = function () {
        _main();
    }
})()