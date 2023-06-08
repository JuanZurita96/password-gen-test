import { Password } from "../Interface/PasswordBoard";
import CopyIcon from "./paper_board.png";
import "./FormCheck.css";
import "./PasswordBoard.css";

const PasswordBoard = ({ password, handleCopyPassword }: Password) => (
  <div className="base">
    <h2 className="header">Password Generator</h2>
    <div className="password_view">
      {password != "" ? (
        <>
          <h3>{password}</h3>
          <button
            className="button"
            onClick={() => handleCopyPassword(password)}
          >
            <img src={CopyIcon} width={28} height={32} />
          </button>
        </>
      ) : null}
    </div>
  </div>
);

export default PasswordBoard;
