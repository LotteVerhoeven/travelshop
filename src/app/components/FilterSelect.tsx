"use client";

type Props = {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export default function FilterSelect({ label, options, value, onChange }: Props) {
  return (
    <div className="flex flex-col">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded px-3 py-2"
      >
        <option value="">All {label.toLowerCase()}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
