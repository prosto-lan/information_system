function dragStart(ev) {
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData('Text', ev.target.id);
    ev.dataTransfer.setDragImage(ev.target, 0, 0);
    return true;
}

function dragEnter(ev) {
    ev.preventDefault();
    return true;
}

function dragEnd(ev) {
    ev.dataTransfer.clearData('Text');
    return true;
}

function dragOver(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = 'move';
    return false;
}

function dragDrop(ev) {
    ev.preventDefault();
    ev.stopPropagation();

    const idelt = ev.dataTransfer.getData('Text');
    const el = document.getElementById(idelt);
    if (el) {
        ev.target.appendChild(el);
    }
    return false;
}