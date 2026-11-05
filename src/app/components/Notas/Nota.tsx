import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Nota as NotaType } from '../../hooks/useNotas'
import { GlobalStyles } from '../../../../styles/global-styles'

interface NotaProps {
    nota: NotaType
    eliminarNota: (id: string) => void
}

const Nota = ({ nota, eliminarNota }: NotaProps) => {
    return (
        <View style={GlobalStyles.listaDeNotas}>
            <View style={GlobalStyles.cajaDeNotas}>
                <Text style={GlobalStyles.textoDeNota}>{nota.texto}</Text>
                <View style={GlobalStyles.botonesDeNota}>
                    <Pressable
                        style={({ pressed }) => [
                            GlobalStyles.botonEliminarNota,
                            { opacity: pressed ? 0.5 : 1 }
                        ]}
                        onPress={() => eliminarNota(nota.id)}>
                        <Text style={GlobalStyles.textoEliminar}>X</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Nota