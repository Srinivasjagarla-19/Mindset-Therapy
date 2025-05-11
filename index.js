document.addEventListener('DOMContentLoaded', function() {
    const egoSwitch = document.getElementById('ego-switch');
    const otherSwitches = document.querySelectorAll('.toggle-switch:not(#ego-switch)');
    const notification = document.getElementById('notification');

    const quotes = [
        { text: "Your mindset shapes your reality", author: "MindSet Therapy" },
        { text: "The only limit is your mind", author: "MindSet Therapy" },
        { text: "Growth begins at the end of your comfort zone", author: "MindSet Therapy" },
        { text: "Your attitude determines your direction", author: "MindSet Therapy" },
        { text: "Small steps lead to big changes", author: "MindSet Therapy" }
    ];

    updateQuote();

    setInterval(updateQuote, 10000);

    function updateQuote() {
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById('quote').textContent = `"${quote.text}"`;
        document.getElementById('author').textContent = `- ${quote.author}`;
    }

    function showNotification(message) {
        notification.textContent = message;
        notification.classList.add('show');
        setTimeout(() => notification.classList.remove('show'), 3000);
    }

    egoSwitch.addEventListener('change', function() {
        if (egoSwitch.checked) {
            otherSwitches.forEach(switchElem => {
                switchElem.checked = false;
                switchElem.disabled = true;
            });
            showNotification('🤔 Remember: letting go of ego allows growth');
        } else {
            otherSwitches.forEach(switchElem => {
                switchElem.disabled = false;
            });
        }
    });

    otherSwitches.forEach(switchElem => {
        switchElem.addEventListener('change', function() {
            const trait = switchElem.dataset.trait;
            if (switchElem.checked) {
                egoSwitch.checked = false;
                egoSwitch.disabled = false;
                showNotification(`✨ Embracing ${trait}`);
            }
        });
    });
});