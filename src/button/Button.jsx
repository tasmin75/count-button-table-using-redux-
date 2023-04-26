import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { btnSlice } from "..";
import style from "./Button.module.css";
function Button() {
  const btnClickedData = useSelector((state) => state.btnSlice.value);
  const dispatch = useDispatch();

  const handlebtnClick = (value) => {
    const data = { name: value, count: 1 };
    dispatch(btnSlice.actions.addData(data));
  };

  return (
    <div>
      <div className={style.btnDiv}>
        {btnClickedData.map((item, index) => (
          <div key={index}>
            <button onClick={() => handlebtnClick(item.name)}>
              {item.name}
            </button>
          </div>
        ))}
      </div>
      <h2>Counts Of Clicked Button</h2>
      <table>
        <thead>
          <tr>
            <th>Character</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {btnClickedData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Button;
