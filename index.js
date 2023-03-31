// Adding event listener to the page
document.addEventListener('mousedown', addAnnotation);

function addAnnotation(event) {
  // Get the mouse coordinates
  const x = event.clientX;
  const y = event.clientY;
  
  // Creating the annotation element
  const annotation = document.createElement('div');
  annotation.classList.add('annotation');
  annotation.style.top = `${y}px`;
  annotation.style.left = `${x}px`;
  
  // Adding the annotation to the page
  document.body.appendChild(annotation);
}
