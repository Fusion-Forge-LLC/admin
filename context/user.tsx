"use client";

import React, {createContext, useContext, useState, Dispatch, SetStateAction} from "react";

import { useGetUser, UserInterface } from "@/api/auth/user";

interface UserContextTypes {
  User: UserInterface | null;
  setUser: Dispatch<SetStateAction<UserInterface | null>>;
  isLoading: boolean;
}

const UserContext = createContext<UserContextTypes>({
  User: null,
  setUser: () => null,
  isLoading: true,
});

const UserProvider = ({children}: {children: React.ReactNode}) => {
  const [User, setUser] = useState<UserInterface | null>(null);

  const {data, isLoading} = useGetUser();
    
  React.useLayoutEffect(() => {
    if (data && User === null) {
      setUser(data.data);
    }
  }, [data]);

  return <UserContext.Provider value={{User, setUser, isLoading}}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);

export default UserProvider;
