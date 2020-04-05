Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

Vue.component('text-post', {
  //propoty
  props:{
    title:{
      //validation
      type:String,
      required:true
    },
    view:{
      type:Number,
      default:0
    }
  },
  template: '<h3>{{ title }} - {{ view }}</h3>'
})

new Vue({
  el: '#vue-app',
  data: {
    name: 'Worawit Sutsue',
    job: 'Programmer',
    age: 35,
    status:false,
    website:"https://www.facebook.com/worawit.sutsue/",
    count: 0,
    foods:[],
    gender:'',
    like:false,
    products:['a','b','c','d'],
    newEmployeeData:{
        empName:'',
        empAge: 0
    },
    employees:[
      {
        empName:'R.Firmino',
        empAge: 28
      },
      {
        empName:'M.Sala',
        empAge: 27
      }
    ]
  },
  methods:{
    getName:function(){
      return this.name
    },
    setName:function(n){
      return this.name=n
    },
    addAge:function(){
      this.age++;
      console.log(this.age);
    },
    subtractAge:function(){
      this.age--;
      console.log(this.age);
    },
    addCount:function(){
      this.count++;
      console.log(this.count);
    },
    addEmp:function(){
      this.employees.push({
        empName:this.newEmployeeData.empName,
        empAge:this.newEmployeeData.empAge
      });
      this.newEmployeeData.empName = '';
      this.newEmployeeData.empAge = 0;
    },
    showMassage:function(){
      console.log("Complated.");
      alert("Complated.");
    }

  },
  computed:{
    avgAge:function(){
      var sum_age = this.employees.reduce(function(value,data){
        return value + Number(data.empAge);
      },0);
      var avg_age = sum_age/this.employees.length;
      return avg_age;
    }
  },
  watch:{
    //after computed avgAge exe run function showMassage
    avgAge:function(){
      this.showMassage();
    }
  }
})

var postSystem=new Vue({
  el:"#div-post",
  data:{
    title:'ส่งโปรเจค',
    massage:'รายละเอียดโปรเจค'
  }
});

var commentSystem=new Vue({
  el:"#div-comment",
  data:{
    text:'comment 1'
  }
});

var likeSystem=new Vue({
  el:"#div-like",
  data:{
    like:false
  },
  methods:{
    changeLike:function(){
      this.like=!this.like;
      console.log(this.like);
    }
  }
});
