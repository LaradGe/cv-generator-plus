const { jsPDF } = window.jspdf;

jsPDF.API.events.push(["addFonts", function () {
  this.addFileToVFS("FiraGO.ttf", "AAEAAAALAIAAAwAwT1MvMg8SBXgAAAC8AAAAYGNtYXABdL50AAABHAAAAExnYXNwAAAAEAAAAXgAAAAIZ...");
  this.addFont("FiraGO.ttf", "FiraGO", "normal");
}]);

function validateForm() {
  const form = document.getElementById('cvForm');
  if (!form.checkValidity()) {
    alert('გთხოვთ, შეავსეთ ყველა სავალდებულო ველი.');
    return false;
  }
  return true;
}

function generatePDF() {
  if (!validateForm()) return;

  const doc = new jsPDF();
  doc.setFont("FiraGO", "normal");
  doc.setFontSize(12);

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const position = document.getElementById('position').value;
  const education = document.getElementById('education').value;
  const experience = document.getElementById('experience').value;
  const skills = document.getElementById('skills').value;
  const social = document.getElementById('social').value;

  doc.text(`სახელი, გვარი: ${name}`, 10, 20);
  doc.text(`ელფოსტა: ${email}`, 10, 30);
  doc.text(`პოზიცია: ${position}`, 10, 40);
  doc.text("განათლება:", 10, 50);
  doc.text(education, 20, 60);
  doc.text("გამოცდილება:", 10, 80);
  doc.text(experience, 20, 90);
  doc.text("უნარები და ენები:", 10, 110);
  doc.text(skills, 20, 120);
  if (social) {
    doc.text("სოციალური ქსელები:", 10, 140);
    doc.text(social, 20, 150);
  }

  doc.save(`${name}_cv.pdf`);
}