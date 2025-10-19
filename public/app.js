// public-static/app.js
// Logique JavaScript vanilla pour le site Palmador

// Données des produits (extrait de src/data/products.ts)
const products = [
  {
    id: 'coffret-1',
    name: 'Coffret Prestige',
    price: 450,
    category: 'coffret',
    image: './images/1.png',
    description: 'Collection exclusive de chocolats fins artisanaux, créés avec les meilleurs ingrédients pour une expérience gustative inoubliable.',
  },
  {
    id: 'coupe-1',
    name: 'Coupe Audace Gold',
    price: 320,
    category: 'coupe',
    image: './images/2.png',
    description: 'Coupe dorée avec chocolats audacieux, mélange parfait entre tradition et innovation pour les palais les plus exigeants.',
  },
  {
    id: 'coffret-2',
    name: 'Coffret Luxe',
    price: 380,
    category: 'coffret',
    image: './images/3.png',
    description: 'Coffret de chocolats fins aux saveurs raffinées, emballé dans un écrin élégant pour vos moments les plus précieux.',
  },
  {
    id: 'coupe-2',
    name: 'Coupe Élégance',
    price: 290,
    category: 'coupe',
    image: './images/4.png',
    description: 'Coupe d\'élégance avec chocolats artisanaux, parfaite pour accompagner vos soirées les plus sophistiquées.',
  },
  {
    id: 'tablette-1',
    name: 'Tablette Intense 70%',
    price: 59,
    category: 'tablette',
    image: './images/1.png',
    description: 'Chocolat noir d\'exception aux notes profondes, parfait pour les connaisseurs de cacao pur.',
  },
  {
    id: 'tablette-2',
    name: 'Tablette Lait Caramel',
    price: 49,
    category: 'tablette',
    image: './images/2.png',
    description: 'Tablette de chocolat au lait avec éclats de caramel, douceur et gourmandise réunies.',
  },
];

// État global de l'application
const appState = {
  favorites: new Set(),
  cart: [],
  searchTerm: '',
  selectedCategory: '',
  sortOrder: '',
  mobileMenuOpen: false,
  selectedProduct: null,
};

// Utilitaires
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Event delegation pour tous les événements
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

function initializeApp() {
  // Navigation mobile
  setupMobileMenu();
  
  // Page produits
  if (window.location.pathname.includes('produits')) {
    setupProductsPage();
  }
  
  // Scroll to top
  setupScrollToTop();
  
  // WhatsApp button
  setupWhatsAppButton();
  
  // Formulaires
  setupForms();
  
  // Modales
  setupModals();
}

// Navigation mobile
function setupMobileMenu() {
  const mobileMenuButton = $('[data-action="toggle-mobile-menu"]');
  const mobileMenu = $('[data-target="mobile-menu"]');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      appState.mobileMenuOpen = !appState.mobileMenuOpen;
      mobileMenu.classList.toggle('hidden', !appState.mobileMenuOpen);
      
      // Animation
      if (appState.mobileMenuOpen) {
        mobileMenu.style.height = '0';
        mobileMenu.style.opacity = '0';
        mobileMenu.classList.remove('hidden');
        requestAnimationFrame(() => {
          mobileMenu.style.height = 'auto';
          mobileMenu.style.opacity = '1';
        });
      } else {
        mobileMenu.style.height = '0';
        mobileMenu.style.opacity = '0';
        setTimeout(() => mobileMenu.classList.add('hidden'), 300);
      }
    });
  }
}

// Page produits
function setupProductsPage() {
  const productsContainer = $('[data-target="products-container"]');
  const searchInput = $('[data-action="search-products"]');
  const categorySelect = $('[data-action="filter-category"]');
  const sortSelect = $('[data-action="sort-products"]');
  
  // Rendu initial
  renderProducts();
  
  // Event listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      appState.searchTerm = e.target.value;
      renderProducts();
    });
  }
  
  if (categorySelect) {
    categorySelect.addEventListener('change', (e) => {
      appState.selectedCategory = e.target.value;
      renderProducts();
    });
  }
  
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      appState.sortOrder = e.target.value;
      renderProducts();
    });
  }
}

