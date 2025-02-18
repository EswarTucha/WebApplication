document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quizForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            const radioGroups = form.querySelectorAll('input[type="radio"]');
            const questions = new Set();
            const answered = new Set();
            
            radioGroups.forEach(radio => {
                questions.add(radio.name);
                if (radio.checked) {
                    answered.add(radio.name);
                }
            });
            
            if (questions.size !== answered.size) {
                e.preventDefault();
                alert('Please answer all questions before submitting.');
            }
        });
    }
});
