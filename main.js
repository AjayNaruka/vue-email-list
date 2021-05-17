const app = new Vue({

  el:'#root',
  data:{
    emailArray:[],
    isLoaded:false,
  },
  created(){

  },
  mounted(){
    let i=0;
    while(i<10){
      this.getAxios(this.emailArray)
      i++
      if(this.emailArray.length>9) this.isLoaded=true
    }
    console.log(this.emailArray);
    

    
  },
  methods:{
    getAxios(arr){
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(res => {
        arr.push(res.data.response)
      })
      .catch(err => {
        console.error(err); 
      })
    }
  },


})