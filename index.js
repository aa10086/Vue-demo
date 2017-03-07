 var ld = document.getElementById('loding');
 Vue.config.silent = false;
 var vm = new Vue({
	el: '#box',
	data: {
		input: '',
		demos: [],
		msg: '请输入查询内容。',
		log: false,
		err: false
	},
	methods: {
		getMsg: function () {
			if (this.input=='') {
				this.err = true;
				return;
			}
			ld.style.display = 'block';
			this.err = false;
			this.demos = [];
			this.log = true;
			this.$http.get('https://api.github.com/search/repositories?sort=stars&q='+this.input)
			.then(function(res){
				this.input ='';
				for(let i = 0;i<res.body.items.length;i++){
					this.demos.push(res.body.items[i]);
				}
				this.log = false;
				ld.style.display = 'none';
			});
		}
	}
});