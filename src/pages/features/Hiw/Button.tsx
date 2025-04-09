import React from "react";

const Button: React.FC = () => {
return (
    <div className="flex flex-col items-center text-center">
        <button className="bg-[#1572D3]/10 hover:bg-[#12569f]/50 text-blue flex flex-center gap-x-24 py-3 px-8 mt-48 rounded-lg text-[14px] ">
        HOW IT WORK
        </button>
        <h1 className="text-[34px] font-poppins text-center mt-11 "> 
            Rent with following 3 working steps
        </h1>
    </div>
    
);
};
export default Button;

