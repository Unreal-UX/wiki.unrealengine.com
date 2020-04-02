(window.webpackJsonp=window.webpackJsonp||[]).push([[870],{706:function(e,a,t){"use strict";t.r(a);var n=t(28),r=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("MultiThreading and synchronization Guide - Epic Wiki")]),e._v(" "),t("h1",{attrs:{id:"multithreading-and-synchronization-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multithreading-and-synchronization-guide"}},[e._v("#")]),e._v(" MultiThreading and synchronization Guide")]),e._v(" "),t("p",[e._v("From Epic Wiki")]),e._v(" "),t("p",[e._v("Jump to: "),t("a",{attrs:{href:"#mw-head"}},[e._v("navigation")]),e._v(", "),t("a",{attrs:{href:"#p-search"}},[e._v("search")])]),e._v(" "),t("p",[t("a",{attrs:{href:"/index.php?title=Template:Rating&action=edit&redlink=1",title:"Template:Rating (page does not exist)"}},[e._v("Template:Rating")])]),e._v(" "),t("h2",{attrs:{id:"contents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#Overview"}},[e._v("1 Overview")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#RNGThread.H"}},[e._v("2 RNGThread.H")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#RNGThread.CPP"}},[e._v("3 RNGThread.CPP")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Using_the_Thread_and_it.27s_methods_inside_PlayerController"}},[e._v("4 Using the Thread and it's methods inside PlayerController")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Conclusion"}},[e._v("5 Conclusion")])])]),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[t("strong",[e._v("Author")]),e._v(" "),t("a",{attrs:{href:"/index.php?title=User:ColdSteel48&action=edit&redlink=1",title:"User:ColdSteel48 (page does not exist)"}},[e._v("User:ColdSteel48")])]),e._v(" "),t("p",[e._v("Dear Community,")]),e._v(" "),t("p",[e._v("Here is a little tutorial about thread synchronization and events.")]),e._v(" "),t("p",[e._v("I am not going to cover the thread creating techniques since "),t("a",{attrs:{href:"/index.php?title=User:Rama",title:"User:Rama"}},[e._v("Rama")]),e._v(" did a great job on it!")]),e._v(" "),t("p",[e._v("We will take a look on how to use "),t("em",[e._v("FCriticalSection")]),e._v(" and "),t("em",[e._v("FEvent")]),e._v(".")]),e._v(" "),t("p",[e._v("We will create a somehow similar to "),t("a",{attrs:{href:"/index.php?title=User:Rama",title:"User:Rama"}},[e._v("Rama")]),e._v("'s thread example to compute random "),t("em",[e._v("Fvectors")]),e._v(" and store them in "),t("em",[e._v("TArray")]),e._v(" protected by "),t("em",[e._v("FCriticalSection")]),e._v(" for thread safety and we will create a kill thread event using "),t("em",[e._v("FEvent")]),e._v(".")]),e._v(" "),t("p",[e._v("We will also cover a Pause and UnPause thread with help of the same "),t("em",[e._v("FEvent")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"rngthread-h"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rngthread-h"}},[e._v("#")]),e._v(" RNGThread.H")]),e._v(" "),t("p",[t("syntaxhighlight",{attrs:{lang:"cpp"}},[e._v(" class URPRJNAME_API RNGThread : public FRunnable { public:")])],1),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("   //Constructor\n")])])]),t("p",[e._v("RNGThread(int Count = 50000, int minNumber = 0, int maxNumber = 1000, int chunkCount = 20); //Destructor ~RNGThread();")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("   //Use this method to kill the thread!!\n")])])]),t("p",[e._v("void EnsureCompletion();")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("   //Pause the thread \n")])])]),t("p",[e._v("void PauseThread();")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("   //Continue/UnPause the thread\n")])])]),t("p",[e._v("void ContinueThread();")]),e._v(" "),t("p",[e._v("//FRunnable interface. virtual bool Init(); virtual uint32 Run(); virtual void Stop();")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("   bool IsThreadPaused();\n\n   FVector GetRandomVector();        \n")])])]),t("p",[e._v("private: //Thread to run the worker FRunnable on FRunnableThread* Thread;")]),e._v(" "),t("p",[e._v("FCriticalSection m_mutex; FEvent * m_semaphore;")]),e._v(" "),t("p",[e._v("int m_chunkCount; int m_amount; int m_MinInt; int m_MaxInt;")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("   //As the name states those members are Thread safe\n")])])]),t("p",[e._v("FThreadSafeBool m_Kill; FThreadSafeBool m_Pause;")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("   //The array is a private member because we don't want to allow anyone from outside the class to access it since we want to ensure a thread safety.\n   TArray<FVector> m\\_RandomVecs;\n")])])]),t("p",[e._v("}; ")]),e._v(" "),t("h2",{attrs:{id:"rngthread-cpp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rngthread-cpp"}},[e._v("#")]),e._v(" RNGThread.CPP")]),e._v(" "),t("syntaxhighlight",{attrs:{lang:"cpp"}},[t("ol",[t("li",[e._v('include "URPPRJNAME.h" /* To be able to use FGenericPlatformProcess */')]),e._v(" "),t("li",[e._v('include "RNGThread.h"')])]),e._v(" "),t("p",[e._v("RNGThread::RNGThread(int Count, int minNumber, int maxNumber, int chunkCount) { m_Kill= false; m_Pause = false;")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("   //Initialize FEvent (as a cross platform (Confirmed Mac/Windows))\n")])])]),t("p",[e._v("m_semaphore = FGenericPlatformProcess::GetSynchEventFromPool(false);;")]),e._v(" "),t("p",[e._v("m_MinInt = minNumber; m_MaxInt = maxNumber;")]),e._v(" "),t("p",[e._v("m_chunkCount = chunkCount;")]),e._v(" "),t("p",[e._v("m_amount = Count; m_RandomVecs.Reserve(m_amount);")]),e._v(" "),t("p",[e._v('Thread = FRunnableThread::Create(this, TEXT("RNGThread") , 0, TPri_BelowNormal); }')]),e._v(" "),t("p",[e._v("RNGThread::~RNGThread() { if (m_semaphore) {")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("           //Cleanup the FEvent\n")])])]),t("p",[e._v("FGenericPlatformProcess::ReturnSynchEventToPool(m_semaphore); m_semaphore = nullptr; }")]),e._v(" "),t("p",[e._v("if (Thread) {")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("           //Cleanup the worker thread\n")])])]),t("p",[e._v("delete Thread; Thread = nullptr; } }")]),e._v(" "),t("p",[e._v("bool RNGThread::Init() {")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("   //Init the Data \n")])])]),t("p",[e._v("m_RandomVecs.Empty(); return true; }")]),e._v(" "),t("p",[e._v("uint32 RNGThread::Run() { //Initial wait before starting FPlatformProcess::Sleep(0.03);")]),e._v(" "),t("p",[e._v("while (!m_Kill) { if (m_Pause) {")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('                   //FEvent->Wait(); will "sleep" the thread until it will get a signal "Trigger()"\n')])])]),t("p",[e._v("m_semaphore->Wait();")]),e._v(" "),t("p",[e._v("if (m_Kill) { return 0; } } else {")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("                   //Create temporal array (chunk)\n")])])]),t("p",[e._v("TArray"),t("FVector",[e._v(" ChunkArray; ChunkArray.Reserve(m_chunkCount);")])],1),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("                   //Calculate random vectors and put them to the temporal array\n                   //I did it so we won't lock/unlock FCritical section each time we generating a new FVector (Locking and Unlocking is somewhat expensive).\n")])])]),t("p",[e._v("for (int i = 0; i < m_chunkCount; i++) { FVector RandomVec; RandomVec.X = (float)FMath::RandRange((int)m_MinInt, (int)m_MaxInt); RandomVec.Y = (float)FMath::RandRange((int)m_MinInt, (int)m_MaxInt); RandomVec.Z = 0; ChunkArray.Emplace(RandomVec); }")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("                   //Critical section:\n")])])]),t("p",[e._v("m_mutex.Lock();")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("                       //We are locking our FCriticalSection so no other thread will access it\n                       //And thus it is a thread-safe access now\n\n                       //Append the temporal array to the Actual storage array/\n")])])]),t("p",[e._v("m_RandomVecs.Append(ChunkArray);")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("                       //Get array size\n")])])]),t("p",[e._v("int num = m_RandomVecs.Num();")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("                      //Unlock FCriticalSection so other threads may use it.\n")])])]),t("p",[e._v("m_mutex.Unlock();")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("                   //Pause Condition - if we RandomVectors contains more vectors than m\\_amount we shall pause the thread to release system resources.\n")])])]),t("p",[e._v("if (num > m_amount) { m_Pause = true; }")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("                   //A little sleep between the chunks (So CPU will rest a bit -- (may be omitted))\n")])])]),t("p",[e._v("FPlatformProcess::Sleep(0.1); } }")]),e._v(" "),t("p",[e._v("return 0; }")]),e._v(" "),t("p",[e._v("void RNGThread::PauseThread() { m_Pause = true; }")]),e._v(" "),t("p",[e._v("void RNGThread::ContinueThread() { m_Pause = false;")]),e._v(" "),t("p",[e._v("if (m_semaphore) {")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('           //Here is a FEvent signal "Trigger()" -> it will wake up the thread.\n')])])]),t("p",[e._v("m_semaphore->Trigger(); } }")]),e._v(" "),t("p",[e._v('void RNGThread::Stop() { m_Kill= true; //Thread kill condition "while (!m_Kill){...}" m_Pause = false;')]),e._v(" "),t("p",[e._v("if (m_semaphore) {")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('           //We shall signal "Trigger" the FEvent (in case the Thread is sleeping it shall wake up!!)\n')])])]),t("p",[e._v("m_semaphore->Trigger(); } }")]),e._v(" "),t("p",[e._v("//Use this method to kill the thread!! void RNGThread::EnsureCompletion() { Stop();")]),e._v(" "),t("p",[e._v("if (Thread) { Thread->WaitForCompletion(); } }")]),e._v(" "),t("p",[e._v("//if the array is not yet ready we will generate the vector on the caller thread. FORCEINLINE FVector GenerateRandomVecInRange(int min, int max) { FVector WanderingPoint(0, 0, 0); WanderingPoint.X = (float)FMath::RandRange((int)min, (int)max); WanderingPoint.Y = (float)FMath::RandRange((int)min, (int)max); WanderingPoint.Z = (float)FMath::RandRange((int)min, (int)max); return WanderingPoint; }")]),e._v(" "),t("p",[e._v("bool RNGThread:IsThreadPaused() {")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("   return (bool)m\\_Pause;\n")])])]),t("p",[e._v("}")]),e._v(" "),t("p",[e._v("FVector RNGThread::GetRandomVector() {")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('   //Here we are retrieving the Vector from our storage array in a thread safe manner \n   //Despite this is a member method of this class it will be called from another thread (most likely from the GameThread) (This is by the way true for each public member methods except the "Run()" method) - So we must ensure the thread safety!\n   //Critical section:\n')])])]),t("p",[e._v("m_mutex.Lock();")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("   \tint lastIndex = m\\_RandomVecs.Num() - 1;\n")])])]),t("p",[e._v("if (lastIndex < 0) {")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("                   //The array is not ready yet :-0\n")])])]),t("p",[e._v("m_mutex.Unlock(); //We must unlock the critical section before the return to avoid a deadlock. return GenerateRandomVecInRange(m_MinInt, m_MaxInt); }")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("           FVector vec2ret;\n")])])]),t("p",[e._v("vec2ret = m_RandomVecs[lastIndex]; m_RandomVecs.RemoveAt(lastIndex);")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("           //Some automation: if we have less than 10% random FVectors in our array we will UnPause the thread. (maybe omitted).\n           if (m\\_RandomVecs.Num() < m\\_amount/10)\n")])])]),t("p",[e._v("{ RandomVecsPoolThreadHandle->ContinueThread(); }")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("  //Critical section ends here.\n  m\\_mutex.Unlock();\n  \n  //return random vector to the caller.\n  return vec2ret; \n")])])]),t("p",[e._v("} ")])]),t("p"),e._v(" "),t("h2",{attrs:{id:"using-the-thread-and-it-s-methods-inside-playercontroller"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-the-thread-and-it-s-methods-inside-playercontroller"}},[e._v("#")]),e._v(" Using the Thread and it's methods inside PlayerController")]),e._v(" "),t("p",[t("syntaxhighlight",{attrs:{lang:"cpp"}},[e._v(" //In the .h for the player controller (for example) RNGThread* RandomVecsPoolThreadHandle;")])],1),e._v(" "),t("p",[e._v("//Cpp //Starting For example in the BeginPlay (NOTE: Please do not start the thread in constructor!). void AMyPlayerController::BeginPlay() { Super::BeginPlay(); RandomVecsPoolThreadHandle = nullptr;")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("   RandomVecsPoolThreadHandle = new RNGThread(/\\*We will use the default values\\*/);\n")])])]),t("p",[e._v("}")]),e._v(" "),t("p",[e._v("//Killing the thread for example in EndPlay() or BeginDestroy() void AMyPlayerController::EndPlay(const EEndPlayReason::Type EndPlayReason) { if (RandomVecsPoolThreadHandle) { if (RandomVecsPoolThreadHandle) { RandomVecsPoolThreadHandle->EnsureCompletion(); delete RandomVecsPoolThreadHandle; RandomVecsPoolThreadHandle = nullptr; } }")]),e._v(" "),t("p",[e._v("Super::EndPlay(EndPlayReason); }")]),e._v(" "),t("p",[e._v("void AMyPlayerController::BeginDestroy() { if (RandomVecsPoolThreadHandle) { RandomVecsPoolThreadHandle->EnsureCompletion(); delete RandomVecsPoolThreadHandle; RandomVecsPoolThreadHandle = nullptr; } Super::BeginDestroy(); }")]),e._v(" "),t("p",[e._v("//Lets print the Random vectors inside the Tick for instance: void AMyPlayerController::Tick(float DeltaSeconds) { Super::Tick(DeltaSeconds);")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("   if (RandomVecsPoolThreadHandle)\n")])])]),t("p",[e._v("{")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('        FVector myVector = RandomVecsPoolThreadHandle->GetRandomVector();\n        if(GEngine)\n        {\n            GEngine->AddOnScreenDebugMessage(-1, 3, FColor::Yellow, FString::Printf(TEXT("MyRandomVec = (%.2f, %.2f, %.2f) "), myVector.X, myVector.Y, myVector.Z ));\n        }\n   }\n')])])]),t("p",[e._v("} ")]),e._v(" "),t("h2",{attrs:{id:"conclusion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),t("p",[e._v("That's it for now 😃 Enjoy!")]),e._v(" "),t("p",[e._v('Retrieved from "'),t("a",{attrs:{href:"https://wiki.unrealengine.com/index.php?title=MultiThreading_and_synchronization_Guide&oldid=307",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.unrealengine.com/index.php?title=MultiThreading_and_synchronization_Guide&oldid=307"),t("OutboundLink")],1),e._v('"')])],1)}),[],!1,null,null,null);a.default=r.exports}}]);