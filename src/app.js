(function buildPage(){

  function createTextArea(){

    const container = document.createElement('div');
    const textArea = document.createElement("textarea");
    container.classList.add('vc__container');
    textArea.classList.add('vc__textarea');
    textArea.cols = '120';
    textArea.rows = '15';
    container.appendChild(textArea);
    document.body.appendChild(container);
    }

    window.addEventListener('load', createTextArea);

})();