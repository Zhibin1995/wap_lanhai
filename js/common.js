$(function(){
    $(window).resize(infinite);
    function infinite() {
        var htmlWidth = $('html').width();
        if (htmlWidth > 750) {
            $("html").css({
                "font-size" : "40px"
            });
        } else {
            $("html").css({
                "font-size" :  40 / 750 * htmlWidth + "px"
            });
        }
    }infinite();
});
function getQueryString(name) {     //获取url参数
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}
function ajaxUrl(url){
    var ajaxUrl = "http://lanhai.c63.top" + url;
    return ajaxUrl
}
function ajaxFun(url, data, success, faill, compelete){
  $.ajax({
    url: ajaxUrl(url),
    type: 'POST',
    data: data,
    dataType:'json',
    success: function(res){
      if(res.code == 200){
        success(res)
      } else {
        layer.open({
            content: res.msg
            ,skin: 'msg'
            ,time: 2
        });
      }
    },
    error:function(err){
      if(faill == undefined){
        return
      } else {
        faill(err)
      }
    },
    complete:function(com){
      if(compelete == undefined){
        return
      } else {
        complete(com)
      }
    }
  })
}
