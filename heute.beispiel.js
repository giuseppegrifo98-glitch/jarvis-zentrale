// Beispiel-Tagesdaten. Kopiere diese Datei nach "heute.js" und trage deine eigenen Daten ein.
// "heute.js" ist in .gitignore und wird nie hochgeladen.
// Stimmt "stand" nicht mit dem heutigen Datum überein, zeigt die Seite eine Warnung.
const tagIso = n => { const d = new Date(); d.setDate(d.getDate() + n); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };

window.HEUTE = {
  stand: tagIso(0),

  // Höchstens 3 bis 5 Punkte. art: Frist, Kunde, offen oder Termin (bestimmt die Farbe).
  heute: [
    { text: "Umsatzsteuer-Voranmeldung abschicken", art: "Frist" },
    { text: "Angebot für das Autohaus fertig machen", art: "Kunde" },
    { text: "Instagram-Reel schneiden", art: "offen" },
    { text: "Abendessen mit der Familie", art: "Termin" }
  ],

  // Nur echte Fristen. Ampel und Countdown rechnet die Seite.
  fristen: [
    { datum: tagIso(2), text: "Umsatzsteuer-Voranmeldung" },
    { datum: tagIso(30), text: "Versicherung prüfen" }
  ],

  woche: [
    { wann: "Morgen", text: "Reel veröffentlichen" },
    { wann: "Übermorgen", text: "Kundentermin im Autohaus" }
  ],

  spaeter: ["Strom-Abschlag prüfen", "Alten Rechner aufräumen"],
  gestern: ["Angebot Autohaus: Entwurf (offen)"],
  wartet: ["Kunde: Freigabe für das Design"],

  // Fokusregel: höchstens 2 aktive Aufbauprojekte.
  fokus: { belegt: 2, max: 2, namen: ["Website für ein Autohaus", "KI-Videoserie"] },

  // Gespräche diese Woche. null = noch nicht erfasst.
  gespraeche: { zahl: 6, ziel: 10 },

  // Wird nur nach Klick auf "Zahlen zeigen" angezeigt.
  geld: "Beispieltext, hier steht dein Geldstand.",

  hinweise: ["Heute zuerst die Frist, dann die Kundengespräche."],

  warteschlange: [
    { name: "Voice Agent für Kunden", schritt: "Vorführung bauen" },
    { name: "Community-Seite", schritt: "Basis-Seite, dann Vorstellungsvideo" },
    { name: "Automatische Video-Themen", schritt: "Tool sammelt KI-Neuigkeiten und liefert Themen" }
  ],

  baustellen: [
    { prio: "A1", name: "Website für ein Autohaus", schritt: "Entwurf zeigen" },
    { prio: "A2", name: "KI-Videoserie", schritt: "Skript für Folge 3" },
    { prio: "B1", name: "Voice Agent", schritt: "Vorführung vorbereiten" },
    { prio: "C1", name: "Neues Tool für Inhalte", schritt: "Ideen sammeln" }
  ]
};
