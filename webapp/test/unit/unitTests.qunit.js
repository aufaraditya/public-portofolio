/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"aaufar/auf-portofolio-project/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
