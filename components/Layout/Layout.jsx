import React from 'react';
import Head from 'next/head';

const Layout = (props) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta name="theme-color" content="#000000" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:image" content="https://www.syncfusion.com/blogs/wp-content/uploads/2020/07/Top-6-Front-End-Web-Development-Tools-to-Increase-Your-Productivity-in-2020-1.jpg"></meta>
                {/* Favicon */}
                <link rel="icon" href="/images/Favicon.png" />
                {/* Font Open Sans */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
                    rel="stylesheet"

                />
                <script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
                <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
                {/* Bootstrap, Font Awesome 4.7 */}
                <link rel="stylesheet" href="/css/argon.min.css" />
                <link rel="stylesheet" href="/css/font-awesome.min.css" />
            </Head>
            {props.children}
        </>
    );
}

export default Layout;
