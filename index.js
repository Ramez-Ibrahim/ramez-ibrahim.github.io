function initTypewriter() {
    const typewriterElement = document.querySelector('.typewrite');
    if (typewriterElement) {
        // Typewriter logic remains here as it's page-specific
        const textToType = typewriterElement.textContent;
        const typingSpeed = 150;
        let charIndex = 0;
        typewriterElement.textContent = '';
        function type() {
            if (charIndex < textToType.length) {
                typewriterElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                typewriterElement.classList.add('typing-done');
            }
        }
        setTimeout(type, 500);
    }
}
document.addEventListener("DOMContentLoaded", function() {
    initTypewriter();
});