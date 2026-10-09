// Show-Antworten für Videos. Hier kannst du Sätze ändern oder neue ergänzen.
// "wenn" ist ein Suchmuster (Kleinbuchstaben, ohne Satzzeichen, Zahlen ohne Punkt: "100000").
// "nurWake: true" gilt, wenn nur "Hey Jarvis" gesagt wird. {seiten} wird durch die Zahl unten ersetzt.
// Wichtig fürs Video: Nichts Erfundenes als Kontostand darstellen, sondern als Ziel und Kurs formulieren.
window.SECOND_BRAIN_SEITEN = 76; // echte Zahl der Wissensseiten, Stand 09.10.2026

window.DIALOGE = [
  {
    nurWake: true,
    sage: "Hallo Giuseppe. Schön, dass du wieder da bist. Dein Second Brain umfasst inzwischen {seiten} Wissensseiten, und es wächst jeden Tag. Alle Systeme laufen."
  },
  {
    wenn: "hunderttausend|100000|100 ?k|erste hunderter",
    sage: "Es sieht richtig gut aus, Giuseppe. Der Kurs auf die ersten hunderttausend Euro steht. Ich muss nur noch hier und da ein paar Dinge umsetzen und ein paar neue Leads gewinnen. Danach ist das gut machbar, vielleicht sogar noch dieses Jahr."
  },
  {
    wenn: "second brain|wissensbasis|wie viele (seiten|einträge|berichte)",
    sage: "Das Second Brain wächst erfolgreich. Es sind schon {seiten} Wissensseiten, und jede neue Idee, jeder Plan und jedes Gespräch landet dort sauber sortiert. Nichts geht mehr verloren."
  },
  {
    wenn: "dynamic upscale|kunden|leads",
    sage: "Dynamic Upscale nimmt Fahrt auf. Die nächsten Kundengespräche stehen an, und der Voice Agent kommt als Fundament dazu. Jeder neue Lead bringt uns dem Ziel näher."
  },
  {
    wenn: "wer bist du|was bist du|stell dich vor",
    sage: "Ich bin Jarvis, deine persönliche Kommandozentrale. Gebaut von Giuseppe, zusammen mit Claude. Ich kenne deine Fristen, deine Projekte und deinen Plan."
  },
  {
    wenn: "wie geht|wie läuft|alles klar",
    sage: "Bestens, Giuseppe. Alle Systeme laufen, und die Sonne scheint. Wir sind gut unterwegs."
  },
  {
    // Abschlusssatz fürs Video: wird auch am Ende der Vorführung gesprochen
    abschluss: true,
    wenn: "tschüss|das wars|das war's|bis bald|verabschied|abschluss",
    sage: "Das war's von mir. Wenn du dir auch so eine Kommandozentrale bauen willst, folge Giuseppe für mehr."
  },
  {
    wenn: "danke|super|stark|geil",
    sage: "Immer gerne, Giuseppe. Dafür bin ich da."
  }
];
