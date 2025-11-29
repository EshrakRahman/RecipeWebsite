function RecipeFilters() {
  return (
    <div className="filters ">
      {/* Max Prep Time */}
      <div className="max-prep-time ">
        <label htmlFor="prep-time" className="tp-8 text-neutral-900">
          Max Prep Time
        </label>

        <div className=" ">
          <select id="prep-time" className="">
            <option value="0">0 minutes</option>
            <option value="5">5 minutes</option>
            <option value="10">10 minutes</option>
            <option value="15">15 minutes</option>
            <option value="20">20 minutes</option>
          </select>

          <button className="">Clear</button>
        </div>
      </div>

      {/* Max Cook Time */}
      <div className="">
        <label htmlFor="cook-time" className="">
          Max Cook Time
        </label>

        <div className="">
          <select id="cook-time" className="">
            <option value="0">0 minutes</option>
            <option value="5">5 minutes</option>
            <option value="10">10 minutes</option>
            <option value="15">15 minutes</option>
            <option value="20">20 minutes</option>
            <option className="">Clear</option>
          </select>
        </div>
      </div>

      {/* Search bar */}
      <div className="search ">
        <label className="" htmlFor="search">
          Search
        </label>

        <input id="search" type="text" placeholder="Tomato" className="" />
      </div>
    </div>
  );
}

export default RecipeFilters;
