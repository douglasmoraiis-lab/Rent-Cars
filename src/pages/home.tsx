import React from "react";
import Bar from "../pages/features/home/bar";
import Capa from "../pages/features/home/capa";
import Location from "../pages/features/home/location"

const Home: React.FC = () => {
    return (
    <div>
        <div className="flex mt-10">
            <div className="-mr-96"><Bar /></div> 
            <Capa />
        </div>
        <Location />
    </div>
    )
}


export default Home