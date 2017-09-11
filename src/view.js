module.exports = {
	libs:["vue"],
	page:{
	    title:'index',
	    hash:false,
	    chunks:["vue",'main'],
	    filename:'index.html',
	    template:'_tpl/tpl.html',
	    inject:'body'
	}
}