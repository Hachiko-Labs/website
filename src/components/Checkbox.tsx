import { useState } from "react";
import { useStore } from "@nanostores/react";

import { isChecked as isCheckedStore } from "../store/isChecked";

interface Props {
  onLabel?: string;
  offLabel?: string;
}

export const Checkbox = ({ offLabel, onLabel }: Props) => {
  const [isChecked, setChecked] = useState(false);
  const isCheckedValue = useStore(isCheckedStore);

  const handleChange = () => {
    isCheckedStore.set(!isCheckedValue);
    setChecked(!isChecked);
  };

  return (
    <label className="mx-auto bg-customDarkBg3 relative flex justify-between items-center group text-xl w-44 h-12 rounded-lg pr-36 pl-1 cursor-pointer">
      <input
        type="checkbox"
        className="peer appearance-none"
        checked={isChecked}
        onChange={handleChange}
      />
      <span className="h-8 w-[5.5rem] flex items-center pr-2 after:rounded-lg duration-300 ease-in-out  after:w-[30rem] after:h-10  after:bg-primary   after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem] cursor-pointer"></span>
      <div className="flex absolute text-sm font-bold">
        <div className={!isChecked ? "mr-9 ml-3 text-white" : "mr-9 ml-3 text-gray-400"}>
          {onLabel}
        </div>
        <div className={!isChecked ? "text-gray-400" : "text-white"}>{offLabel}</div>
      </div>
    </label>
  );
};
