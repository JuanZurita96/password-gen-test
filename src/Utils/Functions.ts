import { toast } from "react-toastify";
import { COPY_Fail, COPY_SUCCESS } from "../Utils/Constants";

export const createPassword = (
  characterList: string,
  passwordLength: number
) => {
  let password = "";
  const characterListLength = characterList.length;
  for (let i = 0; i < passwordLength; i++) {
    const characterIndex = Math.floor(Math.random() * characterListLength);
    password += characterList.charAt(characterIndex);
  }
  return password;
};

export const notify = (message: string, hasError = false) => {
  if (hasError) {
    toast.error(message, {
      position: "bottom-center",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  } else {
    toast(message, {
      position: "bottom-center",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  }
};

const copyToClipboard = (password: string) => {
  navigator.clipboard.writeText(password);
};

export const handleCopyPassword = (password: string) => {
  if (password === "") {
    notify(COPY_Fail, true);
  } else {
    copyToClipboard(password);
    notify(COPY_SUCCESS);
  }
};
