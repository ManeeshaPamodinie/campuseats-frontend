import { useParams, Link } from "react-router-dom";

function DishDetailPage() {

  const { id } = useParams();
  // New dynamic look:
  const API_BASE = import.meta.env.VITE_API_URL || "";
  const { data: dish, isLoading, error } = useFetch(`${API_BASE}/api/menu/${id}`);


  return (
    <div>

      <h2>Dish Details</h2>

      <p>Showing details for dish #{id}</p>

      <Link to="/">← Back to Menu</Link>

    </div>
  );
}

export default DishDetailPage;