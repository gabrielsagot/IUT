// Base de données des candidats
const candidatesData = {
    lucie: {
        firstname: "Lucie",
        lastname: "Gontard",
        role: '<i class="fa-solid fa-arrow-right arrow-animation"></i> Première année de BUT GEA sur le site de Niort',
        photo: "images/lucie.jpg",
        sectionTitle: "Qui suis-je ?",
        bio: "Étudiante investie et engagée, je souhaite représenter nos intérêts au sein du conseil de direction. Mon objectif est d'améliorer notre quotidien à l'IUT en favorisant le dialogue entre étudiants et administration, tout en défendant des projets concrets pour notre bien-être et notre réussite académique."
    },
    gabriel: {
        firstname: "Gabriel",
        lastname: "Sagot",
        role: '<i class="fa-solid fa-arrow-right arrow-animation"></i> Deuxième année de BUT Science des Données sur le site de Niort',
        photo: "images/gabriel.jpg",
        sectionTitle: "Mon engagement",
        bio: "Investi dans la vie étudiante, je m'engage à porter votre voix auprès de la direction. Ma priorité : créer un environnement d'études stimulant où chacun peut s'épanouir, avec des infrastructures adaptées et des opportunités de développement personnel et professionnel."
    },
    eva: {
        firstname: "Eva",
        lastname: "Mauget",
        role: '<i class="fa-solid fa-arrow-right arrow-animation"></i> Deuxième année de BUT GEA sur le site de Niort',
        photo: "images/eva.jpg",
        sectionTitle: "Ma vision",
        bio: "Dynamique et à l'écoute, je souhaite contribuer à faire de notre IUT un lieu de bien être et de convivialité. Je m'engage à défendre des initiatives innovantes, à promouvoir l'égalité des chances et à veiller à ce que chaque étudiant bénéficie des meilleures conditions pour réussir son parcours."
    },
    noe: {
        firstname: "Noé",
        lastname: "Baillarguet",
        role: '<i class="fa-solid fa-arrow-right arrow-animation"></i> Deuxième année de BUT GEA sur le site de Niort',
        photo: "images/noe.jpg",
        sectionTitle: "Mes objectifs",
        bio: "Motivé par l'amélioration continue de notre formation, je m'engage à représenter fidèlement vos préoccupations au conseil de direction. Mon ambition est de renforcer les liens entre les différentes promotions, d'optimiser nos ressources pédagogiques et de favoriser l'insertion professionnelle de tous."
    },
    clemence: {
        firstname: "Clémence",
        lastname: "Doucet",
        role: '<i class="fa-solid fa-arrow-right arrow-animation"></i> Première année de BUT Science des Données sur le site de Niort',
        photo: "images/clemence.jpg",
        sectionTitle: "Mon implication",
        bio: "Active et déterminée, je souhaite contribuer à faire entendre la voix des étudiants dans les décisions importantes de l'IUT. Je m'engage à promouvoir des actions concrètes pour améliorer notre cadre de vie, faciliter notre apprentissage et renforcer l'esprit de communauté au sein de notre établissement."
    },
    antoine: {
        firstname: "Antoine",
        lastname: "Pollin-Brotel",
        role: '<i class="fa-solid fa-arrow-right arrow-animation"></i> Deuxième année de BUT HSE sur le site de Niort',
        photo: "images/antoine.jpg",
        sectionTitle: "Mon projet",
        bio: "Convaincu que chaque voix compte, je m'investis pour représenter au mieux vos attentes et vos besoins. Mon objectif est de travailler sur des projets collaboratifs qui enrichissent notre expérience étudiante, tout en veillant à ce que nos préoccupations quotidiennes soient prises en compte par la direction."
    },
    juliane: {
        firstname: "Juliane",
        lastname: "Doat",
        role: '<i class="fa-solid fa-arrow-right arrow-animation"></i> Deuxième année de BUT GEA sur le site de Niort',
        photo: "images/juliane.jpg",
        sectionTitle: "Mes priorités",
        bio: "Engagée et créative, je souhaite apporter ma pierre à l'édifice pour améliorer la vie étudiante à l'IUT. Je m'engage à défendre des projets innovants, à favoriser l'équilibre entre études et vie personnelle, et à créer des opportunités d'échanges et de partage entre tous les étudiants."
    },
    theo: {
        firstname: "Théo",
        lastname: "Petit",
        role: '<i class="fa-solid fa-arrow-right arrow-animation"></i> Deuxième année de BUT Science des Données sur le site de Niort',
        photo: "images/theo.jpg",
        sectionTitle: "Ma motivation",
        bio: "Enthousiaste et pragmatique, je m'engage à porter vos idées et vos suggestions au conseil de direction. Mon but est de contribuer à créer un environnement d'études optimal, où règnent convivialité, solidarité et excellence académique, tout en veillant à ce que chacun trouve sa place et s'épanouisse pleinement."
    }
};

// Fonction pour récupérer le paramètre URL
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Fonction pour charger les données du candidat
function loadCandidateData() {
    const candidateId = getURLParameter('personne');

    // Vérifier si le candidat existe
    if (!candidateId || !candidatesData[candidateId]) {
        // Redirection vers la page d'accueil si le candidat n'existe pas
        window.location.href = 'index.html';
        return;
    }

    const candidate = candidatesData[candidateId];

    // Mettre à jour le titre de la page
    document.getElementById('page-title').textContent = `${candidate.firstname} ${candidate.lastname} - Les étudiants pour l'IUT !`;

    // Mettre à jour la photo
    const photoElement = document.getElementById('candidate-photo');
    photoElement.src = candidate.photo;
    photoElement.alt = `${candidate.firstname} ${candidate.lastname}`;

    // Mettre à jour le nom
    document.getElementById('candidate-firstname').textContent = candidate.firstname;
    document.getElementById('candidate-lastname').textContent = candidate.lastname;

    // Mettre à jour le rôle (utilise innerHTML pour permettre les icônes HTML)
    document.getElementById('candidate-role').innerHTML = candidate.role;

    // Mettre à jour le titre de section
    document.getElementById('section-title-text').textContent = candidate.sectionTitle;

    // Mettre à jour la biographie
    document.getElementById('candidate-bio').textContent = candidate.bio;
}

// Gestion du bouton de vote
function setupVoteButton() {
    const voteButton = document.getElementById('voteButton');

    voteButton.addEventListener('click', function(e) {
        // Pour l'instant, empêche le comportement par défaut
        e.preventDefault();
        console.log('Bouton de vote cliqué depuis la page de détail');

        // Une fois le lien disponible, remplace le href du bouton :
        // voteButton.href = 'https://lien-vers-le-vote.com';
    });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    loadCandidateData();
    setupVoteButton();
});
