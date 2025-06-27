import React from "react";
import Title2 from "./features/Rd/SectionTitle";
import Cards from "./features/Rd/cards";
import Filter from "./features/Rd/filter";
const pdt: React.FC = () => {
    return (
        <div className="">
            <Title2/>
            <Filter/>
            <Cards/>
        </div>
    )
}
export default pdt;