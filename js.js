var spans = document.querySelectorAll('.tree li > span');
for (var i = 0; i < spans.length; i++) {
  if (spans[i].nextElementSibling !== null) {
    spans[i].style.cursor = 'pointer';
    spans[i].className = 'plus';
    spans[i].onclick = showul;
  }
}
function showul() {
  let nextul = this.nextElementSibling;
  if (nextul.className === 'show') {
    this.className = 'plus';
    nextul.className = '';
  } else {
    this.className = 'minus';
    nextul.className = 'show';
  }
}
