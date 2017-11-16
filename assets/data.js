window.webdocData = {
    // La liste des onglets (tabs) qui contiennent chacun des sous-onglets (subTabs).
    tabs: [ 
        {
            // Le titre affiché de l'onglet.
            label: 'Accueil',

            // L'identifiant CSS de l'onglet, pour pouvoir lui appliquer des styles.
            // Chaque onglet bénéficie de la classe ".tab".
            id: 'accueil',

            // La liste des sous-onglets. 
            // Quand il y en a un seul, la liste n'est pas affichée.
            // Il est possible de masquer un sous-onglet en lui donnant la propriété "hidden: true"
            subTabs: [
                {
                    // L'identifiant CSS du sous-onglet.
                    id: 'home',

                    // Une image (optionnelle) qui sera affichée en pleine page
                    // L'adresse peut être en local bien sûr dans un dossier "images" par exemple
                    image: 'http://numeres.net/9782210103665/res/9782210103665_C04_ani_hist-2e-doc11/data/img1.png',

                    // Un titre (optionnel) qui sera affiché en H1.
                    title: 'Sénanque',

                    // Un sous-titre (optionnel) qui sera affiché en H2.
                    subtitle: 'Une abbaye cistercienne du XIIe siècle'
                }
            ]
        },
        // À partir d'ici, c'est les autres onglets qui se comportent de la même manière...
        {
            label: 'Obéir',
            id: 'tab1',
            subTabs: [
                {
                    id: 'tab1-home',
                    image: 'http://numeres.net/9782210103665/res/9782210103665_C04_ani_hist-2e-doc11/data/img1.png',
                    title: 'Plan de l\'abbaye',
                    hidden: true,

                    // La zone "à savoir" (learn) d'un sous onglet contient une liste de paragraphes.
                    learn: {
                        // Par défaut, le contenu de la zone à savoir est toujours masqué.
                        hidden: true,
                        // Les paragraphes contiennent un texte et un style optionnel (bold ou italic)
                        paragraphs: [
                            { text: 'Obéir à la Règle de Saint Benoît', style: 'bold' },
                            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                            { text: 'Lorem la méthode filter() crée et retourne un nouveau tableau contenant tous les éléments.' },
                        ]
                    },

                    // La zone "infos" (deux propriétés: est-ce visible ? et quel est le texte ?)
                    info: {
                        hidden: true,
                        text: 'Dimier/Porcher, édition Zodiaque, 1962.'
                    }
                },
                {
                    label: 'L\'église abbatiale',
                    id: 'abbatiale',
                    image: 'http://numeres.net/9782210103665/res/9782210103665_C04_ani_hist-2e-doc11/data/img12.png',
                    title: 'Plan de l\'abbaye',
                    learn: {
                        hidden: true,
                        paragraphs: [
                            { text: 'Obéir à Dieu', style: 'bold' },
                            { text: 'Lorem ipsum dolor sit amet.' },
                        ]
                    }
                },
                {
                    label: 'La salle capitulaire',
                    id: 'capitulaire',
                    image: 'http://numeres.net/9782210103665/res/9782210103665_C04_ani_hist-2e-doc11/data/img17.png',
                    title: 'Plan de l\'abbaye',
                    learn: {
                        hidden: true,
                        paragraphs: [
                            { text: 'Obéir à l\'abbé', style: 'bold' },
                            { text: 'Lorem cet algorithme est strictement celui spécifié par la cinquième édition d\'ECMA-262.' },
                        ]
                    }
                    
                },
                {
                    label: 'Le réfectoire',
                    id: 'refectoire',
                    image: 'http://numeres.net/9782210103665/res/9782210103665_C04_ani_hist-2e-doc11/data/img19.png',
                    title: 'Plan de l\'abbaye',
                    learn: {
                        hidden: true,
                        paragraphs: [
                            { text: 'Obéir par le silence', style: 'bold' },
                            { text: 'etc.' },
                        ]
                    }
                    
                },
            ]
        },
        {
            label: 'Méditer',
            id: 'tab2',
            subTabs: [
                {
                    id: 'tab2-home',
                    image: 'http://numeres.net/9782210103665/res/9782210103665_C04_ani_hist-2e-doc11/data/img23.png',
                    title: 'Le cloître de l’abbaye de Sénanque',
                    hidden: true,
                    learn: {
                        hidden: true,
                        paragraphs: [
                            { text: 'Le cloître de l’abbaye de Sénanque', style: 'bold' },
                            { text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.' },
                        ]
                    },
                    info: {
                        hidden: true,
                        text: 'Copyright lorem ipsum.'
                    }
                },
                {
                    label: 'Les galeries',
                    id: 'galeries',
                    image: 'http://numeres.net/9782210103665/res/9782210103665_C04_ani_hist-2e-doc11/data/img28.jpg',
                    learn: {
                        hidden: true,
                        paragraphs: [
                            { text: 'Les galeries', style: 'bold' },
                            { text: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.' },
                        ]
                    }
                },
                {
                    label: 'Le jardin',
                    id: 'jardin',
                    image: 'http://numeres.net/9782210103665/res/9782210103665_C04_ani_hist-2e-doc11/data/img32.jpg',
                    learn: {
                        hidden: true,
                        paragraphs: [
                            { text: 'Le jardin', style: 'bold' },
                            { text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur' },
                        ]
                    }
                },
            ]
        },
        {
            label: 'S\'isoler',
            id: 'tab3',
            subTabs: [
                {
                    id: 'tab3-home',
                    video: 'http://vimeopro.com/user36345481/histoire-geographie-2de-2015-9782210104464/video/127159061',
                    learn: {
                        hidden: true,
                        paragraphs: [
                            { text: 'Pour s\'isoler et iusto odio dignissimos ducimus qui blanditiis praesentium.' },
                        ]
                    },
                    info: {
                        hidden: true,
                        text: 'Vidéo de 1 minute 30 lalala.'
                    }
                },
            ]
        },
        {
            label: 'Travailler',
            id: 'tab4',
            subTabs: [
                {
                    id: 'tab4-home',
                    image: 'http://numeres.net/9782210103665/res/9782210103665_C04_ani_hist-2e-doc11/data/img36.png',
                    hidden: true,
                    learn: {
                        hidden: true,
                        paragraphs: [
                            { text: 'Le travail', style: 'bold' },
                            { text: 'At vero eos et accusamus et iusto odio dignissimos.' },
                        ]
                    },
                    info: {
                        hidden: true,
                        text: 'Copyright le moine sur la page travailler.'
                    }
                },
                {
                    label: 'Le chauffoir',
                    id: 'chauffoir',
                    image: 'http://numeres.net/9782210103665/res/9782210103665_C04_ani_hist-2e-doc11/data/img38.png',
                    learn: {
                        hidden: true,
                        paragraphs: [
                            { text: 'Le chauffoir de Dieu', style: 'bold' },
                            { text: 'Lorem ipsum dolor sit amet.' },
                        ]
                    }
                },
                {
                    label: 'Les granges',
                    id: 'granges',
                    image: 'http://numeres.net/9782210103665/res/9782210103665_C04_ani_hist-2e-doc11/data/img36.png',
                    learn: {
                        hidden: true,
                        paragraphs: [
                            { text: 'Les granges de Dieu', style: 'bold' },
                            { text: 'Lorem ipsum dolor sit amet.' },
                        ]
                    }
                },
                
                // 
            ]
        },
    ],
    currentTab: null,
    currentSubTab: null,
}