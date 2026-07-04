import HeaderBox from "@/components/ui/HeaderBox";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
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

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks = {1}
                        totalCurrentBalance = {1784.50}
                    />
                </header>
            </div>
        </section>
    )
}

export default Home;