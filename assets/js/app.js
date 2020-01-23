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
            link: 'index.html'
        },
        {
            text: "Work",
            link: 'work.html'
        },
        {
            text: "Contact",
            link: 'contact.html'
        },
        {
            text: "Imprint",
            link: 'imprint.html'
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
        tools.addNavigation(navigationData);  
   //     tools.addNavigation([,]);  
   //     tools.addNavigation(null);
   //     tools.addNavigation();
    }

    // - - - - - - - - - -
    // Control
    // - - - - - - - - - -
    window.onload = function () {
        _main();
    }
})()