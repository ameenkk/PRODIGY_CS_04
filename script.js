function checkPasswordStrength() {
    const password = document.getElementById("passwordInput").value;
    const strengthBar = document.getElementById("strengthBar");
    const feedback = document.getElementById("feedback");

    // Criteria checks
    const lengthCheck = password.length >= 8;
    const uppercaseCheck = /[A-Z]/.test(password);
    const lowercaseCheck = /[a-z]/.test(password);
    const numberCheck = /[0-9]/.test(password);
    const specialCharCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Update checkboxes
    document.getElementById("lengthCheck").checked = lengthCheck;
    document.getElementById("uppercaseCheck").checked = uppercaseCheck;
    document.getElementById("lowercaseCheck").checked = lowercaseCheck;
    document.getElementById("numberCheck").checked = numberCheck;
    document.getElementById("specialCharCheck").checked = specialCharCheck;

    // Calculate strength based on criteria met
    let strength = 0;
    if (lengthCheck) strength++;
    if (uppercaseCheck) strength++;
    if (lowercaseCheck) strength++;
    if (numberCheck) strength++;
    if (specialCharCheck) strength++;

    // Determine feedback and bar color
    let feedbackMessage = "Very weak password. Improve criteria.";
    let barColor = "red";

    if (strength === 5) {
        feedbackMessage = "Strong password. Well done!";
        barColor = "green";
    } else if (strength >= 3) {
        feedbackMessage = "Moderate password. Almost there!";
        barColor = "orange";
    }

    // Animate strength bar
    gsap.to(strengthBar, {
        width: `${strength * 20}%`,
        backgroundColor: barColor,
        duration: 0.5,
        ease: "power2.out",
    });

    // Animate feedback text
    gsap.to(feedback, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
            feedback.textContent = feedbackMessage;
            gsap.to(feedback, {
                opacity: 1,
                duration: 0.4,
            });
        },
    });
}
