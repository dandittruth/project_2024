// Secret password-protected page
document.addEventListener('DOMContentLoaded', () => {
    const secretPrompt = prompt("Enter the password:");
    if (secretPrompt === "when the truth is revealed, all comes to nothing") {
        window.location.href = "final-entry.html";
    }
});
