// Base de données des candidats
const candidatesData = {
    lucie: {
        firstname: "Lucie",
        lastname: "Gontard",
        role: '<i class="fa-solid fa-arrow-right arrow-animation"></i> Première année de BUT GEA sur le site de Niort',
        photo: "images/lucie.jpg",
        sectionTitle: "Qui suis-je ?",
        bio: "Étudiante investie et engagée, je souhaite représenter nos intérêts au sein du conseil de direction. Mon objectif est d'améliorer notre quotidien à l'IUT en favorisant le dialogue entre étudiants et administration, tout en défendant des projets concrets pour notre bien-être et notre réussite académique.",
        commitments: [
            {
                icon: "fa-solid fa-user-tie",
                title: "Déléguée de classe",
                description: "Première année BUT GEA - 2024/2025"
            },

        ]
    },
    gabriel: {
        firstname: "Gabriel",
        lastname: "Sagot",
        role: '<i class="fa-solid fa-arrow-right arrow-animation"></i> Deuxième année de BUT Science des Données sur le site de Niort',
        photo: "images/gabriel.jpg",
        sectionTitle: "Mon engagement",
        bio: "Investi dans la vie étudiante, je m'engage à porter votre voix auprès de la direction. Ma priorité : créer un environnement d'études stimulant où chacun peut s'épanouir, avec des infrastructures adaptées et des opportunités de développement personnel et professionnel.",
        commitments: [
            {
                icon: "fa-solid fa-user-tie",
                title: "Délégué de classe",
                description: "Délégué deux années consécutives de la promo Science des Données"
            },
            {
                icon: "fa-solid fa-trophy",
                title: "Chargé événementiel",
                description: "Membre du BDE SD - Organisation d'événements pour la vie étudiante"
            },
            {
                icon: "fa-solid fa-palette",
                title: "Graphiste du BDE",
                description: "Refonte du logo du BDE SD, réalisateur des différents posters/affiches du BDE..."
            },
            {
                icon: "fa-solid fa-code",
                title: "Développeur de ce site",
                description: "Conception de cette plateforme de campagne électorale"
            }
        ]
    },
    eva: {
        firstname: "Eva",
        lastname: "Mauget",
        role: '<i class="fa-solid fa-arrow-right arrow-animation"></i> Deuxième année de BUT GEA sur le site de Niort',
        photo: "images/eva.jpg",
        sectionTitle: "Ma vision",
        bio: "Dynamique et à l'écoute, je souhaite contribuer à faire de notre IUT un lieu de bien être et de convivialité. Je m'engage à défendre des initiatives innovantes, à promouvoir l'égalité des chances et à veiller à ce que chaque étudiant bénéficie des meilleures conditions pour réussir son parcours.",
        commitments: [
            {
                icon: "fa-solid fa-people-group",
                title: "Groupe de cohésion interne GEA",
                description: "Département GEA - 2024/2025",
                info: "Organise tout type d'événements comme les remises des diplômes, le goûter de Noël, les photos de classe, la vente de pulls à l'effigie de notre département, les liens de parrainage, les journées portes ouvertes..."
            }
        ]
    },
    noe: {
        firstname: "Noé",
        lastname: "Baillarguet",
        role: '<i class="fa-solid fa-arrow-right arrow-animation"></i> Deuxième année de BUT GEA sur le site de Niort',
        photo: "images/noe.jpg",
        sectionTitle: "Mes objectifs",
        bio: "Motivé par l'amélioration continue de notre formation, je m'engage à représenter fidèlement vos préoccupations au conseil de direction. Mon ambition est de renforcer les liens entre les différentes promotions, d'optimiser nos ressources pédagogiques et de favoriser l'insertion professionnelle de tous.",
        commitments: [
            {
                icon: "fa-solid fa-coins",
                title: "Trésorier de l'ATGN",
                description: "En tant que trésorier de l'Association Tripartite des Gestionnaires de Niort (ATGN) et du BDE GEA, je gère le financement et le développement de projets pour les filières GEA, SD et HSE. Parallèlement, j'organise des événements majeurs (soirées, week-ends) pour dynamiser la vie étudiante."
            },
            {
                icon: "fa-solid fa-coins",
                title: "Trésorier du BDE GEA",
                description: "Gestion du financement et développement de projets pour la vie étudiante"
            }
        ]
    },
    clemence: {
        firstname: "Clémence",
        lastname: "Doucet",
        role: '<i class="fa-solid fa-arrow-right arrow-animation"></i> Première année de BUT GEA sur le site de Niort',
        photo: "images/clemence.jpg",
        sectionTitle: "Mon implication",
        bio: "Active et déterminée, je souhaite contribuer à faire entendre la voix des étudiants dans les décisions importantes de l'IUT. Je m'engage à promouvoir des actions concrètes pour améliorer notre cadre de vie, faciliter notre apprentissage et renforcer l'esprit de communauté au sein de notre établissement.",
        commitments: [
            {
                icon: "fa-solid fa-user-tie",
                title: "Suppléante de la déléguée",
                description: "Première année BUT GEA"
            },
            {
                icon: "fa-solid fa-calendar-days",
                title: "Gestion de l'emploi du temps",
                description: "Participation à l'élaboration de la gestion de l'emploi du temps de la classe"
            }
        ]
    },
    antoine: {
        firstname: "Antoine",
        lastname: "Pollin-Brotel",
        role: '<i class="fa-solid fa-arrow-right arrow-animation"></i> Deuxième année de BUT GEA sur le site de Niort',
        photo: "images/antoine.jpg",
        sectionTitle: "Mon projet",
        bio: "Convaincu que chaque voix compte, je m'investis pour représenter au mieux vos attentes et vos besoins. Mon objectif est de travailler sur des projets collaboratifs qui enrichissent notre expérience étudiante, tout en veillant à ce que nos préoccupations quotidiennes soient prises en compte par la direction.",
        commitments: [
            {
                icon: "fa-solid fa-user-tie",
                title: "Délégué de classe",
                description: "Deuxième année BUT GEA - 2024/2025"
            },
            {
                icon: "fa-solid fa-pen",
                title: "Secrétaire de l'ATGN",
                description: "Association Tripartite des Gestionnaires de Niort"
            }
        ]
    },
    juliane: {
        firstname: "Juliane",
        lastname: "Doat",
        role: '<i class="fa-solid fa-arrow-right arrow-animation"></i> Deuxième année de BUT GEA sur le site de Niort',
        photo: "images/juliane.jpg",
        sectionTitle: "Mes priorités",
        bio: "Engagée et créative, je souhaite apporter ma pierre à l'édifice pour améliorer la vie étudiante à l'IUT. Je m'engage à défendre des projets innovants, à favoriser l'équilibre entre études et vie personnelle, et à créer des opportunités d'échanges et de partage entre tous les étudiants.",
        commitments: [
            {
                icon: "fa-solid fa-people-group",
                title: "Groupe de cohésion interne GEA",
                description: "Responsable du budget du groupe cohésion interne du département GEA",
                info: "Je participe à l'organisation de tout type d'événements visant à renforcer les liens entre étudiants. Les projets portés sont : les remises de diplômes, le goûter de Noël, les photos de classe, la vente de pulls à l'effigie du département, le parrainage, les journées portes ouvertes et bien d'autres encore. La maîtrise du budget de ces évènements a permis au groupe cohésion de gagner la responsabilité du portage financier des remises de diplômes de tous les départements de l'IUT. Cela a su démontrer des capacités à évaluer les montants et investissements à apporter pour des projets de plus grande envergure."
            }
        ]
    },
    theo: {
        firstname: "Théo",
        lastname: "Petit",
        role: '<i class="fa-solid fa-arrow-right arrow-animation"></i> Deuxième année de BUT Science des Données sur le site de Niort',
        photo: "images/theo.jpg",
        sectionTitle: "Ma motivation",
        bio: "Enthousiaste et pragmatique, je m'engage à porter vos idées et vos suggestions au conseil de direction. Mon but est de contribuer à créer un environnement d'études optimal, où règnent convivialité, solidarité et excellence académique, tout en veillant à ce que chacun trouve sa place et s'épanouisse pleinement.",
        commitments: [
            {
                icon: "fa-solid fa-user-tie",
                title: "Suppléant délégué",
                description: "Suppléant de Gabriel Sagot - Promo Science des Données"
            },
            {
                icon: "fa-solid fa-trophy",
                title: "Chargé événementiel",
                description: "Membre du BDE SD - Organisation d'événements"
            },
            {
                icon: "fa-solid fa-users",
                title: "Délégué alternant",
                description: "Délégué alternant de la promo Science des Données"
            }
        ]
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

    // Charger les engagements
    loadCommitments(candidate.commitments);
}

// Fonction pour charger les engagements
function loadCommitments(commitments) {
    const commitmentsContainer = document.getElementById('candidate-commitments');
    commitmentsContainer.innerHTML = '';

    if (!commitments || commitments.length === 0) {
        return;
    }

    commitments.forEach((commitment, index) => {
        const commitmentCard = document.createElement('div');
        commitmentCard.className = 'commitment-card';

        // Ajouter l'icône info si présente
        const infoIcon = commitment.info ? `
            <button class="info-icon" data-commitment-index="${index}" aria-label="Plus d'informations">
                <i class="fa-solid fa-circle-info"></i>
            </button>
        ` : '';

        // Ajouter le panneau d'info si présent
        const infoPanel = commitment.info ? `
            <div class="info-panel" id="info-panel-${index}">
                <p class="info-text">${commitment.info}</p>
            </div>
        ` : '';

        commitmentCard.innerHTML = `
            <div class="commitment-header">
                <div class="commitment-icon-wrapper">
                    <div class="commitment-icon-bg"></div>
                    <div class="commitment-icon">
                        <i class="${commitment.icon}"></i>
                    </div>
                </div>
                <div class="commitment-content">
                    <h3 class="commitment-title">
                        ${commitment.title}
                        ${infoIcon}
                    </h3>
                </div>
            </div>
            <p class="commitment-description">${commitment.description}</p>
            ${infoPanel}
        `;

        commitmentsContainer.appendChild(commitmentCard);
    });

    // Ajouter les événements pour les icônes info
    document.querySelectorAll('.info-icon').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const index = this.getAttribute('data-commitment-index');
            const infoPanel = document.getElementById(`info-panel-${index}`);

            // Fermer tous les autres panneaux
            document.querySelectorAll('.info-panel').forEach(panel => {
                if (panel !== infoPanel) {
                    panel.classList.remove('active');
                }
            });

            // Toggle le panneau actuel
            infoPanel.classList.toggle('active');
        });
    });
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
