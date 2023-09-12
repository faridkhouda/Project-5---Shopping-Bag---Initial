import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    products: [],
  },
  mutations: {
    leadProducts(state, products) {
      console.log("hello",products);
      state.products = products;
    }
  },
  actions: {
    leadProducts({ commit }) {
      axios.get('https://fakestoreapi.com/products')
        .then(Response => {
          commit('leadProducts', Response.data)
        })
    }
  },
  modules: {
  }
})
