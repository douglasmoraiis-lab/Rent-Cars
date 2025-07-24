import React from "react";
import PopularCars from "../components/PopularCars";
import SectionTitle from "./features/Rd/SectionTitle";
import CategoryFilter from "./features/Rd/CategoryFilter";

const RentalDeals: React.FC = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <main className="pt-24">
                {/* Section Title */}
                <SectionTitle />
                
                {/* Popular Cars Section */}
                <PopularCars />
                
                {/* Category Filter */}
                <CategoryFilter />
            </main>
        </div>
    );
};

export default RentalDeals;