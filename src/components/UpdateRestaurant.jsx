import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { updateResto } from "../features/restaurant/restaurantSlice";
import { useDispatch } from "react-redux";

const UpdateRestaurant = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const clickedResto = useLocation().state;
  const dispatch = useDispatch();

  const handleChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "address":
        setAddress(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      updateResto({
        id: clickedResto._id,
        data: { name: name, address: address },
      })
    );
    setAddress("");
    setName("");
  };
  return (
    <div className="restaurant-update">
      <div className="restaurant-detail">
        <div style={{ flex: "2 " }}>
          <h3>{clickedResto.name}</h3>
          <h6>{clickedResto.address}</h6>
        </div>
        <FaTrash color="red" style={{ height: "3rem" }} />
      </div>
      <form onSubmit={handleSubmit} className="update-form" action="">
        <input
          value={name}
          onChange={handleChange}
          type="text"
          placeholder="restaurant name"
          name="name"
        />
        <input
          value={address}
          onChange={handleChange}
          type="text"
          placeholder="restaurant address"
          name="address"
        />
        <input type="submit" />
      </form>
      {/* <h3>Restaurant {clickedResto.name}</h3> */}
    </div>
  );
};

export default UpdateRestaurant;
