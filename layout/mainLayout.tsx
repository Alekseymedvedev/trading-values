import React, {FC} from 'react';
import Head from "next/head";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";


interface MainLayoutProps {
    children: any;
    title: string;
    description?: string;
    keywords?: string;
}

const MainLayout: FC<MainLayoutProps> = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.png"/>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
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