import React, { useState, useRef, useEffect } from "react";

const CustomCategoryDropdown = ({ value, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const categories = ["General", "Maintenance", "Event", "Emergency", "Other"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-black hover:bg-stone-400 hover:text-white rounded-md px-3 py-2 text-base font-medium flex justify-between items-center"
      >
        {value}
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-20 w-full bg-neutral-50 rounded-md shadow-lg">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  onSelect(category);
                  setIsOpen(false);
                }}
                className={`text-black hover:bg-stone-400 hover:text-white block rounded-md px-3 py-2 text-base font-medium w-full text-left ${
                  value === category ? "bg-stone-500 text-white" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomCategoryDropdown;
