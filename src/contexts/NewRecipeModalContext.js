import { createContext, useState } from "react";

export const NewRecipeModalContext = createContext();

export const NewRecipeModalProvider = ({ children }) => {
  const [newRecipeModalOpen, setNewRecipeModalOpen] = useState(false);
  return (
    <NewRecipeModalContext.Provider
      value={[newRecipeModalOpen, setNewRecipeModalOpen]}
    >
      {children}
    </NewRecipeModalContext.Provider>
  );
};
