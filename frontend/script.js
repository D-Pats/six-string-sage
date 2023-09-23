document.addEventListener("DOMContentLoaded", function () {
  const chordSelect = document.getElementById("chord-select");
  const chordFingeringWrite = document.querySelector(".chord-fingering");
  const chordNotesWrite = document.querySelector(".chord-notes");

  const chordsData = [
    {
      name: "A",
      fingering: [0, 2, 2, 2, 0, 0],
      notes: ["A", "C#", "E"],
      scaleNotes: ["A", "B", "C#", "D", "E", "F#", "G#"],
    },
    {
      name: "A#",
      fingering: [1, 3, 3, 3, 1, 1],
      notes: ["A#", "D", "F"],
      scaleNotes: ["A#", "C", "D", "D#", "F", "G", "A"],
    },
    {
      name: "B",
      fingering: [2, 4, 4, 4, 2, 2],
      notes: ["B", "D#", "F#"],
      scaleNotes: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
    },
    {
      name: "C",
      fingering: [0, 1, 0, 2, 3, 3],
      notes: ["C", "E", "G"],
      scaleNotes: ["C", "D", "E", "F", "G", "A", "B"],
    },
    {
      name: "C#",
      fingering: [1, 2, 1, 3, 4, 4],
      notes: ["C", "E", "G"],
      scaleNotes: ["C", "D", "E", "F", "G", "A", "B"],
    },
    {
      name: "D",
      fingering: [2, 3, 2, 0, 0, 0],
      notes: ["D", "F#", "A"],
      scaleNotes: ["D", "E", "F#", "G", "A", "B", "C#"],
    },
    {
      name: "D#",
      fingering: [3, 4, 3, 1, 1, 1],
      notes: ["D#", "G", "A#"],
      scaleNotes: ["D#", "F", "G", "G#", "A#", "C", "D"],
    },
    {
      name: "E",
      fingering: [0, 2, 2, 1, 0, 0],
      chordNotes: ["E", "G#", "B"],
      scaleNotes: ["E", "F#", "G#", "A", "B", "C#", "D#"],
    },
    {
      name: "F",
      fingering: [1, 3, 3, 2, 1, 1],
      notes: ["F", "A", "C"],
      scaleNotes: ["F", "G", "A", "A#", "C", "D", "D#"],
    },
    {
      name: "F#",
      fingering: [2, 4, 4, 3, 2, 2],
      notes: ["F#", "A#", "C#"],
      scaleNotes: ["F#", "G#", "A#", "B", "C#", "D#", "E"],
    },
    {
      name: "G",
      fingering: [3, 0, 0, 0, 2, 3],
      notes: ["G", "B", "D"],
      scaleNotes: ["G", "A", "B", "C", "D", "E", "F#"],
    },
    {
      name: "G#",
      fingering: [4, 1, 1, 1, 3, 4],
      notes: ["G#", "C", "D#"],
      scaleNotes: ["G#", "A#", "C", "D", "D#", "F", "G"],
    },
    // Add more chord data here...
  ];

  const allNotes = [
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
  ];

  function createFingeringChart() {
    let rootNote = 0;
    for (let noteIndex = 0; noteIndex < allNotes.length; noteIndex++) {
      if (chordSelect.value === allNotes[noteIndex]) {
        rootNote = noteIndex;
        console.log(noteIndex);
      }
    }
    chordFingeringWrite.textContent = chordsData[rootNote].fingering.map(
      (fret) => fret
    );
  }

  function createTextChord() {
    let rootNote = 0;
    for (let noteIndex = 0; noteIndex < allNotes.length; noteIndex++) {
      if (chordSelect.value === allNotes[noteIndex]) {
        rootNote = noteIndex;
        console.log(noteIndex);
      }
    }

    chordNotesWrite.textContent = chordsData[rootNote].scaleNotes.map(
      (note) => note
    );
  }

  chordSelect.addEventListener("change", function () {
    createFingeringChart();
    createTextChord();
  });
  createFingeringChart();
  createTextChord();
});
