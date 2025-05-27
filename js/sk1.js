 // Animate skill bars on load
        window.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.skill-bar').forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 200);
            });
        });
    