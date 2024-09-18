const CheckOtp = () => {
  return (
    <div>
      <form className="flex flex-col gap-y-3 text-xl pt-5">
        <label>Enter the code</label>
        <input type="text" placeholder="Enter code" className="rounded-md border-2 px-3 h-10 w-80" />
        <button
          type="submit"
          className="w-80 border-2 mt-3 rounded-md text-white bg-red-600 py-2 text-xl "
        >
          Add code
        </button>
      </form>
    </div>
  );
};

export default CheckOtp;
