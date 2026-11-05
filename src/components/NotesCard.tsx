import { useNotes } from "../hooks/useNotes";

export function NotesCard() {
    const { tareas,
        anadirTarea,
        eliminarTarea,
        alternarTarea
    } = useNotes();


    const [texto, setTexto] = useNotes("");
    const confirmar = () => {
        anadirTarea(texto);
        setTexto("");
    }

    return (
        <div>
            <h2> NOTAS</h2>
            <ul>
                {tareas.map(
                    t => (
                        <li>
                            <span>
                                {t.texto}
                            </span>
                        </li>
                    )


                )}





            </ul>

        </div>

    )

}