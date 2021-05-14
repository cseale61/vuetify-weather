import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current:    {},
    forecast:   [],
    today:      {},
    alerts:     []
  },
  mutations: {
    LOAD_CURRENT: (state, data) => {
      state.current = data;
    },
    LOAD_FORECAST: (state, data) => {
      state.forecast = data;
    },
    LOAD_TODAY: (state, data) => {
      state.today = data;
    },
    LOAD_ALERTS: (state, data) => {
      state.alerts = data;
    },
    LOAD_WEATHERKEY: (state, data) => {
      state.weatherkey = data;
    }
  },
  getters: {

  },
  actions: {
    loadCurrent: (context, data) => {
      context.commit("LOAD_CURRENT", data);
    },
    loadForecast: (context, data) => {
      context.commit("LOAD_FORECAST", data);
    },
    loadToday: (context, data) => {
      context.commit("LOAD_TODAY", data);
    },
    loadAlerts: (context, data) => {
      context.commit("LOAD_ALERTS", data);
    },
    loadWeatherkey: (context, data) => {
      context.commit("LOAD_WEATHERKEY", data);
    },
  },
  modules: {
  }
})
