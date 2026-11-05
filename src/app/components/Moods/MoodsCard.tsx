import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import useMoods from '../../hooks/useMoods'
import { GlobalStyles } from '../../../../styles/global-styles'

export function MoodsCard() {
    const { moods, moodActual, seleccionarMood, reinicarMood } = useMoods();
    const [mostrarEmojis, setMostrarEmojis] = useState(false);



    return (
        <View style={GlobalStyles.contenedorEmojis}>
            <Text style={GlobalStyles.estadoActual}>Estado actual: {moodActual}</Text>

            <View style={GlobalStyles.accionesMood}>
                <Pressable
                    onPress={() => setMostrarEmojis(!mostrarEmojis)}
                    style={({ pressed }) => [
                        GlobalStyles.botonCambiarMood,
                        { opacity: pressed ? 0.75 : 1 },
                    ]}
                >
                    <Text style={GlobalStyles.textoBotonMood}>
                        {mostrarEmojis ? 'Cancelar' : 'Cambiar estado'}
                    </Text>
                </Pressable>

                <Pressable
                    onPress={reinicarMood}
                    style={({ pressed }) => [
                        GlobalStyles.botonReinicar,
                        { opacity: pressed ? 0.75 : 1 },
                    ]}
                >
                    <Text style={GlobalStyles.textoBotonMood}>Reiniciar</Text>
                </Pressable>
            </View>

            {mostrarEmojis && (
                <View style={GlobalStyles.selectorEmojis}>
                    {moods.map((emoji) => (
                        <Pressable
                            key={emoji}
                            onPress={() => seleccionarMood(emoji)}
                            style={({ pressed }) => [
                                GlobalStyles.botonEmoji,
                                { opacity: pressed ? 0.7 : 1 },
                            ]}
                        >
                            <Text style={GlobalStyles.textoEmoji}>{emoji}</Text>
                        </Pressable>
                    ))}
                </View>
            )}

        </View>




    )
}
