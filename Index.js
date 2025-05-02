const baseUrl ="https://drbackend-e9f5avaff6a6bnba.northeurope-01.azurewebsites.net/api/DRPladesamlings"

Vue.createApp({
  data() {
    return {
        plader: []

      
    };
  },
async created() {
console.log("created method called")
this.GetAll(baseUrl)
},
  methods: {
    GetAll(url){
        this.plader = axios.GetAll(url)
    }
    
  }
}).mount('#app');
