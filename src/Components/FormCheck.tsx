import { Form } from "../Interface/FormCheck";
import "./FormCheck.css";

const FormCheck = ({ states, handleGeneratePassword }: Form) => (
  <>
    <form className="base" onSubmit={(e) => handleGeneratePassword(e)}>
      <h2 className="header">Settings</h2>
      <div className="form-group">
        <label className="label" htmlFor="password-strength">
          Password length
        </label>
        <input
          className="input"
          value={states.passwordLength}
          onChange={(e) => states.setPasswordLength(Number(e.target.value))}
          type="number"
          id="password-stregth"
          name="password-strength"
          max="20"
          min="8"
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="uppercase-letters">
          Add Uppercase Letters
        </label>
        <input
          className="input"
          checked={states.includeUpperCase}
          onChange={(e) => states.setIncludeUpperCase(e.target.checked)}
          type="checkbox"
          id="uppercase-letters"
          name="uppercase-letters"
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="lowercase-letters">
          Add Lowercase Letters
        </label>
        <input
          className="input"
          checked={states.includeLowerCase}
          onChange={(e) => states.setIncludeLowerCase(e.target.checked)}
          type="checkbox"
          id="lowercase-letters"
          name="lowercase-letters"
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="include-numbers">
          Include Numbers
        </label>
        <input
          className="input"
          checked={states.includeNumbers}
          onChange={(e) => states.setIncludeNumbers(e.target.checked)}
          type="checkbox"
          id="include-numbers"
          name="include-numbers"
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="include-symbols">
          Include Symbols
        </label>
        <input
          className="input"
          checked={states.includeSymbols}
          onChange={(e) => states.setIncludeSymbols(e.target.checked)}
          type="checkbox"
          id="include-symbols"
          name="include-symbols"
        />
      </div>
      <button className="button">Generate Password</button>
    </form>
  </>
);

export default FormCheck;
