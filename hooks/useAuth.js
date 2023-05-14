import React, { createContext, useContext } from "react";
import * as Google from "expo-google-app-auth";

// import * as Google from "expo-auth-session/providers/google"
const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const signInWithGoogle = async () => {
    // await Google.
    const [request, response, promptAsync] = Google.useAuthRequest({
      androidClientId: "GOOGLE_GUID.apps.googleusercontent.com",
    });

    // Google.
    React.useEffect(() => {
      if (response?.type === "success") {
        const { authentication } = response;
      }
    }, [response]);
  };
  return (
    <AuthContext.Provider value={{ user: null }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
