document.addEventListener('DOMContentLoaded', function() {
  const adviceButton = document.getElementById('adviceButton');
  const adviceDisplay = document.getElementById('adviceDisplay');

  adviceButton.addEventListener('click', function() {
    fetchAdvice().then(advice => {
      adviceDisplay.textContent = advice;
      adviceDisplay.classList.add('active');
    });
  });
});

function fetchAdvice() {
  // Placeholder for actual advice fetching logic
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("This is your random advice.");
    }, 1000);
  });
}