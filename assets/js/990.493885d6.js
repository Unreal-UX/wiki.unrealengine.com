(window.webpackJsonp=window.webpackJsonp||[]).push([[990],{1464:function(t,e,o){"use strict";o.r(e);var n=o(28),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("p",[t._v("Slate, How to Make Fancy Custom SButtons - Epic Wiki")]),t._v(" "),o("h1",{attrs:{id:"slate-how-to-make-fancy-custom-sbuttons"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#slate-how-to-make-fancy-custom-sbuttons"}},[t._v("#")]),t._v(" Slate, How to Make Fancy Custom SButtons")]),t._v(" "),o("h2",{attrs:{id:"contents"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#Overview"}},[t._v("1 Overview")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#Video"}},[t._v("2 Video")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#.H"}},[t._v("3 .H")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#.CPP"}},[t._v("4 .CPP")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#FButtonStyle"}},[t._v("4.1 FButtonStyle")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#Rainbow_Background_Button"}},[t._v("4.2 Rainbow Background Button")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#Trash_Can_Button"}},[t._v("4.3 Trash Can Button")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#Setting_The_Cursors"}},[t._v("4.4 Setting The Cursors")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#Setting_the_Custom_Tooltips"}},[t._v("4.5 Setting the Custom Tooltips")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#Updating_the_Text_When_Highlighted"}},[t._v("4.6 Updating the Text When Highlighted")])])])]),t._v(" "),o("li",[o("a",{attrs:{href:"#Summary"}},[t._v("5 Summary")])])]),t._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),o("p",[o("em",[t._v("Author:")]),t._v(" "),o("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[t._v("Rama")]),t._v(" ("),o("a",{attrs:{href:"/User_talk:Rama",title:"User talk:Rama"}},[t._v("talk")]),t._v(")")]),t._v(" "),o("p",[t._v("In this tutorial I show you how to make some fancy custom buttons!")]),t._v(" "),o("p",[t._v("I show you how to use "),o("strong",[t._v("images")]),t._v(" as button background, or as the entire button!")]),t._v(" "),o("p",[t._v("I also show you how to use custom color and font text!")]),t._v(" "),o("p",[t._v("I also give you the code for how to make "),o("strong",[t._v("custom Tool Tips")])]),t._v(" "),o("p",[t._v("Lastly I show how to make text highlight when it is hovered over 😃")]),t._v(" "),o("p",[t._v("Enjoy!")]),t._v(" "),o("h2",{attrs:{id:"video"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#video"}},[t._v("#")]),t._v(" Video")]),t._v(" "),o("p",[t._v("Here's a video demoing what I am showing you in this tutorial!")]),t._v(" "),o("h2",{attrs:{id:"h"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#h"}},[t._v("#")]),t._v(" .H")]),t._v(" "),o("p",[t._v("//Buttons\nTSharedPtr<SButton> RefreshButton;\nTSharedPtr<STextBlock> RefreshButtonText;\nTSharedPtr<SButton> ClearTileButton;")]),t._v(" "),o("h2",{attrs:{id:"cpp"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cpp"}},[t._v("#")]),t._v(" .CPP")]),t._v(" "),o("h3",{attrs:{id:"fbuttonstyle"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#fbuttonstyle"}},[t._v("#")]),t._v(" FButtonStyle")]),t._v(" "),o("p",[t._v("Both of my example buttons use a special Slate Core Style.")]),t._v(" "),o("p",[t._v('.ButtonStyle( FCoreStyle::Get(), "NoBorder" )')]),t._v(" "),o("h3",{attrs:{id:"rainbow-background-button"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rainbow-background-button"}},[t._v("#")]),t._v(" Rainbow Background Button")]),t._v(" "),o("p",[t._v('//The button!\nSAssignNew( RefreshButton, SButton )\n.ButtonStyle( FCoreStyle::Get(), "NoBorder" )\n.OnClicked( this, &SDDFileTree::RefreshButtonPressed )\n.HAlign( HAlign_Center )\n.VAlign( VAlign_Center )\n.ForegroundColor( FSlateColor::UseForeground() )\n[\n//Colored Background\nSNew(SBorder)\n.Padding(FMargin(3))\n \n//~~~ Rainbow Image for Button!!! ~~~\n.BorderImage( FCoreStyle::Get().GetBrush("ColorSpectrum.Spectrum") )\n[\n//Button Text!! AssignNew so can change color later\nSAssignNew(RefreshButtonText , STextBlock)\n.Text( FString("Refresh (F5) ") )\n.Font(FSlateFontInfo(FPaths::EngineContentDir() / TEXT("Slate/Fonts/Roboto-Bold.ttf"), 16))\n.ColorAndOpacity(FLinearColor(1,0,1,1))\n.HighlightColor(FLinearColor(1,1,0,1))\n.ShadowColorAndOpacity(FLinearColor::Black)\n.ShadowOffset(FIntPoint(1, -1))\n]\n]')]),t._v(" "),o("h3",{attrs:{id:"trash-can-button"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#trash-can-button"}},[t._v("#")]),t._v(" Trash Can Button")]),t._v(" "),o("p",[t._v('//Resizes the image\nSNew(SBox)\n.WidthOverride(64)\n.HeightOverride(64)\n[\n//~~~ Clear Button / Trash Can ~~~\nSAssignNew( ClearTileButton, SButton )\n.ButtonStyle( FCoreStyle::Get(), "NoBorder" )\n.OnClicked( this, &SDDFileTree::ClearButtonPressed )\n.HAlign( HAlign_Center )\n.VAlign( VAlign_Center )\n.ForegroundColor( FSlateColor::UseForeground() )\n[\n//Button Content Image\nTSharedRef<SWidget>( SNew( SImage ) .Image(\nFCoreStyle::Get().GetBrush("TrashCan")\n))\n]\n]')]),t._v(" "),o("h3",{attrs:{id:"setting-the-cursors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-the-cursors"}},[t._v("#")]),t._v(" Setting The Cursors")]),t._v(" "),o("p",[t._v("//Set Cursors\nClearTileButton->SetCursor(EMouseCursor::SlashedCircle);\nRefreshButton->SetCursor(EMouseCursor::Hand);")]),t._v(" "),o("h3",{attrs:{id:"setting-the-custom-tooltips"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-the-custom-tooltips"}},[t._v("#")]),t._v(" Setting the Custom Tooltips")]),t._v(" "),o("p",[t._v('ClearTileButton->SetToolTip(\nSNew(SToolTip)\n[\nSNew(STextBlock)\n.Text(NSLOCTEXT("FileTree", "Clear", "Clear any currently Loaded Preview Tile!  -Rama"))\n.Font(FSlateFontInfo(FPaths::EngineContentDir() / TEXT("Slate/Fonts/Roboto-Bold.ttf"), 12))\n.ColorAndOpacity(FLinearColor(1,0,1,1))\n.HighlightColor(FLinearColor(1,1,0,1))\n.ShadowColorAndOpacity(FLinearColor::Black)\n.ShadowOffset(FIntPoint(-2, 2))\n]\n);\n \nRefreshButton->SetToolTip(\t\nSNew(SToolTip)\n[\nSNew(STextBlock)\n.Text( NSLOCTEXT("FileTree", "Refresh", "Refresh Directory and File Listing, updating to hard drive contents! -Rama") )\n.Font(FSlateFontInfo(FPaths::EngineContentDir() / TEXT("Slate/Fonts/Roboto-Bold.ttf"), 12))\n.ColorAndOpacity(FLinearColor(1,0,1,1))\n.HighlightColor(FLinearColor(1,1,0,1))\n.ShadowColorAndOpacity(FLinearColor::Black)\n.ShadowOffset(FIntPoint(-2, 2))\n]\n);')]),t._v(" "),o("h3",{attrs:{id:"updating-the-text-when-highlighted"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#updating-the-text-when-highlighted"}},[t._v("#")]),t._v(" Updating the Text When Highlighted")]),t._v(" "),o("p",[t._v("void SDDFileTree::Tick( const FGeometry& AllottedGeometry, const double InCurrentTime, const float InDeltaTime )\n{\n// Call parent implementation\nSCompoundWidget::Tick( AllottedGeometry, InCurrentTime, InDeltaTime );\n \n \n//~~~~~~~~~~~~\n// Button Hovering\n//~~~~~~~~~~~~\nif(RefreshButtonText->IsHovered())\n{\nSetRainbowGlowColor();\nRefreshButtonText->SetForegroundColor( RainbowGlowingColor );\n}\nelse\n{\nRefreshButtonText->SetForegroundColor( FLinearColor(1,0,1,1) );\n}\n}")]),t._v(" "),o("h2",{attrs:{id:"summary"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),o("p",[t._v("Enjoy!")]),t._v(" "),o("p",[o("a",{attrs:{href:"/User:Rama",title:"User:Rama"}},[t._v("Rama")]),t._v(" ("),o("a",{attrs:{href:"/User_talk:Rama",title:"User talk:Rama"}},[t._v("talk")]),t._v(")")]),t._v(" "),o("p",[t._v('Retrieved from "'),o("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Slate,_How_to_Make_Fancy_Custom_SButtons&oldid=4671",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.unrealengine.com/index.php?title=Slate,_How_to_Make_Fancy_Custom_SButtons&oldid=4671"),o("OutboundLink")],1),t._v('"')]),t._v(" "),o("p",[o("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[t._v("Category")]),t._v(":")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[t._v("Code")])])]),t._v(" "),o("p",[o("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);e.default=r.exports}}]);