import {Html, Head, Main, NextScript} from 'next/document'
import mainLayout from "../layout/mainLayout";
import Script from "next/script";
import React from "react";

export default function Document() {
    return (
        <Html dir="ltr" lang="ru-RU">
            <Head/>
            <body>
            <Main/>
            <NextScript/>

            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    
                      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                       m[i].l=1*new Date();
                       for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                       k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                       (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                    
                       ym(92033844, "init", {
                            clickmap:true,
                            trackLinks:true,
                            accurateTrackBounce:true,
                            webvisor:true
                       });

              `,
                }}
            />
            <Script
                dangerouslySetInnerHTML={{
                    __html: `
window.yaContextCb=window.yaContextCb||[]
              `,
                }}
            />
            <Script src="https://yandex.ru/ads/system/context.js" async/>
            <Script
                dangerouslySetInnerHTML={{
                    __html: `
           
window.yaContextCb.push(()=>{
  Ya.Context.AdvManager.render({
    type: 'fullscreen',    
    platform: 'touch',
    blockId: 'R-A-2092130-1'
  })
              `,
                }}
            />
            <Script
                dangerouslySetInnerHTML={{
                    __html: `
           window.yaContextCb.push(()=>{
  Ya.Context.AdvManager.render({
    type: 'fullscreen',    
    platform: 'touch',
    blockId: 'R-A-2092130-1'
  })

              `,
                }}
            />
            <noscript>
                <div>
                    <img src="https://mc.yandex.ru/watch/92033844"  style={{position: 'absolute', left: '-9999px'}}
                         alt=""/>
                </div>
            </noscript>
            </body>
        </Html>
    )
}
