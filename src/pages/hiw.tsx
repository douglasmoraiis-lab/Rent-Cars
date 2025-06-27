import React from "react";
import Card from "./features/Hiw/card";
import Mark from "./features/Hiw/mark";
import Button from "./features/Hiw/Button";

const Home: React.FC = () => {
    return (
    <div>
        <div className="space-y-4">
            <Button/>
            <Card/>
            <Mark/>
        </div>
    </div>
    )
}


export default Home