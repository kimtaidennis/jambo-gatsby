import { HeadFC, PageProps } from "gatsby";
import React from "react";
import Layout from "./components/Layout";

const About: React.FC<PageProps> = () => {
    return (
        <Layout>
            <div className="p-5 py-40 text-center space-y-5 bg-indigo-600 text-white">
                <h2 className="font-bold text-5xl  text-center">About Page</h2>
                <p className="text-slate-100">
                    A great place to get started if you're new to web
                    development. Designed to guide you through setting up your
                    first Gatsby site.
                </p>
            </div>
            <div className="container mx-auto "></div>
        </Layout>
    );
};

export default About;

export const Head: HeadFC = () => <title>About Jambo Gatsby</title>;
