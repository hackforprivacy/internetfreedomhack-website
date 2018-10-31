fetch('/.netlify/functions/count')
  .then(function(response) {
    return response.text();
  })
  .then(function(data) {
    if (parseInt(data)) {
      const countElements = document.querySelectorAll('.order-count-number');
      countElements.forEach(function(el) {
        el.textContent = data;
        el.parentElement.classList.add('visible');
      });
    }
  });
