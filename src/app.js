(function buildPage(){


  const keyboardContent = [
    [['Esc'], [''], ['F1'], ['F2'], ['F3'], ['F4'], ['F5'], ['F6'], ['F7'], ['F8'], ['F9'], ['F10'], ['F11'], ['F12']],
    [['`'], ['1'], ['2'], ['3'], ['4'], ['5'], ['6'], ['7'], ['8'], ['9'], ['0'], ['-'], ['='], ['Backspace']],
    [['Tab'], ['q'], ['w'], ['e'], ['r'], ['t'], ['y'], ['u'], ['i'], ['o'], ['p'], ['['], [']'], ['Enter']],
    [['Caps'], ['a'], ['s'], ['d'], ['f'], ['g'], ['h'], ['j'], ['k'], ['l'], [';'], ['\''], ['\\'], ['']],
    [['Shift'], [''], ['z'], ['x'], ['c'], ['v'], ['b'], ['n'], ['m'], [','], ['.'], ['/'],  [''], ['Shift']],
    [['Ctrl'], ['win'], ['alt'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['alt'], ['win'], ['ctrl']]
  ]

  function createTextArea(){

    const container = document.createElement('div');
    const textArea = document.createElement('textarea');
    const keyboard = document.createElement('table');
   
 

    for (let i = 0; i < 6; i++){
      const tableRow = document.createElement('tr');
      for (let j = 0; j < 14; j++){
        const tableCell = document.createElement('td');
        tableCell.classList.add('vc__keyboard-cell');
        tableRow.appendChild(tableCell);
        
      }

      keyboard.appendChild(tableRow);

    }

    container.classList.add('vc__container');
    textArea.classList.add('vc__textarea');
    textArea.cols = '120';
    textArea.rows = '15';
    container.appendChild(textArea);
    container.appendChild(keyboard);
    document.body.appendChild(container);
    }

    window.addEventListener('load', createTextArea);

})();