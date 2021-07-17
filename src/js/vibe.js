// Eltárolunk pár jó kívánságot
const vibes = [
    "...nagyszerű vagy!",
    "...legyen szép napod!",
    "...egy kalappal!",
    "...angyalok szárnyán járj!"
];

// Kiválasztunk egy véletlenszerű jókívánságot
let vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

// kiíratjuk a jókívánságot
document.querySelector(".vibe").append(vibe);

