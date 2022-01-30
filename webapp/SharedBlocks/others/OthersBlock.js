sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var OthersBlock = BlockBase.extend("aaufar.aufportofolioproject.SharedBlocks.others.OthersBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "aaufar.aufportofolioproject.SharedBlocks.others.OthersBlock",
					type: "XML"
				},
				Expanded: {
					viewName: "aaufar.aufportofolioproject.SharedBlocks.others.OthersBlock",
					type: "XML"
				}
			}
		}
	});

	return OthersBlock;
});
