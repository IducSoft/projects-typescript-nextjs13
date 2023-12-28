import { useAudioContext } from "../AudioContextProvider/useAudioContext";
import { useSoundfont } from "../../adapters/Soundfont/useSoundfont";
import { useMount } from "../../utils/useMount/useMount";
import { Keyboard } from "../Keyboard/Keyboard";


export const KeyboardWithInstrument = () => {
    const AudioContext = useAudioContext()!
    const { loading, play, stop, load } = useSoundfont({ AudioContext })
    useMount(load)
    return <Keyboard loading={loading} play={play} stop={stop} />
}