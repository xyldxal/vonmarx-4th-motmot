// ===== CONFIG =====
const CORRECT_ANSWERS = [
  "marx",
  "marxel",
  "marxel abogado",
  "marxel s. abogado",
  "marxel s abogado",
  "maxi"
];
const SUCCESS_PAGE = "menu.html";
const FAIL_PAGE = "wrong.html";

// ===== ELEMENTS =====
const form = document.getElementById("lockForm");
const input = document.getElementById("answerInput");

// ===== SUBMIT =====
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const answer = input.value.trim().toLowerCase();
  if (!answer) return;

    // Checks if the typed answer matches any answer in the array
    const isCorrect = CORRECT_ANSWERS.some(
      (valid) => valid.trim().toLowerCase() === answer
    );

    if (isCorrect) {
      window.location.href = SUCCESS_PAGE;
    } else {
      window.location.href = FAIL_PAGE;
    }
  });
