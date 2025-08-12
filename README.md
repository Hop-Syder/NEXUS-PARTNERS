# 🚀 Nexus Partners - Site Web Premium

Site web complet et moderne pour Nexus Partners, entreprise spécialisée dans la mise en relation de clients avec des solutions sur mesure.

## 🎨 Caractéristiques

- **Design Premium** : Interface élégante avec charte graphique professionnelle
- **Thème Jour/Nuit** : Système de thème complet avec persistance
- **Accessibilité WCAG AA/AAA** : Contrastes optimisés et navigation clavier
- **Responsive Design** : Adaptation parfaite mobile/desktop
- **Animations Modernes** : Effets glassmorphism, neon glow, parallax
- **Performance Optimisée** : Code clean et optimisé

## 🎯 Sections du Site

1. **Accueil** - Hero avec slogan animé + statistics
2. **À Propos** - Mission, équipe, valeurs
3. **Services** - 4 domaines d'expertise détaillés
4. **Portfolio** - Galerie projets avec filtres
5. **Témoignages** - Carrousel client + avis
6. **Contact** - Formulaire EmailJS + FAQ

## 🚀 Installation

### Prérequis
- Node.js 16+ ([Télécharger](https://nodejs.org/))
- Yarn ou npm

### 1. Téléchargement
```bash
# Téléchargez et extrayez le dossier du projet
# ou clonez le repository si disponible
```

### 2. Installation des dépendances
```bash
cd nexus-partners
cd frontend
yarn install
# ou
npm install
```

### 3. Lancement en développement
```bash
yarn start
# ou  
npm start
```

Le site sera accessible sur : http://localhost:3000

### 4. Build de production
```bash
yarn build
# ou
npm run build
```

## 🎨 Charte Graphique

- **Bleu Intense** : #004AAD (Couleur principale)
- **Jaune Doré** : #FFD700 (Couleur secondaire/accents)
- **Noir** : #000000 (Textes/Mode sombre)
- **Police** : Poppins, Montserrat

## 🌓 Système de Thèmes

Le site dispose d'un système de thème jour/nuit complet :
- **Toggle visuel** dans le header (icônes soleil/lune)
- **Persistance** du choix utilisateur
- **Détection préférence système** automatique
- **Transitions fluides** entre les thèmes
- **Accessibilité optimisée** pour chaque mode

## 📧 Configuration EmailJS

Pour activer le formulaire de contact :

1. Créer un compte sur [EmailJS](https://www.emailjs.com/)
2. Créer un service email
3. Créer un template d'email
4. Remplacer dans `/src/components/Contact.js` :

```javascript
// PLACEHOLDER: EmailJS integration
await emailjs.send(
  'YOUR_SERVICE_ID',      // Remplacer
  'YOUR_TEMPLATE_ID',     // Remplacer  
  formData,
  'YOUR_PUBLIC_KEY'       // Remplacer
);
```

## 📱 Responsive Design

- **Mobile First** : Optimisé pour mobile d'abord
- **Breakpoints** : sm(640px), md(768px), lg(1024px), xl(1280px)
- **Navigation mobile** : Menu hamburger avec animations
- **Boutons tactiles** : Taille minimum 44px

## 🎯 Performance

- **Images optimisées** : Format WebP, compression qualité
- **Code splitting** : Chargement par composants
- **CSS optimisé** : Variables CSS natives, animations GPU
- **Fonts** : Chargement Google Fonts optimisé

## 🧪 Tests

Le projet inclut des tests automatisés pour :
- ✅ Rendu des composants
- ✅ Navigation entre pages  
- ✅ Système de thèmes
- ✅ Formulaires et interactions

## 🔧 Structure du Projet

```
frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/           # Composants Shadcn
│   │   ├── Header.js     # Navigation principale
│   │   ├── Footer.js     # Pied de page
│   │   ├── Home.js       # Page d'accueil
│   │   ├── About.js      # À propos
│   │   ├── Services.js   # Services
│   │   ├── Portfolio.js  # Portfolio
│   │   ├── Testimonials.js # Témoignages
│   │   ├── Contact.js    # Contact
│   │   └── ThemeToggle.js # Bouton thème
│   ├── contexts/
│   │   └── ThemeContext.js # Gestion thèmes
│   ├── hooks/
│   │   └── use-toast.js  # Hook toasts
│   ├── App.js            # App principale
│   ├── App.css          # Styles principaux
│   ├── index.css        # Styles globaux
│   └── mock.js          # Données de demo
├── package.json
└── tailwind.config.js
```

## 🎨 Personnalisation

### Couleurs
Modifier les variables dans `/src/App.css` :
```css
:root {
  --nexus-blue: #004AAD;    /* Votre bleu */
  --nexus-gold: #FFD700;    /* Votre or */
}
```

### Contenu  
- **Textes** : Modifier dans chaque composant ou créer un fichier de contenu
- **Images** : Remplacer les URLs dans `/src/mock.js`
- **Logos** : Remplacer dans `/public/` et `/src/components/Header.js`

## 📞 Support

Pour toute question ou personnalisation :
- **Auteur** : @HopSyder  
- **Technologies** : React 19, Tailwind CSS, Shadcn/ui
- **Compatibilité** : Tous navigateurs modernes

## 📄 Licence

Ce projet est fourni "tel quel" pour usage professionnel.
Crédits : Design et développement par @HopSyder

## 🚀 Déploiement

### Netlify
```bash
yarn build
# Déployer le dossier build/ sur Netlify
```

### Vercel
```bash
yarn build  
# Connecter le repo à Vercel
```

### Serveur Apache/Nginx
```bash
yarn build
# Copier build/ vers votre serveur web
```

---

**✨ Nexus Partners - Connecter les talents, propulser les idées**