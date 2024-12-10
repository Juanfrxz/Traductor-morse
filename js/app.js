// Tabla de conversión Morse
const morseCodeDict = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
    '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
    '.': '.-.-.-', ',': '--..--', '?': '..--..', '/': '-..-.', ' ': '/'
};

const reverseMorseCodeDict = Object.fromEntries(
    Object.entries(morseCodeDict).map(([k, v]) => [v, k])
);

// Función para traducir texto a Morse
function textToMorse(text) {
    return text.toUpperCase().split('').map(char => morseCodeDict[char] || '').join(' ');
}

// Función para traducir Morse a texto
function morseToText(morse) {
    return morse.split(' / ').map(
        word => word.split(' ').map(letter => reverseMorseCodeDict[letter] || '').join('')
    ).join(' ');
}

// Menú interactivo
function morseTranslator() {
    const choice = prompt("Bienvenido al Traductor Morse\n1. Traducir texto a Morse\n2. Traducir Morse a texto\nSeleccione una opción (1 o 2):");
    
    if (choice === '1') {
        const text = prompt("Ingrese el texto a traducir:");
        const result = textToMorse(text);
        alert(`Traducción a Morse:\n${result}`);
        console.log("Traducción a Morse:");
        console.log(result);
    } else if (choice === '2') {
        const morse = prompt("Ingrese el código Morse a traducir (usa '/' para separar palabras):");
        const result = morseToText(morse);
        alert(`Traducción a texto:\n${result}`);
        console.log("Traducción a texto:");
        console.log(result);
    } else {
        alert("Opción no válida.");
        console.log("Opción no válida.");
    }
}

// Llama a la función para iniciar el traductor
morseTranslator();
