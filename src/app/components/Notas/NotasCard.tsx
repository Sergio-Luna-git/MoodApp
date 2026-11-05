import React, { useState } from "react";
import { useNotas } from "../../hooks/useNotas";
import { Pressable, ScrollView, TextInput, Text, View } from "react-native";
import { GlobalStyles } from "../../../../styles/global-styles";
import Nota from "./Nota";

export function NotasCard() {
    const { notas, anadirNota, eliminarNota } = useNotas();
    const [texto, setTexto] = useState("");

    const confirmar = () => {
        const textoNota = texto.trim();
        if (!textoNota) return;

        anadirNota(textoNota);
        setTexto("");
    };

    return (
        <View style={GlobalStyles.notesContainer}>
            <View style={GlobalStyles.addNote}>
                <Text style={GlobalStyles.notesHeading}>Añadir nota</Text>
                <TextInput
                    value={texto}
                    onChangeText={setTexto}
                    placeholder="Nota a escribir..."
                    style={GlobalStyles.noteInput}
                />
                <Pressable onPress={confirmar} style={GlobalStyles.addNoteButton}>
                    <Text style={GlobalStyles.addNoteButtonText}>Confirmar</Text>
                </Pressable>
            </View>

            <View style={GlobalStyles.notesListSection}>
                <Text style={GlobalStyles.notesHeading}>Lista de notas</Text>
                <ScrollView contentContainerStyle={GlobalStyles.notesList}>
                    {notas.map((nota) => (
                        <Nota
                            key={nota.id}
                            nota={nota}
                            eliminarNota={eliminarNota}
                        />
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}
