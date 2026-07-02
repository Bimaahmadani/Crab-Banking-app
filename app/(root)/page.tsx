import HeaderBox from "@/components/HeaderBox";
import React from "react";

const Home = () => {
    const loggedIn = {firstName: "John" };

    return (
        <section className="home">
            <div className="home-content">
                <header>
                    <HeaderBox 
                        type="greeting"
                        title="Welcome"
                        user= {loggedIn?.firstName || "Guest"}
                        subtext="Your trusted financial partner. Explore our services and manage your finances with ease."
                    />
                </header>
            </div>
        </section>
    )
}

export default Home;