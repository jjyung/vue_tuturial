let _obj = { fname: "Raj", lname: "Singh"};

var vm = new Vue({
	el: '#vue_det',
   data: _obj,
   methods: {
      mydetails : function() {
         return "I am " + this.fname + " " + this.lname;
      }
   }
});

console.log(vm.fname);
console.log(vm.$data);
console.log(vm.$data.fname);

// must use function when in Vue.extend()
var Component = Vue.extend({
	data: function () {
		return _obj;
	}
});

var myComponentInstance = new Component();
console.log(myComponentInstance.lname);
console.log(myComponentInstance.$data);