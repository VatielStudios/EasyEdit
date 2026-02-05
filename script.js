const textEditor = document.getElementById('textEditor');
const resultDiv = document.getElementById('result');

function styleSelection(property, value) {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.style[property] = value; 
    range.surroundContents(span);
}

document.getElementById('applyFontBtn').addEventListener('click', () => {
    styleSelection('fontFamily', document.getElementById('fontSelector').value);
});

document.getElementById('applyColorBtn').addEventListener('click', () => {
    styleSelection('color', document.getElementById('colorPicker').value);
});

document.getElementById('applySizeBtn').addEventListener('click', () => {
    const size = document.getElementById('sizePicker').value;
    styleSelection('fontSize', size + 'px');
});

document.getElementById('boldBtn').addEventListener('click', () => {
    document.execCommand('bold');
});

document.getElementById('italicBtn').addEventListener('click', () => {
    document.execCommand('italic');
});

document.getElementById('convertBtn').addEventListener('click', () => {
    resultDiv.innerHTML = ''; 
    html2canvas(textEditor, {
        backgroundColor: null, 
        scale: 2 
    }).then(canvas => {
        const img = document.createElement('img');
        img.src = canvas.toDataURL("image/png");
        resultDiv.appendChild(img);
        resultDiv.scrollIntoView({behavior: "smooth"});
    });
});
