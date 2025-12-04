function RecipeFilters({
  cookTime,
  prepTime,
  setCookTime,
  setPrepTime,
  search,
  setSearch,
}) {
  return (
    <div className="filters flex p-4 lg:mx-25 flex-col justify-evenly gap-6 md:flex-row md:items-end md:gap-10">
      {/* Max Prep Time */}
      <div className="flex flex-col gap-2">
        <label htmlFor="prep-time" className="tp-8 text-neutral-900">
          Max Prep Time
        </label>

        <div className="flex items-center gap-3">
          <select
            id="prep-time"
            className="border border-neutral-300 rounded-lg px-3 py-2"
            value={prepTime}
            onChange={(e) => setPrepTime(e.target.value)}
          >
            <option value="0">0 minutes</option>
            <option value="5">5 minutes</option>
            <option value="10">10 minutes</option>
            <option value="15">15 minutes</option>
            <option value="20">20 minutes</option>
          </select>

          <button
            onClick={() => setPrepTime("")}
            className="text-sm text-neutral-600 hover:text-neutral-900 hover:cursor-pointer "
          >
            Clear
          </button>
        </div>
      </div>

      {/* Max Cook Time */}
      <div className="flex flex-col gap-2">
        <label htmlFor="cook-time" className="tp-8 text-neutral-900">
          Max Cook Time
        </label>

        <div className="flex items-center gap-3">
          <select
            id="cook-time"
            className="border border-neutral-300 rounded-lg px-3 py-2"
            value={cookTime}
            onChange={(e) => setCookTime(e.target.value)}
          >
            <option value="0">0 minutes</option>
            <option value="5">5 minutes</option>
            <option value="10">10 minutes</option>
            <option value="15">15 minutes</option>
            <option value="20">20 minutes</option>
          </select>

          <button
            onClick={() => setCookTime("")}
            className="text-sm text-neutral-600 hover:text-neutral-900 hover:cursor-pointer"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Search bar */}
      <div className="flex flex-col gap-2">
        <label htmlFor="search" className="tp-8 text-neutral-900">
          Search
        </label>

        <input
          id="search"
          type="text"
          placeholder="Tomato"
          className="border border-neutral-300 rounded-lg px-3 py-2"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>
    </div>
  );
}

export default RecipeFilters;
