// Importer les composant pour créer un server
let express = require('express'); // Express permet de cronstruire le server NodeJS
let bodyParser = require('body-parser'); // Permet d'analyser les requêtes sur le serveur

// Importer le module de la route front
let front = require('./routes/front');
let api = require('./routes/api');

// Definir le port de l'application
let port = 8080;

// Initier le serveur
let app = express();

// Intégrer bodyParser dans le serveur
app.use(bodyParser.urlencoded({extended: false}))

// Configurer le moteur de templating/rendu
app.set('view engine', 'ejs');

// Définir les routes
app.use('/', front);
app.use('/api', api);

// Lancer le serveur
app.listen( port, () => {
    console.log(`Le serveur est lancé sur le port : ${port}`)
})