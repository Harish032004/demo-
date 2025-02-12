document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contactForm');
    const popupModal = document.getElementById('popupModal');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(form);

            try {
                const response = await fetch('https://script.google.com/macros/s/AKfycbw6xdVM5JIiVgESEj0uo4-1UBnbiUCNlSxiHBDco7eBy4SZMkKIR4CpuK_RSHjSZwwZ/exec', {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();

                if (result.result === 'success') {
                    popupModal.style.display = 'block';
                    form.reset();
                } else {
                    alert('Something went wrong. Please try again.');
                }
            } catch (error) {
                console.error('Error submitting the form:', error);
                alert('There was an error submitting the form. Please try again later.');
            }
        });
    }

    window.closePopup = function () {
        popupModal.style.display = 'none';
    };
});
