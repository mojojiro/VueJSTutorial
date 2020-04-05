new Vue({
  el: '#vue-app',
  data: {
    name: 'Worawit Sutsue',
    job: 'Programmer',
    age: 35,
    status:false,
    website:"https://www.facebook.com/worawit.sutsue/"
  },
  methods:{
    getName:function(){
      return this.name
    },
    setName:function(n){
      return this.name=n
    }
  }
})
