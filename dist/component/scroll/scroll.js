define("component/scroll/scroll",["gallery/iscroll/iscroll-probe.js"],function(a,b){b.init=function(b){var c,d,e,f,g,h,i,j,k=a("gallery/iscroll/iscroll-probe.js");return d={page:null,selector:"",refreshUrl:"",enableRefresh:!0,enableLoadmore:!0},e=$.extend(!0,{},d,b),f=$(e.page),g=f.find(".j-loadmore"),h=f.find(".j-pullDown"),i=f.find(e.selector),j=parseInt(f.find(".j-hasData").val()),c=new k("#"+e.page.id+" "+e.selector,{preventDefault:!1,mouseWheel:!0,scrollbars:!0,probeType:2}),e.enableRefresh||e.enableLoadmore?(e.enableRefresh&&c.on("scroll",function(){this.y>50&&!h.hasClass("flip")?(h.addClass("flip"),h.text("释放立即刷新..."),h.css("paddingTop",this.y)):this.y<50&&h.hasClass("flip")&&(h.removeClass("flip"),h.text("下拉刷新..."),h.css("paddingTop",0))}),c.on("scrollEnd",function(){e.enableLoadmore&&j&&this.y-50<=this.maxScrollY&&0!=this.y&&(g.css("opacity",1),setTimeout(function(){var a="<li>新增内容</li><li>新增内容</li><li>新增内容</li><li>新增内容</li><li>新增内容</li>";i.find(".comm-list").empty().append(a),c.refresh(),g.css("opacity",0)},1e3)),e.enableRefresh&&h.hasClass("flip")&&(h.addClass("pulldown-loading"),h.text("正在刷新..."),i.find(".j-refreshPanel").load(e.refreshUrl+"?v="+_.random(1,1e3)+" .comm-list",function(a,b){h.text("success"==b?"刷新成功":"刷新失败，请重试"),setTimeout(function(){h.css("paddingTop",0),h.removeClass("pulldown-loading"),c.refresh()},600)}))}),c):void 0}});