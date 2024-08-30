document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.see-more-btn').addEventListener('click', function() {
        document.querySelector('.more-products-container').style.display = 'flex';
        this.style.display = 'none'; // Hide "See More" button after clicking
    });
});
