document.addEventListener("DOMContentLoaded", function() {
    // JS-DRIVEN TYPEWRITER EFFECT
    const typewriterElement = document.querySelector('.typewrite');
    if (typewriterElement) {
        const textToType = typewriterElement.textContent;
        const typingSpeed = 150;
        let charIndex = 0;

        typewriterElement.textContent = ''; // Clear initial content

        function type() {
            if (charIndex < textToType.length) {
                typewriterElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                // Typing is finished, remove the cursor
                typewriterElement.classList.add('typing-done');
            }
        }
        setTimeout(type, 500); // Start typing after a short delay
    }
});