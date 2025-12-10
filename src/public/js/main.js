// Confirmation for delete actions
document.addEventListener('DOMContentLoaded', function() {
  const deleteForms = document.querySelectorAll('.delete-form');
  
  deleteForms.forEach(function(form) {
    form.addEventListener('submit', function(event) {
      if (!confirm('本当に削除しますか?')) {
        event.preventDefault();
      }
    });
  });
});
