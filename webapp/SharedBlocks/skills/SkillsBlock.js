sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function (coreLibrary, BlockBase) {
	"use strict";

	var ViewType = coreLibrary.mvc.ViewType;

	var SkillsBlock = BlockBase.extend("aaufar.aufportofolioproject.SharedBlocks.skills.SkillsBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "aaufar.aufportofolioproject.SharedBlocks.skills.SkillsBlock",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "aaufar.aufportofolioproject.SharedBlocks.skills.SkillsBlock",
					type: ViewType.XML
				}
			}
		}
	});
	return SkillsBlock;
});
