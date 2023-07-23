import './globals.css';
import React from "react";
import Nav from "../components/Nav";
import Provider from "../components/Provider";

export const metadata = {
    title: "Promptopia",
    description: 'Discover & share AI prompts'
}
const RootLayout = ({children}) => {
    return (
        <html lang='en'>
        <body>
        <Provider>
            <div className="">
                <div className=""/>
            </div>
            <main className="w-full" style={{padding:"0px 50px"}}>
                <Nav className=""/>
                {children}
            </main>
        </Provider>
        </body>
        </html>
    )
}
export default RootLayout