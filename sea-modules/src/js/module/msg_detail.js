define("src/js/module/msg_detail",["gallery/underscore/1.6.0/underscore.js"],function(a,b){b.init=function(b){var c=a("gallery/underscore/1.6.0/underscore.js"),d={1:"嗯哼？",2:"然后呢？",3:"是啊！",4:"你说呢？",5:"对，我同意。"},e=$(b),f=e.find(".content"),g=e.find("#j-msg-detail-list"),h=e.find("#tpl_msg_left").html(),i=e.find("#tpl_msg_right").html(),j=function(){f.scrollTop(g.height())};e.find("#j-sendMsg").keypress(function(a){var b=window.event?a.keyCode:a.which;if(13==b){var e=$(this).val(),f=c.template(i,{dataset:e}),k=$(f);g.append(k),$(this).val("").focus(),j(k),f=c.template(h,{dataset:d[c.random(1,5)]}),k=$(f),setTimeout(function(){g.append(k),j(k)},c.random(100,1e3))}})}});