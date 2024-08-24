import "./Record.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeRecord } from "../store/reducer/slices/expenceSlice";

const Record = () => {
  const data = useSelector((state) => state.IncomeExpence);
  const dispatch = useDispatch();

  const [income, setIncome] = useState(0);
  const [expence, setExpence] = useState(0);

  useEffect(() => {
    const incomeTotal = data.reduce((total, item) => {
      if (item.type === "INCOME") {
        return total + Number(item.amount);
      }
      return total;
    }, 0);

    const expenceTotal = data.reduce((total, item) => {
      if (item.type === "EXPENCE") {
        return total + Number(item.amount);
      }
      return total;
    }, 0);

    setIncome(incomeTotal);
    setExpence(expenceTotal);
  }, [data]);

  return (
    <>
      <div className="record_box">
        <table border={1}>
          <thead>
            <tr>
              <td>id</td>
              <td>name</td>
              <td>amount</td>
              <td>type</td>
              <td>action</td>
            </tr>
          </thead>
          <tbody>
            {data.map(
              (item, key) =>
                item.type === "INCOME" && (
                  <tr key={key}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.amount}</td>
                    <td>{item.type}</td>
                    <td>
                      <button onClick={() => dispatch(removeRecord(item))}>
                        X
                      </button>
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
        <table border={1}>
          <thead>
            <tr>
              <td>id</td>
              <td>name</td>
              <td>amount</td>
              <td>type</td>
              <td>action</td>
            </tr>
          </thead>
          <tbody>
            {data.map(
              (item, key) =>
                item.type === "EXPENCE" && (
                  <tr key={key}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.amount}</td>
                    <td>{item.type}</td>
                    <td>
                      <button onClick={() => dispatch(removeRecord(item))}>
                        X
                      </button>
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
      <div className="stats">
        <div className="total_income">Total Income : {income}</div>
        <div className="total_expence">Total Expence :{expence}</div>
        <div className="total_balance">Total Balance : {income - expence}</div>
      </div>
    </>
  );
};

export default Record;
