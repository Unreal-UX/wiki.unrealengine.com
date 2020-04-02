(window.webpackJsonp=window.webpackJsonp||[]).push([[1184],{331:function(e,t,r){"use strict";r.r(t);var n=r(28),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("Using QtCreator With UnrealEngine4 - Epic Wiki")]),e._v(" "),r("h1",{attrs:{id:"using-qtcreator-with-unrealengine4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#using-qtcreator-with-unrealengine4"}},[e._v("#")]),e._v(" Using QtCreator With UnrealEngine4")]),e._v(" "),r("p",[r("strong",[e._v("Rate this Article:")])]),e._v(" "),r("p",[e._v("4.80")]),e._v(" "),r("p",[r("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),r("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),r("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),r("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),r("img",{attrs:{src:"/extensions/VoteNY/images/star_half.gif",alt:""}}),e._v(" (5 votes)")]),e._v(" "),r("p",[e._v("Approved for Versions:(please verify)")]),e._v(" "),r("h2",{attrs:{id:"contents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Overview"}},[e._v("1 Overview")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Prerequisites"}},[e._v("2 Prerequisites")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Setting_up_your_project"}},[e._v("3 Setting up your project")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Generating_defines.pri_and_includes.pri"}},[e._v("3.1 Generating defines.pri and includes.pri")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#defines.pri"}},[e._v("3.1.1 defines.pri")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#includes.pri"}},[e._v("3.1.2 includes.pri")])])])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Setting_up_the_debugger_for_Qt_Creator"}},[e._v("4 Setting up the debugger for Qt Creator")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Setting_up_the_Qt_Creator_code_style"}},[e._v("5 Setting up the Qt Creator code style")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Configuring_the_project"}},[e._v("6 Configuring the project")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Build"}},[e._v("6.1 Build")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Clean"}},[e._v("6.2 Clean")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Run"}},[e._v("6.3 Run")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Configurations"}},[e._v("6.4 Configurations")])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Building.2C_running_and_debugging_our_project"}},[e._v("7 Building, running and debugging our project")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Known_issues"}},[e._v("8 Known issues")])])]),e._v(" "),r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("p",[e._v("This tutorial will describe how to setup your project for use with Qt Creator. Why would you want this?")]),e._v(" "),r("ul",[r("li",[e._v("Visual Studio is really limited for non-free versions.")]),e._v(" "),r("li",[e._v("Qt Creator is fast and lightweight.")]),e._v(" "),r("li",[e._v("Qt Creator's intellisense works better out of the box.")]),e._v(" "),r("li",[e._v("Qt Creator has a lot of refactoring options out of the box.")])]),e._v(" "),r("p",[e._v("At the end of this tutorial you will be able to do the following:")]),e._v(" "),r("ul",[r("li",[e._v("Build your project from Qt Creator")]),e._v(" "),r("li",[e._v("Run your project from Qt Creator")]),e._v(" "),r("li",[e._v("Debug your project from Qt Creator")])]),e._v(" "),r("p",[r("strong",[e._v("Edit from another author:")]),e._v(" I made a tool to automate some of the steps described below, for more information (including a modified version of this great tutorial, which makes use of the tool) see "),r("a",{attrs:{href:"https://forums.unrealengine.com/showthread.php?59458-TOOL-Tut-WIN-Unreal-Qt-Creator-Project-Generator-%28v0-1-Beta%29",target:"_blank",rel:"noopener noreferrer"}},[e._v("Link"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("You will need the following software installed:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://qt-project.org/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("Qt Creator for Visual Studio 2013 64 bit"),r("OutboundLink")],1),e._v(", I took the OpenGL version since it was a bit smaller. It's important that you pick the 64 bit version for VS 2013.")]),e._v(" "),r("li",[e._v("Visual Studio 2013 (Express edition is OK)")]),e._v(" "),r("li",[r("a",{attrs:{href:"http://msdn.microsoft.com/en-US/windows/desktop/bg162891",target:"_blank",rel:"noopener noreferrer"}},[e._v("Debugging tools for windows"),r("OutboundLink")],1),e._v(', required for debugging your project. Before installing untick everything but "Debugging tools for Windows", the rest is unneeded.')]),e._v(" "),r("li",[e._v("A text editor that understands regular expressions (regex) such as Notepad++.")])]),e._v(" "),r("h2",{attrs:{id:"setting-up-your-project"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-your-project"}},[e._v("#")]),e._v(" Setting up your project")]),e._v(" "),r("p",[e._v('So for the sake of this tutorial, I\'m going to go ahead and create a new project called "MyQtProject", which will be based on the C++ First Person template. Once the project is done generating, navigate to where you saved your project, which would be in my case "Documents\\Unreal Projects\\MyQtProject".')]),e._v(" "),r("p",[e._v('Now go to "Intermediate\\ProjectFiles" and create 3 new files called "MyQtProject.pro", "defines.pri" and "includes.pri". Make sure it has no extra extension such as ".txt". Now open "MyQtProject.pro" in your favorite text editor (NOT Qt Creator), which is in my case Notepad++. Go ahead and copy paste this into your project file:')]),e._v(" "),r("p",[e._v("TEMPLATE = app\nCONFIG += console\nCONFIG -= app_bundle\nCONFIG -= qt\nCONFIG += c++11\n \n# All the defines of your project will go in this file\n# You can put this file on your repository, but you will need to remake it once you upgrade the engine.\ninclude(defines.pri)\n \n# Qt Creator will automatically add headers and source files if you add them via Qt Creator.\nHEADERS += ../../Source/MyQtProject/Public/MyQtProject.h \\\n../../Source/MyQtProject/Public/MyQtProjectCharacter.h \\\n../../Source/MyQtProject/Public/MyQtProjectGameMode.h \\\n../../Source/MyQtProject/Public/MyQtProjectHUD.h \\\n../../Source/MyQtProject/Public/MyQtProjectProjectile.h\n \nSOURCES += ../../Source/MyQtProject/Private/MyQtProject.cpp \\\n../../Source/MyQtProject/Private/MyQtProjectCharacter.cpp \\\n../../Source/MyQtProject/Private/MyQtProjectGameMode.cpp \\\n../../Source/MyQtProject/Private/MyQtProjectHUD.cpp \\\n../../Source/MyQtProject/Private/MyQtProjectProjectile.cpp\n \n# All your generated includes will go in this file\n# You can not put this on the repository as this contains hardcoded paths\n# and is dependend on your windows install and engine version\ninclude(includes.pri)")]),e._v(" "),r("h3",{attrs:{id:"generating-defines-pri-and-includes-pri"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#generating-defines-pri-and-includes-pri"}},[e._v("#")]),e._v(" Generating defines.pri and includes.pri")]),e._v(" "),r("p",[e._v("Now here is where the editor with regular expressions comes handy (and will save you a lot of annoying work).")]),e._v(" "),r("p",[e._v('Assuming you have the Visual Studio project files in place, if not you can generate by right clicking your ".uproject", open "MyQtProject.vcxproj" with your text editor (NOT Visual studio).')]),e._v(" "),r("h4",{attrs:{id:"defines-pri"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#defines-pri"}},[e._v("#")]),e._v(" defines.pri")]),e._v(" "),r("p",[e._v('Scroll all the way down and find "'),r("NMakePreprocessorDefinitions",[e._v('", now copy the contents from that line into "defines.pri" and you will end up with something similar to this:')])],1),e._v(" "),r("p",[e._v("$(NMakePreprocessorDefinitions);UE_GAME=1;IS_PROGRAM=0;UE_ROCKET=1;UNICODE;_UNICODE;__UNREAL__;IS_MONOLITHIC=1;WITH_ENGINE=1;WITH_UNREAL_DEVELOPER_TOOLS=0;WITH_COREUOBJECT=1;USE_STATS_WITHOUT_ENGINE=0;")]),e._v(" "),r("p",[e._v("I left a big part of the line out, but as you can see, we have a ridiculously long line, now we're going to convert it into a format Qt Creator can use.")]),e._v(" "),r("p",[e._v('Open up the replace window of your text editor and in the "Find" field put in ";" (without quotes), in the "Replace" field put "\\r\\n" (also without quotes), click "Replace all" (or the equivalent of it) and now every define should be on a new line.')]),e._v(" "),r("p",[e._v('We\'re not done yet, now put in the "Find" field "^" (again without quotes) and in the "Replace" field "DEFINES += "" (without the outer quotes, be sure to include the second last quote). And click "Replace all". Now we\'re almost done, just one last step. In the "Find" field, input "$" and in the "Replace" field input a quote. Click "Replace all" and your lines should like this:')]),e._v(" "),r("p",[e._v('DEFINES += "DEFINE_GOES_HERE"')]),e._v(" "),r("p",[e._v("Now save the file and we're done here.")]),e._v(" "),r("h4",{attrs:{id:"includes-pri"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#includes-pri"}},[e._v("#")]),e._v(" includes.pri")]),e._v(" "),r("p",[e._v('Back in "MyQtProject.vcxproj" scroll all the way down to "'),r("NMakeIncludeSearchPath",[e._v('", again copy the contents from that line into "includes.pri".')])],1),e._v(" "),r("p",[e._v('Again replace semicolons by newlines just as we did for "defines.pri".')]),e._v(" "),r("p",[e._v('Now instead of prepending "DEFINES += "", we prepend "INCLUDEPATH += "".')]),e._v(" "),r("p",[e._v('Now append the quote like we did for "defines.pri".')]),e._v(" "),r("p",[e._v("Your lines should look like this (you obviously have a lot more lines):")]),e._v(" "),r("p",[e._v('INCLUDEPATH += "$(NMakeIncludeSearchPath)"\nINCLUDEPATH += "C:\\Program Files\\Unreal\\Unreal Engine\\4.4\\Engine\\Source"\nINCLUDEPATH += "..\\..\\Source"\nINCLUDEPATH += "..\\Build\\Win64\\MyQtProject\\Inc\\MyQtProject"\nINCLUDEPATH += "..\\..\\Source\\MyQtProject\\Public"')]),e._v(" "),r("p",[e._v("Now save the file and we're done here.")]),e._v(" "),r("h2",{attrs:{id:"setting-up-the-debugger-for-qt-creator"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-debugger-for-qt-creator"}},[e._v("#")]),e._v(" Setting up the debugger for Qt Creator")]),e._v(" "),r("p",[e._v("Now we have successfully configured our project, we need to setup the debugger.")]),e._v(" "),r("p",[e._v('Open up Qt Creator and go to Tools->Options->Build & Run->Debuggers and click on "Add".')]),e._v(" "),r("p",[e._v("Even though there should already be a CDB listed, it's the 32 bit version, we need the 64 bit version for it to work with our project.")]),e._v(" "),r("p",[e._v('Unless you changed the default installation path, CDB should be in "C:\\Program Files (x86)\\Windows Kits\\8.1\\Debuggers\\x64\\".')]),e._v(" "),r("p",[e._v('Select "cdb.exe" and click "Open", give it a name and click "Apply".')]),e._v(" "),r("p",[e._v('Now, still in the options window, go to Debugger->CDB and check "Ignore first chance access violations".')]),e._v(" "),r("p",[e._v('Now to go the tab "CDB Paths" and put the following in "Symbol Paths":')]),e._v(" "),r("p",[e._v("symsrv*symsrv.dll*C:\\Users\\MyUsernameHere\\AppData\\Local\\Temp\\symbolcache\ncache*C:\\Users\\MyUsernameHere\\Local\\Temp\\symbolcache")]),e._v(" "),r("p",[e._v('Replace "MyUsernameHere" with your username (go to "C:\\Users\\" to make sure it\'s correct).')]),e._v(" "),r("p",[e._v('Now go to Build & Run->Kits and click "Add".')]),e._v(" "),r("p",[e._v('I named it "UE4", but you can name it whatever you want. Leave "File system name:" empty. As "Device type:" select "Desktop", as "Device" select "Local PC (default for desktop)".')]),e._v(" "),r("p",[e._v('Leave "Sysroot:" empty. As "Compiler:" select "Microsoft Visual C++ Compiler 12.0 (amd64)". As "Debugger:" select the debugger we added before, I called it "CDB 64 bit".')]),e._v(" "),r("p",[e._v('As "Qt version:" select "Qt 5.3 MSVC2013 OpenGL 64bit", your version might be different and you might not have the OpenGL version, but that doesn\'t matter as long as it\'s for "MSVC2013 64bit".')]),e._v(" "),r("p",[e._v('Now click "Apply" to save our changes.')]),e._v(" "),r("p",[e._v("NOTE: When starting to debug your project, it will ask if you want to use the Microsoft symbol servers, DO NOT USE THEM!!! It will slow down debugging to snail speed, having it turned on made just starting up the editor take about 5 minutes.")]),e._v(" "),r("h2",{attrs:{id:"setting-up-the-qt-creator-code-style"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-qt-creator-code-style"}},[e._v("#")]),e._v(" Setting up the Qt Creator code style")]),e._v(" "),r("p",[e._v("Again in the options, go to C++->Code Style and copy one of the build in code styles and give it a name, this will allow you to export it later.")]),e._v(" "),r("p",[e._v('Click on "Edit..." and change the following:')]),e._v(" "),r("p",[e._v('Change "Tab Policy" to "Tabs Only", "Tab Size" to 4, "Indent Size" to 4 and "Align Continuation Lines" to "With Regular Indent".')]),e._v(" "),r("p",[e._v("The rest is all personal preference on how your code is formatted, so be sure to go there if you don't like how something is formatted. But you have to use tabs as per policy of Epic, probably because some tools only work well with tabs is my guess.")]),e._v(" "),r("h2",{attrs:{id:"configuring-the-project"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-project"}},[e._v("#")]),e._v(" Configuring the project")]),e._v(" "),r("p",[e._v("Ok, now that we are almost done, we need to configure a few other small things for building, running and debugging to work.")]),e._v(" "),r("p",[e._v('Open the project file by clicking "Open Project" on the welcome page. The first time you open it you need to select a kit you want to use to compile, be sure to pick the kid we added before, in my case "UE4".')]),e._v(" "),r("p",[e._v("Now that our project is loaded, it wont compile and run just yet. We need to configure Qt Creator to use UBT first.")]),e._v(" "),r("p",[e._v('In the strip on the left size click on the folder icon with the text "Projects", here we can change the build settings.')]),e._v(" "),r("p",[e._v('At "Edit build configuration:" click "Rename" and rename the "Debug" configuration to "Debug Editor".')]),e._v(" "),r("h3",{attrs:{id:"build"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[e._v("#")]),e._v(" Build")]),e._v(" "),r("p",[e._v('Now at "Build Steps" and "Clean Steps" remove all the entries. Now at "Build Steps", click "Add Build Step" and select "Custom Process Step".')]),e._v(" "),r("p",[e._v('Now you can fill in a command, point this to the "Build.bat" of the engine version you\'re using, in my case it is "C:\\Program Files\\Unreal\\Unreal Engine\\4.4\\Engine\\Build\\BatchFiles\\Build.bat" (without quotes).')]),e._v(" "),r("p",[e._v('As "Arguments:" fill in "MyQtProjectEditor Win64 DebugGame "C:\\Users\\MyUsernameHere\\Documents\\Unreal Projects\\MyQtProject\\MyQtProject.uproject" -rocket" (without quotes). Where "C:\\Users\\MyUsernameHere\\Documents\\Unreal Projects\\MyQtProject\\MyQtProject.uproject" is the path to your project file and "MyQtProjectEditor" needs to be changed to reflect the name of your project.')]),e._v(" "),r("p",[e._v('As "Working directory:" set it to "C:\\Users\\MyUsernameHere\\Documents\\Unreal Projects\\MyQtProject\\Intermediate\\Build" (without quotes).')]),e._v(" "),r("h3",{attrs:{id:"clean"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#clean"}},[e._v("#")]),e._v(" Clean")]),e._v(" "),r("p",[e._v('For the "Clean Steps" do the same, but point it "Clean.bat" instead, which is in the same folder as "Build.bat".')]),e._v(" "),r("h3",{attrs:{id:"run"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[e._v("#")]),e._v(" Run")]),e._v(" "),r("p",[e._v('Now under "Run" and then "Run configuration:", click "Add" and select "Custom Executable".')]),e._v(" "),r("p",[e._v('Rename it to "Debug Editor" by clicking on "Rename...".')]),e._v(" "),r("p",[e._v('For "Executable:" point it to the location of "UE4Editor.exe", which is in my case "C:\\Program Files\\Unreal\\Unreal Engine\\4.4\\Engine\\Binaries\\Win64\\UE4Editor.exe" (without quotes).')]),e._v(" "),r("p",[e._v('As "Arguments:" fill in ""C:\\Users\\MyUsernameHere\\Documents\\Unreal Projects\\MyQtProject\\MyQtProject.uproject" -debug" (without the outer quotes).')]),e._v(" "),r("p",[e._v('And as "Working directory:" set it to "C:\\Users\\MyUsernameHere\\Documents\\Unreal Projects\\MyQtProject\\Binaries\\Win64" (without quotes). And uncheck "Run in terminal".')]),e._v(" "),r("p",[e._v("The annoying part is that you have to change this every time you change the configuration, it doesn't change with the build configurations.")]),e._v(" "),r("h3",{attrs:{id:"configurations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configurations"}},[e._v("#")]),e._v(" Configurations")]),e._v(" "),r("p",[e._v("Here is a list of configurations that can be used with the build tools:")]),e._v(" "),r("p",[e._v('Debug Editor:\n{\nBuild:\n{\nCommand: C:\\Program Files\\Unreal\\Unreal Engine\\4.4\\Engine\\Build\\BatchFiles\\Build.bat\nArguments: MyQtProjectEditor Win64 DebugGame "C:\\Users\\MyUsernameHere\\Documents\\Unreal Projects\\MyQtProject\\MyQtProject.uproject" -rocket\nWorking directory: C:\\Users\\Dragoon\\Documents\\Unreal Projects\\MyQtProject\\Intermediate\\Build\n}\nClean:\n{\nCommand: C:\\Program Files\\Unreal\\Unreal Engine\\4.4\\Engine\\Build\\BatchFiles\\Clean.bat\nArguments: MyQtProjectEditor Win64 DebugGame "C:\\Users\\MyUsernameHere\\Documents\\Unreal Projects\\MyQtProject\\MyQtProject.uproject" -rocket\nWorking directory: C:\\Users\\Dragoon\\Documents\\Unreal Projects\\MyQtProject\\Intermediate\\Build\n}\nRun:\n{\nExecutable: C:\\Program Files\\Unreal\\Unreal Engine\\4.4\\Engine\\Binaries\\Win64\\UE4Editor.exe\nArguments: "C:\\Users\\Dragoon\\Documents\\Unreal Projects\\MyQtProject\\MyQtProject.uproject" -debug\nWorking directory: C:\\Users\\Dragoon\\Documents\\Unreal Projects\\PitStop\\Binaries\\Win64\n}\n}\nDebug Standalone:\n{\nBuild:\n{\nCommand: C:\\Program Files\\Unreal\\Unreal Engine\\4.4\\Engine\\Build\\BatchFiles\\Build.bat\nArguments: MyQtProject Win64 DebugGame "C:\\Users\\MyUsernameHere\\Documents\\Unreal Projects\\MyQtProject\\MyQtProject.uproject" -rocket\nWorking directory: C:\\Users\\Dragoon\\Documents\\Unreal Projects\\MyQtProject\\Intermediate\\Build\n}\nClean:\n{\nCommand: C:\\Program Files\\Unreal\\Unreal Engine\\4.4\\Engine\\Build\\BatchFiles\\Clean.bat\nArguments: MyQtProject Win64 DebugGame "C:\\Users\\MyUsernameHere\\Documents\\Unreal Projects\\MyQtProject\\MyQtProject.uproject" -rocket\nWorking directory: C:\\Users\\Dragoon\\Documents\\Unreal Projects\\MyQtProject\\Intermediate\\Build\n}\nRun:\n{\nExecutable: ..\\..\\Binaries\\Win64\\MyQtProject-Win64-DebugGame.exe\nArguments:\nWorking directory: C:\\Users\\Dragoon\\Documents\\Unreal Projects\\PitStop\\Binaries\\Win64\n}\n}\nDevelopment Editor:\n{\nBuild:\n{\nCommand: C:\\Program Files\\Unreal\\Unreal Engine\\4.4\\Engine\\Build\\BatchFiles\\Build.bat\nArguments: MyQtProjectEditor Win64 Development "C:\\Users\\MyUsernameHere\\Documents\\Unreal Projects\\MyQtProject\\MyQtProject.uproject" -rocket\nWorking directory: C:\\Users\\Dragoon\\Documents\\Unreal Projects\\MyQtProject\\Intermediate\\Build\n}\nClean:\n{\nCommand: C:\\Program Files\\Unreal\\Unreal Engine\\4.4\\Engine\\Build\\BatchFiles\\Clean.bat\nArguments: MyQtProjectEditor Win64 Development "C:\\Users\\MyUsernameHere\\Documents\\Unreal Projects\\MyQtProject\\MyQtProject.uproject" -rocket\nWorking directory: C:\\Users\\Dragoon\\Documents\\Unreal Projects\\MyQtProject\\Intermediate\\Build\n}\nRun:\n{\nExecutable: C:\\Program Files\\Unreal\\Unreal Engine\\4.4\\Engine\\Binaries\\Win64\\UE4Editor.exe\nArguments: "C:\\Users\\Dragoon\\Documents\\Unreal Projects\\MyQtProject\\MyQtProject.uproject"\nWorking directory: C:\\Users\\Dragoon\\Documents\\Unreal Projects\\PitStop\\Binaries\\Win64\n}\n}\nDevelopment Standalone:\n{\nBuild:\n{\nCommand: C:\\Program Files\\Unreal\\Unreal Engine\\4.4\\Engine\\Build\\BatchFiles\\Build.bat\nArguments: MyQtProject Win64 Development "C:\\Users\\MyUsernameHere\\Documents\\Unreal Projects\\MyQtProject\\MyQtProject.uproject" -rocket\nWorking directory: C:\\Users\\Dragoon\\Documents\\Unreal Projects\\MyQtProject\\Intermediate\\Build\n}\nClean:\n{\nCommand: C:\\Program Files\\Unreal\\Unreal Engine\\4.4\\Engine\\Build\\BatchFiles\\Clean.bat\nArguments: MyQtProject Win64 Development "C:\\Users\\MyUsernameHere\\Documents\\Unreal Projects\\MyQtProject\\MyQtProject.uproject" -rocket\nWorking directory: C:\\Users\\Dragoon\\Documents\\Unreal Projects\\MyQtProject\\Intermediate\\Build\n}\nRun:\n{\nExecutable: ..\\..\\Binaries\\Win64\\MyQtProject.exe\nArguments:\nWorking directory: C:\\Users\\Dragoon\\Documents\\Unreal Projects\\PitStop\\Binaries\\Win64\n}\n}\nShipping:\n{\nBuild:\n{\nCommand: C:\\Program Files\\Unreal\\Unreal Engine\\4.4\\Engine\\Build\\BatchFiles\\Build.bat\nArguments: MyQtProject Win32 Shipping "C:\\Users\\MyUsernameHere\\Documents\\Unreal Projects\\MyQtProject\\MyQtProject.uproject" -rocket\nWorking directory: C:\\Users\\Dragoon\\Documents\\Unreal Projects\\MyQtProject\\Intermediate\\Build\n}\nClean:\n{\nCommand: C:\\Program Files\\Unreal\\Unreal Engine\\4.4\\Engine\\Build\\BatchFiles\\Clean.bat\nArguments: MyQtProject Win32 Shipping "C:\\Users\\MyUsernameHere\\Documents\\Unreal Projects\\MyQtProject\\MyQtProject.uproject" -rocket\nWorking directory: C:\\Users\\Dragoon\\Documents\\Unreal Projects\\MyQtProject\\Intermediate\\Build\n}\nRun:\n{\nExecutable: ..\\..\\Binaries\\Win64\\MyQtProject-Win32-Shipping.exe\nArguments:\nWorking directory: C:\\Users\\Dragoon\\Documents\\Unreal Projects\\PitStop\\Binaries\\Win32\n}\n}')]),e._v(" "),r("h2",{attrs:{id:"building-running-and-debugging-our-project"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#building-running-and-debugging-our-project"}},[e._v("#")]),e._v(" Building, running and debugging our project")]),e._v(" "),r("p",[e._v("We're now almost done, but here a few final guide lines.")]),e._v(" "),r("p",[e._v("To build the project you can either build from the menu or press Ctrl+B.")]),e._v(" "),r("p",[e._v("To run the project you can either run it from the menu or press Ctrl+R.")]),e._v(" "),r("p",[e._v("To debug you can either start debugging from the menu or press F5.")]),e._v(" "),r("p",[e._v("Once you start debugging for the first time, Qt Creator will ask you if you want to use the Microsoft Symbol servers, DO NOT USE IT! It will make the debugging process painfully slow, with it turned on it will take about 5 minutes before the editor is opened and you can start debugging.")]),e._v(" "),r("h2",{attrs:{id:"known-issues"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#known-issues"}},[e._v("#")]),e._v(" Known issues")]),e._v(" "),r("p",[e._v("Once you start building, you will get this warning:")]),e._v(" "),r("p",[e._v("WARNING: UnrealBuildTool found an Intermediate folder while looking for rules 'C:\\Program Files\\Unreal\\Unreal Engine\\4.4\\Engine\\Source\\Intermediate'.\nIt should only ever be searching under 'Source' folders -- an Intermediate folder is unexpected and will greatly decrease iteration times!")]),e._v(" "),r("p",[e._v("I don't know a fix for it, if you find it, please update the information accordingly.")]),e._v(" "),r("p",[e._v('Retrieved from "'),r("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Using_QtCreator_With_UnrealEngine4&oldid=15278",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Using_QtCreator_With_UnrealEngine4&oldid=15278"),r("OutboundLink")],1),e._v('"')]),e._v(" "),r("p",[r("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Categories")]),e._v(":")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/Category:Templates",title:"Category:Templates"}},[e._v("Templates")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[e._v("Tutorials")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[e._v("Code")])]),e._v(" "),r("li",[r("a",{attrs:{href:"/Category:Community_Created_Content",title:"Category:Community Created Content"}},[e._v("Community Created Content")])])]),e._v(" "),r("p",[r("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=o.exports}}]);