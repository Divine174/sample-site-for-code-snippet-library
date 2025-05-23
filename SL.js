function copyFeaturedSnippet(id) {
    const code = document.getElementById(id).innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert('Snippet copied to clipboard!');
    });    
}

        
function toggleSeeMore() {
    var content = document.getElementById('see-more-content');
    var btn = document.getElementById('see-more-btn');
    if (content.style.display === 'none') {
        content.style.display = 'block';
        btn.textContent = 'See Less';
    } else {
        content.style.display = 'none';
        btn.textContent = 'See More';
    }
}