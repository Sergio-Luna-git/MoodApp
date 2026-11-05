import React from 'react';
import { Text, View } from 'react-native';
import { GlobalStyles } from '../../../styles/global-styles';

export default function TituloApp() {
    return (
        <View style={GlobalStyles.tituloAppContenedor}>
            <Text style={GlobalStyles.tituloAppTituloDefinitivo}>MoodApp</Text>
        </View>
    );
}

