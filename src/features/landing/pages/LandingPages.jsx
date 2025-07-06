import react from 'react';
import CharacterCard from '../components/CharCard';
import { CharProvider } from '../hooks/CharacterContext';
import Dashboard from '../components/Dashboard';

export default function LandingPages() {
    return (
        <CharProvider>
            <CharacterCard />
        </CharProvider>
    );
}