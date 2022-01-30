/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["aaufar/aufportofolioproject/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