function renderProducts() {
  const container = $('[data-target="products-container"]');
  if (!container) return;
  
  // Filtrage et tri
  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(appState.searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(appState.searchTerm.toLowerCase());
      const matchesCategory = appState.selectedCategory ? product.category === appState.selectedCategory : true;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (appState.sortOrder === 'asc') return a.price - b.price;
      if (appState.sortOrder === 'desc') return b.price - a.price;
      return 0;
    });
  
  // Rendu HTML
  container.innerHTML = filteredProducts.map(product => `
    <div class="bg-white/70 backdrop-blur rounded-2xl shadow-sm border border-brandLight/30 overflow-hidden hover:shadow-lg transition-all duration-300">
      <div class="aspect-square w-full overflow-hidden bg-gradient-to-br from-brand/10 via-brandLight/30 to-brandDark/10 relative">
        <img src="${product.image}" alt="${product.name}" loading="lazy" class="h-full w-full object-cover">
        
        <div class="absolute top-2 right-2 flex flex-col gap-2">
          <button data-action="toggle-favorite" data-product-id="${product.id}" 
                  class="rounded-full p-2 transition-all hover:shadow-[0_0_12px_rgba(179,118,81,0.5)] ${appState.favorites.has(product.id) ? 'bg-brand text-white' : 'bg-white/90 text-brand border border-brand/30'}">
            <svg class="h-4 w-4 ${appState.favorites.has(product.id) ? 'fill-current' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </button>
          <button data-action="add-to-cart" data-product-id="${product.id}" 
                  class="rounded-full p-2 bg-brand text-white border border-brand/30 transition-all hover:shadow-[0_0_12px_rgba(179,118,81,0.5)]">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>
            </svg>
          </button>
        </div>

        <span class="absolute top-2 left-2 bg-gradient-to-r from-brand to-brandLight text-white font-semibold shadow-lg px-2 py-1 rounded text-xs">
          ${product.category}
        </span>
      </div>

      <div class="p-3 sm:p-4">
        <div class="flex items-start justify-between gap-2 mb-3">
          <div class="flex-1">
            <h3 class="font-serif text-base sm:text-lg font-semibold text-brandDark mb-1">
              ${product.name}
            </h3>
            <p class="text-sm sm:text-base font-bold text-brand">
              ${product.price} MAD
            </p>
          </div>
        </div>

        <p class="text-xs sm:text-sm text-brandDark/70 mb-4 line-clamp-2">
          ${product.description}
        </p>

        <div class="flex flex-col gap-2">
          <button data-action="show-product-details" data-product-id="${product.id}" 
                  class="text-xs sm:text-sm underline decoration-brand/40 underline-offset-4 hover:decoration-brand transition text-brand">
            Voir détails
          </button>
          <button data-action="order-product" data-product-id="${product.id}" 
                  class="w-full bg-gradient-to-r from-brand to-brandLight text-white py-2 rounded-xl hover:scale-105 transition-transform font-medium text-sm">
            Commander
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Gestion des favoris et panier
document.addEventListener('click', (e) => {
  if (e.target.closest('[data-action="toggle-favorite"]')) {
    const productId = e.target.closest('[data-action="toggle-favorite"]').dataset.productId;
    if (appState.favorites.has(productId)) {
      appState.favorites.delete(productId);
    } else {
      appState.favorites.add(productId);
    }
    renderProducts(); // Re-render pour mettre à jour l'état visuel
  }
  
  if (e.target.closest('[data-action="add-to-cart"]')) {
    const productId = e.target.closest('[data-action="add-to-cart"]').dataset.productId;
    const existingItem = appState.cart.find(item => item.id === productId);
    if (existingItem) {
      existingItem.qty += 1;
    } else {
      appState.cart.push({ id: productId, qty: 1 });
    }
    updateCartBadge();
  }
  
  if (e.target.closest('[data-action="show-product-details"]')) {
    const productId = e.target.closest('[data-action="show-product-details"]').dataset.productId;
    showProductModal(productId);
  }
  
  if (e.target.closest('[data-action="order-product"]')) {
    const productId = e.target.closest('[data-action="order-product"]').dataset.productId;
    window.location.href = `commande.html?id=${productId}`;
  }
});

function updateCartBadge() {
  const badge = $('[data-target="cart-badge"]');
  if (badge) {
    const totalItems = appState.cart.reduce((sum, item) => sum + item.qty, 0);
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
  }
}

// Modales
function setupModals() {
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-action="close-modal"]')) {
      closeModal();
    }
    
    if (e.target.hasAttribute('data-modal-backdrop')) {
      closeModal();
    }
  });
}

function showProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const modal = $('[data-target="product-modal"]');
  if (!modal) return;
  
  modal.innerHTML = `
    <div class="fixed inset-0 z-40 flex items-center justify-center bg-black/40 p-3" data-modal-backdrop>
      <div class="w-full max-w-xl rounded-2xl bg-white p-4 sm:p-6 shadow-xl">
        <div class="aspect-video w-full overflow-hidden rounded-xl mb-4">
          <img src="${product.image}" alt="${product.name}" class="h-full w-full object-cover">
        </div>
        <h3 class="font-serif text-xl sm:text-2xl mb-2 text-brandDark">
          ${product.name}
        </h3>
        <p class="text-sm sm:text-base text-brandDark/70 mb-4">
          ${product.description}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <select class="w-full rounded-xl border border-brand/30 p-2 focus:outline-none focus:ring-2 focus:ring-brand/40 text-sm">
            <option>Format: S</option>
            <option>M</option>
            <option>L</option>
          </select>
          <select class="w-full rounded-xl border border-brand/30 p-2 focus:outline-none focus:ring-2 focus:ring-brand/40 text-sm">
            <option>Saveur: Noir</option>
            <option>Lait</option>
            <option>Blanc</option>
          </select>
        </div>

        <div class="flex flex-col sm:flex-row gap-3">
          <button class="flex-1 rounded-xl border border-brand/30 px-4 py-2 hover:shadow-[0_0_12px_rgba(179,118,81,0.4)] transition">
            Personnaliser
          </button>
          <button data-action="order-product" data-product-id="${product.id}" 
                  class="flex-1 rounded-xl bg-brand text-white px-4 py-2 hover:shadow-[0_0_18px_rgba(179,118,81,0.6)] transition">
            Commander
          </button>
        </div>
      </div>
    </div>
  `;
  
  modal.style.display = 'block';
}

function closeModal() {
  const modal = $('[data-target="product-modal"]');
  if (modal) {
    modal.style.display = 'none';
  }
}

// Scroll to top
function setupScrollToTop() {
  const scrollButton = $('[data-target="scroll-top"]');
  if (!scrollButton) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  });
  
  scrollButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// WhatsApp button
function setupWhatsAppButton() {
  const whatsappButton = $('[data-target="whatsapp-button"]');
  if (whatsappButton) {
    whatsappButton.addEventListener('click', () => {
      window.open('https://wa.me/212530562079', '_blank');
    });
  }
}

// Formulaires
function setupForms() {
  const forms = $$('form[data-action="submit-form"]');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      handleFormSubmit(form);
    });
  });
}

function handleFormSubmit(form) {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  
  // Simulation d'envoi (remplacer par vraie logique)
  console.log('Form submitted:', data);
  
  // Afficher message de succès
  showNotification('Message envoyé avec succès !', 'success');
  
  // Reset form
  form.reset();
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
    type === 'success' ? 'bg-green-500' : 'bg-blue-500'
  } text-white`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}
