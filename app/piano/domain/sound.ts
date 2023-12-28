import { InstrumentName, Player } from "soundfont-player"
export const DEFAULT_INSTRUMENT: InstrumentName = "acoustic_grand_piano";
import { MidiValue } from "./note"
import { Optional } from "./types"
export type AudioNodesRegistry = Record<MidiValue, Optional<Player>>

