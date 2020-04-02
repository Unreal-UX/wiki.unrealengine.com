(window.webpackJsonp=window.webpackJsonp||[]).push([[960],{1477:function(e,t,i){"use strict";i.r(t);var a=i(28),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("p",[e._v("Ribbon Particle (Tutorial) - Epic Wiki")]),e._v(" "),i("h1",{attrs:{id:"ribbon-particle-tutorial"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ribbon-particle-tutorial"}},[e._v("#")]),e._v(" Ribbon Particle (Tutorial)")]),e._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),i("p",[e._v("Adding the Ribbon TypeData module will cause your particles to be connected together by a polygon ribbon. The ribbon connects particles in the order of their birth.")]),e._v(" "),i("h2",{attrs:{id:"setup"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),i("p",[i("a",{attrs:{href:"/File:RibbonSmoke.jpg"}},[i("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/f/f7/RibbonSmoke.jpg/200px-RibbonSmoke.jpg",alt:""}})])]),e._v(" "),i("p",[i("a",{attrs:{href:"/File:RibbonSmoke.jpg",title:"Enlarge"}},[i("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),e._v(" "),i("p",[e._v("Example Ribbon particle")]),e._v(" "),i("p",[e._v("The first step in creating ribbon particles is to add a Ribbon TypeData module to the particle system from the right-click contextual menu.")]),e._v(" "),i("p",[e._v("In this example, a Ribbon particle system is being used to simulate wisping smoke, such as the kind that trails off the end of a cigarette. Granted, this example takes some artistic license.")]),e._v(" "),i("p",[e._v("The overall setup is fairly simple. An additive unlit material is applied with a black-to-white gradient running from left to right.")]),e._v(" "),i("p",[i("a",{attrs:{href:"/File:RibbonMaterial.jpg"}},[i("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/a/aa/RibbonMaterial.jpg/180px-RibbonMaterial.jpg",alt:""}})])]),e._v(" "),i("p",[i("a",{attrs:{href:"/File:RibbonMaterial.jpg",title:"Enlarge"}},[i("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),e._v(" "),i("p",[e._v("Example material for the ribbon")]),e._v(" "),i("p",[e._v("The particle system will apply this material such that the youngest parts of the ribbon will receive the leftmost data while the oldest receive the right. Or, more directly, the ribbon becomes more opaquely white is it ages.")]),e._v(" "),i("p",[e._v("For the particle setup, the modules are set up in the following manner:")]),e._v(" "),i("p",[e._v("Module Properties")]),e._v(" "),i("p",[e._v("Property")]),e._v(" "),i("p",[e._v("Value")]),e._v(" "),i("p",[e._v("Reason")]),e._v(" "),i("p",[e._v("Ribbon Data Module")]),e._v(" "),i("p",[e._v("Sheets Per Trail")]),e._v(" "),i("p",[e._v("2")]),e._v(" "),i("p",[e._v("Adds a few more polygons to the ribbon, smoothing it out a bit.")]),e._v(" "),i("p",[e._v("Max Particle in Trail Count")]),e._v(" "),i("p",[e._v("500")]),e._v(" "),i("p",[e._v("Makes a very long trail.")]),e._v(" "),i("p",[e._v("Tangent Recalculation on Every Frame")]),e._v(" "),i("p",[e._v("Checked")]),e._v(" "),i("p",[e._v("Smoothes out the overall trail as the particles accelerate.")]),e._v(" "),i("p",[e._v("Spawn Module")]),e._v(" "),i("p",[e._v("Rate")]),e._v(" "),i("p",[e._v("20")]),e._v(" "),i("p",[e._v("Provides adequately dense wisps of smoke.")]),e._v(" "),i("p",[e._v("Lifetime Module")]),e._v(" "),i("p",[e._v("Lifetime")]),e._v(" "),i("p",[e._v("4")]),e._v(" "),i("p",[e._v("Causes the smoke to last for 4 seconds.")]),e._v(" "),i("p",[e._v("Initial Size Module")]),e._v(" "),i("p",[e._v("Start Size")]),e._v(" "),i("p",[e._v("Vector Constant: (10, 5, 0)")]),e._v(" "),i("p",[e._v("Applies a good initial size to the smoke ribbon. Mileage may vary.")]),e._v(" "),i("p",[e._v("Initial Velocity Module")]),e._v(" "),i("p",[e._v("Velocity")]),e._v(" "),i("p",[e._v("Vector Uniform: Min(-5, -5, 10) Max(15, 5, 10)")]),e._v(" "),i("p",[e._v("Gives the particles upward movement, a little bit of lateral randomness.")]),e._v(" "),i("p",[e._v("Color Over Life Module")]),e._v(" "),i("p",[e._v("Color Over Life")]),e._v(" "),i("p",[e._v("Vector Constant Curve: Alpha from 1 to 0 over life")]),e._v(" "),i("p",[e._v("Causes the particles to fade as they die.")]),e._v(" "),i("p",[e._v("Acceleration Module")]),e._v(" "),i("p",[e._v("Acceleration")]),e._v(" "),i("p",[e._v("Vector Uniform: Min(0, -2, 20) Max(10, 2, 35)")]),e._v(" "),i("p",[e._v("Applies a little wind and upward acceleration to the particles.")]),e._v(" "),i("p",[e._v("Size By Life Module")]),e._v(" "),i("p",[e._v("Life Multiplier")]),e._v(" "),i("p",[e._v("Vector Constant Curve: From 0.1 to 3 over the life of the particle")]),e._v(" "),i("p",[e._v("Causes the smoke to expand as it moves upward.")]),e._v(" "),i("p",[e._v('Retrieved from "'),i("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Ribbon_Particle_(Tutorial)&oldid=6454",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Ribbon_Particle_(Tutorial)&oldid=6454"),i("OutboundLink")],1),e._v('"')]),e._v(" "),i("p",[i("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Categories")]),e._v(":")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[e._v("Tutorials")])]),e._v(" "),i("li",[i("a",{attrs:{href:"/Category:Particle",title:"Category:Particle"}},[e._v("Particle")])]),e._v(" "),i("li",[i("a",{attrs:{href:"/Category:Community_Created_Content",title:"Category:Community Created Content"}},[e._v("Community Created Content")])])]),e._v(" "),i("p",[i("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);