import { useState } from "react";



export interface Notas {
    id: string;
    texto: string;
    hecho: boolean;

}

export const useNotes = () => {
    const [tareas, setTareas] = useState<Notas[]>([]);

    const anadirTarea = (texto: string) => {
        setTareas((anteriores) => [
            ...anteriores,
            { id: Date.now().toString(), texto: texto, hecho: false }
        ]);
    }

    const eliminarTarea = (id: string) => {
        setTareas(tareas =>
            tareas.filter(a => a.id !== id))
    }
    const alternarTarea = (id: string) => {
        setTareas(tareas => tareas.map(
            a => a.id === id ? { ...a, hecho: !a.hecho } : a));
    }


    return {
        tareas,
        anadirTarea,
        eliminarTarea,
        alternarTarea
    }




}