import React from "react";

const CreateUserStateContext = React.createContext(undefined);
const CreateUserDispatchContext = React.createContext(undefined);

function UserProvider({ children }) {
  const [userData, setUserData] = React.useState({
    name: "Mustansar",
  });

  const handleUserDataChange = (userData) => {
    setUserData((prevState) => {
      return { ...prevState, ...userData };
    });
  };

  return (
    <CreateUserStateContext.Provider value={userData}>
      <CreateUserDispatchContext.Provider value={{ handleUserDataChange }}>
        {children}
      </CreateUserDispatchContext.Provider>
    </CreateUserStateContext.Provider>
  );
}

const useCreateUserStateContext = () => {
  const context = React.useContext(CreateUserStateContext);

  if (context === undefined) {
    throw Error("useUserContext must be inside UserProvider");
  }

  return context;
};

const useCreateUserDispatchContext = () => {
  const context = React.useContext(CreateUserDispatchContext);

  if (context === undefined) {
    throw Error("useUserContext must be inside UserProvider");
  }

  return context;
};

const useUserContext = () => {
  return [useCreateUserStateContext(), useCreateUserDispatchContext()];
};

export {
  UserProvider,
  useCreateUserStateContext,
  useCreateUserDispatchContext,
  useUserContext,
};
