# ZAYTOON — Online ordering update

## Included changes
- Removed the WhatsApp phone number and all WhatsApp links/buttons from the website pages and scripts.
- Replaced the order call-to-action with an online cart and checkout flow.
- Added a localStorage cart for the single product: one bottle is 500 ml (0.5 liter), EGP 250.
- Checkout reads the cart automatically, updates quantity and total, validates customer fields, and posts the order to the configured Google Apps Script Web App.
- Shipping remains confirmed after the address is received.
- Added original branded SVG illustrations under `images/` and updated the page to use them. These are illustrations, not recovered product photographs.

## Deploy
Upload the extracted files to the existing GitHub repository, preserving the `images/` folder structure. Commit changes; Vercel should deploy automatically.

## Important integration note
The Google Apps Script endpoint is configured in `order.js`. The browser sends a form-encoded `payload` using `no-cors`, so JavaScript cannot read Google's response. A completed fetch does not independently prove that the spreadsheet stored the order. Confirm one test order appears in the ZAYTOON Orders sheet before accepting live orders.
