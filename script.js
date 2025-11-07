// Gestion du bouton de vote
document.addEventListener('DOMContentLoaded', function() {
    const voteButton = document.getElementById('voteButton');

    // Quand le lien de vote sera disponible, il suffira de le remplacer ici
    voteButton.addEventListener('click', function(e) {
        // Pour l'instant, empêche le comportement par défaut du lien vide
        // Une fois le lien de vote disponible, retire cette ligne
        e.preventDefault();

        // Feedback visuel simple
        console.log('Bouton de vote cliqué');

        // Une fois le lien disponible, remplace le href du bouton :
        // voteButton.href = 'https://lien-vers-le-vote.com';
    });

    // Gestion de la FAQ accordéon
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function() {
            // Toggle la classe active sur l'item cliqué
            item.classList.toggle('active');

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
});