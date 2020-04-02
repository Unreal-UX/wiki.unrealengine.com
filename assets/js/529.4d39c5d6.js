(window.webpackJsonp=window.webpackJsonp||[]).push([[529],{937:function(e,t,s){"use strict";s.r(t);var n=s(28),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Game User Settings - Epic Wiki")]),e._v(" "),s("h1",{attrs:{id:"game-user-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#game-user-settings"}},[e._v("#")]),e._v(" Game User Settings")]),e._v(" "),s("p",[s("strong",[e._v("Rate this Guide:")])]),e._v(" "),s("p",[e._v("4.80")]),e._v(" "),s("p",[s("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),s("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),s("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),s("img",{attrs:{src:"/extensions/VoteNY/images/star_on.gif",alt:""}}),s("img",{attrs:{src:"/extensions/VoteNY/images/star_half.gif",alt:""}}),e._v(" (5 votes)")]),e._v(" "),s("p",[e._v("Approved for Versions:4.6")]),e._v(" "),s("p",[e._v("In this guide we will look at the options for changing game settings, such as whether or not to use fullscreen, the window or fullscreen resolution used, the position of the window, and scalability/graphics settings.")]),e._v(" "),s("p",[e._v("This is a guide written by "),s("a",{attrs:{href:"/User:Furyhunter",title:"User:Furyhunter"}},[e._v("Furyhunter")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"the-ugameusersettings-class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-ugameusersettings-class"}},[e._v("#")]),e._v(" The UGameUserSettings class")]),e._v(" "),s("p",[e._v("API documentation: "),s("code",[e._v("[UGameUserSettings](https://docs.unrealengine.com/latest/INT/API/Runtime/Engine/GameFramework/UGameUserSettings/index.html)")])]),e._v(" "),s("p",[e._v("This class is not exposed to Blueprint so you'll have to work with it via a game code module. A pointer to the global "),s("code",[e._v("UGameUserSettings")]),e._v(" can be found in the global "),s("code",[e._v("GEngine")]),e._v(".")]),e._v(" "),s("p",[e._v("UGameUserSettings* GetGameUserSettings()\n{\nif (GEngine != nullptr)\n{\nreturn GEngine->GameUserSettings;\n}\nreturn nullptr;\n}")]),e._v(" "),s("p",[e._v("Several of the values used internally by this class are saved to the GameUserSettings.ini config file. If you have external automation needs, this would be the place to start.")]),e._v(" "),s("h2",{attrs:{id:"setting-the-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-the-mode"}},[e._v("#")]),e._v(" Setting the mode")]),e._v(" "),s("p",[e._v("When you use the various mode setting functions, the mode is not immediately applied, much like you would expect from a PC game settings menu. Instead, the value is saved to the Game config. To set up a mode test flow (e.g. user selects mode, clicks apply, and is prompted to confirm if the mode is worked), you should use the following:")]),e._v(" "),s("p",[e._v("int32 Width = 1280, Height = 720;\nUGameUserSettings* Settings = GetGameUserSettings(); // note we are using the function defined above\nif (Settings != nullptr)\n{\nSettings->RequestResolutionChange(Width, Height, EWindowMode::Type::Windowed, false); // we can choose to ignore the command line arguments, this is probably best when the game UI sets the mode after startup\n}\n \n// ...\n \nif (UserConfirmed)\n{\nSettings->ConfirmVideoMode();\n \n// Save the requested settings to our local data now\nSettings->SetScreenResolution(Settings->GetLastConfirmedScreenResolution());\nSettings->SetFullscreenMode(Settings->GetLastConfirmedFullscreenMode());\nSettings->SaveSettings();\n}\nelse\n{\nSettings->RevertVideoMode();\n}")]),e._v(" "),s("h2",{attrs:{id:"setting-the-scalability-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-the-scalability-settings"}},[e._v("#")]),e._v(" Setting the scalability settings")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("UGameUserSettings")]),e._v(" class provides access to a "),s("code",[e._v("[FQualityLevels](https://docs.unrealengine.com/latest/INT/API/Runtime/Engine/FQualityLevels/index.html)")]),e._v(" instance which it refers to when using the "),s("code",[e._v("ApplySettings(bool)")]),e._v(" and "),s("code",[e._v("ApplyNonResolutionSettings()")]),e._v(" functions. It is very simple to set these. Note that a "),s("code",[e._v("GetQualityLevels()")]),e._v(" function exists in "),s("code",[e._v("GEngine")]),e._v(" to obtain the "),s("em",[e._v("current")]),e._v(" quality levels, unrelated to the quality levels in the user settings (these can diverge for the purposes of easy settings dialog implementations).")]),e._v(" "),s("p",[e._v('Settings->ScalabilityQuality.AntiAliasingQuality = 0; // Use "Low" AA quality\nSettings->ScalabilityQuality.ResolutionQuality   = 3; // Use "Epic" resolution quality\n \nSettings->ApplyNonResolutionSettings();\nSettings->SaveSettings();')]),e._v(" "),s("p",[e._v('The values range from 0 to 3 and correspond to "Low", "Medium", "High" and "Epic" as in the editor quick settings dialog and in the scalability cvars. The actual meaning of these (e.g. the cvar presets to use) can be set in Scalability.ini (some sane defaults are copied to your Saved/CleanSourceConfigs and are a good basis for your own). '),s("a",{attrs:{href:"https://docs.unrealengine.com/latest/INT/Engine/Performance/Scalability/ScalabilityReference/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("More info on Scalability from UE4 documentation"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v('Retrieved from "'),s("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Game_User_Settings&oldid=11783",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=Game_User_Settings&oldid=11783"),s("OutboundLink")],1),e._v('"')]),e._v(" "),s("p",[s("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[e._v("Categories")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[e._v("Code")])]),e._v(" "),s("li",[s("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[e._v("Tutorials")])])]),e._v(" "),s("p",[e._v("Hidden category:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"/Category:Templates",title:"Category:Templates"}},[e._v("Templates")])])]),e._v(" "),s("p",[s("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);t.default=i.exports}}]);