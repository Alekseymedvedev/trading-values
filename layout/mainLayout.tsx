import React, {FC} from 'react';
import Head from "next/head";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Script from 'next/script';


interface MainLayoutProps {
    children: any;
    title: string;
    description?: string;
    keywords?: string;
    content?: string
}

const MainLayout: FC<MainLayoutProps> = ({children, title,content}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={content}/>
                <link rel="icon" href="/favicon.png"/>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
window.yaContextCb=window.yaContextCb||[]
              `,
                    }}
                />
                <script src="https://yandex.ru/ads/system/context.js" async/>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
           
window.yaContextCb.push(()=>{
  Ya.Context.AdvManager.render({
    type: 'fullscreen',    
    platform: 'touch',
    blockId: 'R-A-2092130-1'
  })
})
              `,
                    }}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
  window.yaContextCb.push(()=>{
  Ya.Context.AdvManager.render({
    type: 'floorAd',    
    blockId: 'R-A-2092130-2'
  })
})

              `,
                    }}
                />

            </Head>

            <div className="container">
                <Header/>

                <main className="main">
                    {children}
                </main>

                <Footer/>
            </div>
        </>
    );
};

export default MainLayout;