(window.webpackJsonp=window.webpackJsonp||[]).push([[998],{634:function(n,e,t){"use strict";t.r(e);var i=t(28),a=Object(i.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("Slate Tabs - Epic Wiki")]),n._v(" "),t("h1",{attrs:{id:"slate-tabs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#slate-tabs"}},[n._v("#")]),n._v(" Slate Tabs")]),n._v(" "),t("p",[t("strong",[n._v("Rate this Article:")])]),n._v(" "),t("p",[n._v("0.00")]),n._v(" "),t("p",[t("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),t("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),t("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),t("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}}),t("img",{attrs:{src:"/extensions/VoteNY/images/star_off.gif",alt:""}})]),n._v(" "),t("p",[n._v("Approved for Versions:(4.7)")]),n._v(" "),t("p",[t("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/a/a5/Icon_template_note1.png",alt:"Note"}})]),n._v(" "),t("p",[t("strong",[n._v("Some or all of the information on this page is inconsistent, irrelevant or confusing.")])]),n._v(" "),t("p",[n._v("Please help clean it up if you are able.")]),n._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[n._v("#")]),n._v(" Overview")]),n._v(" "),t("p",[t("em",[n._v("Author")]),n._v(" "),t("a",{attrs:{href:"https://forums.unrealengine.com/member.php?31661-Syntopia",target:"_blank",rel:"noopener noreferrer"}},[n._v("Syntopia"),t("OutboundLink")],1)]),n._v(" "),t("p",[n._v("In this tutorial I show you how to make tabs. There are many ways to do this. With a checkbox or button style change, but for me it was the easiest way.")]),n._v(" "),t("p",[t("a",{attrs:{href:"/File:Tabs.png"}},[t("img",{attrs:{src:"https://d26ilriwvtzlb.cloudfront.net/3/3c/Tabs.png",alt:"Tabs.png"}})])]),n._v(" "),t("h2",{attrs:{id:"code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[n._v("#")]),n._v(" Code:")]),n._v(" "),t("p",[n._v("MyStyle.h")]),n._v(" "),t("p",[n._v("// Copyright 1998-2015 Epic Games, Inc. All Rights Reserved.\n \n#pragma once\n \nclass FMyStyle\n{\npublic:\nstatic void Initialize();\nstatic void Shutdown();\n \nstatic const ISlateStyle& Get();\n \nstatic TSharedPtr<class ISlateStyle> StylePtr;\n \n};")]),n._v(" "),t("p",[n._v("MyStyle.cpp")]),n._v(" "),t("p",[n._v('// Copyright 1998-2015 Epic Games, Inc. All Rights Reserved.\n \n#include "TabbedView.h"\n#include "MyStyle.h"\n#include "Engine.h"\n#include "SlateBasics.h"\n#include "SlateStyle.h"\n \n#define IMAGE_BRUSH(RelativePath, ...)\tFSlateImageBrush(Style->RootToContentDir(RelativePath, TEXT(".png")), __VA_ARGS__)\n \nTSharedPtr<ISlateStyle> CreateStyle()\n{\nTSharedPtr<FSlateStyleSet> Style = MakeShareable(new FSlateStyleSet("PreloadStyle"));\nStyle->SetContentRoot(FPaths::GameContentDir() / "Slate");\n \nStyle->Set("tab_normal", new IMAGE_BRUSH("tab_normal", FVector2D(256, 64)));\nStyle->Set("tab_active", new IMAGE_BRUSH("tab_active", FVector2D(256, 64)));\n \nreturn Style;\n}\n \n#undef IMAGE_BRUSH\n \n \nTSharedPtr<ISlateStyle> FMyStyle::StylePtr = NULL;\n \nvoid FMyStyle::Initialize()\n{\nif (!StylePtr.IsValid())\n{\nStylePtr = CreateStyle();\nFSlateStyleRegistry::RegisterSlateStyle(*StylePtr);\n}\n}\n \nvoid FMyStyle::Shutdown()\n{\nFSlateStyleRegistry::UnRegisterSlateStyle(*StylePtr);\nensure(StylePtr.IsUnique());\nStylePtr.Reset();\n}\n \nconst ISlateStyle& FMyStyle::Get()\n{\nreturn *StylePtr;\t\n}')]),n._v(" "),t("p",[n._v("TabbedView.h")]),n._v(" "),t("p",[n._v('#pragma once\n \n#include "Engine.h"')]),n._v(" "),t("p",[n._v("TabbedView.cpp")]),n._v(" "),t("p",[n._v('// Copyright 1998-2015 Epic Games, Inc. All Rights Reserved.\n \n#include "TabbedView.h"\n#include "MyStyle.h"\n \nclass MyModule : public FDefaultGameModuleImpl\n{\npublic:\nvirtual void StartupModule() override\n{\nFSlateStyleRegistry::UnRegisterSlateStyle("PreloadStyle");\nFMyStyle::Initialize();\n}\n \nvirtual void ShutdownModule() override\n{\nFMyStyle::Shutdown();\n}\n};\n \nIMPLEMENT_PRIMARY_GAME_MODULE(MyModule, TabbedView, "TabbedView");')]),n._v(" "),t("p",[n._v("MyGameMode.h")]),n._v(" "),t("p",[n._v('// Copyright 1998-2015 Epic Games, Inc. All Rights Reserved.\n#pragma once\n \n#include "MyGameMode.generated.h"\n \nUCLASS(minimalapi)\nclass AMyGameMode : public AGameMode\n{\nGENERATED_UCLASS_BODY()\n \n};')]),n._v(" "),t("p",[n._v("MyGameMode.cpp")]),n._v(" "),t("p",[n._v('// Copyright 1998-2015 Epic Games, Inc. All Rights Reserved.\n \n#include "TabbedView.h"\n#include "MyGameMode.h"\n#include "MyHUD.h"\n \n \nAMyGameMode::AMyGameMode(const FObjectInitializer& ObjectInitializer)\n: Super(ObjectInitializer)\n{\n// use our custom HUD class\nHUDClass = AMyHUD::StaticClass();\n}')]),n._v(" "),t("p",[n._v("MyHUD.h")]),n._v(" "),t("p",[n._v('// Copyright 1998-2015 Epic Games, Inc. All Rights Reserved.\n#pragma once\n \n#include "MyHUD.generated.h"\n \nclass SMyUIWidget : public SCompoundWidget\n{\nSLATE_BEGIN_ARGS(SMyUIWidget)\n{}\n/*See private declaration of OwnerHUD below.*/\nSLATE_ARGUMENT(TWeakObjectPtr<class AMyHUD>, OwnerHUD)\n/** The visual style of the button */\nSLATE_END_ARGS()\n \npublic:\nvoid Construct(const FArguments& InArgs);\n \nFReply FirstTabClicked();\nFReply SecondTabClicked();\n \nconst FSlateBrush* GetFirstImageBrush() const;\nconst FSlateBrush* GetSecondImageBrush() const;\n \nprivate:\nTWeakObjectPtr<class AMyHUD> OwnerHUD;\n \nint32 TabIndex;\n \nint32 GetCurrentTabIndex() const\n{\nreturn TabIndex;\n}\n \n};\n \nUCLASS()\nclass AMyHUD : public AHUD\n{\nGENERATED_UCLASS_BODY()\n \npublic:\nvoid BeginPlay();\n \nvirtual void DrawHUD() override;\n \nprivate:\nTSharedPtr<SMyUIWidget> MyUIWidget;\n \n};')]),n._v(" "),t("p",[n._v("MyHUD.cpp")]),n._v(" "),t("p",[n._v('// Copyright 1998-2015 Epic Games, Inc. All Rights Reserved.\n \n#include "TabbedView.h"\n#include "MyHUD.h"\n#include "SWidgetSwitcher.h"\n#include "MyStyle.h"\n \nint FirstTabActive  = 1;\nint SecondTabActive = 0;\n \nint ftClick = 1;\nint stClick = 0;\n \nvoid SMyUIWidget::Construct(const FArguments& InArgs)\n{\nOwnerHUD = InArgs._OwnerHUD;\n \nTabIndex = 0;\n \nChildSlot\n[\nSNew(SVerticalBox)\n+ SVerticalBox::Slot()\n.FillHeight(0.1)\n \n+ SVerticalBox::Slot()\n.FillHeight(0.8)\n[\nSNew(SHorizontalBox)\n \n+ SHorizontalBox::Slot()\n.FillWidth(0.3)\n \n+ SHorizontalBox::Slot()\n.FillWidth(0.4)\n[\nSNew(SVerticalBox)\n+ SVerticalBox::Slot()\n.FillHeight(0.2)\n[\nSNew(SHorizontalBox)\n+ SHorizontalBox::Slot()\n[\nSNew(SButton)\n.ContentPadding(-3)\n.OnClicked(this, &SMyUIWidget::FirstTabClicked)\n[\nSNew(SVerticalBox)\n+ SVerticalBox::Slot()\n.HAlign(HAlign_Fill)\n.VAlign(VAlign_Fill)\n[\nSNew(SBorder)\n.HAlign(HAlign_Center)\n.VAlign(VAlign_Center)\n.BorderImage(this, &SMyUIWidget::GetFirstImageBrush)\n[\nSNew(STextBlock)\n.Font(FSlateFontInfo("Veranda", 54))\n.ColorAndOpacity(FLinearColor(1, 1, 1, 1))\n.Text(FText::FromString("Page One"))\n]\n]\n]\n]\n \n+ SHorizontalBox::Slot()\n.FillWidth(0.1)\n \n+ SHorizontalBox::Slot()\n[\nSNew(SButton)\n.ContentPadding(-3)\n.OnClicked(this, &SMyUIWidget::SecondTabClicked)\n[\nSNew(SVerticalBox)\n+ SVerticalBox::Slot()\n.HAlign(HAlign_Fill)\n.VAlign(VAlign_Fill)\n[\nSNew(SBorder)\n.HAlign(HAlign_Center)\n.VAlign(VAlign_Center)\n.BorderImage(this, &SMyUIWidget::GetSecondImageBrush)\n[\nSNew(STextBlock)\n.Font(FSlateFontInfo("Veranda", 54))\n.ColorAndOpacity(FLinearColor(1, 1, 1, 1))\n.Text(FText::FromString("Page Two"))\n]\n]\n]\n]\n]\n \n+ SVerticalBox::Slot()\n.FillHeight(0.8)\n[\nSNew(SWidgetSwitcher)\n.WidgetIndex(this, &SMyUIWidget::GetCurrentTabIndex)\n+ SWidgetSwitcher::Slot()\n[\nSNew(SBorder)\n.BorderImage(FCoreStyle::Get().GetBrush("ToolPanel.GroupBorder"))\n[\nSNew(SVerticalBox)\n+ SVerticalBox::Slot()\n.HAlign(HAlign_Center)\n.VAlign(VAlign_Center)\n[\nSNew(STextBlock)\n.ColorAndOpacity(FLinearColor(1, 1, 1, 1))\n.Font(FSlateFontInfo("Veranda", 72))\n.Text(FText::FromString("Page One"))\n]\n+ SVerticalBox::Slot()\n.HAlign(HAlign_Center)\n.VAlign(VAlign_Center)\n[\nSNew(STextBlock)\n.ColorAndOpacity(FLinearColor(1, 1, 1, 1))\n.Font(FSlateFontInfo("Veranda", 52))\n.Text(FText::FromString("Page One"))\n]\n+ SVerticalBox::Slot()\n.HAlign(HAlign_Center)\n.VAlign(VAlign_Center)\n[\nSNew(STextBlock)\n.ColorAndOpacity(FLinearColor(1, 1, 1, 1))\n.Font(FSlateFontInfo("Veranda", 32))\n.Text(FText::FromString("Page One"))\n]\n]\n]\n+ SWidgetSwitcher::Slot() // Weapons\n[\nSNew(SBorder)\n.BorderImage(FCoreStyle::Get().GetBrush("ToolPanel.GroupBorder"))\n[\nSNew(SVerticalBox)\n+ SVerticalBox::Slot()\n.HAlign(HAlign_Center)\n.VAlign(VAlign_Center)\n[\nSNew(STextBlock)\n.ColorAndOpacity(FLinearColor(1, 1, 1, 1))\n.Font(FSlateFontInfo("Veranda", 72))\n.Text(FText::FromString("Page Two"))\n]\n+ SVerticalBox::Slot()\n.HAlign(HAlign_Center)\n.VAlign(VAlign_Center)\n[\nSNew(STextBlock)\n.ColorAndOpacity(FLinearColor(1, 1, 1, 1))\n.Font(FSlateFontInfo("Veranda", 52))\n.Text(FText::FromString("Page Two"))\n]\n+ SVerticalBox::Slot()\n.HAlign(HAlign_Center)\n.VAlign(VAlign_Center)\n[\nSNew(STextBlock)\n.ColorAndOpacity(FLinearColor(1, 1, 1, 1))\n.Font(FSlateFontInfo("Veranda", 32))\n.Text(FText::FromString("Page Two"))\n]\n]\n]\n]\n]\n \n+ SHorizontalBox::Slot()\n.FillWidth(0.3)\n]\n \n+ SVerticalBox::Slot()\n.FillHeight(0.1)\n];\n}\n \nconst FSlateBrush* SMyUIWidget::GetFirstImageBrush() const\n{\nFName BrushName;\n(FirstTabActive == 0) ? BrushName = TEXT("tab_normal") : BrushName = TEXT("tab_active");\n \nreturn FMyStyle::Get().GetBrush(BrushName);\n}\n \nconst FSlateBrush* SMyUIWidget::GetSecondImageBrush() const\n{\nFName BrushName;\n(SecondTabActive == 0) ? BrushName = TEXT("tab_normal") : BrushName = TEXT("tab_active");\n \nreturn FMyStyle::Get().GetBrush(BrushName);\n}\n \nAMyHUD::AMyHUD(const FObjectInitializer& ObjectInitializer)\n: Super(ObjectInitializer)\n{\n \n}\n \nvoid AMyHUD::BeginPlay()\n{\nSAssignNew(MyUIWidget, SMyUIWidget).OwnerHUD(this);\n \nif (GEngine->IsValidLowLevel())\n{\nGEngine->GameViewport->AddViewportWidgetContent(SNew(SWeakWidget).PossiblyNullContent(MyUIWidget.ToSharedRef()));\n}\n \nif (MyUIWidget.IsValid())\n{\nMyUIWidget->SetVisibility(EVisibility::Visible);\n}\n}\n \nvoid AMyHUD::DrawHUD()\n{\nSuper::DrawHUD();\n}\n \nFReply SMyUIWidget::FirstTabClicked()\n{\nTabIndex = 0;\n \nstClick = 0;\nftClick++;\n \nif (ftClick == 1)\n{\nif (FirstTabActive == 0)\n{\nFirstTabActive = 1;\nSecondTabActive = 0;\n}\n \n}\n \nreturn FReply::Handled();\n}\n \nFReply SMyUIWidget::SecondTabClicked()\n{\nTabIndex = 1;\n \nftClick = 0;\nstClick++;\n \nif (stClick == 1)\n{\nif (SecondTabActive == 0)\n{\nFirstTabActive = 0;\nSecondTabActive = 1;\n}\n \n}\n \nreturn FReply::Handled();\n}')]),n._v(" "),t("h2",{attrs:{id:"summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[n._v("#")]),n._v(" Summary")]),n._v(" "),t("p",[n._v("Set your level to use your new game mode, and run!")]),n._v(" "),t("p",[n._v("Source code: "),t("a",{attrs:{href:"/File:TabbedView.zip",title:"File:TabbedView.zip"}},[n._v("File:TabbedView.zip")]),n._v(" (~67KB)")]),n._v(" "),t("p",[n._v('Retrieved from "'),t("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=Slate_Tabs&oldid=12969",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://wiki.unrealengine.com/index.php?title=Slate_Tabs&oldid=12969"),t("OutboundLink")],1),n._v('"')]),n._v(" "),t("p",[t("a",{attrs:{href:"/Special:Categories",title:"Special:Categories"}},[n._v("Categories")]),n._v(":")]),n._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"/Category:Templates",title:"Category:Templates"}},[n._v("Templates")])]),n._v(" "),t("li",[t("a",{attrs:{href:"/Category:Tutorials",title:"Category:Tutorials"}},[n._v("Tutorials")])]),n._v(" "),t("li",[t("a",{attrs:{href:"/Category:Code",title:"Category:Code"}},[n._v("Code")])]),n._v(" "),t("li",[t("a",{attrs:{href:"/Category:Community_Created_Content",title:"Category:Community Created Content"}},[n._v("Community Created Content")])])]),n._v(" "),t("p",[t("img",{attrs:{src:"https://tracking.unrealengine.com/track.png",alt:""}})])])}),[],!1,null,null,null);e.default=a.exports}}]);