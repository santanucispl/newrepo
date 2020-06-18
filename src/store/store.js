import Vue from 'vue'
import Vuex from 'vuex'
import data_list from './data'
import VuexPersist from 'vuex-persist'
const vuexPersist = new VuexPersist({
	key: 'my-app',
	storage: window.localStorage
  })
Vue.use(Vuex);
export default new Vuex.Store({
	modules:{
		data_list
	},
	plugins: [vuexPersist.plugin]
});