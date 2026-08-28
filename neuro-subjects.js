// Banque officielle de sujets d’oncologie.
// Les 4 sujets fournis sont intégrés ci-dessous.
const NEUROCHIRURGIE_SUBJECTS = [
  {
    "id": "oncologie-sujet-1",
    "title": "SUJET 1 D’ONCOLOGIE",
    "matter": "Oncologie",
    "description": "Sujet 1 d’oncologie — banque complète de 60 questions.",
    "instructions": "Répondez aux questions. Pour les QCM, une ou plusieurs réponses peuvent être correctes. La correction détaillée est disponible après la composition.",
    "duration": 30,
    "programmed": true,
    "openDate": "2026-08-01",
    "openTime": "00:00",
    "closeDate": "2030-12-31",
    "closeTime": "23:59",
    "marking": {
      "correct": 1,
      "wrong": -1,
      "empty": 0
    },
    "questions": [
      {
        "type": "qcm",
        "text": "Concernant l’oncologie, quelles propositions sont exactes ?",
        "options": [
          "Elle étudie les cancers.",
          "Elle participe au diagnostic des cancers.",
          "Elle concerne le traitement des cancers.",
          "Elle concerne uniquement les maladies infectieuses."
        ],
        "correction": "L’oncologie, également appelée cancérologie, est consacrée à l’étude, au diagnostic et au traitement des cancers.",
        "originalNumber": 1,
        "answers": [
          "Elle étudie les cancers.",
          "Elle participe au diagnostic des cancers.",
          "Elle concerne le traitement des cancers."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Définitions : oncologie/cancérologie »."
      },
      {
        "type": "vf",
        "text": "Une tumeur est obligatoirement cancéreuse.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Une tumeur peut être bénigne ou maligne. Une tumeur maligne correspond au cancer.",
        "originalNumber": 2,
        "answer": "Faux",
        "source": "ONCOLOGIE.pdf — rubrique « Tumeur bénigne / tumeur maligne »."
      },
      {
        "type": "qcm",
        "text": "Concernant une tumeur bénigne, quelles propositions sont exactes ?",
        "options": [
          "Elle est bien limitée.",
          "Elle est généralement encapsulée.",
          "Sa croissance est lente.",
          "Elle donne des métastases."
        ],
        "correction": "Une tumeur bénigne est bien limitée, généralement encapsulée et de croissance lente. Elle ne donne pas de métastases.",
        "originalNumber": 3,
        "answers": [
          "Elle est bien limitée.",
          "Elle est généralement encapsulée.",
          "Sa croissance est lente."
        ],
        "source": "ONCOLOGIE.pdf — tableau « Tumeur bénigne / tumeur maligne »."
      },
      {
        "type": "qcm",
        "text": "Quelles caractéristiques peuvent appartenir à une tumeur maligne ?",
        "options": [
          "Elle est mal limitée.",
          "Elle est non encapsulée.",
          "Sa croissance peut être rapide.",
          "Elle peut produire des métastases."
        ],
        "correction": "Toutes ces caractéristiques sont associées à la malignité dans le cours.",
        "originalNumber": 4,
        "answers": [
          "Elle est mal limitée.",
          "Elle est non encapsulée.",
          "Sa croissance peut être rapide.",
          "Elle peut produire des métastases."
        ],
        "source": "ONCOLOGIE.pdf — tableau « Tumeur bénigne / tumeur maligne »."
      },
      {
        "type": "qcm",
        "text": "Quel élément est caractéristique d’une tumeur maligne ?",
        "options": [
          "L’apparition de métastases.",
          "Une croissance toujours lente.",
          "Une encapsulation régulière.",
          "L’absence totale d’envahissement."
        ],
        "correction": "Parmi ces propositions, seule la capacité à produire des métastases correspond à la tumeur maligne.",
        "originalNumber": 5,
        "answer": "L’apparition de métastases.",
        "source": "ONCOLOGIE.pdf — tableau « Tumeur bénigne / tumeur maligne »."
      },
      {
        "type": "qcm",
        "text": "Quelles sont les étapes de l’oncogenèse décrites dans le cours ?",
        "options": [
          "Initiation.",
          "Promotion.",
          "Progression.",
          "Cicatrisation."
        ],
        "correction": "L’oncogenèse évolue selon trois étapes : initiation, promotion et progression.",
        "originalNumber": 6,
        "answers": [
          "Initiation.",
          "Promotion.",
          "Progression."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Étapes de l’oncogenèse »."
      },
      {
        "type": "vf",
        "text": "L’initiation est une étape rapide et irréversible.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Le cours présente l’initiation comme une étape rapide et irréversible marquée par une atteinte de l’ADN.",
        "originalNumber": 7,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — rubrique « L’initiation »."
      },
      {
        "type": "qcm",
        "text": "Quels agents sont cités au cours de l’initiation ?",
        "options": [
          "Virus.",
          "Hydrocarbures.",
          "Colorants.",
          "Aflatoxines."
        ],
        "correction": "Tous ces agents sont cités dans le cours parmi les éléments susceptibles d’intervenir dans l’initiation.",
        "originalNumber": 8,
        "answers": [
          "Virus.",
          "Hydrocarbures.",
          "Colorants.",
          "Aflatoxines."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « L’initiation »."
      },
      {
        "type": "qcm",
        "text": "Quels éléments peuvent favoriser la promotion ?",
        "options": [
          "Les hormones.",
          "Les facteurs inflammatoires.",
          "Les métastases déjà constituées.",
          "La chirurgie conservatrice."
        ],
        "correction": "Les hormones et les facteurs inflammatoires sont cités parmi les facteurs favorisant la promotion.",
        "originalNumber": 9,
        "answers": [
          "Les hormones.",
          "Les facteurs inflammatoires."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Promotion »."
      },
      {
        "type": "vf",
        "text": "La phase de promotion est relativement longue.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Le cours présente la promotion comme une phase relativement longue.",
        "originalNumber": 10,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — rubrique « Promotion »."
      },
      {
        "type": "qcm",
        "text": "Au cours de la progression, les cellules cancéreuses peuvent devenir :",
        "options": [
          "Envahissantes.",
          "Métastatiques.",
          "Plus agressives.",
          "Incapables de se multiplier."
        ],
        "correction": "La progression s’accompagne de l’acquisition de propriétés invasives, métastatiques et agressives.",
        "originalNumber": 11,
        "answers": [
          "Envahissantes.",
          "Métastatiques.",
          "Plus agressives."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Progression »."
      },
      {
        "type": "vf",
        "text": "La maladie cancéreuse devient manifeste au cours de la progression.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "La progression correspond au stade où les caractéristiques agressives du cancer deviennent manifestes.",
        "originalNumber": 12,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — rubrique « Progression »."
      },
      {
        "type": "qcm",
        "text": "Quelles caractéristiques sont décrites chez la cellule cancéreuse ?",
        "options": [
          "Autosuffisance en facteurs de croissance.",
          "Perte du contrôle des divisions cellulaires.",
          "Invasion et métastases.",
          "Immortalisation."
        ],
        "correction": "Les quatre propositions appartiennent aux caractéristiques de la cellule cancéreuse données dans le cours.",
        "originalNumber": 13,
        "answers": [
          "Autosuffisance en facteurs de croissance.",
          "Perte du contrôle des divisions cellulaires.",
          "Invasion et métastases.",
          "Immortalisation."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Caractéristiques de la cellule cancéreuse »."
      },
      {
        "type": "qcm",
        "text": "Quelles propositions correspondent également aux caractéristiques d’une cellule cancéreuse ?",
        "options": [
          "Néoangiogenèse.",
          "Perte des capacités apoptotiques.",
          "Arrêt définitif des divisions cellulaires.",
          "Destruction obligatoire de tous les vaisseaux sanguins."
        ],
        "correction": "La néoangiogenèse et la perte des capacités apoptotiques font partie des six caractéristiques décrites.",
        "originalNumber": 14,
        "answers": [
          "Néoangiogenèse.",
          "Perte des capacités apoptotiques."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Caractéristiques de la cellule cancéreuse »."
      },
      {
        "type": "vf",
        "text": "L’apoptose correspond à la mort cellulaire programmée.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Les cellules cancéreuses peuvent perdre leurs capacités apoptotiques et ainsi échapper à la mort cellulaire programmée.",
        "originalNumber": 15,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — rubrique « Perte des capacités apoptotiques »."
      },
      {
        "type": "qcm",
        "text": "Laquelle de ces propositions définit la néoangiogenèse ?",
        "options": [
          "Formation de nouveaux vaisseaux sanguins favorisée par la tumeur.",
          "Destruction des ganglions lymphatiques.",
          "Arrêt de la vascularisation tumorale.",
          "Mort programmée de la cellule."
        ],
        "correction": "La néoangiogenèse correspond à la formation de nouveaux vaisseaux favorisant notamment l’apport nécessaire à la tumeur.",
        "originalNumber": 16,
        "answer": "Formation de nouveaux vaisseaux sanguins favorisée par la tumeur.",
        "source": "ONCOLOGIE.pdf — rubrique « Néoangiogenèse »."
      },
      {
        "type": "qcm",
        "text": "La dissémination cancéreuse peut comporter :",
        "options": [
          "Une extension locale.",
          "Une extension régionale.",
          "Une extension générale.",
          "Uniquement une atteinte cutanée."
        ],
        "correction": "Le cours décrit une extension locale puis une extension régionale ou générale.",
        "originalNumber": 17,
        "answers": [
          "Une extension locale.",
          "Une extension régionale.",
          "Une extension générale."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Dissémination cancéreuse »."
      },
      {
        "type": "vf",
        "text": "L’extension locale correspond notamment à l’infiltration des tissus voisins.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Le cancer peut progresser localement en envahissant les tissus voisins.",
        "originalNumber": 18,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — rubrique « Extension locale »."
      },
      {
        "type": "qcm",
        "text": "Quelles voies de dissémination sont décrites dans le cours ?",
        "options": [
          "Voie lymphatique.",
          "Voie sanguine.",
          "Voie digestive exclusivement.",
          "Voie urinaire exclusivement."
        ],
        "correction": "Les principales voies décrites sont la voie lymphatique et la voie sanguine.",
        "originalNumber": 19,
        "answers": [
          "Voie lymphatique.",
          "Voie sanguine."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Extension régionale et générale »."
      },
      {
        "type": "vf",
        "text": "La voie lymphatique peut conduire à une atteinte ganglionnaire.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Les cellules tumorales peuvent migrer par la lymphe et atteindre des ganglions.",
        "originalNumber": 20,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — rubrique « Voie lymphatique »."
      },
      {
        "type": "qcm",
        "text": "Quelle proposition correspond à la dissémination par voie sanguine ?",
        "options": [
          "Les cellules cancéreuses peuvent emprunter la circulation sanguine et atteindre un autre organe.",
          "Les cellules restent obligatoirement dans la tumeur primitive.",
          "Elle ne peut jamais provoquer de métastase.",
          "Elle concerne uniquement les tumeurs bénignes."
        ],
        "correction": "La dissémination sanguine permet aux cellules cancéreuses de voyager vers d’autres organes.",
        "originalNumber": 21,
        "answer": "Les cellules cancéreuses peuvent emprunter la circulation sanguine et atteindre un autre organe.",
        "source": "ONCOLOGIE.pdf — rubrique « Voie sanguine »."
      },
      {
        "type": "qcm",
        "text": "Concernant une métastase :",
        "options": [
          "Elle constitue une localisation cancéreuse secondaire.",
          "Elle peut apparaître à distance de la tumeur primitive.",
          "Elle peut résulter de la migration de cellules cancéreuses.",
          "Elle correspond obligatoirement à une tumeur bénigne."
        ],
        "correction": "Une métastase correspond à une implantation tumorale secondaire résultant de la dissémination des cellules cancéreuses.",
        "originalNumber": 22,
        "answers": [
          "Elle constitue une localisation cancéreuse secondaire.",
          "Elle peut apparaître à distance de la tumeur primitive.",
          "Elle peut résulter de la migration de cellules cancéreuses."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Dissémination / métastases »."
      },
      {
        "type": "qcm",
        "text": "Le cours distingue quelles formes d’épidémiologie ?",
        "options": [
          "Descriptive.",
          "Analytique.",
          "D’intervention.",
          "Traumatique."
        ],
        "correction": "Le cours présente l’épidémiologie descriptive, analytique et d’intervention.",
        "originalNumber": 23,
        "answers": [
          "Descriptive.",
          "Analytique.",
          "D’intervention."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Épidémiologie »."
      },
      {
        "type": "vf",
        "text": "L’incidence correspond aux nouveaux cas apparaissant au cours d’une période donnée.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "L’incidence mesure la survenue de nouveaux cas.",
        "originalNumber": 24,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — rubrique « Incidence »."
      },
      {
        "type": "vf",
        "text": "La prévalence correspond uniquement aux nouveaux cas apparus pendant l’année.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Cette définition correspond à l’incidence. La prévalence concerne l’ensemble des personnes atteintes à un moment donné.",
        "originalNumber": 25,
        "answer": "Faux",
        "source": "ONCOLOGIE.pdf — rubrique « Incidence / Prévalence »."
      },
      {
        "type": "qcm",
        "text": "Parmi les facteurs de risque cités dans le cours figurent :",
        "options": [
          "Tabagisme.",
          "Alcoolisme.",
          "Expositions professionnelles.",
          "Radiations."
        ],
        "correction": "Les quatre sont cités parmi les facteurs associés à certains cancers.",
        "originalNumber": 26,
        "answers": [
          "Tabagisme.",
          "Alcoolisme.",
          "Expositions professionnelles.",
          "Radiations."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Facteurs de risque »."
      },
      {
        "type": "qcm",
        "text": "Quels virus sont directement associés dans le cours respectivement au cancer primitif du foie et au cancer du col de l’utérus ?",
        "options": [
          "Virus de l’hépatite B.",
          "HPV.",
          "Virus de la grippe.",
          "Virus de la rougeole."
        ],
        "correction": "L’hépatite B est associée au cancer primitif du foie et le HPV au cancer du col de l’utérus.",
        "originalNumber": 27,
        "answers": [
          "Virus de l’hépatite B.",
          "HPV."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Facteurs associés aux cancers »."
      },
      {
        "type": "qcm",
        "text": "Quelles associations correspondent au cours ?",
        "options": [
          "Tabac → cancer broncho-pulmonaire.",
          "HPV → cancer du col de l’utérus.",
          "Hépatite B → cancer primitif du foie.",
          "Aflatoxine → cancer primitif du foie."
        ],
        "correction": "Les quatre associations apparaissent dans le support.",
        "originalNumber": 28,
        "answers": [
          "Tabac → cancer broncho-pulmonaire.",
          "HPV → cancer du col de l’utérus.",
          "Hépatite B → cancer primitif du foie.",
          "Aflatoxine → cancer primitif du foie."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Facteurs ou agents associés »."
      },
      {
        "type": "vf",
        "text": "L’association alcool-tabac est citée pour les cancers des voies aérodigestives.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Le cours mentionne l’association alcool-tabac pour les cancers des voies aérodigestives.",
        "originalNumber": 29,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — rubrique « Facteurs de risque »."
      },
      {
        "type": "qcm",
        "text": "Quels niveaux de prévention sont présentés dans le cours ?",
        "options": [
          "Primaire.",
          "Secondaire.",
          "Tertiaire.",
          "Quaternaire."
        ],
        "correction": "Le support décrit trois niveaux de prévention.",
        "originalNumber": 30,
        "answers": [
          "Primaire.",
          "Secondaire.",
          "Tertiaire."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Prévention des cancers »."
      },
      {
        "type": "vf",
        "text": "La lutte contre le tabagisme relève de la prévention primaire.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "La prévention primaire vise à agir sur les facteurs de risque avant l’apparition du cancer.",
        "originalNumber": 31,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — rubrique « Prévention primaire »."
      },
      {
        "type": "vf",
        "text": "La prévention secondaire concerne notamment le dépistage des états précancéreux.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Le dépistage et le traitement des états précancéreux appartiennent à la prévention secondaire.",
        "originalNumber": 32,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — rubrique « Prévention secondaire »."
      },
      {
        "type": "qcm",
        "text": "Selon le cours, la prévention tertiaire peut concerner :",
        "options": [
          "La prise en charge du malade.",
          "La réinsertion socioprofessionnelle.",
          "La prévention des rechutes.",
          "L’initiation de la cancérogenèse."
        ],
        "correction": "Ces trois éléments sont associés à la prévention tertiaire dans le support.",
        "originalNumber": 33,
        "answers": [
          "La prise en charge du malade.",
          "La réinsertion socioprofessionnelle.",
          "La prévention des rechutes."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Prévention tertiaire »."
      },
      {
        "type": "qcm",
        "text": "Quels examens sont cités dans le diagnostic ou le bilan d’extension ?",
        "options": [
          "Échographie.",
          "Scanner.",
          "IRM.",
          "Radiographie."
        ],
        "correction": "Tous ces examens sont mentionnés dans le cours.",
        "originalNumber": 34,
        "answers": [
          "Échographie.",
          "Scanner.",
          "IRM.",
          "Radiographie."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Diagnostic et bilan d’extension »."
      },
      {
        "type": "qcm",
        "text": "Parmi les examens suivants, lesquels sont également mentionnés dans le cours ?",
        "options": [
          "Biopsie.",
          "Scintigraphie osseuse.",
          "Électroencéphalogramme systématique.",
          "Audiométrie systématique."
        ],
        "correction": "La biopsie et la scintigraphie osseuse font partie des examens cités.",
        "originalNumber": 35,
        "answers": [
          "Biopsie.",
          "Scintigraphie osseuse."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Diagnostic et bilan d’extension »."
      },
      {
        "type": "vf",
        "text": "Selon le cours, la biopsie avec étude histologique permet la confirmation du diagnostic.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "L’étude histologique du prélèvement obtenu par biopsie constitue l’argument de certitude diagnostique présenté dans le support.",
        "originalNumber": 36,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — rubrique « Biopsie / étude histologique »."
      },
      {
        "type": "qcm",
        "text": "La classification TNM tient compte de :",
        "options": [
          "La tumeur primitive.",
          "L’atteinte ganglionnaire.",
          "Les métastases.",
          "La profession du patient."
        ],
        "correction": "T correspond à la tumeur, N aux ganglions et M aux métastases.",
        "originalNumber": 37,
        "answers": [
          "La tumeur primitive.",
          "L’atteinte ganglionnaire.",
          "Les métastases."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Classification TNM »."
      },
      {
        "type": "vf",
        "text": "Dans TNM, la lettre M correspond aux métastases.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "La lettre M renseigne sur les métastases à distance.",
        "originalNumber": 38,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — rubrique « Classification TNM »."
      },
      {
        "type": "qcm",
        "text": "Parmi les signes concernant le côlon ou le rectum, le cours cite :",
        "options": [
          "Saignement rectal.",
          "Selles sanglantes.",
          "Modification du transit.",
          "Voix rauque."
        ],
        "correction": "La voix rauque appartient aux signes cités pour la gorge ou le larynx, et non pour le côlon ou le rectum.",
        "originalNumber": 39,
        "answers": [
          "Saignement rectal.",
          "Selles sanglantes.",
          "Modification du transit."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Circonstances de découverte »."
      },
      {
        "type": "qcm",
        "text": "Parmi les signes concernant la vessie ou la prostate, le cours cite :",
        "options": [
          "Mictions fréquentes.",
          "Urines sanglantes.",
          "Troubles du jet urinaire.",
          "Douleurs pelviennes."
        ],
        "correction": "Tous ces signes sont présentés dans le support pour la vessie ou la prostate.",
        "originalNumber": 40,
        "answers": [
          "Mictions fréquentes.",
          "Urines sanglantes.",
          "Troubles du jet urinaire.",
          "Douleurs pelviennes."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Vessie / prostate »."
      },
      {
        "type": "qcm",
        "text": "Quel signe est cité dans le cours concernant le poumon ?",
        "options": [
          "Toux persistante.",
          "Saignement vaginal anormal.",
          "Modification d’un grain de beauté.",
          "Trouble du jet urinaire."
        ],
        "correction": "Parmi ces propositions, seule la toux persistante appartient aux signes pulmonaires cités.",
        "originalNumber": 41,
        "answer": "Toux persistante.",
        "source": "ONCOLOGIE.pdf — rubrique « Poumon »."
      },
      {
        "type": "qcm",
        "text": "Concernant la gorge ou le larynx, le cours cite :",
        "options": [
          "Plaie buccale persistante.",
          "Boule dans la gorge.",
          "Voix rauque.",
          "Difficulté à avaler ou à mâcher."
        ],
        "correction": "Les quatre signes sont présents dans le cours.",
        "originalNumber": 42,
        "answers": [
          "Plaie buccale persistante.",
          "Boule dans la gorge.",
          "Voix rauque.",
          "Difficulté à avaler ou à mâcher."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Gorge / larynx »."
      },
      {
        "type": "vf",
        "text": "Un saignement vaginal anormal peut faire partie des signes d’alerte concernant l’utérus ou le col.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Le cours mentionne notamment des saignements vaginaux non liés au cycle.",
        "originalNumber": 43,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — rubrique « Utérus / col »."
      },
      {
        "type": "qcm",
        "text": "Quels signes généraux sont cités dans le cours ?",
        "options": [
          "Asthénie.",
          "Fièvre.",
          "Anorexie.",
          "Amaigrissement."
        ],
        "correction": "Ces quatre manifestations font partie des signes généraux présentés.",
        "originalNumber": 44,
        "answers": [
          "Asthénie.",
          "Fièvre.",
          "Anorexie.",
          "Amaigrissement."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Signes généraux »."
      },
      {
        "type": "qcm",
        "text": "Quels autres signes généraux figurent dans le support ?",
        "options": [
          "Sueurs nocturnes.",
          "Prurit.",
          "Altération de l’état général.",
          "Prise de poids obligatoire."
        ],
        "correction": "Les trois premières propositions sont citées ; la prise de poids obligatoire ne l’est pas.",
        "originalNumber": 45,
        "answers": [
          "Sueurs nocturnes.",
          "Prurit.",
          "Altération de l’état général."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Signes généraux »."
      },
      {
        "type": "vf",
        "text": "La chirurgie fait partie des stratégies thérapeutiques présentées dans le cours.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "La chirurgie fait partie des traitements du cancer décrits dans le support.",
        "originalNumber": 46,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — rubrique « Stratégies thérapeutiques »."
      },
      {
        "type": "qcm",
        "text": "Quelles formes de chirurgie sont distinguées dans le cours ?",
        "options": [
          "Chirurgie conservatrice.",
          "Chirurgie non conservatrice.",
          "Chirurgie hormonale.",
          "Chirurgie infectieuse."
        ],
        "correction": "Le support distingue la chirurgie conservatrice et la chirurgie non conservatrice.",
        "originalNumber": 47,
        "answers": [
          "Chirurgie conservatrice.",
          "Chirurgie non conservatrice."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Chirurgie »."
      },
      {
        "type": "vf",
        "text": "Une chirurgie conservatrice cherche à préserver autant que possible l’organe ou les tissus sains.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Le principe est de retirer la tumeur tout en conservant autant que possible les tissus non atteints.",
        "originalNumber": 48,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — rubrique « Chirurgie conservatrice »."
      },
      {
        "type": "qcm",
        "text": "Concernant la chimiothérapie :",
        "options": [
          "Elle utilise des agents cytotoxiques.",
          "Elle vise les cellules tumorales.",
          "Elle peut atteindre des cellules normales à division rapide.",
          "Elle constitue uniquement un examen diagnostique."
        ],
        "correction": "Les produits cytotoxiques attaquent les cellules tumorales mais peuvent également toucher certaines cellules normales à renouvellement rapide.",
        "originalNumber": 49,
        "answers": [
          "Elle utilise des agents cytotoxiques.",
          "Elle vise les cellules tumorales.",
          "Elle peut atteindre des cellules normales à division rapide."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Chimiothérapie »."
      },
      {
        "type": "qcm",
        "text": "Les médicaments anticancéreux présentés dans le cours peuvent agir sur :",
        "options": [
          "L’ADN.",
          "La synthèse de l’ADN.",
          "Les microtubules.",
          "Uniquement les muscles."
        ],
        "correction": "Ces mécanismes d’action sont cités dans le cours.",
        "originalNumber": 50,
        "answers": [
          "L’ADN.",
          "La synthèse de l’ADN.",
          "Les microtubules."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Chimiothérapie / mécanismes d’action »."
      },
      {
        "type": "vf",
        "text": "Une chimiothérapie néoadjuvante est administrée avant la chirurgie.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Le traitement néoadjuvant précède le traitement chirurgical.",
        "originalNumber": 51,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — rubrique « Chimiothérapie néoadjuvante »."
      },
      {
        "type": "vf",
        "text": "La chimiothérapie néoadjuvante peut servir à réduire la taille de la tumeur avant l’intervention.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Cet objectif est explicitement présenté dans le cours.",
        "originalNumber": 52,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — rubrique « Chimiothérapie néoadjuvante »."
      },
      {
        "type": "vf",
        "text": "La chimiothérapie adjuvante est administrée après la chirurgie.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Elle complète le traitement chirurgical.",
        "originalNumber": 53,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — rubrique « Chimiothérapie adjuvante »."
      },
      {
        "type": "qcm",
        "text": "Concernant la chimiothérapie adjuvante :",
        "options": [
          "Elle est utilisée après la chirurgie.",
          "Elle vise à détruire des cellules cancéreuses pouvant rester.",
          "Elle est obligatoirement utilisée avant la chirurgie.",
          "Elle remplace la biopsie."
        ],
        "correction": "L’adjuvante intervient après la chirurgie pour traiter les cellules cancéreuses éventuellement restantes.",
        "originalNumber": 54,
        "answers": [
          "Elle est utilisée après la chirurgie.",
          "Elle vise à détruire des cellules cancéreuses pouvant rester."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Chimiothérapie adjuvante »."
      },
      {
        "type": "qcm",
        "text": "Quelles formes d’hormonothérapie sont décrites dans le cours ?",
        "options": [
          "Hormonothérapie suppressive.",
          "Hormonothérapie additive.",
          "Hormonothérapie bactérienne.",
          "Hormonothérapie traumatique."
        ],
        "correction": "Le support décrit l’hormonothérapie suppressive et additive.",
        "originalNumber": 55,
        "answers": [
          "Hormonothérapie suppressive.",
          "Hormonothérapie additive."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Hormonothérapie »."
      },
      {
        "type": "vf",
        "text": "L’hormonothérapie suppressive vise à supprimer la source hormonale.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "C’est le principe de l’hormonothérapie suppressive présenté dans le cours.",
        "originalNumber": 56,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — rubrique « Hormonothérapie suppressive »."
      },
      {
        "type": "qcm",
        "text": "Avant une chimiothérapie, l’IDE doit notamment :",
        "options": [
          "Mettre le malade en confiance.",
          "Recueillir les données utiles.",
          "Expliquer le traitement et ses effets secondaires.",
          "Rechercher des allergies ou réactions éventuelles."
        ],
        "correction": "Ces différentes actions sont mentionnées dans le rôle infirmier avant l’administration de la chimiothérapie.",
        "originalNumber": 57,
        "answers": [
          "Mettre le malade en confiance.",
          "Recueillir les données utiles.",
          "Expliquer le traitement et ses effets secondaires.",
          "Rechercher des allergies ou réactions éventuelles."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Rôle de l’IDE avant la chimiothérapie »."
      },
      {
        "type": "qcm",
        "text": "Quels éléments du bilan biologique sont particulièrement mentionnés avant la chimiothérapie ?",
        "options": [
          "NFS.",
          "Fonction rénale.",
          "Fonction hépatique.",
          "Uniquement le groupe sanguin."
        ],
        "correction": "Le support insiste sur la NFS ainsi que l’évaluation des fonctions rénale et hépatique.",
        "originalNumber": 58,
        "answers": [
          "NFS.",
          "Fonction rénale.",
          "Fonction hépatique."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Rôle de l’IDE avant la chimiothérapie »."
      },
      {
        "type": "qcm",
        "text": "Pendant l’administration d’une chimiothérapie, l’IDE doit :",
        "options": [
          "Vérifier et suivre le protocole.",
          "Surveiller le patient.",
          "Respecter les règles d’hygiène et d’asepsie.",
          "Surveiller une éventuelle extravasation."
        ],
        "correction": "Ces quatre actions font partie du rôle infirmier décrit pendant l’administration du traitement.",
        "originalNumber": 59,
        "answers": [
          "Vérifier et suivre le protocole.",
          "Surveiller le patient.",
          "Respecter les règles d’hygiène et d’asepsie.",
          "Surveiller une éventuelle extravasation."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Rôle de l’IDE pendant la chimiothérapie »."
      },
      {
        "type": "qcm",
        "text": "Parmi les complications ou effets indésirables à surveiller chez un patient sous chimiothérapie figurent :",
        "options": [
          "Leucopénie, thrombopénie et anémie.",
          "Nausées et vomissements.",
          "Mucite et alopécie.",
          "Troubles rénaux, pulmonaires ou neurologiques."
        ],
        "correction": "Le cours décrit une surveillance des toxicités hématologiques ainsi que de nombreux effets digestifs, cutanéo-muqueux, rénaux, pulmonaires et neurologiques.",
        "originalNumber": 60,
        "answers": [
          "Leucopénie, thrombopénie et anémie.",
          "Nausées et vomissements.",
          "Mucite et alopécie.",
          "Troubles rénaux, pulmonaires ou neurologiques."
        ],
        "source": "ONCOLOGIE.pdf — rubrique « Surveillance / effets secondaires de la chimiothérapie »."
      }
    ]
  },
  {
    "id": "oncologie-sujet-2",
    "title": "SUJET 2 ONCOLOGIE",
    "matter": "Oncologie",
    "description": "Sujet 2 d’oncologie — banque complète de 60 questions.",
    "instructions": "Répondez aux questions. Pour les QCM, une ou plusieurs réponses peuvent être correctes. La correction détaillée est disponible après la composition.",
    "duration": 30,
    "programmed": true,
    "openDate": "2026-08-01",
    "openTime": "00:00",
    "closeDate": "2030-12-31",
    "closeTime": "23:59",
    "marking": {
      "correct": 1,
      "wrong": -1,
      "empty": 0
    },
    "questions": [
      {
        "type": "qcm",
        "text": "Une masse est décrite comme bien limitée, encapsulée, à croissance lente et sans métastase. À quelle situation correspond-elle le mieux ?",
        "options": [
          "Tumeur bénigne.",
          "Tumeur maligne.",
          "Métastase.",
          "Progression cancéreuse."
        ],
        "correction": "L’association « bien limitée + encapsulée + croissance lente + absence de métastases » correspond aux caractères de la tumeur bénigne dans le cours.",
        "originalNumber": 1,
        "answer": "Tumeur bénigne.",
        "source": "ONCOLOGIE.pdf — comparaison « Tumeur bénigne / tumeur maligne »."
      },
      {
        "type": "qcm",
        "text": "Une tumeur est non encapsulée et infiltre les tissus qui l’entourent. Quels éléments orientent vers son caractère malin ?",
        "options": [
          "Absence d’encapsulation.",
          "Envahissement des tissus voisins.",
          "Croissance obligatoirement lente.",
          "Impossibilité de récidive."
        ],
        "correction": "L’absence d’encapsulation et l’invasion des tissus voisins font partie des caractéristiques de la tumeur maligne.",
        "originalNumber": 2,
        "answers": [
          "Absence d’encapsulation.",
          "Envahissement des tissus voisins."
        ],
        "source": "ONCOLOGIE.pdf — comparaison « Tumeur bénigne / tumeur maligne »."
      },
      {
        "type": "vf",
        "text": "Après exérèse complète, une tumeur bénigne est décrite dans le cours comme donnant habituellement une récidive locale.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Dans le tableau comparatif du cours, la tumeur bénigne ne présente pas de récidive locale après exérèse complète.",
        "originalNumber": 3,
        "answer": "Faux",
        "source": "ONCOLOGIE.pdf — comparaison « Tumeur bénigne / tumeur maligne »."
      },
      {
        "type": "qcm",
        "text": "Une cellule subit une lésion de son ADN après exposition à un agent cancérogène. À quelle étape de l’oncogenèse cette situation correspond-elle ?",
        "options": [
          "Initiation.",
          "Promotion.",
          "Progression.",
          "Prévention tertiaire."
        ],
        "correction": "L’initiation correspond au dommage initial de l’ADN.",
        "originalNumber": 4,
        "answer": "Initiation.",
        "source": "ONCOLOGIE.pdf — « Étapes de l’oncogenèse : initiation »."
      },
      {
        "type": "qcm",
        "text": "Une cellule déjà initiée est exposée à des éléments favorisant sa prolifération. Lesquels correspondent à des facteurs de promotion cités dans le cours ?",
        "options": [
          "Hormones.",
          "Facteurs inflammatoires.",
          "Biopsie.",
          "Scintigraphie osseuse."
        ],
        "correction": "Les hormones et les facteurs inflammatoires font partie des éléments favorisant la promotion.",
        "originalNumber": 5,
        "answers": [
          "Hormones.",
          "Facteurs inflammatoires."
        ],
        "source": "ONCOLOGIE.pdf — « Promotion »."
      },
      {
        "type": "qcm",
        "text": "Une population cellulaire devient de plus en plus agressive. Quels phénomènes correspondent alors à la progression ?",
        "options": [
          "Invasion des tissus.",
          "Acquisition d’un pouvoir métastatique.",
          "Augmentation de l’agressivité.",
          "Retour systématique à une cellule normale."
        ],
        "correction": "La progression est associée à l’acquisition de propriétés invasives, agressives et métastatiques.",
        "originalNumber": 6,
        "answers": [
          "Invasion des tissus.",
          "Acquisition d’un pouvoir métastatique.",
          "Augmentation de l’agressivité."
        ],
        "source": "ONCOLOGIE.pdf — « Progression »."
      },
      {
        "type": "qcm",
        "text": "Quel enchaînement respecte l’évolution de l’oncogenèse décrite dans le cours ?",
        "options": [
          "Initiation → promotion → progression.",
          "Promotion → initiation → progression.",
          "Progression → initiation → promotion.",
          "Métastase → initiation → promotion."
        ],
        "correction": "L’oncogenèse est présentée selon cet ordre précis : initiation, promotion puis progression.",
        "originalNumber": 7,
        "answer": "Initiation → promotion → progression.",
        "source": "ONCOLOGIE.pdf — « Étapes de l’oncogenèse »."
      },
      {
        "type": "qcm",
        "text": "Une cellule se multiplie sans respecter les contrôles habituels et échappe à la mort cellulaire programmée. Quelles caractéristiques retrouve-t-on ?",
        "options": [
          "Perte du contrôle des divisions.",
          "Perte des capacités apoptotiques.",
          "Prévention secondaire.",
          "Encapsulation."
        ],
        "correction": "La cellule cancéreuse peut perdre le contrôle normal de ses divisions et échapper à l’apoptose.",
        "originalNumber": 8,
        "answers": [
          "Perte du contrôle des divisions.",
          "Perte des capacités apoptotiques."
        ],
        "source": "ONCOLOGIE.pdf — « Caractéristiques de la cellule cancéreuse »."
      },
      {
        "type": "qcm",
        "text": "Une tumeur favorise l’apparition de nouveaux vaisseaux autour d’elle. Quel phénomène est décrit ?",
        "options": [
          "Néoangiogenèse.",
          "Apoptose.",
          "Prévalence.",
          "Initiation."
        ],
        "correction": "La formation de nouveaux vaisseaux sanguins au profit de la tumeur correspond à la néoangiogenèse.",
        "originalNumber": 9,
        "answer": "Néoangiogenèse.",
        "source": "ONCOLOGIE.pdf — « Caractéristiques de la cellule cancéreuse : néoangiogenèse »."
      },
      {
        "type": "qcm",
        "text": "Chez une cellule cancéreuse, quelles anomalies peuvent être retrouvées simultanément ?",
        "options": [
          "Immortalisation.",
          "Autosuffisance en facteurs de croissance.",
          "Perte des capacités apoptotiques.",
          "Capacité d’invasion et de métastase."
        ],
        "correction": "Ces quatre propriétés appartiennent aux caractéristiques de la cellule cancéreuse décrites dans le support.",
        "originalNumber": 10,
        "answers": [
          "Immortalisation.",
          "Autosuffisance en facteurs de croissance.",
          "Perte des capacités apoptotiques.",
          "Capacité d’invasion et de métastase."
        ],
        "source": "ONCOLOGIE.pdf — « Caractéristiques de la cellule cancéreuse »."
      },
      {
        "type": "qcm",
        "text": "Un cancer initialement localisé présente ensuite une atteinte des ganglions régionaux. Quels éléments correspondent à cette situation ?",
        "options": [
          "Extension régionale.",
          "Dissémination lymphatique.",
          "Tumeur obligatoirement bénigne.",
          "Apoptose."
        ],
        "correction": "Une atteinte ganglionnaire régionale peut résulter de la dissémination des cellules cancéreuses par voie lymphatique.",
        "originalNumber": 11,
        "answers": [
          "Extension régionale.",
          "Dissémination lymphatique."
        ],
        "source": "ONCOLOGIE.pdf — « Dissémination : extension régionale et voie lymphatique »."
      },
      {
        "type": "qcm",
        "text": "Des cellules quittent une tumeur primitive, passent dans le sang et s’implantent dans un autre organe. Quelles propositions correspondent à la situation ?",
        "options": [
          "Dissémination sanguine.",
          "Formation possible d’une métastase.",
          "Prévention primaire.",
          "Tumeur bénigne localisée."
        ],
        "correction": "La circulation sanguine peut transporter des cellules tumorales vers un autre organe où une métastase peut se développer.",
        "originalNumber": 12,
        "answers": [
          "Dissémination sanguine.",
          "Formation possible d’une métastase."
        ],
        "source": "ONCOLOGIE.pdf — « Dissémination par voie sanguine / métastases »."
      },
      {
        "type": "qcm",
        "text": "Une tumeur infiltre uniquement les tissus immédiatement voisins sans atteinte à distance retrouvée. Quelle notion est principalement illustrée ?",
        "options": [
          "Extension locale.",
          "Prévalence.",
          "Métastase.",
          "Prévention tertiaire."
        ],
        "correction": "L’envahissement direct des tissus voisins correspond à l’extension locale.",
        "originalNumber": 13,
        "answer": "Extension locale.",
        "source": "ONCOLOGIE.pdf — « Extension locale »."
      },
      {
        "type": "vf",
        "text": "Toute atteinte d’un ganglion signifie nécessairement qu’il existe déjà une métastase dans un organe éloigné.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Le cours distingue l’extension ganglionnaire régionale et les métastases à distance.",
        "originalNumber": 14,
        "answer": "Faux",
        "source": "ONCOLOGIE.pdf — « Extension régionale et générale »."
      },
      {
        "type": "qcm",
        "text": "Pour qu’une localisation secondaire à distance apparaisse, quels phénomènes peuvent intervenir ?",
        "options": [
          "Détachement de cellules de la tumeur primitive.",
          "Transport de cellules cancéreuses.",
          "Implantation et multiplication dans un autre tissu.",
          "Encapsulation obligatoire de la tumeur primitive."
        ],
        "correction": "Une métastase peut résulter du détachement, du transport puis de l’implantation de cellules provenant de la tumeur primitive.",
        "originalNumber": 15,
        "answers": [
          "Détachement de cellules de la tumeur primitive.",
          "Transport de cellules cancéreuses.",
          "Implantation et multiplication dans un autre tissu."
        ],
        "source": "ONCOLOGIE.pdf — « Dissémination et métastases »."
      },
      {
        "type": "qcm",
        "text": "Dans une population, on comptabilise uniquement les nouveaux cancers diagnostiqués pendant une année. Quel indicateur étudie-t-on ?",
        "options": [
          "Incidence.",
          "Prévalence.",
          "Métastase.",
          "Promotion."
        ],
        "correction": "L’incidence s’intéresse aux nouveaux cas apparus pendant une période donnée.",
        "originalNumber": 16,
        "answer": "Incidence.",
        "source": "ONCOLOGIE.pdf — « Épidémiologie : incidence »."
      },
      {
        "type": "qcm",
        "text": "On souhaite connaître toutes les personnes atteintes de cancer à une date donnée. Quelle notion doit être utilisée ?",
        "options": [
          "Prévalence.",
          "Initiation.",
          "Néoangiogenèse.",
          "TNM."
        ],
        "correction": "La prévalence concerne l’ensemble des personnes atteintes à un moment donné.",
        "originalNumber": 17,
        "answer": "Prévalence.",
        "source": "ONCOLOGIE.pdf — « Épidémiologie : prévalence »."
      },
      {
        "type": "qcm",
        "text": "Concernant incidence et prévalence, quelles affirmations sont exactes ?",
        "options": [
          "L’incidence s’intéresse aux nouveaux cas.",
          "La prévalence s’intéresse aux personnes atteintes à un moment donné.",
          "Les deux mots ont exactement la même signification.",
          "La prévalence correspond uniquement aux nouveaux cas."
        ],
        "correction": "Les deux indicateurs répondent à des questions épidémiologiques différentes.",
        "originalNumber": 18,
        "answers": [
          "L’incidence s’intéresse aux nouveaux cas.",
          "La prévalence s’intéresse aux personnes atteintes à un moment donné."
        ],
        "source": "ONCOLOGIE.pdf — « Incidence / prévalence »."
      },
      {
        "type": "qcm",
        "text": "Une patiente présente une infection par HPV . Avec quel cancer le cours établit-il une association ?",
        "options": [
          "Cancer du col de l’utérus.",
          "Cancer primitif du foie.",
          "Cancer broncho-pulmonaire.",
          "Cancer de la prostate."
        ],
        "correction": "Le HPV est associé au cancer du col de l’utérus dans le support.",
        "originalNumber": 19,
        "answer": "Cancer du col de l’utérus.",
        "source": "ONCOLOGIE.pdf — « Facteurs ou agents associés aux cancers »."
      },
      {
        "type": "qcm",
        "text": "Quels facteurs sont associés dans le cours au cancer primitif du foie ?",
        "options": [
          "Virus de l’hépatite B.",
          "Aflatoxine.",
          "HPV .",
          "Tabac comme seule association citée."
        ],
        "correction": "Le cours associe notamment le virus de l’hépatite B et l’aflatoxine au cancer primitif du foie.",
        "originalNumber": 20,
        "answers": [
          "Virus de l’hépatite B.",
          "Aflatoxine."
        ],
        "source": "ONCOLOGIE.pdf — « Facteurs associés aux cancers »."
      },
      {
        "type": "qcm",
        "text": "Chez une personne fortement exposée au tabac et à l’alcool, quelles associations sont mentionnées dans le cours ?",
        "options": [
          "Le tabac est associé au cancer broncho-pulmonaire.",
          "L’association alcool-tabac est citée pour les cancers des voies aérodigestives.",
          "Le tabac est présenté comme prévention secondaire.",
          "L’alcool est présenté comme moyen diagnostique."
        ],
        "correction": "Le cours relie le tabagisme au cancer broncho-pulmonaire et l’association alcool-tabac aux cancers des voies aérodigestives.",
        "originalNumber": 21,
        "answers": [
          "Le tabac est associé au cancer broncho-pulmonaire.",
          "L’association alcool-tabac est citée pour les cancers des voies aérodigestives."
        ],
        "source": "ONCOLOGIE.pdf — « Facteurs de risque »."
      },
      {
        "type": "qcm",
        "text": "Une campagne vise à diminuer le tabagisme avant que les cancers ne surviennent. À quel niveau de prévention correspond-elle ?",
        "options": [
          "Prévention primaire.",
          "Prévention secondaire.",
          "Prévention tertiaire.",
          "Progression."
        ],
        "correction": "La prévention primaire agit sur les facteurs de risque avant l’apparition de la maladie.",
        "originalNumber": 22,
        "answer": "Prévention primaire.",
        "source": "ONCOLOGIE.pdf — « Prévention primaire »."
      },
      {
        "type": "qcm",
        "text": "Une lésion précancéreuse est dépistée puis prise en charge pour empêcher son évolution vers un cancer. Quel niveau de prévention est illustré ?",
        "options": [
          "Prévention secondaire.",
          "Prévention primaire.",
          "Prévention tertiaire.",
          "Chimiothérapie adjuvante."
        ],
        "correction": "Le dépistage et le traitement des états précancéreux correspondent à la prévention secondaire.",
        "originalNumber": 23,
        "answer": "Prévention secondaire.",
        "source": "ONCOLOGIE.pdf — « Prévention secondaire »."
      },
      {
        "type": "qcm",
        "text": "Un patient déjà traité pour cancer bénéficie d’un suivi visant sa réinsertion et la prévention d’une rechute. Quels éléments relèvent de la prévention tertiaire ?",
        "options": [
          "Réinsertion socioprofessionnelle.",
          "Prévention des rechutes.",
          "Prise en charge du malade traité.",
          "Initiation de l’oncogenèse."
        ],
        "correction": "Ces trois éléments sont rattachés à la prévention tertiaire dans le cours.",
        "originalNumber": 24,
        "answers": [
          "Réinsertion socioprofessionnelle.",
          "Prévention des rechutes.",
          "Prise en charge du malade traité."
        ],
        "source": "ONCOLOGIE.pdf — « Prévention tertiaire »."
      },
      {
        "type": "qcm",
        "text": "Un patient consulte pour une toux persistante associée à des crachats sanglants et à une douleur thoracique. Quels signes correspondent aux signes pulmonaires cités dans le cours ?",
        "options": [
          "Toux persistante.",
          "Crachats sanglants.",
          "Douleur thoracique.",
          "Modification du transit."
        ],
        "correction": "Les trois premiers signes sont cités pour le poumon. La modification du transit est rattachée au côlon ou au rectum.",
        "originalNumber": 25,
        "answers": [
          "Toux persistante.",
          "Crachats sanglants.",
          "Douleur thoracique."
        ],
        "source": "ONCOLOGIE.pdf — « Circonstances de découverte : poumon »."
      },
      {
        "type": "qcm",
        "text": "Une personne remarque qu’un grain de beauté change de taille et de couleur. À quel territoire correspond le signe d’alerte présenté dans le cours ?",
        "options": [
          "Peau.",
          "Poumon.",
          "Prostate.",
          "Côlon."
        ],
        "correction": "Une modification d’un grain de beauté fait partie des signes cutanés mentionnés.",
        "originalNumber": 26,
        "answer": "Peau.",
        "source": "ONCOLOGIE.pdf — « Signes d’alerte : peau »."
      },
      {
        "type": "qcm",
        "text": "Un patient présente plusieurs troubles urinaires. Lesquels correspondent aux manifestations vessie/prostate citées dans le support ?",
        "options": [
          "Mictions fréquentes.",
          "Urines sanglantes.",
          "Troubles du jet urinaire.",
          "Douleurs pelviennes."
        ],
        "correction": "Ces quatre manifestations sont données dans le cours pour la vessie ou la prostate.",
        "originalNumber": 27,
        "answers": [
          "Mictions fréquentes.",
          "Urines sanglantes.",
          "Troubles du jet urinaire.",
          "Douleurs pelviennes."
        ],
        "source": "ONCOLOGIE.pdf — « Circonstances de découverte : vessie/prostate »."
      },
      {
        "type": "qcm",
        "text": "Chez un patient présentant une atteinte colorectale suspectée, quels éléments sont compatibles avec les signes cités dans le cours ?",
        "options": [
          "Saignement rectal.",
          "Selles sanglantes.",
          "Modification du transit.",
          "V oix rauque."
        ],
        "correction": "Ces trois manifestations sont rattachées au côlon ou au rectum.",
        "originalNumber": 28,
        "answers": [
          "Saignement rectal.",
          "Selles sanglantes.",
          "Modification du transit."
        ],
        "source": "ONCOLOGIE.pdf — « Circonstances de découverte : côlon/rectum »."
      },
      {
        "type": "qcm",
        "text": "Une personne présente une plaie buccale persistante, une boule dans la gorge, une voix rauque et une difficulté à avaler. Quels éléments sont cités pour la gorge ou le larynx ?",
        "options": [
          "Plaie buccale persistante.",
          "Boule dans la gorge.",
          "V oix rauque.",
          "Difficulté à avaler."
        ],
        "correction": "Les quatre manifestations apparaissent dans cette partie du cours.",
        "originalNumber": 29,
        "answers": [
          "Plaie buccale persistante.",
          "Boule dans la gorge.",
          "V oix rauque.",
          "Difficulté à avaler."
        ],
        "source": "ONCOLOGIE.pdf — « Circonstances de découverte : gorge/larynx »."
      },
      {
        "type": "qcm",
        "text": "Une patiente rapporte des saignements vaginaux anormaux non liés au cycle. Quel territoire est concerné dans le cours ?",
        "options": [
          "Utérus/col.",
          "Poumon.",
          "Côlon.",
          "Larynx."
        ],
        "correction": "Des saignements vaginaux anormaux sont cités parmi les signes concernant l’utérus ou le col.",
        "originalNumber": 30,
        "answer": "Utérus/col.",
        "source": "ONCOLOGIE.pdf — « Circonstances de découverte : utérus/col »."
      },
      {
        "type": "qcm",
        "text": "Un malade présente une altération de l’état général. Quels symptômes généraux sont également cités dans le cours ?",
        "options": [
          "Asthénie.",
          "Anorexie.",
          "Amaigrissement.",
          "Sueurs nocturnes."
        ],
        "correction": "Tous figurent dans les signes généraux du cancer présentés dans le support.",
        "originalNumber": 31,
        "answers": [
          "Asthénie.",
          "Anorexie.",
          "Amaigrissement.",
          "Sueurs nocturnes."
        ],
        "source": "ONCOLOGIE.pdf — « Signes généraux »."
      },
      {
        "type": "qcm",
        "text": "Une masse suspecte est découverte à l’imagerie. Quel élément permet, selon le cours, de confirmer sa nature cancéreuse ?",
        "options": [
          "Biopsie avec étude histologique.",
          "Température corporelle seule.",
          "Poids seul.",
          "Mesure de la tension seule."
        ],
        "correction": "Le cours présente la biopsie avec étude histologique comme l’argument de certitude diagnostique.",
        "originalNumber": 32,
        "answer": "Biopsie avec étude histologique.",
        "source": "ONCOLOGIE.pdf — « Biopsie / étude histologique »."
      },
      {
        "type": "qcm",
        "text": "Après confirmation d’un cancer, le dossier indique une tumeur primitive, une atteinte ganglionnaire et des métastases à distance. Quelles lettres de TNM correspondent respectivement à ces éléments ?",
        "options": [
          "T pour la tumeur primitive.",
          "N pour l’atteinte ganglionnaire.",
          "M pour les métastases.",
          "N pour les métastases."
        ],
        "correction": "TNM signifie : T = tumeur, N = ganglions, M = métastases.",
        "originalNumber": 33,
        "answers": [
          "T pour la tumeur primitive.",
          "N pour l’atteinte ganglionnaire.",
          "M pour les métastases."
        ],
        "source": "ONCOLOGIE.pdf — « Classification TNM »."
      },
      {
        "type": "qcm",
        "text": "Lors d’un bilan diagnostique ou d’extension, quels examens cités dans le cours peuvent être demandés ?",
        "options": [
          "Échographie.",
          "Scanner.",
          "IRM.",
          "Radiographie."
        ],
        "correction": "Tous ces examens figurent dans la liste du cours.",
        "originalNumber": 34,
        "answers": [
          "Échographie.",
          "Scanner.",
          "IRM.",
          "Radiographie."
        ],
        "source": "ONCOLOGIE.pdf — « Diagnostic et bilan d’extension »."
      },
      {
        "type": "qcm",
        "text": "Un médecin souhaite explorer une éventuelle extension osseuse avec un examen cité dans le support. Lequel ?",
        "options": [
          "Scintigraphie osseuse.",
          "Mesure du poids.",
          "Test auditif.",
          "Examen de la vision."
        ],
        "correction": "La scintigraphie osseuse figure parmi les examens du bilan d’extension cités dans le cours.",
        "originalNumber": 35,
        "answer": "Scintigraphie osseuse.",
        "source": "ONCOLOGIE.pdf — « Diagnostic et bilan d’extension »."
      },
      {
        "type": "vf",
        "text": "Un résultat d’imagerie suspect suffit à lui seul à remplacer la biopsie avec étude histologique comme argument de certitude décrit dans le cours.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Dans le cours, la confirmation diagnostique repose sur la biopsie et l’étude histologique.",
        "originalNumber": 36,
        "answer": "Faux",
        "source": "ONCOLOGIE.pdf — « Biopsie / étude histologique »."
      },
      {
        "type": "qcm",
        "text": "Une chimiothérapie est administrée pour réduire la taille d’une tumeur avant une intervention chirurgicale. Comment est-elle qualifiée ?",
        "options": [
          "Néoadjuvante.",
          "Adjuvante.",
          "Tertiaire.",
          "Suppressive."
        ],
        "correction": "La chimiothérapie néoadjuvante est administrée avant la chirurgie, notamment afin de réduire la taille tumorale.",
        "originalNumber": 37,
        "answer": "Néoadjuvante.",
        "source": "ONCOLOGIE.pdf — « Chimiothérapie néoadjuvante »."
      },
      {
        "type": "qcm",
        "text": "Une chimiothérapie est débutée après l’intervention pour agir sur d’éventuelles cellules cancéreuses restantes. Comment est-elle qualifiée ?",
        "options": [
          "Adjuvante.",
          "Néoadjuvante.",
          "Préventive primaire.",
          "Diagnostique."
        ],
        "correction": "La chimiothérapie adjuvante est réalisée après la chirurgie.",
        "originalNumber": 38,
        "answer": "Adjuvante.",
        "source": "ONCOLOGIE.pdf — « Chimiothérapie adjuvante »."
      },
      {
        "type": "qcm",
        "text": "Concernant une chimiothérapie adjuvante, quelles propositions sont exactes ?",
        "options": [
          "Elle intervient après la chirurgie.",
          "Elle vise notamment les cellules cancéreuses pouvant persister.",
          "Elle est nécessairement administrée avant toute chirurgie.",
          "Elle confirme le diagnostic histologique."
        ],
        "correction": "Elle complète le traitement chirurgical en visant d’éventuelles cellules tumorales résiduelles.",
        "originalNumber": 39,
        "answers": [
          "Elle intervient après la chirurgie.",
          "Elle vise notamment les cellules cancéreuses pouvant persister."
        ],
        "source": "ONCOLOGIE.pdf — « Chimiothérapie adjuvante »."
      },
      {
        "type": "qcm",
        "text": "Quels mécanismes d’action des agents anticancéreux sont mentionnés dans le cours ?",
        "options": [
          "Action sur l’ADN.",
          "Action sur la synthèse de l’ADN.",
          "Action sur les microtubules.",
          "Action uniquement sur les ganglions lymphatiques."
        ],
        "correction": "Le cours cite notamment ces trois types d’action des agents cytotoxiques.",
        "originalNumber": 40,
        "answers": [
          "Action sur l’ADN.",
          "Action sur la synthèse de l’ADN.",
          "Action sur les microtubules."
        ],
        "source": "ONCOLOGIE.pdf — « Chimiothérapie : mécanismes d’action »."
      },
      {
        "type": "vf",
        "text": "Les agents cytotoxiques utilisés en chimiothérapie ne peuvent atteindre aucune cellule normale.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Le cours précise qu’ils peuvent aussi atteindre des cellules normales à division rapide.",
        "originalNumber": 41,
        "answer": "Faux",
        "source": "ONCOLOGIE.pdf — « Chimiothérapie »."
      },
      {
        "type": "qcm",
        "text": "Concernant l’hormonothérapie, quelles correspondances sont conformes au cours ?",
        "options": [
          "Hormonothérapie suppressive → suppression de la source hormonale.",
          "Hormonothérapie additive → administration de substances bloquant l’utilisation de l’hormone par la cellule.",
          "Hormonothérapie suppressive → scintigraphie osseuse.",
          "Hormonothérapie additive → biopsie."
        ],
        "correction": "Le cours distingue ces deux modalités selon leur façon d’agir sur la stimulation hormonale.",
        "originalNumber": 42,
        "answers": [
          "Hormonothérapie suppressive → suppression de la source hormonale.",
          "Hormonothérapie additive → administration de substances bloquant l’utilisation de l’hormone par la cellule."
        ],
        "source": "ONCOLOGIE.pdf — « Hormonothérapie suppressive et additive »."
      },
      {
        "type": "qcm",
        "text": "Un patient arrive pour recevoir sa chimiothérapie. Quelles actions font partie de la préparation infirmière décrite dans le cours ?",
        "options": [
          "Rechercher une infection.",
          "Rechercher des allergies ou réactions éventuelles.",
          "Contrôler les constantes.",
          "Prendre connaissance du bilan biologique."
        ],
        "correction": "Ces contrôles font partie du rôle de l’IDE avant l’administration de la chimiothérapie.",
        "originalNumber": 43,
        "answers": [
          "Rechercher une infection.",
          "Rechercher des allergies ou réactions éventuelles.",
          "Contrôler les constantes.",
          "Prendre connaissance du bilan biologique."
        ],
        "source": "ONCOLOGIE.pdf — « Rôle de l’IDE avant chimiothérapie »."
      },
      {
        "type": "qcm",
        "text": "Lors du recueil préalable à une chimiothérapie, quels antécédents ou problèmes associés le cours demande-t-il notamment de rechercher ?",
        "options": [
          "Affection cardiaque.",
          "Affection rénale.",
          "Affection hépatique.",
          "Couleur préférée du patient."
        ],
        "correction": "Le cours demande notamment de rechercher des affections cardiaques, pulmonaires, rénales ou hépatiques avant le traitement.",
        "originalNumber": 44,
        "answers": [
          "Affection cardiaque.",
          "Affection rénale.",
          "Affection hépatique."
        ],
        "source": "ONCOLOGIE.pdf — « Rôle de l’IDE avant chimiothérapie »."
      },
      {
        "type": "qcm",
        "text": "Quels éléments biologiques doivent particulièrement attirer l’attention de l’IDE avant la chimiothérapie selon le support ?",
        "options": [
          "NFS.",
          "Fonction rénale.",
          "Fonction hépatique.",
          "Taille du patient uniquement."
        ],
        "correction": "Le cours mentionne explicitement la NFS et l’évaluation des fonctions rénale et hépatique.",
        "originalNumber": 45,
        "answers": [
          "NFS.",
          "Fonction rénale.",
          "Fonction hépatique."
        ],
        "source": "ONCOLOGIE.pdf — « Rôle de l’IDE avant chimiothérapie »."
      },
      {
        "type": "qcm",
        "text": "Pendant l’administration d’une chimiothérapie, quelles actions correspondent au rôle IDE décrit ?",
        "options": [
          "Vérifier le protocole.",
          "Surveiller le patient.",
          "Respecter les règles d’hygiène et d’asepsie.",
          "Surveiller la survenue d’une extravasation."
        ],
        "correction": "Ces quatre éléments font partie de la surveillance infirmière pendant la chimiothérapie.",
        "originalNumber": 46,
        "answers": [
          "Vérifier le protocole.",
          "Surveiller le patient.",
          "Respecter les règles d’hygiène et d’asepsie.",
          "Surveiller la survenue d’une extravasation."
        ],
        "source": "ONCOLOGIE.pdf — « Rôle de l’IDE pendant chimiothérapie »."
      },
      {
        "type": "qcm",
        "text": "Pendant une perfusion de chimiothérapie, une anomalie apparaît au niveau du point d’injection avec diffusion du produit dans les tissus. Quelle complication faut-il évoquer ?",
        "options": [
          "Extravasation.",
          "Alopécie.",
          "Anémie.",
          "Prévalence."
        ],
        "correction": "L’extravasation correspond au passage accidentel du produit hors du vaisseau vers les tissus environnants.",
        "originalNumber": 47,
        "answer": "Extravasation.",
        "source": "ONCOLOGIE.pdf — « Extravasation »."
      },
      {
        "type": "vf",
        "text": "Une extravasation de produit de chimiothérapie peut provoquer des lésions tissulaires importantes pouvant aller jusqu’à la nécrose.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Le cours souligne le caractère potentiellement grave de cette complication locale.",
        "originalNumber": 48,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — « Extravasation »."
      },
      {
        "type": "qcm",
        "text": "Après chimiothérapie, la NFS montre une diminution des globules blancs. Quelles notions du cours correspondent à cette situation ?",
        "options": [
          "Leucopénie.",
          "Diminution de l’immunité.",
          "Thrombopénie obligatoirement.",
          "Néoangiogenèse."
        ],
        "correction": "La leucopénie et la baisse de l’immunité figurent parmi les éléments de surveillance après chimiothérapie.",
        "originalNumber": 49,
        "answers": [
          "Leucopénie.",
          "Diminution de l’immunité."
        ],
        "source": "ONCOLOGIE.pdf — « Surveillance des toxicités de la chimiothérapie »."
      },
      {
        "type": "qcm",
        "text": "Une diminution des plaquettes après chimiothérapie correspond à quelle anomalie citée dans le cours ?",
        "options": [
          "Thrombopénie.",
          "Leucopénie.",
          "Alopécie.",
          "Mucite."
        ],
        "correction": "La thrombopénie fait partie des toxicités hématologiques citées.",
        "originalNumber": 50,
        "answer": "Thrombopénie.",
        "source": "ONCOLOGIE.pdf — « Surveillance des effets secondaires »."
      },
      {
        "type": "qcm",
        "text": "Quelle anomalie hématologique correspond à la diminution des globules rouges évoquée dans la surveillance du cours ?",
        "options": [
          "Anémie.",
          "Leucopénie.",
          "Mucite.",
          "Alopécie."
        ],
        "correction": "L’anémie fait partie des atteintes hématologiques à surveiller après chimiothérapie.",
        "originalNumber": 51,
        "answer": "Anémie.",
        "source": "ONCOLOGIE.pdf — « Surveillance des effets secondaires »."
      },
      {
        "type": "qcm",
        "text": "Une atteinte de la moelle liée à la chimiothérapie peut se manifester par quelles anomalies citées dans le cours ?",
        "options": [
          "Leucopénie.",
          "Thrombopénie.",
          "Anémie.",
          "Néoangiogenèse."
        ],
        "correction": "Le cours regroupe ces anomalies dans la surveillance de la myélotoxicité.",
        "originalNumber": 52,
        "answers": [
          "Leucopénie.",
          "Thrombopénie.",
          "Anémie."
        ],
        "source": "ONCOLOGIE.pdf — « Myélotoxicité »."
      },
      {
        "type": "qcm",
        "text": "Parmi les effets indésirables à surveiller chez un patient sous chimiothérapie, lesquels sont mentionnés dans le support ?",
        "options": [
          "Nausées.",
          "V omissements.",
          "Mucite.",
          "Alopécie."
        ],
        "correction": "Les quatre figurent dans la liste des effets ou complications à surveiller.",
        "originalNumber": 53,
        "answers": [
          "Nausées.",
          "V omissements.",
          "Mucite.",
          "Alopécie."
        ],
        "source": "ONCOLOGIE.pdf — « Surveillance des effets secondaires de la chimiothérapie »."
      },
      {
        "type": "qcm",
        "text": "Un patient traité perd du poids et présente des difficultés d’apport et d’hydratation. Quels problèmes cités dans le cours doivent être recherchés ?",
        "options": [
          "Amaigrissement.",
          "Dénutrition.",
          "Déshydratation.",
          "Métastase nécessairement présente."
        ],
        "correction": "Amaigrissement, dénutrition et déshydratation figurent dans la surveillance infirmière après chimiothérapie.",
        "originalNumber": 54,
        "answers": [
          "Amaigrissement.",
          "Dénutrition.",
          "Déshydratation."
        ],
        "source": "ONCOLOGIE.pdf — « Surveillance après chimiothérapie »."
      },
      {
        "type": "qcm",
        "text": "Parmi les atteintes organiques ou fonctionnelles à surveiller après chimiothérapie, lesquelles sont citées ?",
        "options": [
          "Troubles rénaux.",
          "Troubles pulmonaires.",
          "Troubles neurologiques.",
          "Troubles hépatiques."
        ],
        "correction": "Ces différentes toxicités sont citées dans le cours.",
        "originalNumber": 55,
        "answers": [
          "Troubles rénaux.",
          "Troubles pulmonaires.",
          "Troubles neurologiques.",
          "Troubles hépatiques."
        ],
        "source": "ONCOLOGIE.pdf — « Surveillance des toxicités de la chimiothérapie »."
      },
      {
        "type": "vf",
        "text": "La surveillance après chimiothérapie se limite uniquement aux nausées et aux vomissements.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "La surveillance est beaucoup plus large : toxicités hématologiques, nutritionnelles, rénales, hépatiques, pulmonaires, neurologiques, mucite, alopécie, etc.",
        "originalNumber": 56,
        "answer": "Faux",
        "source": "ONCOLOGIE.pdf — « Surveillance des effets secondaires »."
      },
      {
        "type": "qcm",
        "text": "Un IDE suit un patient tout au long d’une séance de chimiothérapie. Quelles associations entre le moment et l’action sont conformes au cours ?",
        "options": [
          "Avant : rechercher une infection et contrôler les constantes.",
          "Avant : vérifier notamment la NFS et les fonctions rénale et hépatique.",
          "Pendant : respecter le protocole et surveiller l’extravasation.",
          "Après : surveiller les toxicités et effets secondaires."
        ],
        "correction": "Ces actions correspondent aux différentes étapes du rôle infirmier présentées dans le support.",
        "originalNumber": 57,
        "answers": [
          "Avant : rechercher une infection et contrôler les constantes.",
          "Avant : vérifier notamment la NFS et les fonctions rénale et hépatique.",
          "Pendant : respecter le protocole et surveiller l’extravasation.",
          "Après : surveiller les toxicités et effets secondaires."
        ],
        "source": "ONCOLOGIE.pdf — « Rôle de l’IDE dans la chimiothérapie »."
      },
      {
        "type": "qcm",
        "text": "Un patient sous chimiothérapie présente simultanément une mucite et une alopécie. Quelles propositions sont conformes au cours ?",
        "options": [
          "La mucite fait partie des effets à surveiller.",
          "L’alopécie fait partie des effets à surveiller.",
          "Ces deux manifestations constituent la classification TNM.",
          "Elles correspondent obligatoirement à des métastases."
        ],
        "correction": "Mucite et alopécie sont toutes deux citées parmi les effets secondaires de la chimiothérapie.",
        "originalNumber": 58,
        "answers": [
          "La mucite fait partie des effets à surveiller.",
          "L’alopécie fait partie des effets à surveiller."
        ],
        "source": "ONCOLOGIE.pdf — « Surveillance des effets secondaires »."
      },
      {
        "type": "vf",
        "text": "La présence d’un signe d’alerte clinique suffit, dans le cadre du cours, à remplacer la confirmation par biopsie et étude histologique.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Les signes cliniques permettent de suspecter un cancer, tandis que le cours retient la biopsie avec étude histologique comme confirmation diagnostique.",
        "originalNumber": 59,
        "answer": "Faux",
        "source": "ONCOLOGIE.pdf — « Circonstances de découverte » et « Biopsie / histologie »."
      },
      {
        "type": "qcm",
        "text": "Parmi les enchaînements suivants, lequel respecte le mieux la logique générale du cours lorsqu’un cancer est suspecté puis pris en charge ?",
        "options": [
          "Signes d’alerte → investigations/biopsie → confirmation histologique → bilan d’extension/TNM → stratégie thérapeutique → surveillance.",
          "Métastase → prévention primaire → initiation → biopsie.",
          "Chimiothérapie → initiation → dépistage → apparition de la tumeur.",
          "Prévention tertiaire → initiation → promotion → dépistage."
        ],
        "correction": "Le cours présente successivement la suspicion clinique, le diagnostic et sa confirmation, le bilan d’extension puis les stratégies thérapeutiques et la surveillance infirmière.",
        "originalNumber": 60,
        "answer": "Signes d’alerte → investigations/biopsie → confirmation histologique → bilan d’extension/TNM → stratégie thérapeutique → surveillance.",
        "source": "ONCOLOGIE.pdf — « Diagnostic et bilan d’extension », « Stratégies thérapeutiques » et « Rôle IDE »."
      }
    ]
  },
  {
    "id": "oncologie-sujet-3",
    "title": "SUJET 3 ONCOLOGIE",
    "matter": "Oncologie",
    "description": "Sujet 3 d’oncologie — banque complète de 60 questions.",
    "instructions": "Répondez aux questions. Pour les QCM, une ou plusieurs réponses peuvent être correctes. La correction détaillée est disponible après la composition.",
    "duration": 30,
    "programmed": true,
    "openDate": "2026-08-01",
    "openTime": "00:00",
    "closeDate": "2030-12-31",
    "closeTime": "23:59",
    "marking": {
      "correct": 1,
      "wrong": -1,
      "empty": 0
    },
    "questions": [
      {
        "type": "qcm",
        "text": "Deux tumeurs sont comparées. La première est encapsulée et de croissance lente ; la seconde est mal limitée et envahit les tissus voisins. Quelles affirmations sont exactes ?",
        "options": [
          "La première présente des caractères de bénignité.",
          "La seconde présente des caractères de malignité.",
          "L’envahissement des tissus voisins oriente vers la malignité.",
          "L’encapsulation oriente ici vers la tumeur bénigne."
        ],
        "correction": "Le cours oppose notamment la bonne limitation et l’encapsulation de la tumeur bénigne à la mauvaise limitation, l’absence d’encapsulation et l’envahissement de la tumeur maligne.",
        "originalNumber": 1,
        "answers": [
          "La première présente des caractères de bénignité.",
          "La seconde présente des caractères de malignité.",
          "L’envahissement des tissus voisins oriente vers la malignité.",
          "L’encapsulation oriente ici vers la tumeur bénigne."
        ],
        "source": "ONCOLOGIE.pdf — comparaison « Tumeur bénigne / tumeur maligne »."
      },
      {
        "type": "qcm",
        "text": "Une tumeur est retirée complètement. Elle était bien limitée, à croissance lente et sans métastase. Quel élément est le plus cohérent avec le cours ?",
        "options": [
          "Son profil correspond à une tumeur bénigne.",
          "Elle est nécessairement maligne.",
          "Elle doit obligatoirement récidiver.",
          "Elle est déjà métastatique."
        ],
        "correction": "La bonne limitation, la croissance lente et l’absence de métastases correspondent aux caractéristiques bénignes données dans le tableau du cours.",
        "originalNumber": 2,
        "answer": "Son profil correspond à une tumeur bénigne.",
        "source": "ONCOLOGIE.pdf — « Tumeur bénigne / tumeur maligne »."
      },
      {
        "type": "vf",
        "text": "La capacité d’une tumeur à produire des métastases constitue un argument en faveur de sa malignité.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Dans le cours, les métastases sont associées aux tumeurs malignes et absentes dans les tumeurs bénignes.",
        "originalNumber": 3,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — « Tumeur bénigne / tumeur maligne »."
      },
      {
        "type": "qcm",
        "text": "Parmi ces couples, lesquels sont cohérents avec le tableau du cours ?",
        "options": [
          "Bénigne → croissance lente.",
          "Maligne → croissance rapide.",
          "Bénigne → métastases fréquentes.",
          "Maligne → possibilité de récidive."
        ],
        "correction": "Le cours associe la croissance lente à la bénignité, la croissance rapide et la possibilité de récidive à la malignité. La tumeur bénigne ne donne pas de métastases.",
        "originalNumber": 4,
        "answers": [
          "Bénigne → croissance lente.",
          "Maligne → croissance rapide.",
          "Maligne → possibilité de récidive."
        ],
        "source": "ONCOLOGIE.pdf — « Tumeur bénigne / tumeur maligne »."
      },
      {
        "type": "qcm",
        "text": "Une masse est non encapsulée mais aucune information n’est encore donnée sur ses métastases. Peut-on néanmoins retrouver un caractère de malignité ?",
        "options": [
          "Oui, l’absence d’encapsulation.",
          "Oui, si elle est également mal limitée.",
          "Non, seule une métastase permet de parler de caractère malin dans le cours.",
          "Oui, si elle envahit les tissus voisins."
        ],
        "correction": "Le caractère malin ne repose pas uniquement sur les métastases. Mauvaise limitation, absence d’encapsulation et invasion sont aussi des caractéristiques décrites.",
        "originalNumber": 5,
        "answers": [
          "Oui, l’absence d’encapsulation.",
          "Oui, si elle est également mal limitée.",
          "Oui, si elle envahit les tissus voisins."
        ],
        "source": "ONCOLOGIE.pdf — « Tumeur bénigne / tumeur maligne »."
      },
      {
        "type": "vf",
        "text": "Une tumeur bénigne et une tumeur maligne ont nécessairement le même comportement vis-à-vis des tissus voisins.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "La tumeur maligne peut infiltrer et détruire les tissus voisins alors que la tumeur bénigne reste généralement localisée.",
        "originalNumber": 6,
        "answer": "Faux",
        "source": "ONCOLOGIE.pdf — « Tumeur bénigne / tumeur maligne »."
      },
      {
        "type": "qcm",
        "text": "Parmi les éléments suivants, lesquels peuvent aider à distinguer bénignité et malignité dans le cours ?",
        "options": [
          "Vitesse de croissance.",
          "Limitation de la tumeur.",
          "Existence de métastases.",
          "Capacité d’envahissement."
        ],
        "correction": "Ces quatre critères sont utilisés dans le tableau comparatif du cours.",
        "originalNumber": 7,
        "answers": [
          "Vitesse de croissance.",
          "Limitation de la tumeur.",
          "Existence de métastases.",
          "Capacité d’envahissement."
        ],
        "source": "ONCOLOGIE.pdf — « Tumeur bénigne / tumeur maligne »."
      },
      {
        "type": "qcm",
        "text": "Quelle situation est la moins compatible avec une tumeur bénigne ?",
        "options": [
          "Infiltration des tissus voisins.",
          "Bonne limitation.",
          "Croissance lente.",
          "Encapsulation."
        ],
        "correction": "L’infiltration des tissus voisins est un caractère de malignité.",
        "originalNumber": 8,
        "answer": "Infiltration des tissus voisins.",
        "source": "ONCOLOGIE.pdf — « Tumeur bénigne / tumeur maligne »."
      },
      {
        "type": "qcm",
        "text": "Une cellule a déjà subi une altération irréversible de l’ADN puis commence à proliférer sous l’action de facteurs favorisant sa croissance. Quelles étapes sont successivement illustrées ?",
        "options": [
          "Initiation puis promotion.",
          "Promotion puis initiation.",
          "Progression puis prévention.",
          "Métastase puis initiation."
        ],
        "correction": "L’altération initiale de l’ADN correspond à l’initiation ; la prolifération favorisée correspond ensuite à la promotion.",
        "originalNumber": 9,
        "answer": "Initiation puis promotion.",
        "source": "ONCOLOGIE.pdf — « Initiation » et « Promotion »."
      },
      {
        "type": "qcm",
        "text": "Parmi ces associations entre étape et phénomène, lesquelles sont correctes ?",
        "options": [
          "Initiation → lésion de l’ADN.",
          "Promotion → prolifération de la cellule initiée.",
          "Progression → acquisition de capacités invasives.",
          "Progression → acquisition de capacités métastatiques."
        ],
        "correction": "Ces associations correspondent à la succession décrite dans le cours.",
        "originalNumber": 10,
        "answers": [
          "Initiation → lésion de l’ADN.",
          "Promotion → prolifération de la cellule initiée.",
          "Progression → acquisition de capacités invasives.",
          "Progression → acquisition de capacités métastatiques."
        ],
        "source": "ONCOLOGIE.pdf — « Étapes de l’oncogenèse »."
      },
      {
        "type": "qcm",
        "text": "La phase durant laquelle certains facteurs hormonaux ou inflammatoires favorisent la prolifération est :",
        "options": [
          "La promotion.",
          "L’initiation.",
          "La prévention primaire.",
          "La biopsie."
        ],
        "correction": "Les hormones et facteurs inflammatoires sont cités parmi les facteurs de promotion.",
        "originalNumber": 11,
        "answer": "La promotion.",
        "source": "ONCOLOGIE.pdf — « Promotion »."
      },
      {
        "type": "vf",
        "text": "L’initiation et la promotion sont décrites dans le cours comme étant toutes les deux rapides et irréversibles.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Le caractère rapide et irréversible est attribué à l’initiation ; la promotion est décrite comme relativement longue.",
        "originalNumber": 12,
        "answer": "Faux",
        "source": "ONCOLOGIE.pdf — « Initiation / Promotion »."
      },
      {
        "type": "qcm",
        "text": "Une cellule cancéreuse reçoit moins de contraintes normales sur sa multiplication et échappe à sa mort programmée. Quels mécanismes sont concernés ?",
        "options": [
          "Perte du contrôle des divisions.",
          "Perte des capacités apoptotiques.",
          "Prévalence.",
          "Prévention tertiaire."
        ],
        "correction": "Le cours cite ces deux caractéristiques parmi les mécanismes permettant à la cellule cancéreuse de persister et se multiplier.",
        "originalNumber": 13,
        "answers": [
          "Perte du contrôle des divisions.",
          "Perte des capacités apoptotiques."
        ],
        "source": "ONCOLOGIE.pdf — « Caractéristiques de la cellule cancéreuse »."
      },
      {
        "type": "qcm",
        "text": "Une tumeur stimule sa vascularisation tout en acquérant une capacité à envahir d’autres tissus. Quels caractères sont alors présents ?",
        "options": [
          "Néoangiogenèse.",
          "Invasion.",
          "Potentiel métastatique.",
          "Encapsulation bénigne obligatoire."
        ],
        "correction": "La néoangiogenèse, l’invasion et les métastases font partie des caractéristiques de la cellule cancéreuse.",
        "originalNumber": 14,
        "answers": [
          "Néoangiogenèse.",
          "Invasion.",
          "Potentiel métastatique."
        ],
        "source": "ONCOLOGIE.pdf — « Caractéristiques de la cellule cancéreuse »."
      },
      {
        "type": "qcm",
        "text": "Quelle caractéristique explique qu’une cellule cancéreuse échappe aux limites normales de durée de vie cellulaire ?",
        "options": [
          "Immortalisation.",
          "Prévalence.",
          "Promotion alimentaire.",
          "Classification TNM."
        ],
        "correction": "L’immortalisation est l’une des six caractéristiques mentionnées dans le cours.",
        "originalNumber": 15,
        "answer": "Immortalisation.",
        "source": "ONCOLOGIE.pdf — « Caractéristiques de la cellule cancéreuse »."
      },
      {
        "type": "vf",
        "text": "Toutes les caractéristiques suivantes peuvent appartenir à la cellule cancéreuse : autonomie de croissance, immortalisation, néoangiogenèse et perte de l’apoptose.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Elles figurent toutes parmi les caractéristiques présentées dans le support.",
        "originalNumber": 16,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — « Caractéristiques de la cellule cancéreuse »."
      },
      {
        "type": "qcm",
        "text": "Une tumeur primitive envahit d’abord les tissus proches puis des cellules gagnent les ganglions. Quels niveaux d’extension sont successivement concernés ?",
        "options": [
          "Extension locale.",
          "Extension régionale.",
          "Prévention secondaire.",
          "Promotion."
        ],
        "correction": "L’invasion des structures proches correspond à l’extension locale ; l’atteinte ganglionnaire relève de l’extension régionale.",
        "originalNumber": 17,
        "answers": [
          "Extension locale.",
          "Extension régionale."
        ],
        "source": "ONCOLOGIE.pdf — « Dissémination : extension locale et régionale »."
      },
      {
        "type": "qcm",
        "text": "Si des cellules tumorales atteignent un autre organe par le sang et s’y multiplient, quelles notions sont concernées ?",
        "options": [
          "V oie sanguine.",
          "Métastase.",
          "Extension générale.",
          "Tumeur bénigne localisée."
        ],
        "correction": "Le passage par le sang avec implantation dans un autre organe relève de la dissémination générale avec formation d’une métastase.",
        "originalNumber": 18,
        "answers": [
          "V oie sanguine.",
          "Métastase.",
          "Extension générale."
        ],
        "source": "ONCOLOGIE.pdf — « Extension générale / voie sanguine / métastases »."
      },
      {
        "type": "vf",
        "text": "L’atteinte ganglionnaire et la présence d’une métastase à distance correspondent à la même lettre dans TNM.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "N correspond à l’atteinte ganglionnaire ; M correspond aux métastases.",
        "originalNumber": 19,
        "answer": "Faux",
        "source": "ONCOLOGIE.pdf — « Classification TNM »."
      },
      {
        "type": "qcm",
        "text": "Un bilan montre une tumeur primitive sans donnée sur les ganglions ni les métastases. Quelle lettre de TNM décrit spécifiquement la tumeur primitive ?",
        "options": [
          "T.",
          "N.",
          "M.",
          "P."
        ],
        "correction": "T désigne la tumeur primitive.",
        "originalNumber": 20,
        "answer": "T.",
        "source": "ONCOLOGIE.pdf — « Classification TNM »."
      },
      {
        "type": "qcm",
        "text": "Quelles informations peuvent être organisées par la classification TNM ?",
        "options": [
          "Caractéristiques de la tumeur primitive.",
          "Atteinte ganglionnaire.",
          "Métastases à distance.",
          "Existence d’une alopécie sous chimiothérapie."
        ],
        "correction": "TNM décrit l’extension tumorale, ganglionnaire et métastatique.",
        "originalNumber": 21,
        "answers": [
          "Caractéristiques de la tumeur primitive.",
          "Atteinte ganglionnaire.",
          "Métastases à distance."
        ],
        "source": "ONCOLOGIE.pdf — « Classification TNM »."
      },
      {
        "type": "vf",
        "text": "Une biopsie et une classification TNM répondent exactement à la même question clinique.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "La biopsie avec histologie confirme le diagnostic, tandis que TNM participe à la description de l’extension.",
        "originalNumber": 22,
        "answer": "Faux",
        "source": "ONCOLOGIE.pdf — « Diagnostic / biopsie » et « Classification TNM »."
      },
      {
        "type": "qcm",
        "text": "Quelles propositions distinguent correctement diagnostic et bilan d’extension ?",
        "options": [
          "La biopsie avec histologie sert à confirmer le diagnostic.",
          "Le bilan d’extension cherche jusqu’où la maladie s’est propagée.",
          "TNM participe à l’évaluation de l’extension.",
          "L’extravasation confirme le diagnostic de cancer."
        ],
        "correction": "Le cours distingue la confirmation de la nature cancéreuse et l’évaluation de son extension.",
        "originalNumber": 23,
        "answers": [
          "La biopsie avec histologie sert à confirmer le diagnostic.",
          "Le bilan d’extension cherche jusqu’où la maladie s’est propagée.",
          "TNM participe à l’évaluation de l’extension."
        ],
        "source": "ONCOLOGIE.pdf — « Diagnostic et bilan d’extension / TNM / biopsie »."
      },
      {
        "type": "qcm",
        "text": "Parmi ces examens, lequel est directement associé dans le cours à l’obtention d’un prélèvement tumoral pour étude histologique ?",
        "options": [
          "Biopsie.",
          "Scanner.",
          "IRM.",
          "Scintigraphie osseuse."
        ],
        "correction": "La biopsie permet le prélèvement qui sera étudié histologiquement.",
        "originalNumber": 24,
        "answer": "Biopsie.",
        "source": "ONCOLOGIE.pdf — « Biopsie / étude histologique »."
      },
      {
        "type": "qcm",
        "text": "Dans une étude, on veut rechercher les facteurs pouvant expliquer la survenue de cancers dans une population. Quelle dimension de l’épidémiologie est la plus directement concernée parmi celles du cours ?",
        "options": [
          "Analytique.",
          "Descriptive uniquement.",
          "Chimiothérapeutique.",
          "Histologique."
        ],
        "correction": "Le cours distingue notamment une épidémiologie analytique destinée à étudier les facteurs déterminants.",
        "originalNumber": 25,
        "answer": "Analytique.",
        "source": "ONCOLOGIE.pdf — « Épidémiologie des cancers »."
      },
      {
        "type": "qcm",
        "text": "Une étude décrit la fréquence et la répartition d’un cancer dans une population sans chercher immédiatement sa cause. Quelle composante est concernée ?",
        "options": [
          "Épidémiologie descriptive.",
          "Hormonothérapie additive.",
          "Promotion.",
          "Chirurgie conservatrice."
        ],
        "correction": "La composante descriptive s’intéresse à la description du phénomène de santé dans la population.",
        "originalNumber": 26,
        "answer": "Épidémiologie descriptive.",
        "source": "ONCOLOGIE.pdf — « Épidémiologie des cancers »."
      },
      {
        "type": "qcm",
        "text": "Une politique cherche à réduire l’apparition des cancers en diminuant l’exposition aux agents cancérogènes. Quelles notions sont concernées ?",
        "options": [
          "Prévention primaire.",
          "Action sur les facteurs de risque.",
          "Prévention des rechutes uniquement.",
          "Réinsertion socioprofessionnelle uniquement."
        ],
        "correction": "La prévention primaire vise notamment à diminuer l’exposition aux facteurs cancérogènes avant l’apparition de la maladie.",
        "originalNumber": 27,
        "answers": [
          "Prévention primaire.",
          "Action sur les facteurs de risque."
        ],
        "source": "ONCOLOGIE.pdf — « Prévention primaire »."
      },
      {
        "type": "vf",
        "text": "Une action portant sur un état précancéreux avant son évolution vers un cancer relève de la prévention secondaire.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Le cours rattache le dépistage et le traitement des états précancéreux à la prévention secondaire.",
        "originalNumber": 28,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — « Prévention secondaire »."
      },
      {
        "type": "qcm",
        "text": "Parmi les situations suivantes, lesquelles relèvent de la prévention tertiaire telle qu’elle est présentée dans le support ?",
        "options": [
          "Prévention des rechutes.",
          "Réinsertion socioprofessionnelle.",
          "Prise en charge du malade traité.",
          "Réduction de l’exposition au tabac avant toute maladie."
        ],
        "correction": "La dernière proposition correspond plutôt à la prévention primaire.",
        "originalNumber": 29,
        "answers": [
          "Prévention des rechutes.",
          "Réinsertion socioprofessionnelle.",
          "Prise en charge du malade traité."
        ],
        "source": "ONCOLOGIE.pdf — « Prévention tertiaire »."
      },
      {
        "type": "qcm",
        "text": "Quelles associations facteur/cancer figurent dans le cours ?",
        "options": [
          "HPV → cancer du col.",
          "Hépatite B → cancer primitif du foie.",
          "Aflatoxine → cancer primitif du foie.",
          "Tabac → cancer broncho-pulmonaire."
        ],
        "correction": "Toutes ces associations sont citées dans le support.",
        "originalNumber": 30,
        "answers": [
          "HPV → cancer du col.",
          "Hépatite B → cancer primitif du foie.",
          "Aflatoxine → cancer primitif du foie.",
          "Tabac → cancer broncho-pulmonaire."
        ],
        "source": "ONCOLOGIE.pdf — « Facteurs ou agents associés aux cancers »."
      },
      {
        "type": "qcm",
        "text": "Un facteur peut être cité dans le cours sans être de nature infectieuse. Lesquels ?",
        "options": [
          "Tabac.",
          "Alcool.",
          "Radiations.",
          "Aflatoxine."
        ],
        "correction": "Ces éléments figurent parmi les facteurs ou agents associés aux cancers ; ils ne sont pas présentés comme des virus.",
        "originalNumber": 31,
        "answers": [
          "Tabac.",
          "Alcool.",
          "Radiations.",
          "Aflatoxine."
        ],
        "source": "ONCOLOGIE.pdf — « Facteurs de risque »."
      },
      {
        "type": "vf",
        "text": "Le HPV et le virus de l’hépatite B sont tous deux cités dans le cours parmi les facteurs infectieux associés à certains cancers.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Ils figurent tous deux dans les agents infectieux cités.",
        "originalNumber": 32,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — « Facteurs de risque / agents infectieux »."
      },
      {
        "type": "qcm",
        "text": "Une personne consulte pour un changement de transit associé à des selles sanglantes. Quel territoire du cours est le plus directement évoqué ?",
        "options": [
          "Côlon/rectum.",
          "Gorge/larynx.",
          "Poumon.",
          "Peau."
        ],
        "correction": "Le cours cite les selles sanglantes et la modification du transit parmi les signes concernant le côlon ou le rectum.",
        "originalNumber": 33,
        "answer": "Côlon/rectum.",
        "source": "ONCOLOGIE.pdf — « Circonstances de découverte »."
      },
      {
        "type": "qcm",
        "text": "Quel ensemble comporte uniquement des signes généraux cités dans le support ?",
        "options": [
          "Asthénie, anorexie, amaigrissement.",
          "Fièvre, sueurs nocturnes, prurit.",
          "Altération de l’état général, asthénie, fièvre.",
          "Toux, jet urinaire faible, changement d’un grain de beauté."
        ],
        "correction": "Les trois premiers groupes rassemblent des signes généraux. La dernière proposition mélange des signes d’organes différents.",
        "originalNumber": 34,
        "answers": [
          "Asthénie, anorexie, amaigrissement.",
          "Fièvre, sueurs nocturnes, prurit.",
          "Altération de l’état général, asthénie, fièvre."
        ],
        "source": "ONCOLOGIE.pdf — « Signes généraux »."
      },
      {
        "type": "vf",
        "text": "Une toux persistante et des crachats sanglants sont classés dans le cours parmi les signes généraux non spécifiques.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Ils sont cités dans les signes concernant le poumon.",
        "originalNumber": 35,
        "answer": "Faux",
        "source": "ONCOLOGIE.pdf — « Circonstances de découverte : poumon »."
      },
      {
        "type": "qcm",
        "text": "Quels couples « signe → territoire » sont conformes au cours ?",
        "options": [
          "V oix rauque → gorge/larynx.",
          "Urines sanglantes → vessie/prostate.",
          "Modification d’un grain de beauté → peau.",
          "Saignement vaginal anormal → utérus/col."
        ],
        "correction": "Ces quatre correspondances figurent dans la partie consacrée aux circonstances de découverte.",
        "originalNumber": 36,
        "answers": [
          "V oix rauque → gorge/larynx.",
          "Urines sanglantes → vessie/prostate.",
          "Modification d’un grain de beauté → peau.",
          "Saignement vaginal anormal → utérus/col."
        ],
        "source": "ONCOLOGIE.pdf — « Signes d’alerte selon l’organe »."
      },
      {
        "type": "qcm",
        "text": "Une modification de la texture ou un épaississement mammaire est rattaché dans le cours :",
        "options": [
          "Au sein.",
          "Au côlon.",
          "Au poumon.",
          "À la prostate."
        ],
        "correction": "Le support cite l’épaississement, l’œdème ou la modification de la texture mammaire parmi les signes concernant le sein.",
        "originalNumber": 37,
        "answer": "Au sein.",
        "source": "ONCOLOGIE.pdf — « Circonstances de découverte : sein »."
      },
      {
        "type": "vf",
        "text": "Un même patient peut présenter des signes généraux et des signes orientant vers un organe particulier.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Le cours distingue des signes d’alerte selon l’organe et une liste séparée de signes généraux.",
        "originalNumber": 38,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — « Circonstances de découverte / signes généraux »."
      },
      {
        "type": "qcm",
        "text": "Parmi les manifestations suivantes, lesquelles sont citées pour la gorge ou le larynx plutôt que pour le poumon ?",
        "options": [
          "V oix rauque.",
          "Boule dans la gorge.",
          "Difficulté à avaler.",
          "Crachats sanglants."
        ],
        "correction": "Les crachats sanglants sont cités pour le poumon.",
        "originalNumber": 39,
        "answers": [
          "V oix rauque.",
          "Boule dans la gorge.",
          "Difficulté à avaler."
        ],
        "source": "ONCOLOGIE.pdf — « Poumon » et « Gorge/larynx »."
      },
      {
        "type": "qcm",
        "text": "Quel signe appartient aux manifestations urinaires décrites dans le cours ?",
        "options": [
          "Trouble du jet urinaire.",
          "V oix rauque.",
          "Modification du transit.",
          "Plaie buccale persistante."
        ],
        "correction": "Les troubles du jet urinaire sont cités pour la vessie ou la prostate.",
        "originalNumber": 40,
        "answer": "Trouble du jet urinaire.",
        "source": "ONCOLOGIE.pdf — « Vessie/prostate »."
      },
      {
        "type": "qcm",
        "text": "Une chirurgie retire la tumeur tout en cherchant à préserver le plus possible l’organe. Quelle modalité est illustrée ?",
        "options": [
          "Chirurgie conservatrice.",
          "Chirurgie non conservatrice.",
          "Chimiothérapie adjuvante.",
          "Hormonothérapie additive."
        ],
        "correction": "La chirurgie conservatrice vise à retirer la tumeur en préservant autant que possible l’organe ou les tissus sains.",
        "originalNumber": 41,
        "answer": "Chirurgie conservatrice.",
        "source": "ONCOLOGIE.pdf — « Chirurgie »."
      },
      {
        "type": "qcm",
        "text": "Quels traitements du cours peuvent intervenir autour d’une chirurgie ?",
        "options": [
          "Chimiothérapie néoadjuvante avant l’intervention.",
          "Chimiothérapie adjuvante après l’intervention.",
          "Biopsie comme chimiothérapie.",
          "Prévalence comme traitement."
        ],
        "correction": "Le cours distingue la chimiothérapie néoadjuvante avant la chirurgie et la chimiothérapie adjuvante après.",
        "originalNumber": 42,
        "answers": [
          "Chimiothérapie néoadjuvante avant l’intervention.",
          "Chimiothérapie adjuvante après l’intervention."
        ],
        "source": "ONCOLOGIE.pdf — « Chimiothérapie néoadjuvante et adjuvante »."
      },
      {
        "type": "qcm",
        "text": "Une diminution de la taille tumorale avant l’intervention constitue un objectif attribué dans le support à :",
        "options": [
          "La chimiothérapie néoadjuvante.",
          "La chimiothérapie adjuvante.",
          "La prévention tertiaire.",
          "La biopsie."
        ],
        "correction": "Le traitement néoadjuvant peut être utilisé avant la chirurgie pour diminuer la taille du cancer.",
        "originalNumber": 43,
        "answer": "La chimiothérapie néoadjuvante.",
        "source": "ONCOLOGIE.pdf — « Chimiothérapie néoadjuvante »."
      },
      {
        "type": "vf",
        "text": "L’objectif décrit pour la chimiothérapie adjuvante est compatible avec la destruction de cellules tumorales qui pourraient persister après la chirurgie.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "C’est précisément l’un des objectifs indiqués dans le cours.",
        "originalNumber": 44,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — « Chimiothérapie adjuvante »."
      },
      {
        "type": "qcm",
        "text": "Quels éléments expliquent que la chimiothérapie puisse provoquer des effets secondaires ?",
        "options": [
          "Elle utilise des agents cytotoxiques.",
          "Certaines cellules normales à division rapide peuvent être atteintes.",
          "Elle vise exclusivement les cellules normales.",
          "Elle est uniquement une méthode d’imagerie."
        ],
        "correction": "Le cours indique que les cytotoxiques attaquent les cellules tumorales mais peuvent aussi atteindre des cellules normales à division rapide.",
        "originalNumber": 45,
        "answers": [
          "Elle utilise des agents cytotoxiques.",
          "Certaines cellules normales à division rapide peuvent être atteintes."
        ],
        "source": "ONCOLOGIE.pdf — « Chimiothérapie »."
      },
      {
        "type": "qcm",
        "text": "Parmi ces cibles ou mécanismes, lesquels sont mentionnés pour les agents anticancéreux ?",
        "options": [
          "ADN.",
          "Synthèse de l’ADN.",
          "Microtubules.",
          "Prévalence."
        ],
        "correction": "Le support cite des agents agissant sur l’ADN, sa synthèse ou les microtubules.",
        "originalNumber": 46,
        "answers": [
          "ADN.",
          "Synthèse de l’ADN.",
          "Microtubules."
        ],
        "source": "ONCOLOGIE.pdf — « Chimiothérapie : mécanismes d’action »."
      },
      {
        "type": "qcm",
        "text": "Une hormonothérapie supprime la source de l’hormone impliquée. Comment est-elle qualifiée dans le cours ?",
        "options": [
          "Suppressive.",
          "Additive.",
          "Adjuvante.",
          "Néoadjuvante."
        ],
        "correction": "L’hormonothérapie suppressive correspond à la suppression de la source hormonale.",
        "originalNumber": 47,
        "answer": "Suppressive.",
        "source": "ONCOLOGIE.pdf — « Hormonothérapie suppressive »."
      },
      {
        "type": "qcm",
        "text": "Concernant l’hormonothérapie additive, quelles propositions correspondent au cours ?",
        "options": [
          "Elle utilise des substances administrées au patient.",
          "Ces substances peuvent empêcher l’utilisation de l’hormone par la cellule.",
          "Elle correspond à la suppression chirurgicale obligatoire de tous les organes.",
          "Elle désigne une scintigraphie."
        ],
        "correction": "Le cours décrit l’hormonothérapie additive comme l’administration de substances capables de bloquer l’utilisation hormonale par les cellules.",
        "originalNumber": 48,
        "answers": [
          "Elle utilise des substances administrées au patient.",
          "Ces substances peuvent empêcher l’utilisation de l’hormone par la cellule."
        ],
        "source": "ONCOLOGIE.pdf — « Hormonothérapie additive »."
      },
      {
        "type": "vf",
        "text": "Avant une séance de chimiothérapie, un patient présente des signes d’infection. Cette information doit être recherchée par l’IDE avant le traitement.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "La recherche d’une infection fait partie du rôle IDE avant chimiothérapie décrit dans le support.",
        "originalNumber": 49,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — « Rôle de l’IDE avant chimiothérapie »."
      },
      {
        "type": "qcm",
        "text": "Avant la chimiothérapie, quelles informations ou vérifications appartiennent au rôle IDE décrit ?",
        "options": [
          "Allergies ou réactions antérieures.",
          "Constantes.",
          "Bilan biologique.",
          "Affections cardiaques, pulmonaires, rénales ou hépatiques."
        ],
        "correction": "Toutes ces vérifications apparaissent dans la préparation infirmière avant administration.",
        "originalNumber": 50,
        "answers": [
          "Allergies ou réactions antérieures.",
          "Constantes.",
          "Bilan biologique.",
          "Affections cardiaques, pulmonaires, rénales ou hépatiques."
        ],
        "source": "ONCOLOGIE.pdf — « Rôle de l’IDE avant chimiothérapie »."
      },
      {
        "type": "vf",
        "text": "Une NFS normale suffit à elle seule à remplacer la vérification des fonctions rénale et hépatique avant chimiothérapie selon le cours.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Le cours mentionne séparément la NFS, la fonction rénale et la fonction hépatique.",
        "originalNumber": 51,
        "answer": "Faux",
        "source": "ONCOLOGIE.pdf — « Bilan avant chimiothérapie »."
      },
      {
        "type": "qcm",
        "text": "Au moment de l’administration, quels comportements IDE sont conformes au support ?",
        "options": [
          "Respecter le protocole.",
          "Respecter l’asepsie.",
          "Surveiller le patient.",
          "Surveiller le point de perfusion."
        ],
        "correction": "Ces mesures participent à la sécurité de l’administration et au dépistage notamment de l’extravasation.",
        "originalNumber": 52,
        "answers": [
          "Respecter le protocole.",
          "Respecter l’asepsie.",
          "Surveiller le patient.",
          "Surveiller le point de perfusion."
        ],
        "source": "ONCOLOGIE.pdf — « Rôle de l’IDE pendant chimiothérapie »."
      },
      {
        "type": "qcm",
        "text": "Pendant la perfusion, un produit cytotoxique quitte accidentellement la veine. Quelle complication est décrite ?",
        "options": [
          "Extravasation.",
          "Leucopénie.",
          "Anémie.",
          "Alopécie."
        ],
        "correction": "L’extravasation correspond au passage accidentel du produit hors du vaisseau.",
        "originalNumber": 53,
        "answer": "Extravasation.",
        "source": "ONCOLOGIE.pdf — « Extravasation »."
      },
      {
        "type": "qcm",
        "text": "Pourquoi l’extravasation exige-t-elle une vigilance particulière ?",
        "options": [
          "Elle peut léser les tissus environnants.",
          "Les lésions peuvent aller jusqu’à la nécrose.",
          "Elle correspond à une simple chute de cheveux.",
          "Elle constitue une complication locale de l’administration."
        ],
        "correction": "Le cours souligne les lésions tissulaires potentielles de l’extravasation, pouvant aller jusqu’à la nécrose.",
        "originalNumber": 54,
        "answers": [
          "Elle peut léser les tissus environnants.",
          "Les lésions peuvent aller jusqu’à la nécrose.",
          "Elle constitue une complication locale de l’administration."
        ],
        "source": "ONCOLOGIE.pdf — « Extravasation »."
      },
      {
        "type": "qcm",
        "text": "Après chimiothérapie, un patient présente simultanément une leucopénie, une thrombopénie et une anémie. Quelle toxicité générale du cours peut regrouper ces anomalies ?",
        "options": [
          "Myélotoxicité.",
          "Néoangiogenèse.",
          "Promotion.",
          "Métastase."
        ],
        "correction": "Ces anomalies des lignées sanguines sont présentées dans la surveillance de la myélotoxicité.",
        "originalNumber": 55,
        "answer": "Myélotoxicité.",
        "source": "ONCOLOGIE.pdf — « Myélotoxicité / effets secondaires »."
      },
      {
        "type": "qcm",
        "text": "Quelles associations de surveillance sont cohérentes avec les effets hématologiques cités ?",
        "options": [
          "Leucopénie → diminution des globules blancs.",
          "Thrombopénie → diminution des plaquettes.",
          "Anémie → atteinte de la lignée rouge.",
          "Toutes doivent être recherchées dans la surveillance post-chimiothérapie."
        ],
        "correction": "Le cours cite ces trois anomalies parmi les conséquences de la toxicité hématologique nécessitant une surveillance.",
        "originalNumber": 56,
        "answers": [
          "Leucopénie → diminution des globules blancs.",
          "Thrombopénie → diminution des plaquettes.",
          "Anémie → atteinte de la lignée rouge.",
          "Toutes doivent être recherchées dans la surveillance post-chimiothérapie."
        ],
        "source": "ONCOLOGIE.pdf — « Surveillance hématologique après chimiothérapie »."
      },
      {
        "type": "qcm",
        "text": "Un patient sous chimiothérapie présente nausées, vomissements, mucite et perte de cheveux. Lesquels sont cités comme effets à surveiller ?",
        "options": [
          "Nausées.",
          "V omissements.",
          "Mucite.",
          "Alopécie."
        ],
        "correction": "Les quatre sont présents dans la liste des effets secondaires du cours.",
        "originalNumber": 57,
        "answers": [
          "Nausées.",
          "V omissements.",
          "Mucite.",
          "Alopécie."
        ],
        "source": "ONCOLOGIE.pdf — « Surveillance des effets secondaires de la chimiothérapie »."
      },
      {
        "type": "qcm",
        "text": "Chez un patient traité, quels problèmes nutritionnels ou hydriques sont cités dans le cours ?",
        "options": [
          "Amaigrissement.",
          "Dénutrition.",
          "Déshydratation.",
          "Augmentation obligatoire de l’appétit."
        ],
        "correction": "Amaigrissement, dénutrition et déshydratation font partie des éléments à surveiller.",
        "originalNumber": 58,
        "answers": [
          "Amaigrissement.",
          "Dénutrition.",
          "Déshydratation."
        ],
        "source": "ONCOLOGIE.pdf — « Surveillance après chimiothérapie »."
      },
      {
        "type": "qcm",
        "text": "La surveillance d’un patient sous chimiothérapie doit rester multidimensionnelle. Quels domaines de toxicité sont cités dans le support ?",
        "options": [
          "Rénal.",
          "Pulmonaire.",
          "Neurologique.",
          "Hépatique."
        ],
        "correction": "Le cours mentionne des troubles rénaux, pulmonaires, neurologiques et hépatiques parmi les effets nécessitant une surveillance.",
        "originalNumber": 59,
        "answers": [
          "Rénal.",
          "Pulmonaire.",
          "Neurologique.",
          "Hépatique."
        ],
        "source": "ONCOLOGIE.pdf — « Surveillance des toxicités »."
      },
      {
        "type": "qcm",
        "text": "Un patient est accueilli pour chimiothérapie. L’IDE vérifie son bilan et ses constantes, administre le traitement en respectant le protocole et surveille le point de perfusion, puis recherche les effets toxiques. Quelles étapes du rôle IDE sont représentées ?",
        "options": [
          "Préparation et vérifications avant chimiothérapie.",
          "Surveillance pendant l’administration.",
          "Surveillance des effets secondaires après traitement.",
          "Confirmation histologique du cancer par l’IDE."
        ],
        "correction": "Le cours organise le rôle infirmier autour des vérifications avant traitement, de la sécurité pendant l’administration et de la surveillance des effets indésirables. La confirmation histologique relève de l’étude du prélèvement, pas de cette surveillance infirmière.",
        "originalNumber": 60,
        "answers": [
          "Préparation et vérifications avant chimiothérapie.",
          "Surveillance pendant l’administration.",
          "Surveillance des effets secondaires après traitement."
        ],
        "source": "ONCOLOGIE.pdf — « Rôle de l’IDE dans la chimiothérapie »."
      }
    ]
  },
  {
    "id": "oncologie-sujet-4",
    "title": "SUJET 4 ONCOLOGIE",
    "matter": "Oncologie",
    "description": "Sujet 4 d’oncologie — banque complète de 60 questions.",
    "instructions": "Répondez aux questions. Pour les QCM, une ou plusieurs réponses peuvent être correctes. La correction détaillée est disponible après la composition.",
    "duration": 30,
    "programmed": true,
    "openDate": "2026-08-01",
    "openTime": "00:00",
    "closeDate": "2030-12-31",
    "closeTime": "23:59",
    "marking": {
      "correct": 1,
      "wrong": -1,
      "empty": 0
    },
    "questions": [
      {
        "type": "qcm",
        "text": "Une tumeur est décrite comme mal limitée, non encapsulée, à croissance rapide, avec invasion des tissus voisins. Quelle conclusion est la plus cohérente avec le cours ?",
        "options": [
          "Elle présente un profil de malignité.",
          "Elle présente un profil typiquement bénin.",
          "Elle correspond obligatoirement à une prévention secondaire.",
          "Elle est nécessairement encapsulée."
        ],
        "correction": "La mauvaise limitation, l’absence d’encapsulation, la croissance rapide et l’invasion correspondent aux caractères de la tumeur maligne.",
        "originalNumber": 1,
        "answer": "Elle présente un profil de malignité.",
        "source": "ONCOLOGIE.pdf — comparaison « Tumeur bénigne / tumeur maligne »."
      },
      {
        "type": "qcm",
        "text": "Quelles associations permettent de distinguer correctement les deux types de tumeurs ?",
        "options": [
          "Tumeur bénigne → croissance lente.",
          "Tumeur maligne → possibilité de récidive.",
          "Tumeur bénigne → absence de métastases.",
          "Tumeur maligne → invasion possible des tissus voisins."
        ],
        "correction": "Ces quatre associations correspondent au tableau comparatif du cours.",
        "originalNumber": 2,
        "answers": [
          "Tumeur bénigne → croissance lente.",
          "Tumeur maligne → possibilité de récidive.",
          "Tumeur bénigne → absence de métastases.",
          "Tumeur maligne → invasion possible des tissus voisins."
        ],
        "source": "ONCOLOGIE.pdf — comparaison « Tumeur bénigne / tumeur maligne »."
      },
      {
        "type": "vf",
        "text": "Une tumeur bien limitée mais capable de donner des métastases conserve un comportement entièrement bénin.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "La capacité métastatique constitue un caractère de malignité dans le cours.",
        "originalNumber": 3,
        "answer": "Faux",
        "source": "ONCOLOGIE.pdf — comparaison « Tumeur bénigne / tumeur maligne »."
      },
      {
        "type": "qcm",
        "text": "Une cellule a subi une modification irréversible de son ADN, mais elle n’a pas encore acquis un pouvoir invasif. Quelle étape est déjà réalisée ?",
        "options": [
          "Initiation.",
          "Progression.",
          "Métastase.",
          "Prévention tertiaire."
        ],
        "correction": "L’initiation correspond à la lésion initiale, rapide et irréversible, de l’ADN.",
        "originalNumber": 4,
        "answer": "Initiation.",
        "source": "ONCOLOGIE.pdf — « Initiation »."
      },
      {
        "type": "qcm",
        "text": "Quels éléments peuvent favoriser la multiplication d’une cellule déjà initiée ?",
        "options": [
          "Hormones.",
          "Facteurs de croissance.",
          "Facteurs inflammatoires.",
          "Facteurs alimentaires."
        ],
        "correction": "Ces quatre éléments sont cités parmi les facteurs favorisant la promotion.",
        "originalNumber": 5,
        "answers": [
          "Hormones.",
          "Facteurs de croissance.",
          "Facteurs inflammatoires.",
          "Facteurs alimentaires."
        ],
        "source": "ONCOLOGIE.pdf — « Promotion »."
      },
      {
        "type": "qcm",
        "text": "Une cellule cancéreuse devient capable d’infiltrer les tissus puis de former des métastases. Cette évolution correspond principalement :",
        "options": [
          "À la progression.",
          "À la prévention primaire.",
          "À la biopsie.",
          "À l’épidémiologie descriptive."
        ],
        "correction": "La progression est l’étape où apparaissent notamment les propriétés invasives et métastatiques.",
        "originalNumber": 6,
        "answer": "À la progression.",
        "source": "ONCOLOGIE.pdf — « Progression »."
      },
      {
        "type": "qcm",
        "text": "Quelles comparaisons entre initiation et promotion sont exactes ?",
        "options": [
          "L’initiation comporte une atteinte de l’ADN.",
          "La promotion favorise la prolifération de la cellule initiée.",
          "La promotion est décrite comme relativement longue.",
          "L’initiation est décrite comme rapide et irréversible."
        ],
        "correction": "Ces éléments permettent de distinguer les deux premières étapes de l’oncogenèse.",
        "originalNumber": 7,
        "answers": [
          "L’initiation comporte une atteinte de l’ADN.",
          "La promotion favorise la prolifération de la cellule initiée.",
          "La promotion est décrite comme relativement longue.",
          "L’initiation est décrite comme rapide et irréversible."
        ],
        "source": "ONCOLOGIE.pdf — « Initiation / Promotion »."
      },
      {
        "type": "vf",
        "text": "La progression peut être considérée comme l’étape précédant l’initiation.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "L’ordre est initiation → promotion → progression.",
        "originalNumber": 8,
        "answer": "Faux",
        "source": "ONCOLOGIE.pdf — « Étapes de l’oncogenèse »."
      },
      {
        "type": "qcm",
        "text": "Une cellule cancéreuse se multiplie sans contrôle, échappe à la mort programmée et stimule la création de vaisseaux. Quelles caractéristiques sont illustrées ?",
        "options": [
          "Perte du contrôle des divisions.",
          "Perte des capacités apoptotiques.",
          "Néoangiogenèse.",
          "Prévalence."
        ],
        "correction": "Ces trois propriétés appartiennent aux caractéristiques de la cellule cancéreuse.",
        "originalNumber": 9,
        "answers": [
          "Perte du contrôle des divisions.",
          "Perte des capacités apoptotiques.",
          "Néoangiogenèse."
        ],
        "source": "ONCOLOGIE.pdf — « Caractéristiques de la cellule cancéreuse »."
      },
      {
        "type": "qcm",
        "text": "Quelle caractéristique favorise directement l’apport sanguin à la masse tumorale ?",
        "options": [
          "Néoangiogenèse.",
          "Apoptose.",
          "Prévention secondaire.",
          "Incidence."
        ],
        "correction": "La néoangiogenèse correspond à la formation de nouveaux vaisseaux au bénéfice de la tumeur.",
        "originalNumber": 10,
        "answer": "Néoangiogenèse.",
        "source": "ONCOLOGIE.pdf — « Néoangiogenèse »."
      },
      {
        "type": "vf",
        "text": "Une cellule cancéreuse possède nécessairement toutes les caractéristiques d’une cellule normale en matière de mort programmée.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "La perte des capacités apoptotiques est justement l’une des caractéristiques décrites.",
        "originalNumber": 11,
        "answer": "Faux",
        "source": "ONCOLOGIE.pdf — « Caractéristiques de la cellule cancéreuse »."
      },
      {
        "type": "qcm",
        "text": "Parmi les éléments suivants, lesquels favorisent directement la persistance ou l’expansion d’une population cancéreuse ?",
        "options": [
          "Immortalisation.",
          "Autosuffisance en facteurs de croissance.",
          "Perte des capacités apoptotiques.",
          "Perte du contrôle des divisions."
        ],
        "correction": "Toutes ces propriétés participent au comportement anormal de la cellule cancéreuse.",
        "originalNumber": 12,
        "answers": [
          "Immortalisation.",
          "Autosuffisance en facteurs de croissance.",
          "Perte des capacités apoptotiques.",
          "Perte du contrôle des divisions."
        ],
        "source": "ONCOLOGIE.pdf — « Caractéristiques de la cellule cancéreuse »."
      },
      {
        "type": "qcm",
        "text": "Des cellules d’un cancer se retrouvent dans les ganglions régionaux sans localisation à distance décrite. Quelles propositions sont cohérentes ?",
        "options": [
          "Une dissémination lymphatique peut être en cause.",
          "Il existe une extension régionale.",
          "Une métastase viscérale à distance est forcément présente.",
          "Les ganglions peuvent être concernés dans la dissémination."
        ],
        "correction": "L’atteinte ganglionnaire peut correspondre à une extension régionale par voie lymphatique, sans que le cours impose une métastase viscérale simultanée.",
        "originalNumber": 13,
        "answers": [
          "Une dissémination lymphatique peut être en cause.",
          "Il existe une extension régionale.",
          "Les ganglions peuvent être concernés dans la dissémination."
        ],
        "source": "ONCOLOGIE.pdf — « Extension régionale / voie lymphatique »."
      },
      {
        "type": "qcm",
        "text": "Une localisation secondaire apparaît dans un organe éloigné. Quels événements peuvent l’avoir précédée ?",
        "options": [
          "Détachement de cellules de la tumeur primitive.",
          "Transport par le sang ou la lymphe.",
          "Implantation dans un autre tissu.",
          "Multiplication dans le nouveau site."
        ],
        "correction": "La dissémination aboutissant à une métastase implique la migration puis l’implantation et la multiplication de cellules cancéreuses.",
        "originalNumber": 14,
        "answers": [
          "Détachement de cellules de la tumeur primitive.",
          "Transport par le sang ou la lymphe.",
          "Implantation dans un autre tissu.",
          "Multiplication dans le nouveau site."
        ],
        "source": "ONCOLOGIE.pdf — « Dissémination / métastases »."
      },
      {
        "type": "qcm",
        "text": "Quel mécanisme correspond le mieux au passage de cellules tumorales vers un organe éloigné grâce à la circulation ?",
        "options": [
          "Dissémination sanguine.",
          "Prévention primaire.",
          "Apoptose.",
          "Promotion hormonale."
        ],
        "correction": "Le sang constitue l’une des voies de transport des cellules cancéreuses vers des organes à distance.",
        "originalNumber": 15,
        "answer": "Dissémination sanguine.",
        "source": "ONCOLOGIE.pdf — « V oie sanguine »."
      },
      {
        "type": "vf",
        "text": "L’extension locale signifie obligatoirement que des métastases à distance sont déjà présentes.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "L’extension locale correspond à l’invasion des tissus voisins et se distingue de l’extension à distance.",
        "originalNumber": 16,
        "answer": "Faux",
        "source": "ONCOLOGIE.pdf — « Dissémination »."
      },
      {
        "type": "qcm",
        "text": "Un registre indique 500 personnes vivant avec un cancer à une date précise, dont 80 cas diagnostiqués cette année. Quelles notions correspondent aux deux chiffres ?",
        "options": [
          "500 personnes → prévalence.",
          "80 nouveaux cas → incidence.",
          "500 personnes → initiation.",
          "80 nouveaux cas → métastases."
        ],
        "correction": "La prévalence concerne l’ensemble des personnes atteintes à un moment donné ; l’incidence concerne les nouveaux cas.",
        "originalNumber": 17,
        "answers": [
          "500 personnes → prévalence.",
          "80 nouveaux cas → incidence."
        ],
        "source": "ONCOLOGIE.pdf — « Incidence / prévalence »."
      },
      {
        "type": "vf",
        "text": "Une augmentation de la prévalence signifie nécessairement exactement la même chose qu’une augmentation de l’incidence.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Le cours donne deux définitions distinctes à l’incidence et à la prévalence.",
        "originalNumber": 18,
        "answer": "Faux",
        "source": "ONCOLOGIE.pdf — « Incidence / prévalence »."
      },
      {
        "type": "qcm",
        "text": "Une étude cherche à décrire les cancers observés dans une population puis à identifier les facteurs qui les déterminent. Quelles approches du cours sont concernées ?",
        "options": [
          "Épidémiologie descriptive.",
          "Épidémiologie analytique.",
          "Chimiothérapie adjuvante.",
          "Hormonothérapie suppressive."
        ],
        "correction": "L’épidémiologie descriptive décrit le phénomène, tandis que l’analytique recherche les facteurs associés.",
        "originalNumber": 19,
        "answers": [
          "Épidémiologie descriptive.",
          "Épidémiologie analytique."
        ],
        "source": "ONCOLOGIE.pdf — « Épidémiologie des cancers »."
      },
      {
        "type": "qcm",
        "text": "Parmi les facteurs cités, lesquels correspondent à des expositions ou habitudes potentiellement modifiables ?",
        "options": [
          "Tabagisme.",
          "Alcoolisme.",
          "Certaines habitudes alimentaires.",
          "Certaines expositions professionnelles."
        ],
        "correction": "Tous figurent parmi les facteurs cités dans le cours.",
        "originalNumber": 20,
        "answers": [
          "Tabagisme.",
          "Alcoolisme.",
          "Certaines habitudes alimentaires.",
          "Certaines expositions professionnelles."
        ],
        "source": "ONCOLOGIE.pdf — « Facteurs de risque »."
      },
      {
        "type": "qcm",
        "text": "Une patiente ayant une infection à HPV doit être associée, dans le cadre précis du cours, à quel cancer ?",
        "options": [
          "Cancer du col de l’utérus.",
          "Cancer primitif du foie.",
          "Cancer broncho-pulmonaire.",
          "Cancer de la vessie."
        ],
        "correction": "Le support cite l’association HPV–cancer du col de l’utérus.",
        "originalNumber": 21,
        "answer": "Cancer du col de l’utérus.",
        "source": "ONCOLOGIE.pdf — « Facteurs associés aux cancers »."
      },
      {
        "type": "qcm",
        "text": "Quelles associations orientent vers le cancer primitif du foie dans le support ?",
        "options": [
          "Aflatoxine.",
          "Virus de l’hépatite B.",
          "HPV .",
          "EBV spécifiquement cité pour ce cancer."
        ],
        "correction": "L’aflatoxine et le virus de l’hépatite B sont associés dans le cours au cancer primitif du foie.",
        "originalNumber": 22,
        "answers": [
          "Aflatoxine.",
          "Virus de l’hépatite B."
        ],
        "source": "ONCOLOGIE.pdf — « Facteurs associés aux cancers »."
      },
      {
        "type": "qcm",
        "text": "Une action de santé publique réduit l’exposition à des cancérogènes avant toute maladie. Quels objectifs sont compatibles ?",
        "options": [
          "Empêcher l’apparition du cancer.",
          "Agir sur les facteurs de risque.",
          "Réaliser une prévention primaire.",
          "Traiter une rechute déjà constituée."
        ],
        "correction": "La prévention primaire intervient avant l’apparition du cancer et agit sur les facteurs de risque.",
        "originalNumber": 23,
        "answers": [
          "Empêcher l’apparition du cancer.",
          "Agir sur les facteurs de risque.",
          "Réaliser une prévention primaire."
        ],
        "source": "ONCOLOGIE.pdf — « Prévention primaire »."
      },
      {
        "type": "qcm",
        "text": "Quelle situation illustre le mieux la prévention secondaire ?",
        "options": [
          "Dépistage d’un état précancéreux.",
          "Réinsertion professionnelle après traitement.",
          "Surveillance d’une extravasation.",
          "Traitement d’une métastase."
        ],
        "correction": "Le cours rattache le dépistage des états précancéreux à la prévention secondaire.",
        "originalNumber": 24,
        "answer": "Dépistage d’un état précancéreux.",
        "source": "ONCOLOGIE.pdf — « Prévention secondaire »."
      },
      {
        "type": "qcm",
        "text": "Quelles situations peuvent être regroupées sous la prévention tertiaire selon le cours ?",
        "options": [
          "Réinsertion socioprofessionnelle.",
          "Prévention des rechutes.",
          "Prise en charge du malade traité.",
          "Réduction initiale de l’exposition au tabac."
        ],
        "correction": "La réduction initiale des facteurs de risque relève plutôt de la prévention primaire.",
        "originalNumber": 25,
        "answers": [
          "Réinsertion socioprofessionnelle.",
          "Prévention des rechutes.",
          "Prise en charge du malade traité."
        ],
        "source": "ONCOLOGIE.pdf — « Prévention tertiaire »."
      },
      {
        "type": "vf",
        "text": "La prévention secondaire intervient uniquement après la guérison complète d’un cancer.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Elle concerne notamment le dépistage et le traitement des états précancéreux.",
        "originalNumber": 26,
        "answer": "Faux",
        "source": "ONCOLOGIE.pdf — « Prévention secondaire »."
      },
      {
        "type": "qcm",
        "text": "Un patient présente une toux persistante, des crachats sanglants et un amaigrissement. Quelles propositions sont conformes au cours ?",
        "options": [
          "La toux persistante est un signe pulmonaire cité.",
          "Les crachats sanglants sont un signe pulmonaire cité.",
          "L’amaigrissement fait partie des signes généraux.",
          "Tous ces signes prouvent à eux seuls histologiquement un cancer."
        ],
        "correction": "Les deux premiers signes sont rattachés au poumon et l’amaigrissement aux signes généraux. Ils orientent, mais la confirmation repose sur la biopsie avec histologie.",
        "originalNumber": 27,
        "answers": [
          "La toux persistante est un signe pulmonaire cité.",
          "Les crachats sanglants sont un signe pulmonaire cité.",
          "L’amaigrissement fait partie des signes généraux."
        ],
        "source": "ONCOLOGIE.pdf — « Circonstances de découverte » et « signes généraux »."
      },
      {
        "type": "qcm",
        "text": "Une patiente présente un épaississement du sein et une modification de sa texture. Le cours rattache ces signes :",
        "options": [
          "Au sein.",
          "À la prostate.",
          "Au larynx.",
          "Au côlon."
        ],
        "correction": "Ces modifications sont citées parmi les signes mammaires.",
        "originalNumber": 28,
        "answer": "Au sein.",
        "source": "ONCOLOGIE.pdf — « Circonstances de découverte : sein »."
      },
      {
        "type": "qcm",
        "text": "Quels signes peuvent simultanément faire évoquer une atteinte de la vessie ou de la prostate selon le cours ?",
        "options": [
          "Mictions fréquentes.",
          "Urines sanglantes.",
          "Troubles du jet urinaire.",
          "Douleurs pelviennes."
        ],
        "correction": "Les quatre manifestations figurent dans cette rubrique du support.",
        "originalNumber": 29,
        "answers": [
          "Mictions fréquentes.",
          "Urines sanglantes.",
          "Troubles du jet urinaire.",
          "Douleurs pelviennes."
        ],
        "source": "ONCOLOGIE.pdf — « Vessie/prostate »."
      },
      {
        "type": "qcm",
        "text": "Une voix rauque associée à une difficulté à avaler correspond davantage, dans le support :",
        "options": [
          "À la gorge ou au larynx.",
          "À la vessie.",
          "Au côlon.",
          "Au sein."
        ],
        "correction": "Ces manifestations sont citées pour la gorge ou le larynx.",
        "originalNumber": 30,
        "answer": "À la gorge ou au larynx.",
        "source": "ONCOLOGIE.pdf — « Gorge/larynx »."
      },
      {
        "type": "qcm",
        "text": "Parmi ces associations, lesquelles sont erronées ?",
        "options": [
          "Modification du transit → côlon/rectum.",
          "V oix rauque → gorge/larynx.",
          "Toux persistante → poumon.",
          "Saignement vaginal anormal → vessie/prostate."
        ],
        "correction": "Le saignement vaginal anormal est rattaché à l’utérus ou au col.",
        "originalNumber": 31,
        "answer": "Saignement vaginal anormal → vessie/prostate.",
        "source": "ONCOLOGIE.pdf — « Circonstances de découverte selon l’organe »."
      },
      {
        "type": "vf",
        "text": "Les sueurs nocturnes, le prurit et l’asthénie sont tous classés parmi les signes généraux dans le support.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Ces trois manifestations sont citées dans la liste des signes généraux.",
        "originalNumber": 32,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — « Signes généraux »."
      },
      {
        "type": "qcm",
        "text": "Un examen d’imagerie met en évidence une masse suspecte. Quelle étape reste nécessaire pour obtenir l’argument de certitude décrit dans le cours ?",
        "options": [
          "Biopsie avec étude histologique.",
          "Mesure de la tension seule.",
          "Classification de l’incidence.",
          "Prévention tertiaire."
        ],
        "correction": "Le cours retient la biopsie avec étude histologique comme confirmation diagnostique.",
        "originalNumber": 33,
        "answer": "Biopsie avec étude histologique.",
        "source": "ONCOLOGIE.pdf — « Biopsie / étude histologique »."
      },
      {
        "type": "qcm",
        "text": "Quels examens figurent parmi les moyens cités pour le diagnostic ou le bilan d’extension ?",
        "options": [
          "Scanner.",
          "IRM.",
          "Scintigraphie osseuse.",
          "Échographie."
        ],
        "correction": "Les quatre examens sont cités dans le support.",
        "originalNumber": 34,
        "answers": [
          "Scanner.",
          "IRM.",
          "Scintigraphie osseuse.",
          "Échographie."
        ],
        "source": "ONCOLOGIE.pdf — « Diagnostic et bilan d’extension »."
      },
      {
        "type": "qcm",
        "text": "Le bilan d’extension cherche notamment à préciser :",
        "options": [
          "L’extension de la tumeur primitive.",
          "L’atteinte ganglionnaire.",
          "La présence éventuelle de métastases.",
          "La couleur des yeux du patient."
        ],
        "correction": "Ces trois dimensions correspondent à la logique de la classification TNM.",
        "originalNumber": 35,
        "answers": [
          "L’extension de la tumeur primitive.",
          "L’atteinte ganglionnaire.",
          "La présence éventuelle de métastases."
        ],
        "source": "ONCOLOGIE.pdf — « Bilan d’extension / TNM »."
      },
      {
        "type": "qcm",
        "text": "Un dossier indique une atteinte ganglionnaire mais aucune information sur les métastases. Quelle lettre de TNM correspond à l’atteinte décrite ?",
        "options": [
          "N.",
          "M.",
          "T.",
          "A."
        ],
        "correction": "N correspond à l’atteinte des ganglions.",
        "originalNumber": 36,
        "answer": "N.",
        "source": "ONCOLOGIE.pdf — « Classification TNM »."
      },
      {
        "type": "vf",
        "text": "Une biopsie et un bilan d’extension sont deux démarches complémentaires : l’une confirme le diagnostic, l’autre précise la propagation de la maladie.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Le support distingue clairement confirmation histologique et évaluation de l’extension.",
        "originalNumber": 37,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — « Diagnostic et bilan d’extension »."
      },
      {
        "type": "qcm",
        "text": "Une intervention enlève la tumeur en conservant autant que possible l’organe. Quelles propositions sont exactes ?",
        "options": [
          "Il s’agit d’une chirurgie conservatrice.",
          "Elle cherche à préserver les tissus sains autant que possible.",
          "Elle correspond nécessairement à une chimiothérapie.",
          "Elle constitue une modalité thérapeutique chirurgicale."
        ],
        "correction": "La chirurgie conservatrice est une stratégie chirurgicale visant à retirer la tumeur tout en préservant autant que possible l’organe ou les tissus sains.",
        "originalNumber": 38,
        "answers": [
          "Il s’agit d’une chirurgie conservatrice.",
          "Elle cherche à préserver les tissus sains autant que possible.",
          "Elle constitue une modalité thérapeutique chirurgicale."
        ],
        "source": "ONCOLOGIE.pdf — « Chirurgie »."
      },
      {
        "type": "qcm",
        "text": "Un traitement médicamenteux anticancéreux est administré avant l’opération afin de réduire la masse. Quelles propositions sont exactes ?",
        "options": [
          "Il s’agit d’une chimiothérapie néoadjuvante.",
          "Elle précède la chirurgie.",
          "Son objectif peut être de réduire la taille tumorale.",
          "Elle est nécessairement une chimiothérapie adjuvante."
        ],
        "correction": "La chimiothérapie néoadjuvante se situe avant la chirurgie et peut réduire la taille du cancer.",
        "originalNumber": 39,
        "answers": [
          "Il s’agit d’une chimiothérapie néoadjuvante.",
          "Elle précède la chirurgie.",
          "Son objectif peut être de réduire la taille tumorale."
        ],
        "source": "ONCOLOGIE.pdf — « Chimiothérapie néoadjuvante »."
      },
      {
        "type": "qcm",
        "text": "Un traitement est administré après l’exérèse de la tumeur afin de détruire des cellules cancéreuses pouvant persister. Il s’agit :",
        "options": [
          "D’une chimiothérapie adjuvante.",
          "D’une chimiothérapie néoadjuvante.",
          "D’une prévention primaire.",
          "D’une biopsie."
        ],
        "correction": "La chimiothérapie adjuvante intervient après la chirurgie.",
        "originalNumber": 40,
        "answer": "D’une chimiothérapie adjuvante.",
        "source": "ONCOLOGIE.pdf — « Chimiothérapie adjuvante »."
      },
      {
        "type": "vf",
        "text": "Néoadjuvant et adjuvant se distinguent notamment par leur position par rapport à la chirurgie.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Le néoadjuvant précède la chirurgie ; l’adjuvant la suit.",
        "originalNumber": 41,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — « Chimiothérapie néoadjuvante et adjuvante »."
      },
      {
        "type": "qcm",
        "text": "Quels éléments peuvent expliquer les toxicités de la chimiothérapie décrites ensuite dans le cours ?",
        "options": [
          "Les médicaments sont cytotoxiques.",
          "Ils peuvent toucher certaines cellules normales à division rapide.",
          "Ils ciblent uniquement des cellules totalement étrangères à l’organisme.",
          "Leur action n’est pas strictement limitée aux cellules tumorales."
        ],
        "correction": "Les cytotoxiques attaquent les cellules tumorales mais peuvent aussi atteindre certaines cellules normales à renouvellement rapide.",
        "originalNumber": 42,
        "answers": [
          "Les médicaments sont cytotoxiques.",
          "Ils peuvent toucher certaines cellules normales à division rapide.",
          "Leur action n’est pas strictement limitée aux cellules tumorales."
        ],
        "source": "ONCOLOGIE.pdf — « Chimiothérapie »."
      },
      {
        "type": "qcm",
        "text": "Parmi ces mécanismes, lesquels sont cités pour les médicaments anticancéreux ?",
        "options": [
          "Modification de l’ADN.",
          "Inhibition de la synthèse de l’ADN.",
          "Action sur les microtubules.",
          "Augmentation obligatoire de la néoangiogenèse."
        ],
        "correction": "Ces trois mécanismes sont mentionnés dans le cours.",
        "originalNumber": 43,
        "answers": [
          "Modification de l’ADN.",
          "Inhibition de la synthèse de l’ADN.",
          "Action sur les microtubules."
        ],
        "source": "ONCOLOGIE.pdf — « Chimiothérapie : mécanismes d’action »."
      },
      {
        "type": "qcm",
        "text": "Une thérapeutique bloque l’influence d’une hormone sur une cellule cancéreuse. Dans quelle famille de traitements du cours se situe-t-elle ?",
        "options": [
          "Hormonothérapie.",
          "Imagerie.",
          "Biopsie.",
          "Épidémiologie."
        ],
        "correction": "L’hormonothérapie vise à empêcher l’action stimulante de certaines hormones sur les cellules cancéreuses.",
        "originalNumber": 44,
        "answer": "Hormonothérapie.",
        "source": "ONCOLOGIE.pdf — « Hormonothérapie »."
      },
      {
        "type": "qcm",
        "text": "Quelles correspondances entre types d’hormonothérapie et principe sont exactes ?",
        "options": [
          "Suppressive → suppression de la source hormonale.",
          "Additive → administration de substances bloquant l’utilisation de l’hormone.",
          "Suppressive → réalisation d’une biopsie.",
          "Additive → classification TNM."
        ],
        "correction": "Ce sont les deux modalités décrites dans le support.",
        "originalNumber": 45,
        "answers": [
          "Suppressive → suppression de la source hormonale.",
          "Additive → administration de substances bloquant l’utilisation de l’hormone."
        ],
        "source": "ONCOLOGIE.pdf — « Hormonothérapie suppressive/additive »."
      },
      {
        "type": "qcm",
        "text": "Avant une chimiothérapie, le patient rapporte une infection récente et une maladie rénale. Quelles informations intéressent l’IDE selon le cours ?",
        "options": [
          "Présence d’une infection.",
          "Affection rénale.",
          "Fonction rénale biologique.",
          "Ces informations sont sans intérêt avant chimiothérapie."
        ],
        "correction": "Le rôle IDE avant chimiothérapie comprend la recherche d’infection, de certaines affections associées et la vérification de la fonction rénale.",
        "originalNumber": 46,
        "answers": [
          "Présence d’une infection.",
          "Affection rénale.",
          "Fonction rénale biologique."
        ],
        "source": "ONCOLOGIE.pdf — « Rôle de l’IDE avant chimiothérapie »."
      },
      {
        "type": "qcm",
        "text": "Quels contrôles font partie de la préparation pré-thérapeutique décrite ?",
        "options": [
          "Constantes.",
          "NFS.",
          "Fonction hépatique.",
          "Fonction rénale."
        ],
        "correction": "Tous sont mentionnés parmi les éléments à vérifier avant la chimiothérapie.",
        "originalNumber": 47,
        "answers": [
          "Constantes.",
          "NFS.",
          "Fonction hépatique.",
          "Fonction rénale."
        ],
        "source": "ONCOLOGIE.pdf — « Rôle de l’IDE avant chimiothérapie »."
      },
      {
        "type": "vf",
        "text": "Expliquer le traitement et ses effets secondaires au patient fait partie du rôle IDE avant la chimiothérapie.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Le cours inclut l’information du patient parmi les actions infirmières préalables.",
        "originalNumber": 48,
        "answer": "Vrai",
        "source": "ONCOLOGIE.pdf — « Rôle de l’IDE avant chimiothérapie »."
      },
      {
        "type": "qcm",
        "text": "Pendant une séance, quelles actions participent directement à la sécurité de l’administration ?",
        "options": [
          "Vérifier le protocole.",
          "Respecter les règles d’asepsie.",
          "Surveiller le patient.",
          "Dépister une extravasation."
        ],
        "correction": "Ces quatre responsabilités sont citées dans le rôle IDE pendant chimiothérapie.",
        "originalNumber": 49,
        "answers": [
          "Vérifier le protocole.",
          "Respecter les règles d’asepsie.",
          "Surveiller le patient.",
          "Dépister une extravasation."
        ],
        "source": "ONCOLOGIE.pdf — « Rôle de l’IDE pendant chimiothérapie »."
      },
      {
        "type": "qcm",
        "text": "Un patient se plaint d’une anomalie au niveau de la perfusion pendant l’administration. Quelle complication locale doit être immédiatement envisagée dans le cadre du cours ?",
        "options": [
          "Extravasation.",
          "Prévalence.",
          "Néoangiogenèse.",
          "Promotion."
        ],
        "correction": "L’extravasation est une complication locale majeure à surveiller pendant l’administration.",
        "originalNumber": 50,
        "answer": "Extravasation.",
        "source": "ONCOLOGIE.pdf — « Extravasation »."
      },
      {
        "type": "qcm",
        "text": "Quelles affirmations relatives à l’extravasation sont conformes au support ?",
        "options": [
          "Le produit quitte accidentellement le vaisseau.",
          "Il diffuse dans les tissus environnants.",
          "Des lésions tissulaires importantes peuvent survenir.",
          "Une nécrose peut être possible."
        ],
        "correction": "Ce sont les caractéristiques et risques décrits pour l’extravasation.",
        "originalNumber": 51,
        "answers": [
          "Le produit quitte accidentellement le vaisseau.",
          "Il diffuse dans les tissus environnants.",
          "Des lésions tissulaires importantes peuvent survenir.",
          "Une nécrose peut être possible."
        ],
        "source": "ONCOLOGIE.pdf — « Extravasation »."
      },
      {
        "type": "qcm",
        "text": "Après chimiothérapie, un patient présente surtout une baisse de ses globules blancs. Quelle anomalie du cours correspond à ce résultat ?",
        "options": [
          "Leucopénie.",
          "Thrombopénie.",
          "Mucite.",
          "Alopécie."
        ],
        "correction": "La leucopénie correspond à une diminution des leucocytes et fait partie des toxicités hématologiques citées.",
        "originalNumber": 52,
        "answer": "Leucopénie.",
        "source": "ONCOLOGIE.pdf — « Surveillance après chimiothérapie »."
      },
      {
        "type": "qcm",
        "text": "Après chimiothérapie, quelles anomalies appartiennent à la surveillance hématologique présentée ?",
        "options": [
          "Leucopénie.",
          "Thrombopénie.",
          "Anémie.",
          "Myélotoxicité."
        ],
        "correction": "Les quatre éléments apparaissent dans la surveillance des toxicités hématologiques.",
        "originalNumber": 53,
        "answers": [
          "Leucopénie.",
          "Thrombopénie.",
          "Anémie.",
          "Myélotoxicité."
        ],
        "source": "ONCOLOGIE.pdf — « Myélotoxicité »."
      },
      {
        "type": "vf",
        "text": "Une thrombopénie et une leucopénie correspondent exactement à la même anomalie sanguine.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Elles concernent des lignées sanguines différentes et sont listées séparément dans le support.",
        "originalNumber": 54,
        "answer": "Faux",
        "source": "ONCOLOGIE.pdf — « Toxicités hématologiques »."
      },
      {
        "type": "qcm",
        "text": "Un patient traité présente fatigue, amaigrissement et dénutrition. Parmi ces manifestations, lesquelles figurent dans les éléments de surveillance du cours ?",
        "options": [
          "Fatigue.",
          "Amaigrissement.",
          "Dénutrition.",
          "Aucune."
        ],
        "correction": "Ces trois manifestations sont explicitement citées parmi les éléments à surveiller.",
        "originalNumber": 55,
        "answers": [
          "Fatigue.",
          "Amaigrissement.",
          "Dénutrition."
        ],
        "source": "ONCOLOGIE.pdf — « Surveillance des effets secondaires »."
      },
      {
        "type": "qcm",
        "text": "Quels effets digestifs ou buccaux sont cités parmi les effets de la chimiothérapie ?",
        "options": [
          "Nausées.",
          "V omissements.",
          "Mucite.",
          "Aucun trouble digestif n’est cité."
        ],
        "correction": "Nausées, vomissements et mucite font partie des effets à surveiller.",
        "originalNumber": 56,
        "answers": [
          "Nausées.",
          "V omissements.",
          "Mucite."
        ],
        "source": "ONCOLOGIE.pdf — « Surveillance des effets secondaires »."
      },
      {
        "type": "qcm",
        "text": "Une perte de cheveux sous traitement correspond à quel effet cité ?",
        "options": [
          "Alopécie.",
          "Apoptose.",
          "Prévalence.",
          "Métastase."
        ],
        "correction": "L’alopécie figure dans la liste des effets secondaires de la chimiothérapie.",
        "originalNumber": 57,
        "answer": "Alopécie.",
        "source": "ONCOLOGIE.pdf — « Surveillance des effets secondaires »."
      },
      {
        "type": "qcm",
        "text": "Quels systèmes ou fonctions peuvent également faire l’objet d’une surveillance de toxicité ?",
        "options": [
          "Fonction rénale.",
          "Fonction pulmonaire.",
          "Système neurologique.",
          "Fonction hépatique."
        ],
        "correction": "Le cours cite des troubles rénaux, pulmonaires, neurologiques et hépatiques parmi les complications possibles.",
        "originalNumber": 58,
        "answers": [
          "Fonction rénale.",
          "Fonction pulmonaire.",
          "Système neurologique.",
          "Fonction hépatique."
        ],
        "source": "ONCOLOGIE.pdf — « Surveillance des toxicités »."
      },
      {
        "type": "vf",
        "text": "La surveillance infirmière d’un patient sous chimiothérapie doit uniquement porter sur le point de perfusion pendant l’administration.",
        "options": [
          "Vrai",
          "Faux"
        ],
        "correction": "Le rôle IDE commence avant l’administration, se poursuit pendant la séance et comprend ensuite la surveillance des nombreux effets secondaires.",
        "originalNumber": 59,
        "answer": "Faux",
        "source": "ONCOLOGIE.pdf — « Rôle de l’IDE dans la chimiothérapie »."
      },
      {
        "type": "qcm",
        "text": "Un patient présente une tumeur suspecte. Une biopsie confirme le cancer ; le bilan précise l’atteinte ganglionnaire et métastatique ; une chimiothérapie est ensuite administrée et surveillée. Quelles étapes du cours sont représentées dans cette situation ?",
        "options": [
          "Confirmation diagnostique par histologie.",
          "Évaluation de l’extension par TNM.",
          "Traitement par chimiothérapie.",
          "Surveillance infirmière des toxicités et de l’administration."
        ],
        "correction": "Cette situation croise les principales étapes de prise en charge décrites : diagnostic de certitude, bilan d’extension, stratégie thérapeutique et rôle infirmier.",
        "originalNumber": 60,
        "answers": [
          "Confirmation diagnostique par histologie.",
          "Évaluation de l’extension par TNM.",
          "Traitement par chimiothérapie.",
          "Surveillance infirmière des toxicités et de l’administration."
        ],
        "source": "ONCOLOGIE.pdf — « Diagnostic/bilan d’extension », « stratégies thérapeutiques » et « rôle IDE »."
      }
    ]
  }
];
