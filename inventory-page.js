const inventoryItems = window.GROCERY_INVENTORY || [];
const COUNT_STORAGE_KEY = 'field-fork-stocktake-v1';
const REPORT_STORAGE_KEY = 'field-fork-stocktake-report-v1';
const inventoryState = {
  counts: loadSavedCounts(),
  category: 'All categories',
  report: loadSavedReport(),
};

const inventoryUI = {
  list: document.querySelector('#inventory-list'),
  search: document.querySelector('#inventory-search'),
  category: document.querySelector('#inventory-category'),
  empty: document.querySelector('#inventory-empty'),
  countedProducts: document.querySelector('#counted-products'),
  totalUnits: document.querySelector('#total-units'),
  progress: document.querySelector('#count-progress-number'),
  saveStatus: document.querySelector('#autosave-status'),
  reportSection: document.querySelector('#report-section'),
  reportPreview: document.querySelector('#report-preview'),
  reportMeta: document.querySelector('#report-meta'),
  reportStatus: document.querySelector('#report-status'),
  toast: document.querySelector('#toast'),
};

function loadSavedCounts() {
  try {
    const stored = JSON.parse(sessionStorage.getItem(COUNT_STORAGE_KEY) || '{}');
    if (!stored || typeof stored !== 'object' || Array.isArray(stored)) return {};
    return Object.fromEntries(Object.entries(stored).filter(([id, count]) => (
      inventoryItems.some((product) => product.id === id)
      && Number.isInteger(count)
      && count >= 0
      && count <= 100
    )));
  } catch {
    return {};
  }
}

function loadSavedReport() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(REPORT_STORAGE_KEY) || 'null');
    return saved && typeof saved.text === 'string' ? saved : null;
  } catch {
    return null;
  }
}

function escapeInventoryText(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]);
}

function pluralInventoryUnit(unit, quantity) {
  if (quantity === 1) return unit;
  return unit === 'box' ? 'boxes' : `${unit}s`;
}

function saveCounts() {
  try {
    sessionStorage.setItem(COUNT_STORAGE_KEY, JSON.stringify(inventoryState.counts));
    inventoryUI.saveStatus.textContent = 'Counts saved for this tab session.';
  } catch {
    inventoryUI.saveStatus.textContent = 'Could not save counts in this browser session.';
  }
}

function updateSummary() {
  const counted = Object.keys(inventoryState.counts).length;
  const units = Object.values(inventoryState.counts).reduce((sum, count) => sum + count, 0);
  inventoryUI.countedProducts.textContent = counted;
  inventoryUI.totalUnits.textContent = units;
  inventoryUI.progress.textContent = `${counted} / ${inventoryItems.length}`;
}

function renderCategoryOptions() {
  const categories = ['All categories', ...new Set(inventoryItems.map((product) => product.category))];
  inventoryUI.category.innerHTML = categories.map((category) => (
    `<option value="${escapeInventoryText(category)}">${escapeInventoryText(category)}</option>`
  )).join('');
  inventoryUI.category.value = inventoryState.category;
}

