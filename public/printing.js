const form = document.querySelector('#printing-form');
const pdfInput = document.querySelector('#pdf');
const summary = document.querySelector('#order-summary');

// Check the filename locally; this does not read or upload the file contents.
function validatePdf() {
  const file = pdfInput.files[0];
  pdfInput.setCustomValidity(
    file && !/\.pdf$/i.test(file.name) ? 'Please select a PDF file (.pdf).' : ''
  );
}

pdfInput.addEventListener('change', validatePdf);

// Hide an old review whenever an option changes so it cannot look current.
form.addEventListener('input', () => {
  summary.hidden = true;
});
form.addEventListener('change', () => {
  summary.hidden = true;
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validatePdf();
  if (!form.reportValidity()) return;

  document.querySelector('#summary-file').textContent = pdfInput.files[0].name;
  document.querySelector('#summary-copies').textContent = form.elements.copies.value;
  document.querySelector('#summary-color').textContent = form.elements.color.value;
  document.querySelector('#summary-sides').textContent = form.elements.sides.value;

  summary.hidden = false;
  document.querySelector('#summary-heading').focus();
});
