var i=1
window.alert=function(){}
var select = setInterval(function() {
	electCourseTable.tip.submit({lessonId: 494846,lessonCount: 0,ele:this,type:jQuery(this).attr('operator'),virtualLoc:'list',virtualCashEnabled:false,type:'ELECTION'});
	 if($("#cboxLoadedContent").text().indexOf('成功') > 0) {
		window.clearInterval(select);
    	console.log("选课成功！");
     } else {
        console.log("第 " + i + " 次选课尝试");
        i++;
     }
},2000);
var alert=function(){return 1}
var confirm=function(){return 1}
var prompt=function(){return 1}
