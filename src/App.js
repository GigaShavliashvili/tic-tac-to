import React, { useState } from "react";
import "./app.css";
function App() {
  const [player, setPlayer] = useState("X");
  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [cells, SetCells] = useState(num.fill(""));
  const [error, SetError] = useState("");
  const [winner, SetWinner] = useState("");
  const Cell = ({ num }) => {
    if (cells[num] === "") {
      return "";
    } else
      return (
        <div className="Cell__Wrapper" style={{ cursor: "pointer" }}>
          {cells[num] === "X" ? (
            <div className="X value">X</div>
          ) : (
            <div className="O value">O</div>
          )}
        </div>
      );
  };
``
  const checkWinner = (squares) => {
    console.log(squares);

    const patterns = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let pattern in patterns) {
      patterns[pattern].forEach((el) => {
        if (
          squares[el[0]] === "" ||
          squares[el[1]] === "" ||
          squares[el[2]] === ""
        ) {
        } else if (
          squares[el[0]] === squares[el[1]] &&
          squares[el[1]] === squares[el[2]]
        ) {
          SetWinner(`Winner is ${squares[el[0]]}`);
        }
      });
    }
  };

  const handlerClick = (num) => {
    if (cells[num] === "") {
      let squares = [...cells];
      if (player === "X") {
        SetError("");
        squares[num] = "X";
        setPlayer("O");
      } else {
        setPlayer("X");
        squares[num] = "O";
      }
      checkWinner(squares);
      SetCells(squares);
    } else SetError("Wrong");
  };

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="App">
      <div className="App__Header">
        <h2>Tic Tac Toe</h2>
      </div>
      <div className="App__Mean">
        <div className="Game">
          <p>{player === "X" ? "FirstPlayer - X" : "SecondPlayer - O"}</p>
          <h3>{error}</h3>
          <div className="Game__Wrapper">
            {numbers.map((i) => {
              return (
                <div className="Cell" key={i} onClick={() => handlerClick(i)}>
                  <Cell num={i} />
                </div>
              );
            })}
          </div>

          {winner ? (
            <div>
              <h2>{winner}</h2>
              <button
                onClick={() => {
                  window.location.reload();
                }}
              >
                Restart
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
