interface Tape {
    name: string;
    description: string;
    videoId: string;
}
export const TAPES: Tape[] = [{
    name: 'hackathon',
    description: 'Hackathon for Telescope 2017',
    videoId: 'k4ppjr3hwIY'
}];

export const VHS_INSERT = "sounds/vhs-insert.mp3";
export const VHS_EJECT = "sounds/vhs-eject.mp3";