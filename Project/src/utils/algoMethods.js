export const randomNumBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const makeFirstLetterCapital = (string) => {
    
    const term = string.toLowerCase().trim();
    return term.charAt(0).toUpperCase() + term.slice(1);
}