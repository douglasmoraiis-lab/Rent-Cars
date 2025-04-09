import React from "react";

type ButtonProps = {
label: string;
onClick?: () => void;
subtitle?: string;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, subtitle }) => {
return (
    <div className="flex flex-col items-center text-center">
    <button
        onClick={onClick}
        className="bg-[#1572D3]/10 hover:bg-[#12569f]/50 text-blue flex flex-center gap-x-24 py-3 px-8 mt-48 rounded-lg text-[14px]"
    >
        {label}
    </button>

    {subtitle && (
        <h1 className="text-[34px] font-poppins text-center mt-11">
        {subtitle}
        </h1>
    )}
    </div>
);
};

export default Button;


