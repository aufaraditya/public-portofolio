sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("aaufar.aufportofolioproject.controller.Main", {
            onInit: function () {
                
            },

            toLinkedin: function () {
                window.open(
                    "https://www.linkedin.com/in/adityaaufar/", "_blank");
            },

            toGithub: function () {
                window.open(
                "http://github.com/aufaraditya", "_blank");
            }

      

        });
    });
