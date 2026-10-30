const inventory = [
  { id: 'idle-rice', name: 'Idle Rice', category: 'Rice & Grains', unit: 'bag', stock: 16, icon: '🍚' },
  { id: 'urad-dhall-gota', name: 'Urad Dhall Gota', category: 'Dals & Pulses', unit: 'item', stock: 10, icon: '🫘' },
  { id: 'toor-dhal', name: 'Toor Dhal', category: 'Dals & Pulses', unit: 'item', stock: 10, icon: '🫘' },
  { id: 'groundnut-oil', name: 'Ground Nut Oil (1 litre)', category: 'Pantry Staples', unit: 'bottle', stock: 3, icon: '🫗' },
  { id: 'barnyard-millet-noodles', name: 'Barnyard Millet Noodles', category: 'Noodles & Pastha', unit: 'box', stock: 6, icon: '🍜' },
  { id: 'little-millet-noodles', name: 'Little Millet Noodles', category: 'Noodles & Pastha', unit: 'box', stock: 5, icon: '🍜' },
  { id: 'red-rice-pastha', name: 'Red Rice Pastha', category: 'Noodles & Pastha', unit: 'box', stock: 5, icon: '🍝' },
  { id: 'foxtail-millet-noodles', name: 'Foxtail Millet Noodles', category: 'Noodles & Pastha', unit: 'box', stock: 4, icon: '🍜' },
  { id: 'little-millet-pastha', name: 'Little Millet Pastha', category: 'Noodles & Pastha', unit: 'box', stock: 4, icon: '🍝' },
  { id: 'black-rice-pastha', name: 'Black Rice Pastha', category: 'Noodles & Pastha', unit: 'box', stock: 4, icon: '🍝' },
  { id: 'kodo-millet-pastha', name: 'Kodo Millet Pastha', category: 'Noodles & Pastha', unit: 'box', stock: 4, icon: '🍝' },
  { id: 'kodo-millet-noodles', name: 'Kodo Millet Noodles', category: 'Noodles & Pastha', unit: 'box', stock: 4, icon: '🍜' },
  { id: 'mapilaisamba-rice-pastha', name: 'Mapilaisamba Rice Pastha', category: 'Noodles & Pastha', unit: 'box', stock: 6, icon: '🍝' },
  { id: 'red-rice-noodles', name: 'Red Rice Noodles', category: 'Noodles & Pastha', unit: 'box', stock: 3, icon: '🍜' },
  { id: 'foxtail-millet-pastha', name: 'Foxtail Millet Pastha', category: 'Noodles & Pastha', unit: 'box', stock: 2, icon: '🍝' },
  { id: 'barnyard-millet-pastha', name: 'Barnyard Millet Pastha', category: 'Noodles & Pastha', unit: 'box', stock: 2, icon: '🍝' },
  { id: 'black-rice-noodles', name: 'Black Rice Noodles', category: 'Noodles & Pastha', unit: 'box', stock: 2, icon: '🍜' },
  { id: 'mapilaisamba-rice-noodles', name: 'Mapilaisamba Rice Noodles', category: 'Noodles & Pastha', unit: 'box', stock: 1, icon: '🍜' },
  { id: 'seeraga-samba-rice', name: 'Seeraga Samba Rice', category: 'Rice & Grains', unit: 'item', stock: 8, icon: '🍚' },
  { id: 'sambar-rava', name: 'Sambar Rava', category: 'Rice & Grains', unit: 'item', stock: 9, icon: '🌾' },
  { id: 'anusham-pearl-millet', name: 'Anusham Pearl Millet', category: 'Rice & Grains', unit: 'box', stock: 4, icon: '🌾' },
  { id: 'msm-angadi-kodo-millet', name: 'MSM Angadi Kodo Millet', category: 'Rice & Grains', unit: 'box', stock: 2, icon: '🌾' },
  { id: 'mettur-chana-dal', name: 'Mettur Chana Dal', category: 'Dals & Pulses', unit: 'box', stock: 1, icon: '🫘' },
  { id: 'tenali-moong-dal', name: 'Tenali Moong Dal', category: 'Dals & Pulses', unit: 'box', stock: 1, icon: '🫘' },
  { id: 'ramnad-urad-dal', name: 'Ramnad Urad Dal', category: 'Dals & Pulses', unit: 'box', stock: 2, icon: '🫘' },
  { id: 'mayavaram-thooyamalli-rice', name: 'Mayavaram Thooyamalli Rice', category: 'Rice & Grains', unit: 'box', stock: 1, icon: '🍚' },
  { id: 'msm-angadi-mappilai-samba-rice', name: 'MSM Angadi Mappilai Samba Rice', category: 'Rice & Grains', unit: 'box', stock: 1, icon: '🍚' },
  { id: 'bobbarlu-cow-peas', name: 'Bobbarlu Cow Peas', category: 'Dals & Pulses', unit: 'box', stock: 1, icon: '🫘' },
  { id: 'msm-angadi-mappillaisamba-rice', name: 'MSM Angadi Mappillaisamba Rice', category: 'Rice & Grains', unit: 'box', stock: 4, icon: '🍚' },
  { id: 'msm-angadi-keruppu-kavuni-rice', name: 'MSM Angadi Keruppu Kavuni Rice', category: 'Rice & Grains', unit: 'box', stock: 3, icon: '🍚' },
  { id: 'tenali-toor-dal', name: 'Tenali Toor Dal', category: 'Dals & Pulses', unit: 'box', stock: 3, icon: '🫘' },
  { id: 'msm-angadi-karuppukavuni-black-rice', name: 'MSM Angadi Karuppukavuni Black Rice', category: 'Rice & Grains', unit: 'box', stock: 2, icon: '🍚' },
  { id: 'krishnagiri-finger-millet', name: 'Krishnagiri Finger Millet', category: 'Rice & Grains', unit: 'box', stock: 1, icon: '🌾' },
  { id: 'fried-gram', name: 'Fried Gram', category: 'Dals & Pulses', unit: 'box', stock: 2, icon: '🫘' },
  { id: 'palakara-raw-rice', name: 'Palakara Raw Rice', category: 'Rice & Grains', unit: 'bag', stock: 2, icon: '🍚' },
  { id: 'murugu-flour', name: 'Murugu Flour', category: 'Flours & Sweeteners', unit: 'pack', stock: 3, icon: '🥣' },
  { id: 'idiyappam-flour', name: 'Idiyappam Flour', category: 'Flours & Sweeteners', unit: 'pack', stock: 3, icon: '🥣' },
  { id: 'ragi-flour', name: 'Ragi Flour', category: 'Flours & Sweeteners', unit: 'pack', stock: 1, icon: '🥣' },
  { id: 'country-sugar', name: 'Country Sugar', category: 'Flours & Sweeteners', unit: 'box', stock: 1, icon: '🍯' },
  { id: 'palm-jaggery-powder', name: 'Palm Jaggery Powder', category: 'Flours & Sweeteners', unit: 'pack', stock: 3, icon: '🍯' },
];

