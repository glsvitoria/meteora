import * as RadioGroup from "@radix-ui/react-radio-group";

interface ICheckboxProps {
  labels: string[];
}

export function Checkbox({ labels }: ICheckboxProps) {
  return (
    <RadioGroup.Root
      className="flex gap-6"
      defaultValue={labels[0]}
      aria-label="View density"
    >
      {labels.map(label => (
        <CheckboxItem key={label} label={label} />
      ))}
    </RadioGroup.Root>
  );
}

interface ICheckboxItemProps {
  label: string;
}

function CheckboxItem({ label }: ICheckboxItemProps) {
  return (
    <div className="flex flex-col items-center">
      <RadioGroup.Item
        className="bg-white w-5 h-5 rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 outline-none cursor-pointer duration-300"
        value={label}
        id="r1"
      >
        <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
      </RadioGroup.Item>
      <label className="text-black text-sm leading-none mt-2" htmlFor="r1">
        {label}
      </label>
    </div>
  );
}
