alert("Welcome To Hanuman Bhajan Portal.");

  document.getElementById('contact-form').addEventListener('submit', function (e) {
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (!name || !email || !message) {
      e.preventDefault(); // Prevent form submission
      alert('Please fill out all fields before submitting the form.');
    }
  });

