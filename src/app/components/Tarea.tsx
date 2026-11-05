import { View, Text } from 'react-native'
import React from 'react'
import { Notas } from '../hooks/useNotes'

interface TareaProps {
    nota: Notas
}

const Tarea = ({ nota }: TareaProps) => {
    return (
        <View>
            <Text>{tarea.texto}</Text>
            <Pressable onPress={() => alternarTarea(tarea.id)}>
                <Text>{tarea.hecho ? "Completada" : "Por completar"}</Text>
            </Pressable>

            <Pressable onPress={() => eliminarTarea(tarea.id)}>
                <Text>Eliminar Tarea</Text>
            </Pressable>
        </View>
    )
}

export default Tarea