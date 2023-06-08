import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from "../Utils/Constants";
import { createPassword, handleCopyPassword, notify } from "../Utils/Functions";
import { FormCheck, PasswordBoard } from "../Components";
import "./View.css";

const GeneratorView: React.FC = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState<number>(15);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handleGeneratePassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !includeUpperCase &&
      !includeLowerCase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      notify(
        "To generate password you must select at least one checkbox",
        true
      );
    } else {
      let characterList = "";
      if (includeNumbers) {
        characterList += numbers;
      }
      if (includeUpperCase) {
        characterList += upperCaseLetters;
      }
      if (includeLowerCase) {
        characterList += lowerCaseLetters;
      }
      if (includeSymbols) {
        characterList += specialCharacters;
      }
      setPassword(createPassword(characterList, passwordLength));
      notify("Password is generated successfully", false);
    }
  };

  return (
    <div className="container">
      <FormCheck
        states={{
          passwordLength,
          setPasswordLength,
          includeUpperCase,
          setIncludeUpperCase,
          includeLowerCase,
          setIncludeLowerCase,
          includeNumbers,
          setIncludeNumbers,
          includeSymbols,
          setIncludeSymbols,
        }}
        handleGeneratePassword={handleGeneratePassword}
      />
      <PasswordBoard
        password={password}
        handleCopyPassword={handleCopyPassword}
      />

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ fontSize: "14px" }}
      />
    </div>
  );
};

export default GeneratorView;
