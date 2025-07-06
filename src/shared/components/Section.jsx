import react from "react";

export default function Section({ children}) {
    return (
        <section className="section">
            {children}
        </section>
    );
}