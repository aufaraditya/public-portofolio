sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast"], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("aaufar.aufportofolioproject.SharedBlocks.skills.SkillsBlockController", {

		onInit: function () {
		},

		onBtnPress: function() {
			MessageToast.show("Button was presed");
		}
	});
});
