import { storeBindingsBehavior } from "mobx-miniprogram-bindings";
import { store } from '../store/store';

Component({
	behaviors: [storeBindingsBehavior],
	storeBindings: {
		store,
		fields: {
			active: 'tabBarIndex'
		},
		actions: {
			updateActive: 'updateTabBarIndex'
		}
	},
	data: {
		list: [
			{
				"pagePath": "/pages/discover/discover"
			},
			{
				"pagePath": "/pages/index/index"
			},
			{
				"pagePath": "/pages/personal/personal"
			}
		]
	},
	methods: {
		onChange(e) {
			// e.detail 的值为当前选中项的索引
			this.updateActive(e.detail)
			wx.switchTab({
				url: this.data.list[e.detail].pagePath,
			})
		},
	}
});