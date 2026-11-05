import { useState } from "react";
import { useNotes } from "../hooks/useNotes";
import { Pressable, TextInput, Text, View } from "react-native";
import { Colors } from "../consants/theme";
import React from "react";
import { GlobalStyles } from "../../../styles/global-styles";
import Tarea from "./Tarea";


export function NotesCard() {
    const { tareas,
        anadirTarea,
        eliminarTarea,
        alternarTarea
    } = useNotes();


    const [texto, setTexto] = useState("");
    const confirmar = ({ color = Colors.darkGrey }) => {
        anadirTarea(texto);
        setTexto("");
    }

    return (
        <>
            <View style={
                GlobalStyles.viewNotes
            }>
                <TextInput
                    value={texto}
                    onChangeText={setTexto}
                    placeholder="Tarea a escribir..."
                />

                <Pressable
                    onPress={() => anadirTarea}>
                    <Text> Confirmar</Text>
                </Pressable>
            </View>
            //-------------------------------------------
            //Cambiar a componente exterior
            <View style={
                GlobalStyles.viewNotes
            }>

                {tareas.map((tarea) => (
                    <Tarea key={parseInt(tarea.id)} nota={tarea} />
                ))}

            </View>
            //-------------------------------------------
        </>
    )

}