import { useState } from "react";
import "./Tracker.scss";
import { useDispatch } from "react-redux";
import { addExpence, addIncome } from "../store/reducer/slices/expenceSlice";
import { nanoid } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const Tracker = () => {
  const [name, setName] = useState(String);
  const [amount, setAmount] = useState(Number);
  const [type, setType] = useState(String);

  const dispatch = useDispatch();

  const onClickSubmit = () => {
    if (name && amount && type === "INCOME") {
      dispatch(
        addIncome({
          id: nanoid(),
          name: name,
          amount: amount,
          type: type,
        })
      );
      toast.success("Enty Added");
    } else if (name && amount && type === "EXPENCE") {
      // ! ADD SOME CODE HERE PLEASE
      dispatch(
        addExpence({
          id: nanoid(),
          name: name,
          amount: amount,
          type: type,
        })
      );
    } else {
      toast.error("Please Enter all Field");
    }
  };

  return (
    <div className="container">
      <form action="" className="container_form">
        <label htmlFor="name">Enter Name of Transaction</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="amount">Enter Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <label htmlFor="type">Selet Type of Transation</label>
        <select
          name="type"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option htmlFor="type" value="EXPENCE">
            Expence
          </option>
          <option htmlFor="type" value="INCOME">
            Income
          </option>
        </select>

        <button type="button" onClick={onClickSubmit}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
};

export default Tracker;
