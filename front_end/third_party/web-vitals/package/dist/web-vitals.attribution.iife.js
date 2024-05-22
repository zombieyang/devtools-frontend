var webVitals=function(t){"use strict";var e,n,r=function(){var t=self.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];if(t&&t.responseStart>0&&t.responseStart<performance.now())return t},i=function(t){if("loading"===document.readyState)return"loading";var e=r();if(e){if(t<e.domInteractive)return"loading";if(0===e.domContentLoadedEventStart||t<e.domContentLoadedEventStart)return"dom-interactive";if(0===e.domComplete||t<e.domComplete)return"dom-content-loaded"}return"complete"},a=function(t){var e=t.nodeName;return 1===t.nodeType?e.toLowerCase():e.toUpperCase().replace(/^#/,"")},o=function(t,e){var n="";try{for(;t&&9!==t.nodeType;){var r=t,i=r.id?"#"+r.id:a(r)+(r.classList&&r.classList.value&&r.classList.value.trim()&&r.classList.value.trim().length?"."+r.classList.value.trim().replace(/\s+/g,"."):"");if(n.length+i.length>(e||100)-1)return n||i;if(n=n?i+">"+n:i,r.id)break;t=r.parentNode}}catch(t){}return n},c=-1,s=function(){return c},u=function(t){addEventListener("pageshow",(function(e){e.persisted&&(c=e.timeStamp,t(e))}),!0)},f=function(){var t=r();return t&&t.activationStart||0},d=function(t,e){var n=r(),i="navigate";s()>=0?i="back-forward-cache":n&&(document.prerendering||f()>0?i="prerender":document.wasDiscarded?i="restore":n.type&&(i=n.type.replace(/_/g,"-")));return{name:t,value:void 0===e?-1:e,rating:"good",delta:0,entries:[],id:"v4-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:i}},l=function(t,e,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var r=new PerformanceObserver((function(t){Promise.resolve().then((function(){e(t.getEntries())}))}));return r.observe(Object.assign({type:t,buffered:!0},n||{})),r}}catch(t){}},m=function(t,e,n,r){var i,a;return function(o){e.value>=0&&(o||r)&&((a=e.value-(i||0))||void 0===i)&&(i=e.value,e.delta=a,e.rating=function(t,e){return t>e[1]?"poor":t>e[0]?"needs-improvement":"good"}(e.value,n),t(e))}},p=function(t){requestAnimationFrame((function(){return requestAnimationFrame((function(){return t()}))}))},v=function(t){document.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState&&t()}))},h=function(t){var e=!1;return function(){e||(t(),e=!0)}},g=-1,T=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},y=function(t){"hidden"===document.visibilityState&&g>-1&&(g="visibilitychange"===t.type?t.timeStamp:0,S())},E=function(){addEventListener("visibilitychange",y,!0),addEventListener("prerenderingchange",y,!0)},S=function(){removeEventListener("visibilitychange",y,!0),removeEventListener("prerenderingchange",y,!0)},b=function(){return g<0&&(g=T(),E(),u((function(){setTimeout((function(){g=T(),E()}),0)}))),{get firstHiddenTime(){return g}}},C=function(t){document.prerendering?addEventListener("prerenderingchange",(function(){return t()}),!0):t()},L=[1800,3e3],M=function(t,e){e=e||{},C((function(){var n,r=b(),i=d("FCP"),a=l("paint",(function(t){t.forEach((function(t){"first-contentful-paint"===t.name&&(a.disconnect(),t.startTime<r.firstHiddenTime&&(i.value=Math.max(t.startTime-f(),0),i.entries.push(t),n(!0)))}))}));a&&(n=m(t,i,L,e.reportAllChanges),u((function(r){i=d("FCP"),n=m(t,i,L,e.reportAllChanges),p((function(){i.value=performance.now()-r.timeStamp,n(!0)}))})))}))},w=[.1,.25],D=0,I=1/0,F=0,P=function(t){t.forEach((function(t){t.interactionId&&(I=Math.min(I,t.interactionId),F=Math.max(F,t.interactionId),D=F?(F-I)/7+1:0)}))},k=function(){"interactionCount"in performance||e||(e=l("event",P,{type:"event",buffered:!0,durationThreshold:0}))},x=[],A=new Map,B=0,O=function(){return(e?D:performance.interactionCount||0)-B},R=[],j=function(t){if(R.forEach((function(e){return e(t)})),t.interactionId||"first-input"===t.entryType){var e=x[x.length-1],n=A.get(t.interactionId);if(n||x.length<10||t.duration>e.latency){if(n)t.duration>n.latency?(n.entries=[t],n.latency=t.duration):t.duration===n.latency&&t.startTime===n.entries[0].startTime&&n.entries.push(t);else{var r={id:t.interactionId,latency:t.duration,entries:[t]};A.set(r.id,r),x.push(r)}x.sort((function(t,e){return e.latency-t.latency})),x.length>10&&x.splice(10).forEach((function(t){return A.delete(t.id)}))}}},q=function(t){var e=self.requestIdleCallback||self.setTimeout,n=-1;return t=h(t),"hidden"===document.visibilityState?t():(n=e(t),v(t)),n},N=[200,500],H=function(t,e){e=e||{},C((function(){var n;k();var r,i=d("INP"),a=function(t){t.forEach(j);var e,n=(e=Math.min(x.length-1,Math.floor(O()/50)),x[e]);n&&n.latency!==i.value&&(i.value=n.latency,i.entries=n.entries,r())},o=l("event",a,{durationThreshold:null!==(n=e.durationThreshold)&&void 0!==n?n:40});r=m(t,i,N,e.reportAllChanges),o&&("PerformanceEventTiming"in self&&"interactionId"in PerformanceEventTiming.prototype&&o.observe({type:"first-input",buffered:!0}),v((function(){a(o.takeRecords()),r(!0)})),u((function(){B=0,x.length=0,A.clear(),i=d("INP"),r=m(t,i,N,e.reportAllChanges)})))}))},V=[],W=new Map,z=[],U=new WeakMap,_=new Map,G=-1,J=function(t){t.forEach((function(t){return V.push(t)}))},K=function(){_.size>10&&_.forEach((function(t,e){A.has(e)||_.delete(e)})),z=z.slice(-50);var t=new Set(z.concat(x.map((function(t){return U.get(t.entries[0])}))));W.forEach((function(e,n){t.has(n)||W.delete(n)}));var e=new Set;W.forEach((function(t){$(t.startTime,t.processingEnd).forEach((function(t){e.add(t)}))})),V=Array.from(e),G=-1};R.push((function(t){t.interactionId&&t.target&&!_.has(t.interactionId)&&_.set(t.interactionId,t.target)}),(function(t){for(var e,n=t.startTime+t.duration,r=z.length-1;r>=0;r--)if(e=z[r],Math.abs(n-e)<=8){var i=W.get(e);i.startTime=Math.min(t.startTime,i.startTime),i.processingStart=Math.min(t.processingStart,i.processingStart),i.processingEnd=Math.max(t.processingEnd,i.processingEnd),i.entries.push(t),n=e;break}n!==e&&(z.push(n),W.set(n,{startTime:t.startTime,processingStart:t.processingStart,processingEnd:t.processingEnd,entries:[t]})),(t.interactionId||"first-input"===t.entryType)&&U.set(t,n)}),(function(){G<0&&(G=q(K))}));var Q,X,Y,Z,$=function(t,e){for(var n,r=[],i=0;n=V[i];i++)if(!(n.startTime+n.duration<t)){if(n.startTime>e)break;r.push(n)}return r},tt=[2500,4e3],et={},nt=[800,1800],rt=function t(e){document.prerendering?C((function(){return t(e)})):"complete"!==document.readyState?addEventListener("load",(function(){return t(e)}),!0):setTimeout(e,0)},it=function(t,e){e=e||{};var n=d("TTFB"),i=m(t,n,nt,e.reportAllChanges);rt((function(){var a=r();a&&(n.value=Math.max(a.responseStart-f(),0),n.entries=[a],i(!0),u((function(){n=d("TTFB",0),(i=m(t,n,nt,e.reportAllChanges))(!0)})))}))},at={passive:!0,capture:!0},ot=new Date,ct=function(t,e){Q||(Q=e,X=t,Y=new Date,ft(removeEventListener),st())},st=function(){if(X>=0&&X<Y-ot){var t={entryType:"first-input",name:Q.type,target:Q.target,cancelable:Q.cancelable,startTime:Q.timeStamp,processingStart:Q.timeStamp+X};Z.forEach((function(e){e(t)})),Z=[]}},ut=function(t){if(t.cancelable){var e=(t.timeStamp>1e12?new Date:performance.now())-t.timeStamp;"pointerdown"==t.type?function(t,e){var n=function(){ct(t,e),i()},r=function(){i()},i=function(){removeEventListener("pointerup",n,at),removeEventListener("pointercancel",r,at)};addEventListener("pointerup",n,at),addEventListener("pointercancel",r,at)}(e,t):ct(e,t)}},ft=function(t){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return t(e,ut,at)}))},dt=[100,300],lt=function(t,e){e=e||{},C((function(){var n,r=b(),i=d("FID"),a=function(t){t.startTime<r.firstHiddenTime&&(i.value=t.processingStart-t.startTime,i.entries.push(t),n(!0))},o=function(t){t.forEach(a)},c=l("first-input",o);n=m(t,i,dt,e.reportAllChanges),c&&(v(h((function(){o(c.takeRecords()),c.disconnect()}))),u((function(){var r;i=d("FID"),n=m(t,i,dt,e.reportAllChanges),Z=[],X=-1,Q=null,ft(addEventListener),r=a,Z.push(r),st()})))}))};return t.CLSThresholds=w,t.FCPThresholds=L,t.FIDThresholds=dt,t.INPThresholds=N,t.LCPThresholds=tt,t.TTFBThresholds=nt,t.onCLS=function(t,e){!function(t,e){e=e||{},M(h((function(){var n,r=d("CLS",0),i=0,a=[],o=function(t){t.forEach((function(t){if(!t.hadRecentInput){var e=a[0],n=a[a.length-1];i&&t.startTime-n.startTime<1e3&&t.startTime-e.startTime<5e3?(i+=t.value,a.push(t)):(i=t.value,a=[t])}})),i>r.value&&(r.value=i,r.entries=a,n())},c=l("layout-shift",o);c&&(n=m(t,r,w,e.reportAllChanges),v((function(){o(c.takeRecords()),n(!0)})),u((function(){i=0,r=d("CLS",0),n=m(t,r,w,e.reportAllChanges),p((function(){return n()}))})),setTimeout(n,0))})))}((function(e){var n=function(t){var e,n={};if(t.entries.length){var r=t.entries.reduce((function(t,e){return t&&t.value>e.value?t:e}));if(r&&r.sources&&r.sources.length){var a=(e=r.sources).find((function(t){return t.node&&1===t.node.nodeType}))||e[0];a&&(n={largestShiftTarget:o(a.node),largestShiftTime:r.startTime,largestShiftValue:r.value,largestShiftSource:a,largestShiftEntry:r,loadState:i(r.startTime)})}}return Object.assign(t,{attribution:n})}(e);t(n)}),e)},t.onFCP=function(t,e){M((function(e){var n=function(t){var e={timeToFirstByte:0,firstByteToFCP:t.value,loadState:i(s())};if(t.entries.length){var n=r(),a=t.entries[t.entries.length-1];if(n){var o=n.activationStart||0,c=Math.max(0,n.responseStart-o);e={timeToFirstByte:c,firstByteToFCP:t.value-c,loadState:i(t.entries[0].startTime),navigationEntry:n,fcpEntry:a}}}return Object.assign(t,{attribution:e})}(e);t(n)}),e)},t.onFID=function(t,e){lt((function(e){var n=function(t){var e=t.entries[0],n={eventTarget:o(e.target),eventType:e.name,eventTime:e.startTime,eventEntry:e,loadState:i(e.startTime)};return Object.assign(t,{attribution:n})}(e);t(n)}),e)},t.onINP=function(t,e){n||(n=l("long-animation-frame",J)),H((function(e){q((function(){var n=function(t){var e=t.entries[0],n=U.get(e),r=W.get(n),a=e.processingStart,c=r.processingEnd,s=r.entries.sort((function(t,e){return t.processingStart-e.processingStart})),u=$(e.startTime,c),f=t.entries.find((function(t){return t.target})),d=f&&f.target||_.get(e.interactionId),l=[e.startTime+e.duration,c].concat(u.map((function(t){return t.startTime+t.duration}))),m=Math.max.apply(Math,l),p={interactionTarget:o(d),interactionTargetElement:d,interactionType:e.name.startsWith("key")?"keyboard":"pointer",interactionTime:e.startTime,nextPaintTime:m,processedEventEntries:s,longAnimationFrameEntries:u,inputDelay:a-e.startTime,processingDuration:c-a,presentationDelay:Math.max(m-c,0),loadState:i(e.startTime)};return Object.assign(t,{attribution:p})}(e);t(n)}))}),e)},t.onLCP=function(t,e){!function(t,e){e=e||{},C((function(){var n,r=b(),i=d("LCP"),a=function(t){e.reportAllChanges||(t=t.slice(-1)),t.forEach((function(t){t.startTime<r.firstHiddenTime&&(i.value=Math.max(t.startTime-f(),0),i.entries=[t],n())}))},o=l("largest-contentful-paint",a);if(o){n=m(t,i,tt,e.reportAllChanges);var c=h((function(){et[i.id]||(a(o.takeRecords()),o.disconnect(),et[i.id]=!0,n(!0))}));["keydown","click"].forEach((function(t){addEventListener(t,(function(){return q(c)}),!0)})),v(c),u((function(r){i=d("LCP"),n=m(t,i,tt,e.reportAllChanges),p((function(){i.value=performance.now()-r.timeStamp,et[i.id]=!0,n(!0)}))}))}}))}((function(e){var n=function(t){var e={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadDuration:0,elementRenderDelay:t.value};if(t.entries.length){var n=r();if(n){var i=n.activationStart||0,a=t.entries[t.entries.length-1],c=a.url&&performance.getEntriesByType("resource").filter((function(t){return t.name===a.url}))[0],s=Math.max(0,n.responseStart-i),u=Math.max(s,c?(c.requestStart||c.startTime)-i:0),f=Math.max(u,c?c.responseEnd-i:0),d=Math.max(f,a.startTime-i);e={element:o(a.element),timeToFirstByte:s,resourceLoadDelay:u-s,resourceLoadDuration:f-u,elementRenderDelay:d-f,navigationEntry:n,lcpEntry:a},a.url&&(e.url=a.url),c&&(e.lcpResourceEntry=c)}}return Object.assign(t,{attribution:e})}(e);t(n)}),e)},t.onTTFB=function(t,e){it((function(e){var n=function(t){var e={waitingDuration:0,cacheDuration:0,dnsDuration:0,connectionDuration:0,requestDuration:0};if(t.entries.length){var n=t.entries[0],r=n.activationStart||0,i=Math.max((n.workerStart||n.fetchStart)-r,0),a=Math.max(n.domainLookupStart-r,0),o=Math.max(n.connectStart-r,0),c=Math.max(n.connectEnd-r,0);e={waitingDuration:i,cacheDuration:a-i,dnsDuration:o-a,connectionDuration:c-o,requestDuration:t.value-c,navigationEntry:n}}return Object.assign(t,{attribution:e})}(e);t(n)}),e)},t}({});
