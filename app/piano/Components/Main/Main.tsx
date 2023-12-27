import { Keyboard } from "../Keyboard/Keyboard"
import { NoAudioMessage } from "../NoAudioMessage/NoAudioMessage"
import { useAudioContext } from "../AudioContextProvider/useAudioContext"



export const Main = () => {
    const AudioContext = useAudioContext()
    return !!AudioContext ? <Keyboard /> : <NoAudioMessage />
}