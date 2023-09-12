import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    products: [],
    productInBag: [],
  },
  mutations: {
    leadProducts(state, products) {
      state.products = products;
    },
    addToBag(state, product) {
      state.productInBag.push(product); 
    },
    removeFromBag(state, productId) {
      var updatedBag = state.productInBag.filter(item => productId != item.productId);
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
      if(confirm('Are you sure you want to remove the item from the bag ?')) {
      commit('removeFromBag', productId);
      }

    }
  },
  modules: {
  }
})
