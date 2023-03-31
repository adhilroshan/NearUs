import Hero from "@/components/LandingPage/Hero";
import { useEffect } from "react";


function LandingPage() {

    // run the server when a user enters the site
    // const fetchAllEvents = async () => {
    //     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getallevents`);
    //     if (!response.ok) {
    //         throw new Error(`${response.status} ${response.statusText}`);
    //     }
    // };

    // useEffect(() => {
    //     fetchAllEvents();
    // }, []);

    return (
        <div className="overflow-x-hidden bg-gradient-to-br from-blue-50 to-blue-200">
            <div className="flex flex-col min-h-screen overflow-x-hidden ">
                <main className="grow">
                    <Hero />
                </main>
            </div>
            
        </div>
    );
}

export default LandingPage;
