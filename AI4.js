
document.addEventListener('DOMContentLoaded', () => {
    const nodes = document.querySelectorAll('.chart-node');
    nodes.forEach((node, index) => {
        setTimeout(() => {
            node.style.transform = 'scale(1)';
            node.style.opacity = '1';
        }, 300 * (index + 1));
    });
});