// Set this to the shop's digits-only international WhatsApp number when available.
// Leave it blank to let customers choose a WhatsApp recipient after tapping Share.
const SHOP_WHATSAPP_NUMBER = '';
const CART_STORAGE_KEY = 'field-fork-cart-v1';
const categoryNames = ['All items', ...new Set(inventory.map((product) => product.category))];
const categoryColors = {
  'Rice & Grains': 'grain',
  'Dals & Pulses': 'dal',
  'Noodles & Pastha': 'noodles',
  'Flours & Sweeteners': 'flour',
  'Pantry Staples': 'pantry',
};

function loadCart() {
  try {
    const stored = JSON.parse(sessionStorage.getItem(CART_STORAGE_KEY) || '{}');
    if (!stored || typeof stored !== 'object' || Array.isArray(stored)) return {};
    return Object.fromEntries(
      Object.entries(stored)
        .filter(([id, quantity]) => inventory.some((product) => product.id === id) && Number.isInteger(quantity) && quantity > 0)
        .map(([id, quantity]) => [id, Math.min(quantity, inventory.find((product) => product.id === id).stock)]),
    );
  } catch {
    return {};
  }
}

let cart = loadCart();
let selectedCategory = 'All items';
let activeToastTimer;
let lastFocusedElement;

const elements = {
  categories: document.querySelector('#categories'),
  products: document.querySelector('#products'),
  search: document.querySelector('#product-search'),
  noResults: document.querySelector('#no-results'),
  cartCount: document.querySelector('#cart-count'),
  drawerCount: document.querySelector('#drawer-count'),
  drawer: document.querySelector('#cart-drawer'),
  scrim: document.querySelector('#drawer-scrim'),
  cartItems: document.querySelector('#cart-items'),
  emptyCart: document.querySelector('#empty-cart'),
  drawerBottom: document.querySelector('#drawer-bottom'),
  cartSubtotal: document.querySelector('#cart-subtotal'),
  deliveryNote: document.querySelector('#delivery-note'),
  checkoutModal: document.querySelector('#checkout-modal'),
  receiptModal: document.querySelector('#receipt-modal'),
  toast: document.querySelector('#toast'),
};

