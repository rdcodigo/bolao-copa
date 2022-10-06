export function Input({ name, label, ...props }) {
    return (
      <div className="flex flex-col">
        <label className="text-sm font-bold text-color4-20 mb-2" htmlFor={name}>{label}</label>
        <input className="p-3 border border-color4-30 rounded-xl focus:outline focus:outline-1 focus:outline-color4-30" name={name} id={name} {...props} />
      </div>
    )
  }