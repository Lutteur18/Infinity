document.addEventListener('DOMContentLoaded', function() {
  var faqForm = document.getElementById('faq-form');
  if (faqForm) {
    faqForm.addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('faq-form-status').textContent =
        "Thank you for your question! We'll review and post a reply soon.";
      this.reset();
    });
  }
});