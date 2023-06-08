type States = {
  passwordLength: number;
  setPasswordLength: (number: number) => void;
  includeUpperCase: boolean;
  setIncludeUpperCase: (check: boolean) => void;
  includeLowerCase: boolean;
  setIncludeLowerCase: (check: boolean) => void;
  includeNumbers: boolean;
  setIncludeNumbers: (check: boolean) => void;
  includeSymbols: boolean;
  setIncludeSymbols: (check: boolean) => void;
};

export interface Form {
  states: States;
  handleGeneratePassword: (e: React.FormEvent<HTMLFormElement>) => void;
}
