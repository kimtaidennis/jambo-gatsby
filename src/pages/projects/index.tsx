import React from "react";
import Layout from "../components/Layout";
import { HeadFC } from "gatsby";

const Index = () => {
    return (
        <Layout>
            <div className="p-5 py-40 text-center space-y-5 bg-teal-600 text-white">
                <h2 className="font-bold text-5xl  text-center">Projects</h2>
                <p className="text-slate-100">
                    A great place to get started if you're new to web
                    development. Designed to guide you through setting up your
                    first Gatsby site.
                </p>
            </div>
        </Layout>
    );
};

export default Index;

export const Head: HeadFC = () => <title>Projects Jambo Gatsby</title>;
