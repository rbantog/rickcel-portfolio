interface Tape {
    name: string;
    description: string;
    videoId: string;
}
export const TAPES: Tape[] = [{
    name: 'about me',
    description: 'about me, rickcel',
    videoId: 'lneu6RpzRvw'
}, {
    name: 'hackathon',
    description: 'Hackathon for Telescope 2017',
    videoId: 'k4ppjr3hwIY'
}, {
    name: 'telescope',
    description: 'projects for Telescope',
    videoId: '-ClYHrxidyc'
}, {
    name: 'preamp',
    description: 'VideoAmp component library',
    videoId: 'rX8P1uuBeaE'
}, {
    name: 'videoamp',
    description: 'VideoAmp platform',
    videoId: 'DwsUJimwFTc'
}, {
    name: 'pokemon',
    description: 'pokemon party generator',
    videoId: 'H-jLTyqppjM'
}, {
    name: 'the vibe',
    description: 'zoom app',
    videoId: 'u4aR6L1JAts'
}];

export const VHS_INSERT = "sounds/vhs-insert.mp3";
export const VHS_EJECT = "sounds/vhs-eject.mp3";