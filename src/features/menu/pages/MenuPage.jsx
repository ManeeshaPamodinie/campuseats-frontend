import { useState } from "react";
import MenuList from "../components/MenuList";
import { useDebounce } from "../hooks/useDebounce";
import { useFetch } from "../hooks/useFetch";


function MenuPage() {

  // New dynamic look:
  const API_BASE = import.meta.env.VITE_API_URL || "";
  const { data: dishes, isLoading, error } = useFetch(`${API_BASE}/api/menu`);
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query, 400);


  if (isLoading) {
    return <p>Loading menu...</p>;
  }


  if (error) {
    return <p>Could not load menu: {error}</p>;
  }


  const filtered = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(debounced.toLowerCase())
  );


  return (
    <div className="menu-section">

      <h2>CampusEats Menu</h2>


      <input
        className="search-bar"
        type="text"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        placeholder="Search dishes..."
      />

      <br /><br />


      <MenuList dishes={filtered}/>


    </div>
  );

}

export default MenuPage;