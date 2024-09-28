export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl mt-3 font-bold">Add Poster</h1>
      <hr className="w-44 border-red-500 border-2 mb-5" />
      <form className="flex flex-col">
        <label className="posterLabel">title</label>
        <input type="text" className="posterInput" />
        <label className="posterLabel">information</label>
        <textarea className="posterInput" />
        <label className="posterLabel">price</label>
        <input type="number" className="posterInput" />
        <label className="posterLabel">city</label>
        <input type="text" className="posterInput" />
        {/* ........................................... */}
        <label className="posterLabel">Chategory:</label>
        <select className="posterSelect">
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
        <button className="border-2 w-1/2 mt-10 rounded-lg py-3 text-white bg-red-500 text-2xl ">
          Add poster
        </button>
      </form>
    </div>
  );
}
