import { useState } from "react";



export interface Nota {
    id: string;
    texto: string;
    hecho: boolean;

}

export const useNotas = () => {
    const [notas, setNotas] = useState<Nota[]>([]);

    const anadirNota = (texto: string) => {
        setNotas((anteriores) => [
            ...anteriores,
            { id: Date.now().toString(), texto: texto, hecho: false }
        ]);
    }

    const eliminarNota = (id: string) => {
        setNotas(notas =>
            notas.filter(a => a.id !== id))
    }

    return {
        notas,
        anadirNota,
        eliminarNota,
    }




}