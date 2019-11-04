import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: () => ({
      sitename: 'CARZOKU',
      isMobile: null,
      currentShowcaseName: 's13s13whiteboi',

      showcases: [
        {
          showcaseName: 's13s13whiteboi',
          carName: 'Nissan S13',
          instagramName: 's13whiteboi',
          photos: [{photo: 's13s13whiteboi1.jpg', orientation: 'L'},
                   {photo: 's13s13whiteboi2.jpg', orientation: 'P'},
                   {photo: 's13s13whiteboi3.jpg', orientation: 'P'},
                   {photo: 's13s13whiteboi4.jpg', orientation: 'P'}]
        },
        {
          showcaseName: 'ae86fuego_hachiroku',
          carName: 'Toyota AE86',
          instagramName: 'fuego_hachiroku',
          photos: [{photo: 'ae86fuego_hachiroku1.jpg', orientation: 'L'},
                   {photo: 'ae86fuego_hachiroku2.jpg', orientation: 'P'},
                   {photo: 'ae86fuego_hachiroku3.jpg', orientation: 'P'}]
        }
      ]
    }),
    getters: {
        isMobile: state => {
          return state.isMobile
        },

        getShowcase: (state) => {
          for (var i = 0; state.showcases.length; i++){
            if (state.showcases[i].showcaseName == state.currentShowcaseName){
              return state.showcases[i]
            }
          }
        },

        getSitename: (state) => {
          return state.sitename
        }
    },
    mutations: {
      setIsMobile (state, isMobile){
        state.isMobile = isMobile
      },

      setCurrentShowcaseName (state, showcaseName){
        state.currentShowcaseName = showcaseName
      }
    }
  })