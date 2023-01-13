import Script from "next/script";
import React from "react";


const Advertisement = () => {
    return (
        <>
            <div id="yandex_rtb_R-A-2092130-3"></div>

            <Script
                dangerouslySetInnerHTML={{
                    __html: `
                    window.yaContextCb=window.yaContextCb||[]
                    window.yaContextCb.push(()=>{
                    Ya.Context.AdvManager.render({
                        renderTo: 'yandex_rtb_R-A-2092130-3',
                        blockId: 'R-A-2092130-3'
                    })
                })

              `,
                }}
            />
        </>
    );
};

export default Advertisement;