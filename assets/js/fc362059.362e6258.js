"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[784],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={slug:"rfc",title:"Request for Comments",authors:["evanbacon"],tags:["release"]},i=void 0,s={permalink:"/router/blog/rfc",source:"@site/blog/2022-09-22-beta.md",title:"Request for Comments",description:"TL;DR: Expo Router is a work in progress, join the discussion on GitHub!",date:"2022-09-22T00:00:00.000Z",formattedDate:"September 22, 2022",tags:[{label:"release",permalink:"/router/blog/tags/release"}],readingTime:7.045,hasTruncateMarker:!1,authors:[{name:"Evan Bacon",title:"Creator of Expo Router",url:"https://twitter.com/baconbrix",imageURL:"https://github.com/evanbacon.png",key:"evanbacon"}],frontMatter:{slug:"rfc",title:"Request for Comments",authors:["evanbacon"],tags:["release"]}},l={authorsImageUrls:[void 0]},p=[{value:"Goals",id:"goals",level:2},{value:"Searchable, shareable, and scalable",id:"searchable-shareable-and-scalable",level:3},{value:"Offline-First and Fast",id:"offline-first-and-fast",level:3},{value:"Data Fetching and Error Handling",id:"data-fetching-and-error-handling",level:3},{value:"Example",id:"example",level:2},{value:"Without Expo Router",id:"without-expo-router",level:3},{value:"With Expo Router",id:"with-expo-router",level:3},{value:"Request for Comments",id:"request-for-comments",level:2},{value:"Getting Started",id:"getting-started",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"TL;DR: Expo Router is a work in progress, join the discussion on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/expo/router/discussions/1"},"GitHub"),"!")),(0,r.kt)("p",null,"Users have been building powerful apps with Expo for years now. Over the last few years, we've focused on solving many foundational issues with native development like code signing, compiling native binaries, upgrading complex projects, and publishing to the app stores. Thanks to Expo Application Services we've been able to create a solid foundation for building powerful native apps in a continuous and reliable way."),(0,r.kt)("p",null,"Now we want to provide developers with a framework for creating drastically better experiences for end users."),(0,r.kt)("p",null,"Since ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/Baconbrix/status/1384355891772739584?s=20&t=uRredgRat4ORWTmjd-Jf3g"},"April 2021"),", I've been working on a new router that generates nested navigation and deep links based entirely on the project's file system. The concept of a file system-based router is not new to web developers (PHP, Next.js, etc.), but it is ",(0,r.kt)("strong",{parentName:"p"},"brand new")," to mobile developers! By bringing this foundational paradigm to mobile, we move closer to matching the shareability, and scalability of the web in native apps."),(0,r.kt)("h2",{id:"goals"},"Goals"),(0,r.kt)("p",null,"There are many applications for the new routing system. Our most important goal is to make it fast and easy to create, maintain, and scale apps with nested native navigation."),(0,r.kt)("p",null,"Websites are structured around pages and links between those pages. In a static website, each page is a file in the project's file system. Each link is a URL. This is a very simple and powerful concept that has been used for decades. This paradigm is intuitive and powerful because developers can easily create, move, and delete pages, without having to worry about manually importing, linking, and connecting screens to each other. Expo Router works the same way! You focus on creating the content of the pages and designing the layouts, the framework handles the rest automatically."),(0,r.kt)("h3",{id:"searchable-shareable-and-scalable"},"Searchable, shareable, and scalable"),(0,r.kt)("p",null,"Expo Router auto generates links for each leaf route in the app. This empowers users to open and share the entirety of the app instantly with anyone. This feature is critical for content-driven applications like social media, news, and e-commerce, really anything with multiple pages."),(0,r.kt)("p",null,"Imagine if you wanted to share a photo with a friend so you sent them a link to instagram.com and told them to search around until they find the exact page you were talking about. This is effectively how an app without deep links operates, and that should be table stakes for user experience."),(0,r.kt)("p",null,"The web solved this problem decades ago by associating every page with a URL that can be instantly shared and visited by anyone. We plan to bring this same flexibility to mobile apps via Expo Router."),(0,r.kt)("p",null,"Because Expo is multi-platform, you can develop your routes once and share them across iOS, Android, and the web. This means you can utilize the built-in URL handling of the browser to quickly build out your native apps routes."),(0,r.kt)("p",null,"Ultimately we'd like to make all native apps support ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/index.html"},(0,r.kt)("strong",{parentName:"a"},"app search and content indexing"))," automatically. This will enable native search engines to index content in your app, making content discoverability radically better."),(0,r.kt)("h3",{id:"offline-first-and-fast"},"Offline-First and Fast"),(0,r.kt)("p",null,"Unlike web apps, native apps are all expected to work offline. This means that the app must be able to handle any incoming URL without a network connection or server."),(0,r.kt)("p",null,"We solved this by implementing new features across the entire framework ranging from ",(0,r.kt)("a",{parentName:"p",href:"https://docs.expo.dev/versions/latest/"},"Expo SDK")," to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.expo.dev/workflow/expo-cli/"},"Expo CLI")," to the ",(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/metro/"},"Metro bundler"),"."),(0,r.kt)("p",null,"The end-user experience is fast and light-weight since the router can change the loading policy of components dynamically between development and production -- currently this only saves on JS execution time, we plan to add the option for bundle splitting leaf nodes in a future version. The developer experience is equally fast utilizing universal Fast Refresh, incremental bundling, and multi-layered artifact memoization in the bundler."),(0,r.kt)("h3",{id:"data-fetching-and-error-handling"},"Data Fetching and Error Handling"),(0,r.kt)("p",null,"One of the most exciting parts of React is the ability to divide your app's UI and data fetching into reusable components."),(0,r.kt)("p",null,"Expo Router has the ability to set up React Error Boundaries for each route (Suspense boundaries coming in a later version). This means that you can easily handle errors and data fetching states in a consistent way across the entire app and retry failed requests."),(0,r.kt)("p",null,"This is a large departure from the traditional approach to handling errors in a native app: throwing a fatal error and crashing the app with no indication of what went wrong. This is a terrible user experience and something we're excited to move away from."),(0,r.kt)("p",null,"The initial version of the Expo Router just scratches the surface of data fetching and error handling, more on this in a future release. But then why mention it? Because it's integral to the framework's design and we want to ensure we're not locking ourselves into a system which cannot handle these features in the future!"),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"The following is a simple example of migrating a single-screen app from the most popular navigation library for React Native, React Navigation."),(0,r.kt)("h3",{id:"without-expo-router"},"Without Expo Router"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For the sake of brevity, I've omitted the dependency installation steps and native ",(0,r.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/deep-linking/#set-up-with-bare-react-native-projects"},"Xcode / Android Studio steps")," required when working without Expo. This example also doesn't account for hiding the splash screen after navigation has mounted.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="HomeScreen.js"',title:'"HomeScreen.js"'},'import { View, Text } from "react-native";\n\nexport default function HomeScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>\n      <Text>Home Screen</Text>\n    </View>\n  );\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.js"',title:'"App.js"'},'import { NavigationContainer } from "@react-navigation/native";\nimport { createNativeStackNavigator } from "@react-navigation/native-stack";\nimport * as Linking from "expo-linking";\n\nimport HomeScreen from "./HomeScreen";\n\nconst Stack = createNativeStackNavigator();\n\nconst prefix = Linking.createURL("/");\n\nconst linking = {\n  prefixes: [prefix],\n  config: {\n    // Deep link configuration\n    home: {\n      // Must be updated to match the screens in the project\n      path: "/home",\n      screens: {},\n    },\n  },\n};\n\nexport default function App() {\n  return (\n    <NavigationContainer linking={linking}>\n      <Stack.Navigator>\n        <Stack.Screen name="home" component={HomeScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.js"',title:'"index.js"'},'import { AppRegistry } from "react-native";\nimport App from "./App";\n\nAppRegistry.registerComponent("main", () => App);\n')),(0,r.kt)("h3",{id:"with-expo-router"},"With Expo Router"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This example assumes the beta setup steps (resolutions, babel, metro config, entry point configuration) have been merged into various upstream packages.")),(0,r.kt)("p",null,"Simply create a file in the ",(0,r.kt)("strong",{parentName:"p"},"app")," directory, and export a React component. The framework will automatically generate the navigation and deep links for you, instantly with Fast Refresh."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app/home.tsx"',title:'"app/home.tsx"'},'import { View, Text } from "react-native";\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>\n      <Text>Home Screen</Text>\n    </View>\n  );\n}\n')),(0,r.kt)("p",null,"Optionally you can also set up a custom native scheme (otherwise the native app identifier will be used):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app.json"',title:'"app.json"'},'{\n    "expo": {\n        "scheme": "acme",\n    }\n}\n')),(0,r.kt)("p",null,"You can now start the app and visit the ",(0,r.kt)("inlineCode",{parentName:"p"},"/home")," route on any device. I recommend using ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/uri-scheme"},(0,r.kt)("inlineCode",{parentName:"a"},"uri-scheme"))," to test deep links on iOS and Android."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Platform"),(0,r.kt)("th",{parentName:"tr",align:null},"URL"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"iOS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"acme://home"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Android"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"acme://home"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"https://acme.com/home"))))),(0,r.kt)("p",null,"As you can imagine, this scales nicely and is very easy to maintain. You can create as many pages as you want, and the framework will automatically generate the navigation and deep links for you."),(0,r.kt)("h2",{id:"request-for-comments"},"Request for Comments"),(0,r.kt)("p",null,"We're excited to share the early beta of the Expo Router with you today. We want to hear ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/expo/router/discussions/1"},"your feedback")," and help us push the boundaries of what's possible with mobile development!"),(0,r.kt)("p",null,"We're looking for feedback on the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"API Design"),": Specifically the routing convention and layouts API. We want to make sure the API is intuitive and easy to use."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tooling and workflow"),": We want to make sure the tooling is fast and easy to use. We also want to make sure the workflow is intuitive and easy to understand, this is especially true for navigating URLs on a native device where there is no URL bar."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Performance"),': We want to make sure the app is fast and reliable. We also want to make sure the app is small and lightweight. We\'re currently focused on "make it work" with "make it fast" features like code splitting, bundle splitting, and lazy loading coming in a future version. The file system-based router enables us to implement many performance optimizations behind the scenes without the need to refactor in the future.')),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"To get started, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://expo.github.io/router"},"Expo Router documentation"),". Please report bugs and issues on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/expo/router"},"Expo Router GitHub repository"),"."))}c.isMDXComponent=!0}}]);