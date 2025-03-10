/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".project-masonry-active");if(e){let t=new Isotope(e,{itemSelector:".item",layoutMode:"fitRows",filter:"*"});document.querySelectorAll(".project-filter li").forEach(function(e){e.addEventListener("click",function(){let i=this.getAttribute("data-filter");t.arrange({filter:i}),document.querySelectorAll(".project-filter li").forEach(e=>e.classList.remove("current")),this.classList.add("current")})})}});