function renderInventoryList() {
  const query = inventoryUI.search.value.trim().toLocaleLowerCase();
  const products = inventoryItems.filter((product) => (
    (inventoryState.category === 'All categories' || product.category === inventoryState.category)
    && `${product.name} ${product.category}`.toLocaleLowerCase().includes(query)
  ));

  inventoryUI.list.innerHTML = products.map((product) => {
    const hasCount = Object.hasOwn(inventoryState.counts, product.id);
    const count = hasCount ? inventoryState.counts[product.id] : '';
    return `<article class="inventory-row${hasCount ? ' is-counted' : ''}">
      <div class="inventory-product"><span class="inventory-product-icon" aria-hidden="true">${product.icon}</span><span><strong>${escapeInventoryText(product.name)}</strong><small>${escapeInventoryText(product.unit)} · max 100</small></span></div>
      <span class="inventory-category">${escapeInventoryText(product.category)}</span>
      <div class="inventory-count-control">
        <span class="visually-hidden" id="count-label-${product.id}">Count for ${escapeInventoryText(product.name)}</span>
        <div class="inventory-stepper">
          <button type="button" data-count-step="-1" data-count-id="${product.id}" aria-label="Decrease ${escapeInventoryText(product.name)} count">−</button>
          <input type="number" min="0" max="100" step="1" inputmode="numeric" placeholder="—" value="${count}" data-count-id="${product.id}" aria-labelledby="count-label-${product.id}" />
          <button type="button" data-count-step="1" data-count-id="${product.id}" aria-label="Increase ${escapeInventoryText(product.name)} count">+</button>
        </div>
        <span class="inventory-count-state">${hasCount ? 'Counted' : 'Enter count'}</span>
      </div>
    </article>`;
  }).join('');
  inventoryUI.empty.hidden = products.length > 0;
}

function markReportStale() {
  if (!inventoryState.report) return;
  inventoryState.report.stale = true;
  try {
    sessionStorage.setItem(REPORT_STORAGE_KEY, JSON.stringify(inventoryState.report));
  } catch {
    // The current page still shows the stale-report warning when storage is unavailable.
  }
  inventoryUI.reportStatus.textContent = 'Counts changed since this report. Generate a fresh report before sharing.';
  inventoryUI.reportSection.classList.add('report-stale');
}

function handleCountInput(event) {
  const input = event.target.closest('[data-count-id]');
  if (!input) return;
  const product = inventoryItems.find((item) => item.id === input.dataset.countId);
  if (!product) return;

  if (input.value === '') {
    delete inventoryState.counts[product.id];
  } else {
    const value = Number(input.value);
    if (!Number.isFinite(value)) return;
    const count = Math.max(0, Math.min(100, Math.floor(value)));
    input.value = count;
    inventoryState.counts[product.id] = count;
  }

  saveCounts();
  updateSummary();
  input.closest('.inventory-row').classList.toggle('is-counted', Object.hasOwn(inventoryState.counts, product.id));
  input.closest('.inventory-count-control').querySelector('.inventory-count-state').textContent = Object.hasOwn(inventoryState.counts, product.id) ? 'Counted' : 'Enter count';
  markReportStale();
}

function handleCountStep(event) {
  const button = event.target.closest('[data-count-step]');
  if (!button) return;
  const input = inventoryUI.list.querySelector(`input[data-count-id="${CSS.escape(button.dataset.countId)}"]`);
  if (!input) return;
  const current = Object.hasOwn(inventoryState.counts, button.dataset.countId)
    ? inventoryState.counts[button.dataset.countId]
    : 0;
  input.value = Math.max(0, Math.min(100, current + Number(button.dataset.countStep)));
  input.dispatchEvent(new Event('input', { bubbles: true }));
  input.focus({ preventScroll: true });
}

function makeInventoryReport() {
  const now = new Date();
  const date = new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium', timeStyle: 'short' }).format(now);
  const countedProducts = inventoryItems.filter((product) => Object.hasOwn(inventoryState.counts, product.id));
  const notCounted = inventoryItems.filter((product) => !Object.hasOwn(inventoryState.counts, product.id));
  const unitTotal = countedProducts.reduce((sum, product) => sum + inventoryState.counts[product.id], 0);
  const lines = [
    'FIELD & FORK — INVENTORY COUNT',
    `Counted: ${date}`,
    `Products counted: ${countedProducts.length} of ${inventoryItems.length}`,
    `Total units counted: ${unitTotal}`,
    '',
  ];

  for (const category of [...new Set(inventoryItems.map((product) => product.category))]) {
    lines.push(category.toUpperCase());
    for (const product of inventoryItems.filter((item) => item.category === category)) {
      const count = inventoryState.counts[product.id];
      lines.push(Object.hasOwn(inventoryState.counts, product.id)
        ? `• ${product.name}: ${count} ${pluralInventoryUnit(product.unit, count)}`
        : `• ${product.name}: NOT COUNTED`);
    }
    lines.push('');
  }

  if (notCounted.length) {
    lines.push(`Still to count: ${notCounted.length} product${notCounted.length === 1 ? '' : 's'}.`);
  } else {
    lines.push('Stocktake complete — all products counted.');
  }

  return { text: lines.join('\n'), date, counted: countedProducts.length, units: unitTotal, stale: false };
}

