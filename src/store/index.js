import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    products: [],
    productInBag: [],
  },
  mutations: {
    leadProducts(state, products) {
      console.log("hello", products);
      state.products = products;
    },
    addToBag(state, product) {
      state.productInBag.push(product); 
    },
    removeFromBag(state, productId) {
      let updatedBag = state.productInBag.filter(item => productId != item.productId);
      state.productInBag = updatedBag;
    }
  },
  actions: {
    leadProducts({ commit }) {
      axios.get('https://fakestoreapi.com/products')
        .then(Response => {
          commit('leadProducts', Response.data)
        })
    },

    addToBag({ commit }, product) {
      commit('addToBag',product);
    },
    removeFromBag({ commit }, productId) {
      commit('removeFromBag', productId);
    }
  },
  modules: {
  }
})
