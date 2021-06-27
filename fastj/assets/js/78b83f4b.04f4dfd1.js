(self.webpackChunkfastj_docs=self.webpackChunkfastj_docs||[]).push([[986],{8844:function(e,t,a){"use strict";a.r(t),a.d(t,{contentTitle:function(){return f},default:function(){return N},frontMatter:function(){return k},metadata:function(){return v},toc:function(){return w}});var n=a(2122),i=a(9756),o=a(7294),r=a(3905),l=a(944),s=a(6010),c="tabItem_1uMI",p="tabItemActive_2DSg";var u=37,d=39;var m=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,i=e.values,r=e.groupId,m=e.className,h=(0,l.Z)(),g=h.tabGroupChoices,k=h.setTabGroupChoices,f=(0,o.useState)(n),v=f[0],w=f[1],y=o.Children.toArray(e.children),N=[];if(null!=r){var b=g[r];null!=b&&b!==v&&i.some((function(e){return e.value===b}))&&w(b)}var j=function(e){var t=e.currentTarget,a=N.indexOf(t),n=i[a].value;w(n),null!=r&&(k(r,n),setTimeout((function(){var e,a,n,i,o,r,l,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,i=e.bottom,o=e.right,r=window,l=r.innerHeight,s=r.innerWidth,a>=0&&o<=s&&i<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},T=function(e){var t,a;switch(e.keyCode){case d:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case u:var i=N.indexOf(e.target)-1;a=N[i]||N[N.length-1]}null==(t=a)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},m)},i.map((function(e){var t=e.value,a=e.label;return o.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":v===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:T,onFocus:j,onClick:j},a)}))),t?(0,o.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))};var h=function(e){var t=e.children,a=e.hidden,n=e.className;return o.createElement("div",{role:"tabpanel",hidden:a,className:n},t)},g=a(4996),k={sidebar_position:2,keywords:["fastj project gradle","fastj tutorial gradle","create fastj project gradle","how to create fastj project gradle"],description:"Let's walk you through creating a Gradle project for FastJ."},f="Creating the Gradle Project",v={unversionedId:"fastj-basics/creating-the-gradle-project",id:"fastj-basics/creating-the-gradle-project",isDocsHomePage:!1,title:"Creating the Gradle Project",description:"Let's walk you through creating a Gradle project for FastJ.",source:"@site/wiki/fastj-basics/creating-the-gradle-project.mdx",sourceDirName:"fastj-basics",slug:"/fastj-basics/creating-the-gradle-project",permalink:"/fastj/wiki/fastj-basics/creating-the-gradle-project",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,keywords:["fastj project gradle","fastj tutorial gradle","create fastj project gradle","how to create fastj project gradle"],description:"Let's walk you through creating a Gradle project for FastJ."},sidebar:"defaultSidebar",previous:{title:"Setting up for FastJ",permalink:"/fastj/wiki/fastj-basics/setting-up-for-fastj"}},w=[{value:"Create a Workspace",id:"create-a-workspace",children:[]},{value:"Open The Terminal/Command Prompt",id:"open-the-terminalcommand-prompt",children:[]},{value:"Create the Gradle Project",id:"create-the-gradle-project",children:[{value:"Project Type Selection",id:"project-type-selection",children:[]},{value:"Programming Language Selection",id:"programming-language-selection",children:[]},{value:"Functionality Splitting",id:"functionality-splitting",children:[]},{value:"Build Script",id:"build-script",children:[]},{value:"Unit Testing Framework",id:"unit-testing-framework",children:[]},{value:"Project Name",id:"project-name",children:[]},{value:"Source Package Name",id:"source-package-name",children:[]}]},{value:"You&#39;ve done it!",id:"youve-done-it",children:[]}],y={toc:w};function N(e){var t=e.components,o=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},y,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-the-gradle-project"},"Creating the Gradle Project"),(0,r.kt)("p",null,"Let's jump right into creating that FastJ project."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Before following this tutorial...")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Before following this tutorial, please make sure you've installed all the requirements for creating a FastJ project outlined ",(0,r.kt)("a",{parentName:"p",href:"setting-up-for-fastj",title:"Setting up for FastJ"},(0,r.kt)("strong",{parentName:"a"},"here")),"."))),(0,r.kt)("h2",{id:"create-a-workspace"},"Create a Workspace"),(0,r.kt)("p",null,"Now that you have your IDE and other tools installed (if you don't, click ",(0,r.kt)("a",{parentName:"p",href:"setting-up-for-fastj#idecode-editor",title:"Setting up for FastJ: Choosing an IDE/Code Editor"},"here")," to get them), we can start off by giving ourselves a folder to work in. Open up your file explorer on your pc, and create a folder to work inside of."),(0,r.kt)("p",null,"For the sake of this project, I've named mine ",(0,r.kt)("inlineCode",{parentName:"p"},"fastj-tutorial")," -- feel free to name it the same if you're not confident in what exactly you're doing."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Be organized!")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Like with other computer tasks, it's best practice to stay organized while working. Putting in the effort to stay organized now instead of later makes your life much easier down the line."))),(0,r.kt)("h2",{id:"open-the-terminalcommand-prompt"},"Open The Terminal/Command Prompt"),(0,r.kt)("p",null,"Next, you'll want to open up a terminal (Linux/Unix) or a command prompt (Windows) inside of the folder you created. The instructions below are divided by the operating system -- click or tap the operating system name to change to its instructions."),(0,r.kt)(m,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"},{label:"Linux",value:"lin"}],mdxType:"Tabs"},(0,r.kt)(h,{value:"win",mdxType:"TabItem"},"Type ",(0,r.kt)("code",null,"cmd")," into File Explorer's searchbar -- this opens the command prompt and directs it to the folder you're in."),(0,r.kt)(h,{value:"mac",mdxType:"TabItem"},"Until further notice, I don't own a macOS device and don't actually know how to do this off-hand. Instead, ",(0,r.kt)("a",{href:"https://lifehacker.com/launch-an-os-x-terminal-window-from-a-specific-folder-1466745514#:~:text=Head%20into%20System%20Preferences%20and,the%20folder%20you%27re%20in.",target:"_blank"},"follow these guidelines"),"."),(0,r.kt)(h,{value:"lin",mdxType:"TabItem"},"Right-click anywhere inside the folder window, and select ",(0,r.kt)("code",null,"Open in Terminal"),".")),(0,r.kt)("h2",{id:"create-the-gradle-project"},"Create the Gradle Project"),(0,r.kt)("video",{width:"400",height:"225",controls:!0},(0,r.kt)("source",{src:(0,g.Z)("/video/create-gradle-project.mp4"),type:"video/mp4"})),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"This is as simple as typing ",(0,r.kt)("inlineCode",{parentName:"p"},"gradle init")," in the command prompt/terminal and hitting ",(0,r.kt)("inlineCode",{parentName:"p"},"Enter"),", and then entering a sequence of numbers that likely will confuse you! \ud83d\ude00"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"...right. I should explain the numbers. Actually, i'll explain the entire process while I'm at it."),(0,r.kt)("h3",{id:"project-type-selection"},"Project Type Selection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="Gradle Project Type Selection"',title:'"Gradle',Project:!0,Type:!0,'Selection"':!0},"Select type of project to generate:\n  1: basic\n  2: application\n  3: library\n  4: Gradle plugin\nEnter selection (default: basic) [1..4]\n")),(0,r.kt)("p",null,"This section is asking you what type of Gradle project you want to make. Gradle supports a few different default configurations of projects: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"application")," - executable applications like games and software apps"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"library")," - ",(0,r.kt)("del",{parentName:"li"},"literally libraries of code")," game-making code frameworks, UI frameworks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.gradle.org/current/userguide/plugins.html",title:"Gradle Plugins"},"Gradle plugins"))," - code to improve your build script experience"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"basic")," - an empty project with no specialization whatsoever.")),(0,r.kt)("p",null,"Each one has its own pros and cons, and are generally designed to speed up the development process of setting up your project."),(0,r.kt)("p",null,"For now, we can just pick ",(0,r.kt)("strong",{parentName:"p"},"number 2 -- application"),". This configuration gets us the quickest to making our game. In more advanced situations, we may end up using the other templates, but for now we can stick with just this template."),(0,r.kt)("h3",{id:"programming-language-selection"},"Programming Language Selection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="Programming Language Selection"',title:'"Programming',Language:!0,'Selection"':!0},"Select implementation language:\n  1: C++\n  2: Groovy\n  3: Java\n  4: Kotlin\n  5: Scala\n  6: Swift\nEnter selection (default: Java) [1..6]\n")),(0,r.kt)("p",null,"This section is much more straightorward -- it's only asking what programming language we're going to be using. As we know, this tutorial will be using Java so you can go ahead and select ",(0,r.kt)("strong",{parentName:"p"},"number 3 -- Java"),"."),(0,r.kt)("h3",{id:"functionality-splitting"},"Functionality Splitting"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="Functionality Splitting"',title:'"Functionality','Splitting"':!0},"Split functionality across multiple subprojects?:\n  1: no - only one application project\n  2: yes - application and library projects\nEnter selection (default: no - only one application project) [1..2]\n")),(0,r.kt)("p",null,"This one might be a bit confusing. However, fear not -- we're just going to stick with choice ",(0,r.kt)("strong",{parentName:"p"},"number 1 -- only one application project"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"What's a subproject?")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Gradle has this functionality called ",(0,r.kt)("em",{parentName:"p"},"modules")," -- it's the idea of separating your one big project into multiple chunks, or ",(0,r.kt)("em",{parentName:"p"},"subprojects"),". Dividing your project allows you to separate logic from implementation, which is a very good way to create reusable code. I won't go into detail because it's out of the scope of this tutorial, but this is also another way useful way of organizing your project and one step into the ways of ",(0,r.kt)("em",{parentName:"p"},"abstraction"),"."),(0,r.kt)("p",{parentName:"div"},"Oh, and in case you're curious about using multiple subprojects you can check out Gradle's guide ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/samples/sample_building_java_applications_multi_project.html",title:"Gradle Subprojects Tutorial"},"here"),"."))),(0,r.kt)("h3",{id:"build-script"},"Build Script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="Build Script"',title:'"Build','Script"':!0},"Select build script DSL:\n  1: Groovy\n  2: Kotlin\nEnter selection (default: Groovy) [1..2]\n")),(0,r.kt)("p",null,"This one's once again more straightorward, although you may not have heard of build scripts before. A ",(0,r.kt)("em",{parentName:"p"},"build script")," is a set of code defining a set of rules for the build tool to follow. This gives the build tool the context it needs in order to work for your specific use cases."),(0,r.kt)("p",null,"I personally prefer Groovy to Kotlin (this is preference!), so we'll use ",(0,r.kt)("strong",{parentName:"p"},"number 1 -- Groovy"),"."),(0,r.kt)("h3",{id:"unit-testing-framework"},"Unit Testing Framework"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="Unit Testing Framework"',title:'"Unit',Testing:!0,'Framework"':!0},"Select test framework:\n  1: JUnit 4\n  2: TestNG\n  3: Spock\n  4: JUnit Jupiter\nEnter selection (default: JUnit 4) [1..4]\n")),(0,r.kt)("p",null,"Unit testing! Some of you might have heard of this before, and absolutely dread it. Don't worry, we're going to cover unit testing in an advanced topic later on. For now, select ",(0,r.kt)("strong",{parentName:"p"},"number 4 -- JUnit Jupiter"),"."),(0,r.kt)("h3",{id:"project-name"},"Project Name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="Project Name"',title:'"Project','Name"':!0},"Project name (default: FastJ Tutorial Project):\n")),(0,r.kt)("p",null,"This one's super simple -- you're just choosing your project's name!"),(0,r.kt)("p",null,"In this case, I'm going to call this project ",(0,r.kt)("inlineCode",{parentName:"p"},"FastJ Tutorial Project"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Wait... Why didn't you type the name?")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"I didn't type the project name out because the default was already exactly what I wanted! You can see the default below here, with me just pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"Enter")," to avoid having to type out the project name again."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{alt:"Defaults exist -- they&#39;re right on the line where you enter input!",src:a(4487).Z})))),(0,r.kt)("h3",{id:"source-package-name"},"Source Package Name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="Source Package Name"',title:'"Source',Package:!0,'Name"':!0},"Project name (default: FastJ Tutorial Project):\n")),(0,r.kt)("p",null,"This one's ",(0,r.kt)("em",{parentName:"p"},"almost")," as simple as project name, but we'll need to go much more in-depth in order to get it right. Java packages have to follow a style guide that defines what the top package names (the one we're deciding right now) can be. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The product/project name needs to be specified as the last part of the package sequence."),(0,r.kt)("li",{parentName:"ol"},"The package sequence needs to be written in reverse domain name notation.")),(0,r.kt)("p",null,"The project name is simple enough -- ",(0,r.kt)("inlineCode",{parentName:"p"},"fastjtutorial")," will do. (Java packages don't allow spaces or dashes, so we'll just put the two words together.)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"But what is reverse domain name notation"),", you ask. ",(0,r.kt)("em",{parentName:"p"},"Reverse domain name notation")," is the way website URLs are written when you search them, but backwards."),(0,r.kt)("p",null,"Here's an example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Domain: ",(0,r.kt)("inlineCode",{parentName:"li"},"docs.google.com")),(0,r.kt)("li",{parentName:"ul"},"Reverse Domain Name Notation: ",(0,r.kt)("inlineCode",{parentName:"li"},"com.google.docs"))),(0,r.kt)("p",null,"That hopefully simplifies how this works. "),(0,r.kt)("p",null,"But what do we actually ",(0,r.kt)("em",{parentName:"p"},"put")," for this? Well, we need to use a domain that we own. Luckily, everyone is entitled to a specific domain thanks to Github, a site where you can store your code privately or publicly, and share it with others on the internet. As long as you have a Github account, you can (legally) use this package sequence:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Java"},"io.github.yourusername.yourprojectname\n")),(0,r.kt)("p",null,"That's exactly what we'll use: ",(0,r.kt)("strong",{parentName:"p"},"io.github.yourusername.fastjtutorial"),"."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"What if I don't want a Github account?")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For future reference, there will likely be parts of this tutorial that involve you having a Github account, so that may be a slight hinderance to you in the long run."),(0,r.kt)("p",{parentName:"div"},"However, you don't ",(0,r.kt)("em",{parentName:"p"},"need")," to follow these conventions if you aren't distributing your code to others. It's another good practice -- one that might bite you in the butt if you don't use. You've been warned!"))),(0,r.kt)("h2",{id:"youve-done-it"},"You've done it!"),(0,r.kt)("p",null,"That's all there is to it. Nice work getting this far! If you look in the original folder you created, you'll see some new files and directories (folders):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="Contents of FastJ Tutorial Project"',title:'"Contents',of:!0,FastJ:!0,Tutorial:!0,'Project"':!0},".gradle/\napp/\ngradle/\n.gitattributes\n.gitignore\ngradlew\ngradlew.bat\nsettings.groovy\n")),(0,r.kt)("p",null,"Each of these will be explained as we use them."),(0,r.kt)("p",null,"For the sake of brevity (keeping things from getting too long), I'll put the next part of the tutorial in the next page. Read on!"))}N.isMDXComponent=!0},4487:function(e,t,a){"use strict";t.Z=a.p+"assets/images/gradle-create-project-defaults-cf9ce39e5101e4ac2e2ea3f6dff727ef.gif"}}]);