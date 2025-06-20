import React from "react";

type TagProps = {
  label: string;
  onClick: () => void;
};

export default function Tag({ label, onClick }: TagProps) {
  return (
    <span
      onClick={onClick}
      className="cursor-pointer bg-cyan-100 text-cyan-700 font-bold text-sm px-3 py-1 rounded-md hover:bg-cyan-700 hover:text-white transition"
    >
      {label}
    </span>
  );
}
