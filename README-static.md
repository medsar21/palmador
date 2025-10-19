# Palmador Chocolatier - Site Statique

Site web statique optimisé pour Palmador Chocolatier, créé avec HTML, Tailwind CSS et JavaScript vanilla.

## 🚀 Caractéristiques

- **100% Statique** : Aucun framework JavaScript lourd
- **Performance Optimale** : Chargement ultra-rapide
- **Design Responsive** : Mobile-first avec Tailwind CSS
- **SEO Optimisé** : Meta tags et structure sémantique
- **Interactivité Native** : JavaScript vanilla avec event delegation

## 📁 Structure du Projet

```
public-static/
├── index.html          # Page d'accueil
├── produits.html       # Catalogue produits
├── apropos.html        # Page à propos
├── contact.html        # Page contact
├── styles.css          # CSS compilé Tailwind
├── app.js             # Logique JavaScript
├── PALMA.svg          # Logo
└── assets/
    └── images/        # Images produits et assets
```

## 🛠️ Installation et Utilisation

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation
```bash
# Installer les dépendances
npm install

# Compiler les styles Tailwind
npm run build

# Servir le site localement
npm run serve
```

### Scripts Disponibles

```bash
# Développement (watch mode pour CSS)
npm run dev

# Build de production (CSS minifié)
npm run build

# Servir le site (port 5173)
npm run serve

# Build + Serve en une commande
npm start
```

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `tailwind.config.js` :
- `brand: '#b37651'` (couleur principale)
- `brandDark: '#7a4c33'` (couleur sombre)
- `brandLight: '#d4b29a'` (couleur claire)

### Fonts
- **Serif** : Playfair Display (titres)
- **Sans-serif** : Montserrat (texte)

### Modifier les Styles
1. Éditez `src-static/styles/input.css`
2. Lancez `npm run dev` pour voir les changements
3. Ou `npm run build` pour compiler en production

## 📱 Fonctionnalités

### Navigation
- Menu hamburger responsive
- Liens actifs avec indicateurs visuels
- Navigation fluide entre pages

### Page Produits
- Grille responsive (2-4 colonnes selon écran)
- Filtres par catégorie
- Recherche en temps réel
- Tri par prix
- Modales de détails produits
- Système de favoris et panier

### Interactivité
- Event delegation pour performance
- Animations CSS natives
- Scroll to top
- Bouton WhatsApp flottant
- Formulaires avec validation

## 🔧 Configuration

### Tailwind CSS
Le fichier `tailwind.config.js` contient :
- Configuration des couleurs personnalisées
- Fonts Google Fonts
- Animations personnalisées
- Responsive breakpoints

### JavaScript
Le fichier `app.js` gère :
- Navigation mobile
- Filtres et recherche produits
- Modales et interactions
- Formulaires
- Scroll to top
- WhatsApp integration

## 📊 Performance

### Optimisations Incluses
- CSS purgé (seules les classes utilisées)
- Images optimisées
- JavaScript minimal
- Pas de dépendances externes lourdes
- Chargement asynchrone des ressources

### Métriques Attendues
- **Lighthouse Score** : 95+ (Performance, SEO, Accessibilité)
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1

## 🌐 Déploiement

### Hébergement Statique
Le site peut être déployé sur :
- **Netlify** : Drag & drop du dossier `public-static`
- **Vercel** : Connecter le repo GitHub
- **GitHub Pages** : Push du dossier `public-static`
- **Serveur Web** : Copier les fichiers sur Apache/Nginx

### Configuration Serveur
```nginx
# Nginx configuration example
server {
    listen 80;
    server_name palmador-chocolatier.com;
    root /path/to/public-static;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
    
    # Cache static assets
    location ~* \.(css|js|png|jpg|jpeg|gif|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## 📝 Maintenance

### Ajouter une Nouvelle Page
1. Créer un nouveau fichier HTML dans `public-static/`
2. Copier la structure de base (navbar, footer)
3. Ajouter le lien dans la navigation
4. Compiler les styles si nécessaire

### Modifier les Produits
Éditer le tableau `products` dans `app.js` :
```javascript
const products = [
  {
    id: 'nouveau-produit',
    name: 'Nouveau Produit',
    price: 299,
    category: 'coffret',
    image: './assets/images/nouveau.jpg',
    description: 'Description du produit...',
  },
  // ...
];
```

### Ajouter des Images
1. Placer les images dans `public-static/assets/images/`
2. Utiliser des formats optimisés (WebP, AVIF)
3. Respecter les dimensions recommandées (800x800px pour les produits)

## 🐛 Dépannage

### Problèmes Courants

**Styles ne se chargent pas**
```bash
npm run build
```

**Images ne s'affichent pas**
- Vérifier les chemins dans `app.js`
- S'assurer que les images sont dans `assets/images/`

**JavaScript ne fonctionne pas**
- Ouvrir la console développeur (F12)
- Vérifier les erreurs dans `app.js`

## 📞 Support

Pour toute question ou problème :
- **Email** : contact@palmador-chocolatier.com
- **Téléphone** : +212 530 56 20 79
- **WhatsApp** : +212 530 56 20 79

## 📄 Licence

© 2024 Palmador Chocolatier. Tous droits réservés.

---

**Développé avec ❤️ pour Palmador Chocolatier**
