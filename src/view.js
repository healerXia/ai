module.exports = {
	libs:["https","vue"],
	page:{
	    title:'index',
	    hash:false,
	    chunks:["https","vue",'main'],
	    filename:'index.html',
	    template:'_tpl/tpl.html',
	    inject:'body'
	}
}