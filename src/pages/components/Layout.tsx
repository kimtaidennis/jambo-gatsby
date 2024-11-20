import React, { ReactNode } from "react";
import Navbar from "./Navbar";

type Props = {
    children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="pt-16 bg-slate-50">
            <Navbar />

            <main className="text-slate-800">{children}</main>

            <footer className="bg-slate-900 p-5 flex justify-center items-center">
                <p className="text-white">Copyright 2024 Jambo Gatsby</p>
            </footer>
        </div>
    );
};

export default Layout;
