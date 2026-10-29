


export interface Notas {
    id: String;
    teto: Sting;
    hecho: boolean;

}

export const useNotes = () => {
    const [  tareas, setTareas ] = useState<Notas[]>([]);

    const anadirTarea = (texto) => {
        setTareas((anteriores) => [
            ..anteriores.
            { id: Date.now(), texto: texto, hecho: false }
        ]);
    }

    const eliminarTarea = (id) => {
        setTareas(ltareas => 
            ltareas.filter(a => a.id !== id))
    }

    const alternarTarea = (id) => {
        setTarea(ltareas => ltareas.map(
            a => a.id === id ? {...a, hecho: !hecho }: a ));
    }







}