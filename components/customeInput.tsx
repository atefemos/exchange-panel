// types of props
interface Prop {
  name: string;
}

const CustomInput = ({ name }: Prop) => {
  // render component
  return (
    <div className="flex items-center justify-between">
      <label className="text-[12px] my-0">{name}</label>
      <input
        name={name}
        placeholder={name}
        className="rounded-[4px] text-[12px] h-[32px] focus:border-[1px] border-solid border-blue-700 bg-blue-100 outline-none px-2 my-4 w-3/4 shadow-sm"
      />
    </div>
  );
};

export default CustomInput;
