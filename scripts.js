document.getElementById("photo").addEventListener("change", function(event) {
    const preview = document.getElementById("photo-preview");
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.innerHTML = `<img src="${e.target.result}" alt="ფოტო" style="width: 100%; height: 100%; object-fit: cover;">`;
        };
        reader.readAsDataURL(file);
    }
});

function addExperience() {
    const container = document.getElementById("experience-container");
    const fields = `
        <div class="form-group">
            <label for="position">პოზიციის დასახელება</label>
            <input type="text" name="position[]" placeholder="მაგ: გაყიდვების მენეჯერი">
        </div>
        <div class="form-group">
            <label for="company">კომპანია/ორგანიზაცია</label>
            <input type="text" name="company[]" placeholder="კომპანიის სახელი">
        </div>`;
    container.insertAdjacentHTML("beforeend", fields);
}

function addEducation() {
    const container = document.getElementById("education-container");
    const fields = `
        <div class="form-group">
            <label for="school">სასწავლებლის სახელი</label>
            <input type="text" name="school[]" placeholder="სასწავლებლის სახელი">
        </div>
        <div class="form-group">
            <label for="specialization">სპეციალობა</label>
            <input type="text" name="specialization[]" placeholder="სპეციალობა ან მიმართულება">
        </div>
        <div class="form-group">
            <label for="period">განათლების პერიოდი</label>
            <input type="text" name="period[]" placeholder="მაგ: 2010-2014">
        </div>`;
    container.insertAdjacentHTML("beforeend", fields);
}

function addLanguage() {
    const container = document.getElementById("languages-container");
    const fields = `
        <div class="form-group">
            <label>ენა</label>
            <input type="text" name="language[]" placeholder="ენა">
            <div class="stars">
                <label>★</label>
                <label>★</label>
                <label>★</label>
                <label>★</label>
                <label>★</label>
            </div>
        </div>`;
    container.insertAdjacentHTML("beforeend", fields);
}

function addSkill() {
    const container = document.getElementById("skills-container");
    const fields = `
        <div class="form-group">
            <input type="text" name="skill[]" placeholder="უნარი">
        </div>`;
    container.insertAdjacentHTML("beforeend", fields);
}
