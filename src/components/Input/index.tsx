import { InputRes } from "./type";

export const Input = ({ type, name, register }: InputRes) => {
  return (
    <>
      <input
        {...register(name, { required: true })}
        type={type}
        className="border rounded-md block mb-6 py-2 shadow-md focus:border-red-300 outline-none w-full pl-5 focus:border-2"
      />
    </>
  );
};
