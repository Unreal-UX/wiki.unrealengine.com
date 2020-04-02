(window.webpackJsonp=window.webpackJsonp||[]).push([[398],{822:function(t,e,i){"use strict";i.r(e);var a=i(28),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("p",[t._v("Creating Vector Fields (Tutorial) - Epic Wiki")]),t._v(" "),i("h1",{attrs:{id:"creating-vector-fields-tutorial"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#creating-vector-fields-tutorial"}},[t._v("#")]),t._v(" Creating Vector Fields (Tutorial)")]),t._v(" "),i("h2",{attrs:{id:"contents"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#Overview"}},[t._v("1 Overview")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#Authoring_Vector_fields"}},[t._v("2 Authoring Vector fields")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#Installing_the_.27UE4_FX.27_Maya_shelf_and_FGA_Export_Script"}},[t._v("3 Installing the 'UE4_FX' Maya shelf and FGA Export Script")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#Setting_up_the_Maya_Fluid_Container"}},[t._v("4 Setting up the Maya Fluid Container")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#Emitting_Attributes_into_the_Container_and_Simulating"}},[t._v("5 Emitting Attributes into the Container and Simulating")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#Exporting_Velocity_Values_From_Maya_Fluid_Containers"}},[t._v("6 Exporting Velocity Values From Maya Fluid Containers")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#Importing_an_.FGA_File_into_UE4"}},[t._v("7 Importing an .FGA File into UE4")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#Setting_up_a_particle_system_with_a_Local_Vector_Field"}},[t._v("8 Setting up a particle system with a Local Vector Field")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#Local_Vector_Field_Module_Parameters"}},[t._v("9 Local Vector Field Module Parameters")])])]),t._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),i("p",[t._v("In UE4, a vector grid is a 3 dimensional grid sub-divided into individual volume pixels, or 'voxels,' with each voxel storing a velocity vector (in x, y and z). This grid is useful because Cascade can treat it as a field which can influence the motion of particles inside of it. It may help to think of a vector field as a volume in space which contains 'wind' that can affect particles which move through it.")]),t._v(" "),i("p",[t._v("Two types of vector fields exist: Local Vector fields, which live inside a particle system, and global vector fields which live in the world and may affect any particle systems located within its bounding box, if those particle system have the Global Vector Field module's Field Scale parameter set higher than 1.")]),t._v(" "),i("p",[t._v("The focus of this document is authoring a local vector field.")]),t._v(" "),i("h2",{attrs:{id:"authoring-vector-fields"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#authoring-vector-fields"}},[t._v("#")]),t._v(" Authoring Vector fields")]),t._v(" "),i("p",[t._v("You may author vector fields any way you like but we have found Maya fluids to be a straightforward way to generate the 3 dimensional velocity data needed. To ease this process, we have written a MEL script which only exports velocity data from Maya's fluid containers and stores them as an .FGA file (Fluid Grid ASCII). This file is a text table which you can easily edit by hand if need be.")]),t._v(" "),i("h2",{attrs:{id:"installing-the-ue4-fx-maya-shelf-and-fga-export-script"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-ue4-fx-maya-shelf-and-fga-export-script"}},[t._v("#")]),t._v(" Installing the 'UE4_FX' Maya shelf and FGA Export Script")]),t._v(" "),i("blockquote",[i("p",[i("strong",[t._v("Note:")]),t._v(" The Fluid Grid export script contained within this Maya shelf has been tested with Maya 2012 x64.")])]),t._v(" "),i("p",[t._v("1. In the shelf pane, click the left hand drop down arrow and select "),i("strong",[t._v("Load Shelf..")]),t._v(":")]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:LoadShelf_VF.jpg"}},[i("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/0/01/LoadShelf_VF.jpg",alt:"LoadShelf VF.jpg"}})])]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:LoadShelf_VF.jpg",title:"Enlarge"}},[i("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),i("p",[t._v("2. Inside the file browser, navigate to: "),i("code",[t._v("[UE4Root]\\Engine\\Extras\\MayaVelocityGridExporter\\")])]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:LoadShelfWindow_VF.jpg"}},[i("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/8/8c/LoadShelfWindow_VF.jpg",alt:"LoadShelfWindow VF.jpg"}})])]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:LoadShelfWindow_VF.jpg",title:"Enlarge"}},[i("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),i("p",[t._v("3. Once you click open, you will find a new shelf tab entitled "),i("strong",[t._v("UE4_FX")]),t._v(" which contains a single button. Clicking on this icon will bring up a dialog box along with various FGA export options.")]),t._v(" "),i("p",[t._v("By default the shelf contains a single button using a placeholder icon. A custom icon is located at "),i("code",[t._v("../UE4/Engine/Extras/FX_tools/Maya2012_x64/UE4_FX_Tools/Prefs/Icons/fgaClean.png")]),t._v(" if you wish to use it. To install the custom icon, simply copy it to your Maya user preferences directory (e.g., `C:/Users/[User]/Documents/maya/2012-x64/prefs/icon`).")]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:InstalledFGAShelf_VF.jpg"}},[i("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/8/80/InstalledFGAShelf_VF.jpg",alt:"InstalledFGAShelf VF.jpg"}})])]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:InstalledFGAShelf_VF.jpg",title:"Enlarge"}},[i("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),i("p",[t._v("4. The tools to export Maya fluid containers to UE4's fluid grid format are now installed and ready to use.")]),t._v(" "),i("h2",{attrs:{id:"setting-up-the-maya-fluid-container"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-maya-fluid-container"}},[t._v("#")]),t._v(" Setting up the Maya Fluid Container")]),t._v(" "),i("p",[t._v("Creating vector fields in Maya requires the use of a Fluid container.")]),t._v(" "),i("p",[t._v("1. Switch to the dynamics major mode and then from the FluidEffects menu, select 'Create 3D Container.' This will drop a Maya fluid container in your perspective viewport. The first thing to do is to select it and then in the Attribute editor, select the 'Keep Voxels Square' checkbox.")]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:ContainerProperties_VF.png"}},[i("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/1/1a/ContainerProperties_VF.png",alt:"ContainerProperties VF.png"}})])]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:ContainerProperties_VF.png",title:"Enlarge"}},[i("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),i("blockquote",[i("p",[i("strong",[t._v("Note:")]),t._v(" Because UE4's velocity grid cascade module operates on the GPU, Maya fluid containers need to have power-of-2 Resolution values (voxel count), with the maximum voxel count in any one axis being 128.")])]),t._v(" "),i("p",[t._v("2. Adjust the scale of the fluid container by going in its properties and changing the size setting:")]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:SizeProperty_VF.jpg"}},[i("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/f/f3/SizeProperty_VF.jpg",alt:"SizeProperty VF.jpg"}})])]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:SizeProperty_VF.jpg",title:"Enlarge"}},[i("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),i("p",[t._v("The base resolution now indicates the longest side's resolution, with the other sides resolution being scale proportionally to their relative sizes. Here is an example of a rectangular 16x32x16 grid which adheres to the power of two requirements.")]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:Grid_VF.png"}},[i("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/9/92/Grid_VF.png",alt:"Grid VF.png"}})])]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:Grid_VF.png",title:"Enlarge"}},[i("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),i("p",[t._v("3. Set all the boundary conditions of the grid to **_None_**; allowing fluid simulation to 'exit' the fluid container.")]),t._v(" "),i("p",[t._v("4. Finally we need to enable the display of velocity vectors so we can see the data we want to export to UE4. In the **Display** section of the fluid container, check the **Velocity Draw** checkbox.")]),t._v(" "),i("h2",{attrs:{id:"emitting-attributes-into-the-container-and-simulating"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#emitting-attributes-into-the-container-and-simulating"}},[t._v("#")]),t._v(" Emitting Attributes into the Container and Simulating")]),t._v(" "),i("p",[t._v("An emitter must be added to the fluid container in order to emit a variety of attributes which can disturb the grid values.")]),t._v(" "),i("p",[t._v("1. Select the fluid container and from the Fluid Effects menu, select "),i("strong",[t._v("add/edit contents > Emitter")]),t._v(".")]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:AddEmitter_VF.png"}},[i("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/b/be/AddEmitter_VF.png",alt:"AddEmitter VF.png"}})])]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:AddEmitter_VF.png",title:"Enlarge"}},[i("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),i("p",[t._v("2. In the "),i("strong",[t._v("Emiter Fluid Attributes")]),t._v(", set "),i("strong",[t._v("Heat/Voxel/Sec")]),t._v(" to `250`. This means the emitter will be emitting heat into the container. Heat will cause the density to rise.")]),t._v(" "),i("p",[t._v("3. Now select the emitter and scale it wider and move it down towards the base of the container.")]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:ScaleEmitter_VF.png"}},[i("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/e/e0/ScaleEmitter_VF.png",alt:"ScaleEmitter VF.png"}})])]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:ScaleEmitter_VF.png",title:"Enlarge"}},[i("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),i("p",[t._v("4. In order for the container grid to react to dynamic heat contributions, the Maya fluid container "),i("strong",[t._v("Temperature")]),t._v(" method must be set to "),i("strong",[t._v("Dynamic Grid")]),t._v(". This setting is located on the container grid shape.")]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:TemperatureProperty_VF.png"}},[i("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/8/8d/TemperatureProperty_VF.png",alt:"TemperatureProperty VF.png"}})])]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:TemperatureProperty_VF.png",title:"Enlarge"}},[i("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),i("p",[t._v("5. Now play back the timeline to view the simulation. You should get something similar to this. I have also added some noise to the container attributes. You can do this by changing the velocity swirl, noise and turbulence strength and frequency parameters in the 'Contents Details' section of the fluid container.")]),t._v(" "),i("p",[t._v("6. The result should look similar to this:")]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:Result_VF.png"}},[i("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/0/09/Result_VF.png",alt:"Result VF.png"}})])]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:Result_VF.png",title:"Enlarge"}},[i("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),i("h2",{attrs:{id:"exporting-velocity-values-from-maya-fluid-containers"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#exporting-velocity-values-from-maya-fluid-containers"}},[t._v("#")]),t._v(" Exporting Velocity Values From Maya Fluid Containers")]),t._v(" "),i("p",[t._v("In this example, a single frame of the simulation is exported to use as a static velocity field in UE4.")]),t._v(" "),i("p",[t._v("1. Select your fluid container and click on the FGA icon in the **UE4_FX** shelf. The **UE4 Velocity Grid Exporter** dialog box will appear.")]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:ExportDialog_VF.png"}},[i("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/1/10/ExportDialog_VF.png",alt:"ExportDialog VF.png"}})])]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:ExportDialog_VF.png",title:"Enlarge"}},[i("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),i("p",[t._v("2. Set the start frame that you like, along with the destination folder.")]),t._v(" "),i("p",[t._v("3. Hit export and you will see a file on disk. This is the file you will import into UE4.")]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:FgaFile_VF.png"}},[i("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/6/64/FgaFile_VF.png",alt:"FgaFile VF.png"}})])]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:FgaFile_VF.png",title:"Enlarge"}},[i("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),i("h2",{attrs:{id:"importing-an-fga-file-into-ue4"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#importing-an-fga-file-into-ue4"}},[t._v("#")]),t._v(" Importing an .FGA File into UE4")]),t._v(" "),i("p",[t._v("1. Launch UE4, open the Content Browser. Either click the New button and choose _Import_, or right-click and select _import_ from the contextual menu.")]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:ImportOption_VF.png"}},[i("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/2/23/ImportOption_VF.png",alt:"ImportOption VF.png"}})])]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:ImportOption_VF.png",title:"Enlarge"}},[i("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),i("p",[t._v("2. In the file browser navigate to the FGA that was saved out earlier.")]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:ImportDialog_VF.png"}},[i("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/d/d5/ImportDialog_VF.png",alt:"ImportDialog VF.png"}})])]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:ImportDialog_VF.png",title:"Enlarge"}},[i("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),i("blockquote",[i("p",[i("strong",[t._v("Note:")]),t._v(" If you have a lot of files in the same directory, you can set the file browser's filter to _Fluid Grid Ascii_.")])]),t._v(" "),i("p",[t._v("3. In the Content Browser you should now see a _VectorField Static_ asset.")]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:VectorFieldAsset_VF.png"}},[i("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/4/43/VectorFieldAsset_VF.png",alt:"VectorFieldAsset VF.png"}})])]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:VectorFieldAsset_VF.png",title:"Enlarge"}},[i("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),i("h2",{attrs:{id:"setting-up-a-particle-system-with-a-local-vector-field"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-a-particle-system-with-a-local-vector-field"}},[t._v("#")]),t._v(" Setting up a particle system with a Local Vector Field")]),t._v(" "),i("p",[t._v("1. Create a new particle system in the content browser. Once it is created, the Cascade window will appear.")]),t._v(" "),i("p",[t._v("2. Right-click on the black space above the emitter's module and convert the particle system dataType to "),i("strong",[t._v("GPU Sprites")]),t._v(".")]),t._v(" "),i("p",[t._v("3. Next, add a "),i("strong",[t._v("Cylinder")]),t._v(" location module with its Height axis set to Y. Increase the Spawn module Rate property to around 50. Then delete the Initial Velocity as the particle motion will come from the local vector field. You should have something similar to this:")]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:CylinderExample_VF.png"}},[i("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/2/21/CylinderExample_VF.png",alt:"CylinderExample VF.png"}})])]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:CylinderExample_VF.png",title:"Enlarge"}},[i("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),i("p",[t._v("4. Right-click below the existing modules and add a local vector field module to the emitter.")]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:LocalVectorFieldModule_VF.png"}},[i("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/e/e2/LocalVectorFieldModule_VF.png",alt:"LocalVectorFieldModule VF.png"}})])]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:LocalVectorFieldModule_VF.png",title:"Enlarge"}},[i("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),i("p",[t._v("The local vector field module will influence the motion of your particles when they are physically inside the Local vector field module's bounding box.")]),t._v(" "),i("p",[t._v("5. Assign the vector field asset to the Vector field slot in the Local vector field cascade module. You may want to visualize the vector field velocities in the viewport by selecting the **View > Vector Fields** inside Cascade's main menu.")]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:VisualizeVectorFields_VF.png"}},[i("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/2/25/VisualizeVectorFields_VF.png",alt:"VisualizeVectorFields VF.png"}})])]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:VisualizeVectorFields_VF.png",title:"Enlarge"}},[i("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),i("p",[t._v("6. In its parameters, scale the Vector Fields's relative scale to 2 2 2 and translate the grid using the vector fields gizmo which appears in the Cascade preview window when the Local vector Field module is selected.")]),t._v(" "),i("p",[t._v("7. You should now see the particles moving in the preview window, driven by the Vector field velocities.")]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:Movement_VF.png"}},[i("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/e/ef/Movement_VF.png",alt:"Movement VF.png"}})])]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:Movement_VF.png",title:"Enlarge"}},[i("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),i("h2",{attrs:{id:"local-vector-field-module-parameters"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#local-vector-field-module-parameters"}},[t._v("#")]),t._v(" Local Vector Field Module Parameters")]),t._v(" "),i("p",[t._v("The "),i("strong",[t._v("Local Vector Field")]),t._v(" cascade module has 2 main parameters:")]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:ModuleProperties_VF.png"}},[i("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/d/d9/ModuleProperties_VF.png",alt:"ModuleProperties VF.png"}})])]),t._v(" "),i("p",[i("a",{attrs:{href:"/File:ModuleProperties_VF.png",title:"Enlarge"}},[i("img",{attrs:{src:"/skins/common/images/magnify-clip.png",alt:""}})])]),t._v(" "),i("p",[i("strong",[t._v("Intensity")]),t._v(": This is the strength of the Local vector field contribution to the particle's motion "),i("strong",[t._v("Tightness")]),t._v(": How closely the particles will follow the velocities stored in the fluid grid. When set to 0, the vector field behaves as a force which adds it velocities to the particles' current velocities. When set to 1, the vector field velocities replace the particle velocities altogether.")]),t._v(" "),i("p",[t._v('Retrieved from "'),i("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Creating_Vector_Fields_(Tutorial)&oldid=9214",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.unrealengine.com/index.php?title=Creating_Vector_Fields_(Tutorial)&oldid=9214"),i("OutboundLink")],1),t._v('"')]),t._v(" "),i("p",[i("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[t._v("Categories")]),t._v(":")]),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[t._v("Tutorials")])]),t._v(" "),i("li",[i("a",{attrs:{href:"/Category:Community_Created_Content",title:"Category:Community Created Content"}},[t._v("Community Created Content")])])]),t._v(" "),i("p",[i("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);e.default=r.exports}}]);