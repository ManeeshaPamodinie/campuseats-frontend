import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function OrderPage() {

  const [searchParams] = useSearchParams();

  const selectedDish = searchParams.get("dish") || "";

  const [form, setForm] = useState({
    dish: selectedDish,
    name: "",
    email: "",
    qty: 1
  });

  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  function validate(values) {

    const e = {};

    if (!values.dish) {
      e.dish = "Please select a dish";
    }

    if (values.name.trim().length < 2) {
      e.name = "Name too short";
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) {
      e.email = "Enter a valid email";
    }

    if (Number(values.qty) < 1) {
      e.qty = "Qty must be ≥ 1";
    }

    return e;
  }

  function handleChange(event) {

    setForm({
      ...form,
      [event.target.name]: event.target.value
    });

  }

  function handleSubmit(event) {

    event.preventDefault();

    const found = validate(form);

    setErrors(found);

    if (Object.keys(found).length === 0) {
      setDone(true);
    }

  }

  if (done) {

    return (

      <div className="menu-section">

        <h2>Order Successful!</h2>

        <p>
          Thanks, <strong>{form.name}</strong>!
        </p>

        <p>
          Your order for <strong>{form.dish}</strong> has been received.
        </p>

        <p>
          Quantity: <strong>{form.qty}</strong>
        </p>

      </div>

    );

  }

  return (

    <div className="menu-section">

      <h2>Place Your Order</h2>

      <form onSubmit={handleSubmit}>

        {/* Dish */}

        <div>

          <label>Dish</label>

          <br />

          <input
            type="text"
            name="dish"
            value={form.dish}
            readOnly
          />

          <br />

          {errors.dish && (
            <span>{errors.dish}</span>
          )}

        </div>

        <br />

        {/* Name */}

        <div>

          <label>Name</label>

          <br />

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <br />

          {errors.name && (
            <span>{errors.name}</span>
          )}

        </div>

        <br />

        {/* Email */}

        <div>

          <label>Email</label>

          <br />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <br />

          {errors.email && (
            <span>{errors.email}</span>
          )}

        </div>

        <br />

        {/* Quantity */}

        <div>

          <label>Quantity</label>

          <br />

          <input
            type="number"
            name="qty"
            value={form.qty}
            onChange={handleChange}
          />

          <br />

          {errors.qty && (
            <span>{errors.qty}</span>
          )}

        </div>

        <br />

        <button type="submit">
          Place Order
        </button>

      </form>

    </div>

  );

}

export default OrderPage;