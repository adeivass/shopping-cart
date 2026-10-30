# Field & Fork grocery storefront

A responsive, no-build grocery storefront for the sample inventory. It includes category filters, search, stock-aware cart controls, a session-storage cart, and a shareable checkout receipt.

## Run locally

Open `index.html` in a browser, or serve this folder with any static web server. The cart is stored in browser `sessionStorage` and remains available for the current tab session.

## Before taking real orders

- In `app.js`, set `SHOP_WHATSAPP_NUMBER` to the shop's international phone number using digits only (country code included, without `+`); leave it blank to let customers choose a WhatsApp recipient.
- Product prices and delivery fees were not included in the sample inventory, so the storefront intentionally labels prices as “Ask us” and the receipt states that prices and delivery need confirmation. Add the confirmed prices and payment/order process before treating this as a live checkout.
- Review package sizes, stock quantities, product spellings, and the sample shop name against the final catalog.

The checkout produces an order request, not a payment or tax receipt. It can be copied to the clipboard or opened as a pre-filled WhatsApp message.