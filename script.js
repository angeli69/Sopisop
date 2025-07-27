document.addEventListener('DOMContentLoaded', function() {
    // Track affiliate link clicks
    const affiliateLinks = document.querySelectorAll('a[href*="shope.ee"]');
    
    affiliateLinks.forEach(link => {
        link.addEventListener('click', function() {
            // You can add analytics tracking here
            console.log('Affiliate link clicked:', this.href);
            
            // Optional: Open in new tab
            window.open(this.href, '_blank');
            return false;
        });
    });
    
    // Add simple animation to main button
    const mainButton = document.getElementById('main-button');
    if (mainButton) {
        mainButton.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        mainButton.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }
});