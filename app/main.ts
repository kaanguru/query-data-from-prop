import Vue from 'nativescript-vue'
import App from './components/App.vue'

import store from './store'
import VueDevtools from 'nativescript-vue-devtools'
import ApolloClient from 'apollo-boost'

const apolloClient = new ApolloClient({
  uri: 'https://sebapi.com/graphql',
  headers: {
    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg2MTY2NjQ1LCJleHAiOjE1ODg3NTg2NDV9.9A8id9YARDw5M0XKE8jlP_yxMRnGBfegjA2hn7kIqlw"
  }
})
import VueApollo from 'vue-apollo'

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')
// Prints Colored logs when --env.production is *NOT* set while building
// @ts-ignore
Vue.config.debug = (TNS_ENV !== 'production')


new Vue({
  store,
  apolloProvider,
  render: h => h('frame', [h(App)])
}).$start()
