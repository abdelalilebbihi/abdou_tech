"use strict";

$(document).ready(function(){$.cookie("dark-mode")?($("#switch-mode").addClass("active"),$("body").addClass("dark-mode")):($("body").removeClass("dark-mode"),$("#switch-mode").removeClass("active")),$("#switch-mode").on("click",function(){$.cookie("dark-mode")?$.removeCookie("dark-mode",{path:"/"}):$.cookie("dark-mode","yes",{expires:360,path:"/"}),location.reload()})});
