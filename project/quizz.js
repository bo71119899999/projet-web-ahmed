function calculerNote(event) {
  const bonnesReponses = {
    question1: "b",
    question2: "a",
    question3: "b",
    question4: "a",
  };

  let score = 0;

  if (
    document.querySelector('input[name="question1"]:checked')?.value ===
    bonnesReponses.question1
  ) {
    score++;
  }
  if (
    document.querySelector('input[name="question2"]:checked')?.value ===
    bonnesReponses.question2
  ) {
    score++;
  }
  if (
    document.querySelector('select[name="question3"]').value ===
    bonnesReponses.question3
  ) {
    score++;
  }
  if (
    document.querySelector('input[name="question4"]:checked')?.value ===
    bonnesReponses.question4
  ) {
    score++;
  }

  const question5Answer = document
    .querySelector('textarea[name="question5"]')
    .value.trim()
    .toLowerCase();

  if (question5Answer.includes("16px")) {
    score++;
  }
  if (question5Answer.includes("taille de la police")) {
    score++;
  }
  if (question5Answer.includes("font-size")) {
    score++;
  }

  const note = (score / 5) * 100;

  alert(
    `Votre score est de ${score} sur 5. Votre note est de ${note.toFixed(2)}%`
  );
}

document.getElementById("quizForm").addEventListener("submit", calculerNote);
