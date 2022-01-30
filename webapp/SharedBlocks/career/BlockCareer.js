sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var BlockCareer = BlockBase.extend("aaufar.aufportofolioproject.SharedBlocks.career.BlockCareer", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "aaufar.aufportofolioproject.SharedBlocks.career.BlockCareer",
					type: "XML"
				},
				Expanded: {
					viewName: "aaufar.aufportofolioproject.SharedBlocks.career.BlockCareer",
					type: "XML"
				}
			}
		}
	});

	return BlockCareer;
});
