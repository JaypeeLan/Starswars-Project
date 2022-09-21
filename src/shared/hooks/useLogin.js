import { useState, useCallback } from "react";

export function useLogin() {
  const session = Boolean(sessionStorage.getItem("loggedIn"));
  const [loggedIn, setLoggedIn] = useState(session || false);

  const login = useCallback(() => {
    setLoggedIn(true);
    sessionStorage.setItem("loggedIn", "true");
  }, []);

  return {
    loggedIn,
    login,
  };
}
