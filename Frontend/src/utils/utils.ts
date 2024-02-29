export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function displayError(message: string, inputElement: HTMLElement, errorDisplayed: boolean) {
    if (!errorDisplayed) {
        const errorContainer: HTMLDivElement = document.createElement("div");
        errorContainer.classList.add("error-messages");
        errorContainer.textContent = message;
        errorContainer.style.color = "red";
        errorDisplayed = true;

        const parentContainer: HTMLElement | null = inputElement.parentElement;

        if (parentContainer) {
            parentContainer.appendChild(errorContainer);

            // Automatically remove the error message after 6 seconds
            setTimeout(() => {
                if (errorContainer.parentNode === parentContainer) {
                    parentContainer.removeChild(errorContainer);
                    errorDisplayed = false; // Reset errorDisplayed flag
                }
            }, 6000);
        }
    }
}