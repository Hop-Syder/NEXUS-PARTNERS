# 🚀 Guide de Déploiement Local - Nexus Partners

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js 16+** : [Télécharger ici](https://nodejs.org/)
- **Yarn** (recommandé) ou **npm**
- **Git** (optionnel) : [Télécharger ici](https://git-scm.com/)

## 📁 Option 1 : Récupération des fichiers

### A. Téléchargement direct
1. Téléchargez tous les fichiers du projet
2. Créez un dossier `nexus-partners` sur votre bureau
3. Copiez tous les fichiers dans ce dossier

### B. Structure des fichiers à copier
```
nexus-partners/
├── README.md
├── REPORT.md  
├── package.json
└── frontend/
    ├── package.json
    ├── tailwind.config.js
    ├── public/
    │   └── index.html
    └── src/
        ├── components/
        ├── contexts/
        ├── hooks/
        ├── App.js
        ├── App.css
        ├── index.css
        └── mock.js
```

## 🛠️ Installation et Lancement

### 1. Ouvrir le terminal
- **Windows** : `Win + R` puis tapez `cmd` ou utilisez PowerShell
- **Mac** : `Cmd + Espace` puis tapez "Terminal"
- **Linux** : `Ctrl + Alt + T`

### 2. Naviguer vers le projet
```bash
cd Desktop/nexus-partners
# ou le chemin où vous avez mis le dossier
```

### 3. Installer les dépendances
```bash
cd frontend
yarn install
# ou si vous n'avez pas Yarn :
npm install
```

### 4. Lancer le site en développement
```bash
yarn start
# ou
npm start
```

### 5. Ouvrir dans le navigateur
Le site s'ouvrira automatiquement sur : **http://localhost:3000**

Si ça ne s'ouvre pas automatiquement, tapez cette adresse dans votre navigateur.

## ✅ Vérification du Fonctionnement

Vous devriez voir :
- ✅ Logo "Nexus Partners" en haut à gauche
- ✅ Menu de navigation (Accueil, À propos, Services...)
- ✅ Bouton de thème jour/nuit (soleil/lune) en haut à droite
- ✅ Section hero avec le slogan "Connecter les talents, propulser les idées"
- ✅ Statistiques : 500+ clients, 1200+ projets, etc.

## 🔧 Configuration EmailJS (Optionnelle)

Pour activer le formulaire de contact :

### 1. Créer un compte EmailJS
- Allez sur [emailjs.com](https://www.emailjs.com/)
- Créez un compte gratuit
- Notez votre **Service ID**, **Template ID** et **Public Key**

### 2. Modifier le fichier Contact.js
Ouvrez `/frontend/src/components/Contact.js` et remplacez :

```javascript
// Ligne ~67, remplacez les placeholders :
await emailjs.send(
  'YOUR_SERVICE_ID',      // Votre Service ID
  'YOUR_TEMPLATE_ID',     // Votre Template ID  
  formData,
  'YOUR_PUBLIC_KEY'       // Votre Public Key
);
```

## 📱 Test des Fonctionnalités

### Navigation
- ✅ Cliquez sur les liens du menu (À propos, Services, etc.)
- ✅ Testez le menu mobile (réduisez la fenêtre)

### Thème Jour/Nuit
- ✅ Cliquez sur l'icône soleil/lune en haut à droite
- ✅ Vérifiez que le thème change et persiste au rechargement

### Formulaire de Contact
- ✅ Remplissez le formulaire
- ✅ Testez la validation (champs obligatoires)
- ⚠️ L'envoi ne fonctionnera qu'après configuration EmailJS

## 🏗️ Build de Production

Pour créer une version optimisée pour mise en ligne :

```bash
cd frontend
yarn build
# ou
npm run build
```

Les fichiers optimisés seront dans `/frontend/build/`

## 🌐 Déploiement sur Internet

### Option 1 : Netlify (Gratuit)
1. Allez sur [netlify.com](https://netlify.com)
2. Glissez-déposez le dossier `/frontend/build/`
3. Votre site sera en ligne instantanément !

### Option 2 : Vercel (Gratuit)  
1. Allez sur [vercel.com](https://vercel.com)
2. Connectez votre GitHub et pushez le code
3. Déploiement automatique !

### Option 3 : Serveur perso
Copiez le contenu de `/frontend/build/` sur votre serveur web.

## 🆘 Résolution de Problèmes

### "command not found: yarn"
```bash
npm install -g yarn
```

### "Cannot find module"
```bash
rm -rf node_modules
rm package-lock.json
yarn install
```

### Port 3000 déjà utilisé
```bash
yarn start --port 3001
```

### Page blanche
1. Vérifiez la console navigateur (F12)
2. Redémarrez le serveur (`Ctrl+C` puis `yarn start`)
3. Videz le cache navigateur (`Ctrl+F5`)

## 📞 Support

Si vous rencontrez des difficultés :
1. Vérifiez que Node.js est bien installé : `node --version`
2. Vérifiez que vous êtes dans le bon dossier : `pwd` ou `dir`
3. Lisez attentivement les messages d'erreur

---

**✨ Votre site Nexus Partners est maintenant prêt !**

Testez toutes les fonctionnalités et n'hésitez pas à personnaliser le contenu selon vos besoins.