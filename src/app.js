(function buildPage(){


  const keyboardContent = [
    [['`'], ['1'], ['2'], ['3'], ['4'], ['5'], ['6'], ['7'], ['8'], ['9'], ['0'], ['-'], ['='], ['Backspace']],
    [['Tab'], ['q'], ['w'], ['e'], ['r'], ['t'], ['y'], ['u'], ['i'], ['o'], ['p'], ['['], [']'], ['Enter']],
    [['Caps'], [''], ['a'], ['s'], ['d'], ['f'], ['g'], ['h'], ['j'], ['k'], ['l'], [';'], ['\''], ['\\']],
    [['Shift'], [''], ['z'], ['x'], ['c'], ['v'], ['b'], ['n'], ['m'], [','], ['.'], ['/'],  [''], ['Shift']],
    [['Ctrl'], ['Win'], ['Alt'], [' '], [''], [''], [''], [''], [''], [''], [''], ['Alt'], ['Win'], ['Ctrl']]
  ]

  function createTextArea(){

    const container = document.createElement('div');
    const textArea = document.createElement('textarea');
    const keyboard = document.createElement('table');
   
 

    for (let i = 0; i < 5; i++){
      const tableRow = document.createElement('tr');
      for (let j = 0; j < 14; j++){
        const tableCell = document.createElement('td');
        tableCell.classList.add('vc__keyboard-cell');
        tableCell.textContent = keyboardContent[i][j];
        if(tableCell.textContent === 'Caps'){
          tableCell.colSpan = '2';
        }

        switch(tableCell.textContent){
          case 'Caps':
            tableCell.colSpan = '2';
            break;
          case 'Shift':
            tableCell.colSpan = '2';
            break;
          case ' ':
            tableCell.colSpan = '8';
            break;
        }
         if(tableCell.textContent.length !== 0){
          tableRow.appendChild(tableCell);
         }
      }

      keyboard.appendChild(tableRow);

    }

    container.classList.add('vc__container');
    textArea.classList.add('vc__textarea');
    keyboard.classList.add('vc__keyboard')
    textArea.cols = '120';
    textArea.rows = '15';
    // textArea.disabled = 'true';
    container.appendChild(textArea);
    container.appendChild(keyboard);
    document.body.appendChild(container);

    window.addEventListener('keydown', pressHighlight);
    window.addEventListener('keyup', removeHighlight);

    document.querySelectorAll('.vc__keyboard-cell').forEach(e => e.addEventListener('click', clickWrite));
    }

    function pressHighlight(event){
      const keys = document.querySelectorAll('.vc__keyboard-cell');

      keys.forEach(e => {
        if(e.textContent === event.key.toLowerCase()){
          e.classList.add('vc__keyboard-cell_keydown');
            document.querySelector('textarea').textContent = document.querySelector('textarea').textContent + e.textContent;
          
        }
      })
    }

    function removeHighlight(){
      const keys = document.querySelectorAll('.vc__keyboard-cell');

      keys.forEach(e => e.classList.remove('vc__keyboard-cell_keydown'));
    }

    function clickWrite (event){
      document.querySelector('textarea').textContent = document.querySelector('textarea').textContent + event.target.textContent;
    }

    window.addEventListener('load', createTextArea);
})();


