import { Link } from "react-router-dom";

function DishCard({ dish }) {
  return (
    <div className="menu-card">
      <h3>{dish.name}</h3>

      <p className="price">
        Rs. {dish.price.toFixed(2)}
      </p>

      <p className="details">
        {dish.category}
      </p>

      {!dish.available && (
        <span style={{ color: "red" }}>Sold Out</span>
      )}

      <br />
      <br />

      <Link to={`/dish/${dish.id}`}>
        <button className="card-btn">
          View Details
        </button>
      </Link>

      <br />
      <br />

      <Link to={`/order?dish=${encodeURIComponent(dish.name)}`}>
        <button className="card-btn">
          Order Now
        </button>
      </Link>
    </div>
  );
}

export default DishCard;