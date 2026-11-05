import { useState } from 'react';

const moods = ["😀", "😐", "😢", "😡", "😴"];

const useMoods = () => {
    const [moodActual, setMoodActual] = useState(moods[0]);

    const seleccionarMood = (mood: string) => {
        setMoodActual(mood);
    }

    const reinicarMood = () => {
        setMoodActual(moods[1]);
    }

    return {
        moodActual,
        moods,
        seleccionarMood,
        reinicarMood
    }
}

export default useMoods;