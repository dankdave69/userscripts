// ==UserScript==
// @name         Browse Instagram (Removes login/register Pop-up and opens up links)
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  Removes annoying login/register popup when scrolling down a profile; Adds [ X ] button on the popup. WIP
// @author       dankdave69
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    var body = document.getElementsByTagName("body")[0];
    var popUp = document.getElementsByClassName("RnEpo  _Yhr4");
    var button = document.createElement('button');

    function appendButton() {
        var buttonX;
        var buttonY;
        var winX = document.documentElement.clientWidth;
        var winY = document.documentElement.clientHeight;
        winX = document.documentElement.clientWidth;
        winY = document.documentElement.clientHeight;
        buttonX = (winX / 2) + 200 - 45;
        buttonY = (winY / 2) - 235.5 + 18.5;

        button.style = "position:fixed; top:" + buttonY + "px; left:" + buttonX + "px; background-color: white; border: none; color: #8e8e8e; padding: 0px 0px; text-align: center; text-decoration: none; font-family: ; display: inline-block; font-size: 20px; margin: 0px 0px; cursor: pointer; width: 30px; height: 30px";
        button.innerHTML = "&#10006;"
        button.onclick = function() {
            remove();
        }

        document.getElementsByClassName("RnEpo  _Yhr4")[0].appendChild(button);
    }

    function remove() {
        body.style.overflow = "visible";
        document.getElementsByClassName("RnEpo  _Yhr4")[0].remove();
    };

    function openLinks() {
        var list = document.querySelectorAll("a");
        for (var i = 0; i < list.length; i++) {
            list.item(i).onclick = function() {
                location.href = this.href;
            };
        };
    };

    function checkExist() {
        if (popUp.length > 0) {
            appendButton();
        };
    };

    setInterval(checkExist, 500);
    setInterval(openLinks, 0);

})();
