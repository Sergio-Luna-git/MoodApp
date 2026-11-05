import { StyleSheet } from "react-native";
import { Colors } from "../src/app/consants/theme";


export const GlobalStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    notesContainer: {
        flexGrow: 0,
        width: "100%",
        maxWidth: 480,
        padding: 16,
    },
    addNote: {
        borderRadius: 10,
        backgroundColor: Colors.backgroundComponents,
        padding: 16,
    },
    notesHeading: {
        color: Colors.textPrimary,
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 12,
    },
    noteInput: {
        backgroundColor: Colors.textPrimary,
        borderRadius: 6,
        marginBottom: 10,
        padding: 12,
    },
    addNoteButton: {
        alignItems: "center",
        backgroundColor: Colors.orange,
        borderRadius: 6,
        padding: 12,
    },
    addNoteButtonText: {
        color: Colors.textPrimary,
        fontWeight: "bold",
    },
    notesListSection: {
        marginTop: 20,
        maxHeight: 240,
    },
    notesList: {
        gap: 10,
        paddingBottom: 16,
    },
    cajaDeNotas: {
        flex: 1,
        minWidth: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
        borderRadius: 8,
        padding: 10,
        backgroundColor: Colors.backgroundComponents,
    },
    textoDeNota: {
        flex: 1,
        minWidth: 0,
        flexShrink: 1,
        color: Colors.textPrimary,
    },
    listaDeNotas: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        width: "100%",
    },
    botonesDeNota: {
        flexDirection: "row",
        alignItems: "center",
        flexShrink: 0,
        gap: 8,
    },
    botonAlternarNota: {
        padding: 8,
        backgroundColor: Colors.neonBlue,
        borderRadius: 6,
        borderColor: Colors.black,
    },
    notaPendiente: {
        backgroundColor: Colors.white,

    },
    notaCompletada: {
        backgroundColor: Colors.lightGreen,
    },
    botonEliminarNota: {
        padding: 8,
        backgroundColor: Colors.red,
        borderRadius: 6,
        borderColor: Colors.black,
        color: Colors.white,
    },
    textoEliminar: {
        color: Colors.white,
    },
    contenedorEmojis: {
        width: "100%",
        maxWidth: 480,
        gap: 14,
        padding: 16,
        marginTop: 24,
        borderRadius: 16,
        backgroundColor: Colors.backgroundComponents,
    },
    estadoActual: {
        color: Colors.textPrimary,
        fontSize: 18,
        fontWeight: "600",
    },
    accionesMood: {
        flexDirection: "row",
        gap: 10,
    },
    botonCambiarMood: {
        flex: 1,
        minHeight: 48,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 12,
        borderRadius: 10,
        backgroundColor: Colors.neonBlue,
    },
    textoBotonMood: {
        color: Colors.white,
        fontWeight: "600",
    },
    botonReinicar: {
        minHeight: 48,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 14,
        borderRadius: 10,
        backgroundColor: Colors.red,
    },
    selectorEmojis: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 8,
        padding: 10,
        borderRadius: 12,
        backgroundColor: Colors.darkGrey,
    },
    botonEmoji: {
        width: 52,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        backgroundColor: Colors.backgroundComponents,
    },
    emojiSeleccionado: {
        borderWidth: 2,
        borderColor: Colors.orange,
        backgroundColor: Colors.black,
    },
    textoEmoji: {
        fontSize: 30,
    },
    tituloAppContenedor: {
        width: '100%',
        maxWidth: 480,
        alignItems: 'center',
        marginBottom: 8,
    },
    tituloAppTituloDefinitivo: {
        color: Colors.textPrimary,
        fontSize: 28,
        fontWeight: '700',
        letterSpacing: 0.5,
    },


});
