// Gestion du bouton de vote
document.addEventListener('DOMContentLoaded', function() {
    const voteButton = document.getElementById('voteButton');

    voteButton.addEventListener('click', function() {
        // Détecter la page actuelle pour un tracking précis
        const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
        let pageLabel = 'Page accueil';

        if (currentPage === 'engagements') {
            pageLabel = 'Page engagements';
        } else if (currentPage === 'index' || currentPage === '') {
            pageLabel = 'Page accueil';
        }

        // Tracking Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click_vote_button', {
                'event_category': 'engagement',
                'event_label': `Vote pour nous ! - ${pageLabel}`
            });
        }

        // Le lien redirigera automatiquement vers https://univ-poitiers.legavote.fr
        console.log(`Bouton de vote cliqué - ${pageLabel} - Redirection vers le site de vote`);
    });

    // Gestion de la FAQ accordéon
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function() {
            const isOpening = !item.classList.contains('active');
            const questionText = question.querySelector('strong').textContent;

            // Toggle la classe active sur l'item cliqué
            item.classList.toggle('active');

            // Tracking Google Analytics si la question est ouverte
            if (isOpening && typeof gtag !== 'undefined') {
                gtag('event', 'faq_click', {
                    'event_category': 'engagement',
                    'event_label': questionText
                });
            }

            // Optionnel : fermer les autres items pour n'avoir qu'un seul ouvert à la fois
            // Décommentez les lignes ci-dessous si vous voulez ce comportement
            /*
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            */
        });
    });

    // Gestion de la modal affiche
    const afficheButton = document.getElementById('afficheButton');
    const afficheModal = document.getElementById('afficheModal');
    const closeModal = document.getElementById('closeModal');

    // Ouvrir la modal
    afficheButton.addEventListener('click', function() {
        // Tracking Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'view_poster', {
                'event_category': 'content',
                'event_label': 'Ouverture affiche de campagne'
            });
        }

        afficheModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Empêche le scroll en arrière-plan
    });

    // Fermer la modal avec le bouton X
    closeModal.addEventListener('click', function() {
        afficheModal.classList.remove('active');
        document.body.style.overflow = ''; // Restaure le scroll
    });

    // Fermer la modal en cliquant sur le fond noir
    afficheModal.addEventListener('click', function(e) {
        if (e.target === afficheModal) {
            afficheModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Fermer la modal avec la touche Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && afficheModal.classList.contains('active')) {
            afficheModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Tracking des clics sur les candidats
    const candidateLinks = document.querySelectorAll('a[href^="detail.html"]');
    candidateLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const candidateName = this.querySelector('.firstname')?.textContent + ' ' +
                                  this.querySelector('.lastname')?.textContent;

            // Tracking Google Analytics
            if (typeof gtag !== 'undefined' && candidateName) {
                gtag('event', 'view_candidate', {
                    'event_category': 'navigation',
                    'event_label': candidateName
                });
            }
        });
    });

    // Tracking du clic sur "Nos Engagements"
    const engagementsLink = document.querySelector('a[href="engagements.html"]');
    if (engagementsLink) {
        engagementsLink.addEventListener('click', function(e) {
            // Tracking Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'view_engagements', {
                    'event_category': 'navigation',
                    'event_label': 'Nos Engagements'
                });
            }
        });
    }

    // Tracking du clic sur "Comment voter ?" (grande carte sur index.html)
    const tutoVoteCard = document.querySelector('.tuto-vote-card');
    if (tutoVoteCard) {
        tutoVoteCard.addEventListener('click', function(e) {
            // Tracking Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'view_vote_tutorial', {
                    'event_category': 'navigation',
                    'event_label': 'Comment voter ? - Depuis page accueil'
                });
            }
        });
    }

    // Tracking du clic sur petit bouton "Comment voter ?" (sur engagements.html)
    const tutoVoteButtonSmall = document.querySelector('.tuto-vote-button-small');
    if (tutoVoteButtonSmall) {
        tutoVoteButtonSmall.addEventListener('click', function(e) {
            // Tracking Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'view_vote_tutorial', {
                    'event_category': 'navigation',
                    'event_label': 'Comment voter ? - Depuis page engagements'
                });
            }
        });
    }

    // Tracking des clics sur les liens dans la FAQ
    const faqLinks = document.querySelectorAll('.faq-answer a');
    faqLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const linkText = this.textContent;
            const linkHref = this.getAttribute('href');

            // Tracking Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'faq_link_click', {
                    'event_category': 'engagement',
                    'event_label': `${linkText} - ${linkHref}`
                });
            }
        });
    });
});