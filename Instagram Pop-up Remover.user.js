// ==UserScript==
// @name         Instagram Pop-up Remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes annoying login/register popup when scrolling down a profile
// @author       dankdave69
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var body = document.getElementsByTagName("body")[0];
    var popUp = document.getElementsByClassName("RnEpo  _Yhr4");
    var button = document.createElement('button');

    function checkExist(){
        if (popUp.length > 0) {
            document.getElementsByClassName("RnEpo  _Yhr4")[0].appendChild(button);
        };
    };

    setInterval(checkExist, 1000);

    button.style = "position:fixed; top:0px; left:0px;";
    button.innerHTML = "Click to remove!";
    button.onclick = function() {
        remove();
    }

	function remove(){
        body.style.overflow = "visible";
        document.getElementsByClassName("RnEpo  _Yhr4")[0].remove();
    };

})();