import { useState } from "react";
import { ChevronDown } from "lucide-react";

function Dropdown({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full md:w-48">
      {/* Label */}
      <p className="tp-8 text-neutral-900 mb-spacing-050">{label}</p>

      {/* Dropdown Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between border border-neutral-300 bg-neutral-0 rounded-xl px-spacing-150 py-spacing-100 tp-9"
      >
        <span>{value ? `${value} minutes` : "Select"}</span>
        <ChevronDown size={18} className="text-neutral-700" />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute z-20 mt-spacing-050 w-full bg-neutral-0 border border-neutral-200 rounded-xl shadow-lg py-spacing-050">
          {options.map((opt) => (
            <button
              key={opt}
              className="w-full text-left px-spacing-150 py-spacing-100 tp-9 hover:bg-neutral-100"
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt} minutes
            </button>
          ))}

          {/* Clear */}
          <button
            className="w-full text-left px-spacing-150 py-spacing-100 tp-9 text-link hover:text-orange-500"
            onClick={() => {
              onChange(null);
              setOpen(false);
            }}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
