import React from "react";
import ReactDOM from "react-dom";

const Title = props => {
  return (
    <div>
      <h1 style={{ color: props.color }}> {props.text}</h1>
    </div>
  );
};

const Titlelist = () => {
  return (
    <div>
      <Title text="Remember the Titans" color="green" />
      <Title text="Midnight in Paris" color="blue" />
      <Title text="Casino Royale" color="grey" />
      <Title text="Atomic Blonde" color="red" />
      <Title text="Star War, Return of the Jedi" color="brown" />
      <TableExerise />
    </div>
  );
};

const TableExerise = () => {
  return (
    <table>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
      </tr>
      <tr>
        <td>Janet</td>
        <td>James</td>
      </tr>
      <tr>
        <td>John</td>
        <td>Jameson</td>
      </tr>
    </table>
  );
};
ReactDOM.render(<TableExerise />, document.getElementById("root"));
