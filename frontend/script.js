document.addEventListener("DOMContentLoaded", function () {
  const chordSelect = document.getElementById("chord-select");
  const chordFingeringWrite = document.querySelector(".chord-fingering");
  const chordNotesWrite = document.querySelector(".chord-notes");
  const scaleDiagramDisplay = document.querySelector(".scale-diagram");

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
      fingering: [0, 1, 0, 2, 3, 0],
      notes: ["C", "E", "G"],
      scaleNotes: ["C", "D", "E", "F", "G", "A", "B"],
    },
    {
      name: "C#",
      fingering: [1, 2, 1, 3, 4, 1],
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
      fingering: [0, 0, 1, 2, 2, 0],
      chordNotes: ["E", "G#", "B"],
      scaleNotes: ["E", "F#", "G#", "A", "B", "C#", "D#"],
    },
    {
      name: "F",
      fingering: [1, 1, 2, 3, 3, 1],
      notes: ["F", "A", "C"],
      scaleNotes: ["F", "G", "A", "A#", "C", "D", "D#"],
    },
    {
      name: "F#",
      fingering: [2, 2, 3, 4, 4, 2],
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

  const allStrings = ["e", "B", "G", "D", "A", "E"];

  const allNotesTwo = [
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

  const majorSteps = [2, 2, 1, 2, 2, 2, 1];

  //Functions

  function getRootNote() {
    let rootNote = 0;
    for (let noteIndex = 0; noteIndex < allNotes.length; noteIndex++) {
      if (chordSelect.value === allNotes[noteIndex]) {
        rootNote = noteIndex;
      }
    }
    return rootNote;
  }

  function createFingeringChart() {
    //https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces

    // removes existing table if switching chords
    chordFingeringWrite.textContent = "";

    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    // creating all cells
    for (let i = 0; i < 2; i++) {
      // creates a table row
      const row = document.createElement("tr");

      for (let j = 0; j < 6; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        if (i === 0) {
          const cellText = document.createTextNode(`${allStrings[j]}`);
          cell.appendChild(cellText);
          row.appendChild(cell);
        } else {
          const cellText = document.createTextNode(
            `${chordsData[getRootNote()].fingering[j]}`
          );
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
      }

      // add the row to the end of the table body
      tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    chordFingeringWrite.appendChild(tbl);
    // sets the border attribute of tbl to '1'
    tbl.setAttribute("border", "1");
  }

  function createTextChord() {
    chordNotesWrite.textContent = chordsData[getRootNote()].scaleNotes;
  }

  function createScaleChart() {
    //removes existing table if switching chords
    scaleDiagramDisplay.textContent = "";

    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    // creating all cells
    for (let i = 0; i < 7; i++) {
      // creates a table row
      const row = document.createElement("tr");
      //starting of each string
      let stringE = 8;
      let stringB = 3;
      let stringG = 11;
      let stringD = 6;
      let stringA = 1;

      for (let j = 0; j < 25; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        if (j === 0 && i === 0) {
          const cellText = document.createTextNode(`Fret`);
          cell.appendChild(cellText);
          row.appendChild(cell);
        } else if (j === 0) {
          const cellText = document.createTextNode(`${allStrings[i - 1]}`);
          cell.appendChild(cellText);
          row.appendChild(cell);
        } else if (i === 0) {
          const cellText = document.createTextNode(`${j}`);
          cell.appendChild(cellText);
          row.appendChild(cell);
        } else if ((i === 1 || i === 6) && j > 0) {
          if (
            chordsData[getRootNote()].scaleNotes.includes(allNotesTwo[stringE])
          ) {
            cell.setAttribute("id", "in-scale");
            const cellText = document.createTextNode(`O`);
            cell.appendChild(cellText);
            row.appendChild(cell);
            stringE++;
          } else {
            const cellText = document.createTextNode(`${allNotesTwo[stringE]}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
            stringE++;
          }
        } else if (i === 2 && j > 0) {
          if (
            chordsData[getRootNote()].scaleNotes.includes(allNotesTwo[stringB])
          ) {
            cell.setAttribute("id", "in-scale");
            const cellText = document.createTextNode(`O`);
            cell.appendChild(cellText);
            row.appendChild(cell);
            stringB++;
          } else {
            const cellText = document.createTextNode(`${allNotesTwo[stringB]}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
            stringB++;
          }
        } else if (i === 3 && j > 0) {
          if (
            chordsData[getRootNote()].scaleNotes.includes(allNotesTwo[stringG])
          ) {
            cell.setAttribute("id", "in-scale");
            const cellText = document.createTextNode(`O`);
            cell.appendChild(cellText);
            row.appendChild(cell);
            stringG++;
          } else {
            const cellText = document.createTextNode(`${allNotesTwo[stringG]}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
            stringG++;
          }
        } else if (i === 4 && j > 0) {
          if (
            chordsData[getRootNote()].scaleNotes.includes(allNotesTwo[stringD])
          ) {
            cell.setAttribute("id", "in-scale");
            const cellText = document.createTextNode(`O`);
            cell.appendChild(cellText);
            row.appendChild(cell);
            stringD++;
          } else {
            const cellText = document.createTextNode(`${allNotesTwo[stringD]}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
            stringD++;
          }
        } else if (i === 5 && j > 0) {
          if (
            chordsData[getRootNote()].scaleNotes.includes(allNotesTwo[stringA])
          ) {
            cell.setAttribute("id", "in-scale");
            const cellText = document.createTextNode(`O`);
            cell.appendChild(cellText);
            row.appendChild(cell);
            stringA++;
          } else {
            const cellText = document.createTextNode(`${allNotesTwo[stringA]}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
            stringA++;
          }
        }
      }

      // add the row to the end of the table body
      tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    scaleDiagramDisplay.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "1");
  }

  function isInScale(note) {
    if (chordsData[getRootNote()].scaleNotes.includes(note)) {
    }
  }

  //Event listeners

  //Event listener to change the fingering and notes for scale that show when selecting different root notes from the dropdown
  chordSelect.addEventListener("change", function () {
    getRootNote();
    createFingeringChart();
    createTextChord();
    createScaleChart();
  });

  //Running functions on initial load
  createFingeringChart();
  createTextChord();
  createScaleChart();
});
