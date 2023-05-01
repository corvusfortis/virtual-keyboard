(function buildPage(){

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