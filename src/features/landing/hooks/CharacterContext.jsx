import React, { createContext, useState, useEffect } from "react";
import { useCharService } from "../../../shared/hooks/CharService.jsx";

export const CharContext = createContext();

export function CharProvider({children}) {
    const { characters = [], loading, error } = useCharService();
    return (
        <CharContext.Provider value={{ characters, loading, error }}>
            {children}
        </CharContext.Provider>
    );
}

export default CharProvider;
