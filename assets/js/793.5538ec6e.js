(window.webpackJsonp=window.webpackJsonp||[]).push([[793],{1294:function(e,t,a){"use strict";a.r(t);var n=a(28),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Landscape - World Machine perfect integration - Epic Wiki")]),e._v(" "),a("h1",{attrs:{id:"landscape-world-machine-perfect-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#landscape-world-machine-perfect-integration"}},[e._v("#")]),e._v(" Landscape - World Machine perfect integration")]),e._v(" "),a("p",[a("strong",[e._v("Rate this Article:")])]),e._v(" "),a("p",[e._v("3.67")]),e._v(" "),a("p",[a("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_half.gif",alt:""}}),a("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),e._v(" (3 votes)")]),e._v(" "),a("p",[e._v("Approved for Versions:(please verify)")]),e._v(" "),a("p",[e._v("This is a workflow guide to use the powerful World Machine terrain generator to create, edit and change your landscapes in Unreal Engine 4. It's mainly about setting up your projects and terrain generation to have a seamless import/export pipeline.")]),e._v(" "),a("p",[e._v("Let's get started!")]),e._v(" "),a("h2",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Create_and_edit_a_Landscape_in_Unreal"}},[e._v("1 Create and edit a Landscape in Unreal")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Creating_the_landscape"}},[e._v("1.1 Creating the landscape")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Exporting_data"}},[e._v("1.2 Exporting data")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#World_Machine_setup"}},[e._v("2 World Machine setup")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Bringing_in_your_Heightmap"}},[e._v("2.1 Bringing in your Heightmap")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Setting_up_your_project"}},[e._v("2.2 Setting up your project")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#World_Machine_editing"}},[e._v("3 World Machine editing")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Adding_Nodes"}},[e._v("3.1 Adding Nodes")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Masking_your_landscape"}},[e._v("3.2 Masking your landscape")])])])])]),e._v(" "),a("h2",{attrs:{id:"create-and-edit-a-landscape-in-unreal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-and-edit-a-landscape-in-unreal"}},[e._v("#")]),e._v(" Create and edit a Landscape in Unreal")]),e._v(" "),a("p",[e._v("Start from a blank scene and press "),a("strong",[e._v("SHIFT+3")]),e._v(" . This will bring up Landscape Tool menu'.")]),e._v(" "),a("h3",{attrs:{id:"creating-the-landscape"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-landscape"}},[e._v("#")]),e._v(" Creating the landscape")]),e._v(" "),a("p",[e._v("I recommend to use "),a("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/Engine/Landscape/Creation/index.html#recommendedlandscapesizes",target:"_blank",rel:"noopener noreferrer"}},[e._v('"recommended Landscape sizes"'),a("OutboundLink")],1),e._v(" as a starting point, it will lead to a cleaner pipeline. If you already have a layed out scene, try to create a landscape that embed all your features using the recommended sizes.")]),e._v(" "),a("p",[a("a",{attrs:{href:"/File:01.jpg",title:"Creating landscape"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/4/4e/01.jpg/800px-01.jpg",alt:"Creating landscape"}})])]),e._v(" "),a("p",[e._v("Edit it a little bit, again for the sake of the example, it will be good to reach the maximum extent of the landscape: sculpt until the mountain slope doesn't grow anymore and dig until you reach the lower limit. "),a("strong",[e._v("WARNING : for scale Z=100 you've a range of -256m : +256m.")])]),e._v(" "),a("p",[a("a",{attrs:{href:"/File:02.jpg",title:"Creating landscape"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/3/3f/02.jpg/800px-02.jpg",alt:"Creating landscape"}})])]),e._v(" "),a("p",[e._v("Now, you should apply a Landscape material (you can use "),a("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/Resources/ContentExamples/Landscapes/1_1/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Content Example - Landscape"),a("OutboundLink")],1),e._v(" to get how to do it). Keep it simple, you need only two layers for this step: one will be the area you want to be edited by World Machine, the other is an area where you want to mantain EXACTLY the same height you've in Unreal Engine. In my example, I want the RED area to be left unmodified by World Machine.")]),e._v(" "),a("p",[a("a",{attrs:{href:"/File:WM_03.jpg",title:"Creating landscape"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/f/fd/WM_03.jpg/800px-WM_03.jpg",alt:"Creating landscape"}})])]),e._v(" "),a("h3",{attrs:{id:"exporting-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exporting-data"}},[e._v("#")]),e._v(" Exporting data")]),e._v(" "),a("p",[e._v("We're ready to export our data towards World Machine!"),a("br"),e._v('\nSelect "Sculpt" sub menu in Landscape Tool, RIGHT CLICK on Heightmap and select "Export to file". Export your .png file where you want it to be.')]),e._v(" "),a("p",[a("a",{attrs:{href:"/File:WM_04.jpg",title:"Creating landscape"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/b/b9/WM_04.jpg/800px-WM_04.jpg",alt:"Creating landscape"}})])]),e._v(" "),a("p",[e._v('Select "Paint" sub menu in Landscape Tool, RIGHT CLICK on the layer you want to export and select "Export to file". Export your .png file where you want it to be. Calling it "mask" or something like that it\'s a good idea.')]),e._v(" "),a("p",[a("a",{attrs:{href:"/File:WM_05.jpg",title:"Creating landscape"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/5/5d/WM_05.jpg/800px-WM_05.jpg",alt:"Creating landscape"}})])]),e._v(" "),a("p",[e._v("Now we've everything we need to use World Machine to bring some beauty into our landscape...")]),e._v(" "),a("h2",{attrs:{id:"world-machine-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#world-machine-setup"}},[e._v("#")]),e._v(" World Machine setup")]),e._v(" "),a("p",[e._v("You'll need to be very careful when setting up your project in World Machine: stick exactly to the measurement you've in Unreal and you'll be good to go. Project settings and Heightmap output resolutions should be adapted to your data, I'll continue with my example.")]),e._v(" "),a("h3",{attrs:{id:"bringing-in-your-heightmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bringing-in-your-heightmap"}},[e._v("#")]),e._v(" Bringing in your Heightmap")]),e._v(" "),a("p",[e._v("Start World Machine and bring immediately a File Input node in your node network. Then open it and load you heightmap.png."),a("br"),e._v('\nNow it\'s time for some hardcore measurement party: in the width-height input field of "File Input" dialog put THE EXACT EXTENSION OF YOUR UE4 LANDSCAPE'),a("br"),e._v("\nFor me it's 505mx505m...")]),e._v(" "),a("p",[a("a",{attrs:{href:"/File:WM_06.jpg",title:"Creating landscape"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/1/19/WM_06.jpg/800px-WM_06.jpg",alt:"Creating landscape"}})])]),e._v(" "),a("p",[a("a",{attrs:{href:"/File:WM_07.jpg",title:"Creating landscape"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/c/c4/WM_07.jpg/800px-WM_07.jpg",alt:"Creating landscape"}})])]),e._v(" "),a("h3",{attrs:{id:"setting-up-your-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-your-project"}},[e._v("#")]),e._v(" Setting up your project")]),e._v(" "),a("p",[e._v("Then setup your project settings to match extensions and height of your UE4 landscape."),a("br"),e._v('\nOpen "Project Settings" and modify extensions data under Render Extents and General Setup tabs.'),a("br"),e._v("\nFor me it's 505m under "),a("em",[e._v('"Location"')]),e._v(" in "),a("strong",[e._v('"Render Extents"')]),e._v(" tab and -256:+256 in "),a("em",[e._v('"Terrain Altitudes"')]),e._v(" in "),a("strong",[e._v('"General Setup"')])]),e._v(" "),a("p",[a("a",{attrs:{href:"/File:WM_08_a.jpg",title:"Creating landscape"}},[a("img",{attrs:{src:"https://d3ar1piqh1oeli.cloudfront.net/d/de/WM_08_a.jpg/800px-WM_08_a.jpg",alt:"Creating landscape"}})])]),e._v(" "),a("p",[e._v("If you think that from now on, exporting data via the output node will give you a perfect matching terrain in UE4, well, you're right."),a("br"),e._v("\nYou can give it a shot by exporting this unchanged heightmap and creating a new landscape in Unreal4. It will match perfectly to what you've done!"),a("br"),e._v('\nTo try it, just RIGHT CLICK on the Height Output and select "Write output to file".')]),e._v(" "),a("h2",{attrs:{id:"world-machine-editing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#world-machine-editing"}},[e._v("#")]),e._v(" World Machine editing")]),e._v(" "),a("p",[e._v("TODO")]),e._v(" "),a("h3",{attrs:{id:"adding-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-nodes"}},[e._v("#")]),e._v(" Adding Nodes")]),e._v(" "),a("p",[e._v("TODO")]),e._v(" "),a("h3",{attrs:{id:"masking-your-landscape"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#masking-your-landscape"}},[e._v("#")]),e._v(" Masking your landscape")]),e._v(" "),a("p",[e._v("TODO")]),e._v(" "),a("p",[e._v('Retrieved from "'),a("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Landscape_-_World_Machine_perfect_integration&oldid=15829",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Landscape_-_World_Machine_perfect_integration&oldid=15829"),a("OutboundLink")],1),e._v('"')]),e._v(" "),a("p",[a("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Categories")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[e._v("Tutorials")])]),e._v(" "),a("li",[a("a",{attrs:{href:"/Category:Landscape",title:"Category:Landscape"}},[e._v("Landscape")])]),e._v(" "),a("li",[a("a",{attrs:{href:"/Category:Community_Created_Content",title:"Category:Community Created Content"}},[e._v("Community Created Content")])])]),e._v(" "),a("p",[e._v("Hidden category:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"/Category:Templates",title:"Category:Templates"}},[e._v("Templates")])])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);