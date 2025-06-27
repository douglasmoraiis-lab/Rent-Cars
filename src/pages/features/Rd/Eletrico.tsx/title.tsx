import React from "react";
import Button1 from "../../../../components/button1";

const Title4: React.FC = () => {
  return (
    <section className="text-center mt-1">
      <Button1
        label="POPULAR RENTAL DEALS"
        className="inline-block mb-2 bg-gray-400 text-white font-semibold text-xs px-4 py-1 rounded-md hover:bg-blue-150 transition duration-200"
      />

      <h2 className="text-4xl sm:text-3xl font-semibold mt-2 text-gray-800">
        Most popular cars rental deals
      </h2>

      <div className="mt-6"></div>
    </section>
  );
};

export default Title4;
