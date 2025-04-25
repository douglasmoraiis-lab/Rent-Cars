import React from "react";
import Button1 from "../../../components/button1";

const Title2: React.FC = () => {
  return (
    <section className="text-center mt-1">
      <Button1
        label="POPULAR RENTAL DEALS"
        className="inline-block mb-2 bg-blue-100 text-blue-600 font-semibold text-xs px-4 py-1 rounded-md tracking-wide hover:bg-blue-200 transition duration-200 ease-in-out"
      />

      <h2 className="text-4xl sm:text-3xl font-semibold mt-2 text-gray-800">
        Most popular cars rental deals
      </h2>

      <div className="mt-6"></div>
    </section>
  );
};

export default Title2;
