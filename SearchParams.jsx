import { useState } from "react";
const SearchParams = () => {
  const [location, SetLocation] = useState("Seatle, WA");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="Location"
            value={location}
            onChange={(e) => SetLocation(e.target.value)}
            placeholder="Location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
