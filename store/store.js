import { observable, action } from "mobx-miniprogram";

export const store = observable({
	tabBarIndex: 1,
	updateTabBarIndex: action(function (index) {
		this.tabBarIndex = index
	})
})