function saveCart() {
  try {
    sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch {
    showToast('Your browser could not save this basket for the current session.');
  }
}

function totalCartQuantity() {
  return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
}

function pluralUnit(unit, quantity) {
  if (quantity === 1) return unit;
  return unit === 'box' ? 'boxes' : `${unit}s`;
}

function getCartProducts() {
  return inventory.filter((product) => cart[product.id]);
}

function renderCategories() {
  elements.categories.innerHTML = categoryNames.map((category) => {
    const isActive = category === selectedCategory;
    return `<button class="category-button${isActive ? ' active' : ''}" type="button" data-category="${escapeHtml(category)}" aria-pressed="${isActive}">${escapeHtml(category)}</button>`;
  }).join('');
}

function renderProducts() {
  const query = elements.search.value.trim().toLocaleLowerCase();
  const shown = inventory.filter((product) => {
    const matchesCategory = selectedCategory === 'All items' || product.category === selectedCategory;
    const matchesSearch = `${product.name} ${product.category}`.toLocaleLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  elements.products.innerHTML = shown.map((product) => {
    const remaining = product.stock - (cart[product.id] || 0);
    const soldOut = remaining <= 0;
    const stockText = soldOut ? 'In your basket' : `${remaining} ${pluralUnit(product.unit, remaining)} available`;
    return `<article class="product-card">
      <div class="product-image-wrap ${categoryColors[product.category] || 'grain'}">
        <span class="product-illustration" aria-hidden="true">${product.icon}</span>
        <span class="product-badge">${escapeHtml(product.category)}</span>
        <button class="add-button" type="button" data-add="${product.id}" aria-label="Add ${escapeHtml(product.name)} to basket" ${soldOut ? 'disabled' : ''}>${soldOut ? '✓' : '+'}</button>
      </div>
      <div class="product-details">
        <div class="product-topline"><span class="product-name">${escapeHtml(product.name)}</span><span class="product-price">Ask us</span></div>
        <div class="product-meta"><span class="product-origin">${escapeHtml(stockText)}</span><span>Price on request</span></div>
      </div>
    </article>`;
  }).join('');
  elements.noResults.hidden = shown.length > 0;
}

function renderCart() {
  const itemCount = totalCartQuantity();
  const products = getCartProducts();
  elements.cartCount.textContent = itemCount;
  elements.drawerCount.textContent = `(${itemCount})`;
  elements.emptyCart.classList.toggle('show', products.length === 0);
  elements.cartItems.classList.toggle('hidden', products.length === 0);
  elements.drawerBottom.classList.toggle('hidden', products.length === 0);

  elements.cartItems.innerHTML = products.map((product) => `
    <article class="cart-item">
      <div class="cart-illustration ${categoryColors[product.category] || 'grain'}" aria-hidden="true">${product.icon}</div>
      <div>
        <div class="cart-item-name">${escapeHtml(product.name)}</div>
        <div class="cart-item-unit">Price confirmed with the shop</div>
        <div class="quantity-control" aria-label="Quantity for ${escapeHtml(product.name)}">
          <button type="button" data-quantity="${product.id}" data-change="-1" aria-label="Remove one ${escapeHtml(product.name)}">−</button>
          <span>${cart[product.id]}</span>
          <button type="button" data-quantity="${product.id}" data-change="1" aria-label="Add one ${escapeHtml(product.name)}" ${cart[product.id] >= product.stock ? 'disabled' : ''}>+</button>
        </div>
        <button type="button" class="remove-item" data-remove="${product.id}">Remove</button>
      </div>
      <div class="cart-item-price">${product.stock - cart[product.id]} left</div>
    </article>`).join('');

  elements.cartSubtotal.textContent = `${itemCount} ${itemCount === 1 ? 'item' : 'items'}`;
  elements.deliveryNote.textContent = 'Prices and delivery charges are not listed yet. The shop will confirm these when you send your order.';
  renderProducts();
}

function addToCart(id) {
  const product = inventory.find((item) => item.id === id);
  if (!product) return;
  if ((cart[id] || 0) >= product.stock) {
    showToast(`Only ${product.stock} ${product.unit}${product.stock === 1 ? '' : 's'} currently available.`);
    return;
  }
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  renderCart();
  showToast(`${product.name} added to your basket.`);
}

function changeQuantity(id, amount) {
  const product = inventory.find((item) => item.id === id);
  if (!product) return;
  const next = (cart[id] || 0) + amount;
  if (next <= 0) delete cart[id];
  else cart[id] = Math.min(next, product.stock);
  saveCart();
  renderCart();
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add('show');
  window.clearTimeout(activeToastTimer);
  activeToastTimer = window.setTimeout(() => elements.toast.classList.remove('show'), 2600);
}

function openDrawer() {
  elements.drawer.classList.add('open');
  elements.drawer.setAttribute('aria-hidden', 'false');
  elements.scrim.classList.add('open');
  document.body.classList.add('locked');
  document.querySelector('#close-cart').focus();
}

function closeDrawer() {
  elements.drawer.classList.remove('open');
  elements.drawer.setAttribute('aria-hidden', 'true');
  elements.scrim.classList.remove('open');
  if (!document.querySelector('.modal-backdrop.open')) document.body.classList.remove('locked');
  document.querySelector('#open-cart').focus();
}

function openModal(modal) {
  lastFocusedElement = document.activeElement;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('locked');
  modal.querySelector('input, button, a')?.focus();
}

function closeModal(modal) {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  if (!document.querySelector('.modal-backdrop.open') && !elements.drawer.classList.contains('open')) document.body.classList.remove('locked');
  lastFocusedElement?.focus();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]);
}

function makeReceiptText(order) {
  const lines = [
    'FIELD & FORK — GROCERY ORDER',
    `Order: ${order.id}`,
    `Date: ${order.date}`,
    '',
    `Customer: ${order.name}`,
    `Delivery address: ${order.address}`,
    ...(order.phone ? [`Phone: ${order.phone}`] : []),
    '',
    'ITEMS REQUESTED',
    ...order.items.map((item) => `• ${item.name} — ${item.quantity} ${pluralUnit(item.unit, item.quantity)}`),
    '',
    `Total items: ${order.items.reduce((total, item) => total + item.quantity, 0)}`,
    'Product prices and delivery: To be confirmed by the shop',
    '',
    'This is an order request, not a payment receipt. Please confirm availability, prices and delivery.',
  ];
  return lines.join('\n');
}

function renderReceipt(order) {
  const totalItems = order.items.reduce((total, item) => total + item.quantity, 0);
  const itemRows = order.items.map((item) => `<div class="receipt-item"><span>${escapeHtml(item.name)} <small>× ${item.quantity} ${escapeHtml(pluralUnit(item.unit, item.quantity))}</small></span><strong>Price to confirm</strong></div>`).join('');
  document.querySelector('#receipt-body').innerHTML = `
    <div class="receipt-meta"><div>ORDER NUMBER<strong>${escapeHtml(order.id)}</strong></div><div>ORDERED ON<strong>${escapeHtml(order.date)}</strong></div></div>
    <div class="receipt-meta"><div>ORDER FOR<strong>${escapeHtml(order.name)}</strong></div><div>DELIVER TO<strong>${escapeHtml(order.address)}</strong></div></div>
    ${order.phone ? `<div class="receipt-meta"><div>PHONE<strong>${escapeHtml(order.phone)}</strong></div></div>` : ''}
    <div class="receipt-divider"></div>${itemRows}<div class="receipt-divider"></div>
    <div class="receipt-cost"><span>Total items</span><strong>${totalItems}</strong></div>
    <div class="receipt-cost final"><span>Prices &amp; delivery</span><span>To confirm</span></div>`;

  const receiptText = makeReceiptText(order);
  document.querySelector('#copy-receipt').onclick = async () => {
    const status = document.querySelector('#receipt-status');
    try {
      await navigator.clipboard.writeText(receiptText);
      status.textContent = 'Order copied — ready to paste and share.';
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = receiptText;
      textArea.setAttribute('readonly', '');
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.append(textArea);
      textArea.select();
      const copied = document.execCommand('copy');
      textArea.remove();
      status.textContent = copied ? 'Order copied — ready to paste and share.' : 'Copy was blocked. Please use the WhatsApp share button.';
    }
  };
  const whatsappLink = document.querySelector('#whatsapp-link');
  const phoneTarget = SHOP_WHATSAPP_NUMBER.replace(/\D/g, '');
  whatsappLink.href = `https://wa.me/${phoneTarget}?text=${encodeURIComponent(receiptText)}`;
  whatsappLink.onclick = () => { document.querySelector('#receipt-status').textContent = 'Opening WhatsApp with your order details.'; };
}

elements.categories.addEventListener('click', (event) => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  selectedCategory = button.dataset.category;
  renderCategories();
  renderProducts();
});

