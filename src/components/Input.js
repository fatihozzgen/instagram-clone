import { useEffect, useState } from "react";

function Input({ label, type = "text", ...props }) {
  const [show, setShow] = useState(false);
  const [inputType, setType] = useState(type);

  useEffect(() => {
    if (show) {
      setType("text");
    } else if (type === "password") {
      setType("password");
    }
  }, [show]);

  return (
    <label className=" relative flex  border rounded-sm bg-zinc-50  focus-within:border-gray-400 ">
      <input
        type={inputType}
        required={true}
        className="  px-2  w-full outline-none text-xs h-[38px] valid:pt-[10px] peer bg-zinc-50"
        {...props}
      />
      <small className="absolute top-1/2 left-[9px] cursor-text pointer-events-none  text-xs text-gray-500 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">
        {label}
      </small>
      {type === "password" && props?.value && (
        <div
          className=" cursor-pointer select-none h-full flex items-center text-sm font-semibold pr-2"
          type="button"
          onClick={() => setShow((show) => !show)}
        >
          {show ? "Hide" : "Show"}
        </div>
      )}
    </label>
  );
}

export default Input;
