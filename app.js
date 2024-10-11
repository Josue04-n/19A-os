window.onload = () => {
    const messages = document.querySelectorAll('.messages h2, .messages h1');
    messages.forEach((msg, i) => {
        msg.style.animationDelay = `${i * 2}s`;
    });
};
