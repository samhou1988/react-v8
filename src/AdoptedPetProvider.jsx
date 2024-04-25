import { createContext, useContext, useState } from "react";

const AdoptedPetContext = createContext();

export const useAdoptedPet = () => {
  const context = useContext(AdoptedPetContext);

  if (!context) {
    throw new Error("useAdoptedPet must be used within an AdoptedPetProvider");
  }

  return context;
}

function AdoptedPetProvider(props) {
  const [adoptedPet, setAdoptedPet] = useState(null);

  return (
    <AdoptedPetContext.Provider value={{ adoptedPet, setAdoptedPet }}>
      {props.children}
    </AdoptedPetContext.Provider>
  );
}

export default AdoptedPetProvider;