elements.products.addEventListener('click', (event) => {
  const button = event.target.closest('[data-add]');
  if (button && !button.disabled) addToCart(button.dataset.add);
});

elements.cartItems.addEventListener('click', (event) => {
  const quantityButton = event.target.closest('[data-quantity]');
  const removeButton = event.target.closest('[data-remove]');
  if (quantityButton && !quantityButton.disabled) changeQuantity(quantityButton.dataset.quantity, Number(quantityButton.dataset.change));
  if (removeButton) changeQuantity(removeButton.dataset.remove, -cart[removeButton.dataset.remove]);
});

elements.search.addEventListener('input', renderProducts);
document.querySelector('#open-cart').addEventListener('click', openDrawer);
document.querySelector('#close-cart').addEventListener('click', closeDrawer);
elements.scrim.addEventListener('click', closeDrawer);
document.querySelector('#keep-shopping').addEventListener('click', () => {
  closeDrawer();
  document.querySelector('#shop').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('#checkout-button').addEventListener('click', () => {
  closeDrawer();
  openModal(elements.checkoutModal);
});

document.querySelector('#checkout-form').addEventListener('submit', (event) => {
  event.preventDefault();
  if (!getCartProducts().length) {
    closeModal(elements.checkoutModal);
    showToast('Add something to your basket first.');
    return;
  }
  const formData = new FormData(event.currentTarget);
  const now = new Date();
  const localOrderDate = [
    String(now.getFullYear()).slice(-2),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
  ].join('');
  const order = {
    id: `FF-${localOrderDate}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`,
    date: new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium', timeStyle: 'short' }).format(now),
    name: String(formData.get('name') || '').trim(),
    address: String(formData.get('address') || '').trim(),
    phone: String(formData.get('phone') || '').trim(),
    items: getCartProducts().map((product) => ({ ...product, quantity: cart[product.id] })),
  };
  if (!order.name || !order.address) return;
  renderReceipt(order);
  cart = {};
  saveCart();
  renderCart();
  event.currentTarget.reset();
  closeModal(elements.checkoutModal);
  openModal(elements.receiptModal);
});

document.querySelectorAll('[data-close-modal]').forEach((button) => {
  button.addEventListener('click', () => closeModal(button.closest('.modal-backdrop')));
});

document.querySelectorAll('.modal-backdrop').forEach((modal) => {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal(modal);
  });
});

document.querySelector('#done-button').addEventListener('click', () => closeModal(elements.receiptModal));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    const openModalElement = document.querySelector('.modal-backdrop.open');
    if (openModalElement) closeModal(openModalElement);
    else if (elements.drawer.classList.contains('open')) closeDrawer();
  }
});

renderCategories();
renderCart();