function displayReport(report) {
  inventoryState.report = report;
  inventoryUI.reportPreview.textContent = report.text;
  inventoryUI.reportMeta.textContent = `${report.counted} of ${inventoryItems.length} products counted · ${report.units} total units · ${report.date}`;
  inventoryUI.reportStatus.textContent = report.stale ? 'Counts changed since this report. Generate a fresh report before sharing.' : '';
  inventoryUI.reportSection.hidden = false;
  inventoryUI.reportSection.classList.toggle('report-stale', Boolean(report.stale));
  const number = String(window.GROCERY_WHATSAPP_NUMBER || '').replace(/\D/g, '');
  document.querySelector('#share-report').href = `https://wa.me/${number}?text=${encodeURIComponent(report.text)}`;
}

function generateAndSaveReport() {
  const report = makeInventoryReport();
  inventoryState.report = report;
  try {
    sessionStorage.setItem(REPORT_STORAGE_KEY, JSON.stringify(report));
    displayReport(report);
    document.querySelector('#report-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
    inventoryUI.reportStatus.textContent = 'Report generated and saved in this tab session.';
  } catch {
    displayReport(report);
    inventoryUI.reportStatus.textContent = 'Report generated, but browser session storage is unavailable.';
  }
}

function clearCounts() {
  inventoryState.counts = {};
  inventoryState.report = null;
  sessionStorage.removeItem(COUNT_STORAGE_KEY);
  sessionStorage.removeItem(REPORT_STORAGE_KEY);
  inventoryUI.reportSection.hidden = true;
  inventoryUI.reportSection.classList.remove('report-stale');
  inventoryUI.saveStatus.textContent = 'Counts cleared for this session.';
  renderInventoryList();
  updateSummary();
}

inventoryUI.list.addEventListener('input', handleCountInput);
inventoryUI.list.addEventListener('change', handleCountInput);
inventoryUI.list.addEventListener('click', handleCountStep);
inventoryUI.search.addEventListener('input', renderInventoryList);
inventoryUI.category.addEventListener('change', () => {
  inventoryState.category = inventoryUI.category.value;
  renderInventoryList();
});
document.querySelector('#generate-report').addEventListener('click', generateAndSaveReport);
document.querySelector('#mobile-generate-report').addEventListener('click', generateAndSaveReport);
document.querySelector('#clear-counts').addEventListener('click', clearCounts);
document.querySelector('#copy-report').addEventListener('click', async () => {
  const status = inventoryUI.reportStatus;
  try {
    await navigator.clipboard.writeText(inventoryState.report.text);
    status.textContent = 'Inventory report copied. You can paste it into a message.';
  } catch {
    const textArea = document.createElement('textarea');
    textArea.value = inventoryState.report.text;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.append(textArea);
    textArea.select();
    const copied = document.execCommand('copy');
    textArea.remove();
    status.textContent = copied ? 'Inventory report copied. You can paste it into a message.' : 'Copy was blocked. Use the WhatsApp share button instead.';
  }
});
document.querySelector('#share-report').addEventListener('click', () => {
  inventoryUI.reportStatus.textContent = 'Opening WhatsApp with your inventory report.';
});

renderCategoryOptions();
renderInventoryList();
updateSummary();
if (inventoryState.report) displayReport(inventoryState.report);
