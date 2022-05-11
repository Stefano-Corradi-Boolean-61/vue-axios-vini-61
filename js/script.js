
const app = new Vue({

  el: '#app',


  data : {
   
    wines: [],
    isLoading: true
  },
  methods:{
    getWines(){
      axios.get('https://api.sampleapis.com/wines/reds').
      then(res => {
        console.log(res.data);
        this.wines = res.data;
        this.isLoading = false;
      })
    }
  },
  mounted(){
    this.getWines();
  }
});

