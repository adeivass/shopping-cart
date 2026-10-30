# Field & Fork grocery storefront

A responsive, no-build grocery storefront for the sample inventory. It includes category filters, search, stock-aware cart controls (up to 100 units per item), a session-storage cart, and a shareable checkout receipt. Mobile shoppers get persistent shortcuts and larger add-to-basket buttons.

The separate `inventory.html` page lets staff count products, auto-saves counts and the latest report in browser `localStorage`, and generates a stocktake report that can be copied or shared through WhatsApp. These inventory records persist across tabs and browser restarts on that device. The shopping cart remains in `sessionStorage`. The shared message contains a versioned inventory data block; paste the complete message into the page's Import panel on another device or browser to restore those counts. Import replaces existing counts after confirmation.

## Run locally

Open `index.html` in a browser, or serve this folder with any static web server. The cart is stored in browser `sessionStorage` and remains available for the current tab session.

## Before taking real orders

- In `app.js`, set `SHOP_WHATSAPP_NUMBER` to the shop's international phone number using digits only (country code included, without `+`); leave it blank to let customers choose a WhatsApp recipient.
- Product prices and delivery fees were not included in the sample inventory, so the storefront intentionally labels prices as “Ask us” and the receipt states that prices and delivery need confirmation. Add the confirmed prices and payment/order process before treating this as a live checkout.
- The demo sets each product's available stock to 100. Update this before launch to match real inventory.
- Review package sizes, product spellings, and the sample shop name against the final catalog.

The checkout produces an order request, not a payment or tax receipt. It can be copied to the clipboard or opened as a pre-filled WhatsApp message.