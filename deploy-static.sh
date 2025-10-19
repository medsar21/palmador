#!/bin/bash
# Script de déploiement pour Palmador Chocolatier - Site Statique

echo "🚀 Déploiement du site statique Palmador Chocolatier"
echo "=================================================="

# Vérifier que nous sommes dans le bon répertoire
if [ ! -d "public-static" ]; then
    echo "❌ Erreur: Le dossier public-static n'existe pas"
    exit 1
fi

# Compiler les styles Tailwind
echo "📦 Compilation des styles Tailwind..."
npx tailwindcss -i ./src-static/styles/input.css -o ./public-static/styles.css --minify

if [ $? -eq 0 ]; then
    echo "✅ Styles compilés avec succès"
else
    echo "❌ Erreur lors de la compilation des styles"
    exit 1
fi

# Vérifier la taille des fichiers
echo ""
echo "📊 Statistiques du site:"
echo "========================"
echo "Taille du dossier public-static:"
du -sh public-static/

echo ""
echo "Fichiers principaux:"
ls -lh public-static/*.html
ls -lh public-static/styles.css
ls -lh public-static/app.js

echo ""
echo "🎯 Site prêt pour le déploiement!"
echo "================================="
echo ""
echo "📁 Dossier à déployer: public-static/"
echo ""
echo "🌐 Options de déploiement:"
echo "  • Netlify: Drag & drop du dossier public-static"
echo "  • Vercel: Connecter le repo GitHub"
echo "  • GitHub Pages: Push du dossier public-static"
echo "  • Serveur web: Copier les fichiers sur Apache/Nginx"
echo ""
echo "🚀 Pour tester localement:"
echo "  npm run serve"
echo ""
echo "✅ Migration terminée avec succès!"
