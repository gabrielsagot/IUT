// Gestion de la page tutoriel de vote
document.addEventListener('DOMContentLoaded', function() {
    const voteButton = document.getElementById('voteButton');

    // Tracking du bouton de vote
    voteButton.addEventListener('click', function() {
        // Tracking Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click_vote_button', {
                'event_category': 'engagement',
                'event_label': 'Vote pour nous ! - Page tutoriel'
            });
        }

        // Le lien redirigera automatiquement vers https://univ-poitiers.legavote.fr
        console.log('Bouton de vote cliqué depuis la page tutoriel - Redirection vers le site de vote');
    });

    // Tracking de la consultation du tutoriel
    if (typeof gtag !== 'undefined') {
        gtag('event', 'view_tutorial', {
            'event_category': 'content',
            'event_label': 'Consultation tutoriel de vote'
        });
    }

    // Animation des cartes au scroll (optionnel, pour améliorer l'UX)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observer toutes les cartes
    const cards = document.querySelectorAll('.step-card, .info-card, .help-card');
    cards.forEach(card => {
        observer.observe(card);
    });
});
