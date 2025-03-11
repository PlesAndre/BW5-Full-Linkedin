# LinkedIn Completo

## Descrizione
LinkedIn Completo è un'applicazione web che replica le funzionalità essenziali di LinkedIn, sviluppato durante una build week. Questo progetto si basa sul frontend realizzato in un precedente progetto di LinkedIn Clone, ma questa volta abbiamo dovuto implementare autonomamente il backend, gestendo collezioni per esperienze personali e utenti.

L'idea principale era di permettere agli utenti di autenticarsi tramite Clerk, gestire il proprio profilo e modificare i dati, come l'immagine, i dettagli e le esperienze, senza la possibilità di intaccare i dati degli altri utenti.

Tuttavia, il sito funziona solo parzialmente. La parte del database, con la gestione delle esperienze personali e degli utenti, è operativa, ma c'è un bug che interferisce con l'integrazione di Clerk, impedendo il completo funzionamento del sistema di autenticazione. Questo progetto dimostra che, a volte, durante lo sviluppo, possono sorgere imprevisti e non sempre è possibile completare un progetto in tempo, nonostante gli sforzi.

## Tecnologie utilizzate
- React (per la gestione del frontend)
- JavaScript (per la logica dell'applicazione)
- Bootstrap (per lo styling e la parte responsive)
- MongoDB (per la gestione del database)
- Mongoose (per l'interazione con MongoDB)
- Express (per la creazione delle rotte API)
- Node.js (per il backend)
- Clerk (per l'autenticazione e la gestione degli utenti)

## Installazione e utilizzo
Requisiti prima di iniziare, assicurati di avere i seguenti strumenti installati:

Node.js: Puoi scaricarlo da qui: https://nodejs.org/en

MongoDB: Puoi scaricare e avviare MongoDB in locale o utilizzare una versione cloud (ad esempio, MongoDB Atlas). 
https://www.mongodb.com/products/platform/atlas-database

Clerk: Per gestire l'autenticazione, dovrai avere un account su Clerk e configurare le credenziali API.

Passaggi per l'installazione
Clona il repository:

git clone https://github.com/tuo-username/linkedin-completo.git

Vai nella cartella del progetto e installa le dipendenze del progetto:
- npm install

#### Configura MongoDB:

Se usi MongoDB in locale, assicurati che il tuo server MongoDB sia in esecuzione.

Se usi MongoDB Atlas, sostituisci la stringa di connessione al database nel file di configurazione con quella del tuo cluster su MongoDB Atlas.

#### Configura Clerk:

Crea un account su Clerk e ottieni le credenziali API.

Aggiungi le credenziali nel progetto per abilitare l'autenticazione tramite Clerk.
Avvia il server:
- npm start
Una volta avviato il server, l'applicazione sarà disponibile su http://localhost:3000

Puoi accedere e autenticarti con il tuo account Clerk, visualizzare il profilo, e aggiornare i dati personali.

### Limitazioni
Il bug con Clerk impedisce l'integrazione completa della parte di autenticazione, causando malfunzionamenti nelle operazioni di login e modifica dei dati.
Il progetto funziona solo parzialmente, con la gestione del database operativa ma alcune funzionalità di autenticazione ancora non funzionanti correttamente.
La parte di autenticazione tramite Clerk è incompleta e necessita di essere risolta per il pieno funzionamento.

## Funzionalità implementate
- Autenticazione tramite Clerk: Gli utenti possono loggarsi tramite il proprio account Clerk e accedere al loro profilo.
- Gestione del profilo: Gli utenti possono visualizzare e aggiornare le informazioni del loro profilo, inclusi immagine di copertura, immagine del profilo e altre informazioni personali.
- CRUD per le esperienze: Gli utenti possono aggiungere, modificare e rimuovere le esperienze lavorative dal proprio profilo.
- Backend con Express e MongoDB: Implementazione delle rotte API per gestire i dati degli utenti e le esperienze, con Mongoose per interagire con il database MongoDB.
- Frontend con React e Bootstrap: Creazione dell'interfaccia utente, con componenti per la gestione del login, del profilo e delle esperienze, e uno stile responsive grazie a Bootstrap.
