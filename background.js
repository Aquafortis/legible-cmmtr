/*! @preserve
 * Copyright (c) 2019 Aquafortis
 * Licensed under MPL-2.0 (https://github.com/Aquafortis/legible-cmmtr)
 */
var website = location.href;
if (website.substring(1).match("cmmtr.com")) {
    window.addEventListener("load", () => {
        var head = document.getElementsByTagName("head")[0];
        var style = document.createElement("link");
        style.rel = "stylesheet";
        style.type = "text/css";
        style.href = browser.runtime.getURL("background.css");
        head.appendChild(style);
    });
}
