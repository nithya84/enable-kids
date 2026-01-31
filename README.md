# enable.kids

Portfolio site for tools designed for neurodivergent children and their families.

**Live Site:** https://enable.kids

## Projects

- **Memory Game for Special Interests** - Customizable matching game with 20+ themes
- More coming soon...

## Tech Stack

- Static HTML/CSS hosted on Cloudflare Pages
- Cloudflare Workers for routing to memory game on CloudFront
- Web3Forms for email signup

## Local Development

```bash
# Open files directly in browser
open index.html
open about.html
```

Note: The /memory-game proxy won't work locally - it requires Cloudflare infrastructure.

## Deployment

See [ENABLE_KIDS_DEPLOYMENT.md](ENABLE_KIDS_DEPLOYMENT.md) for deployment guide.

Changes pushed to GitHub auto-deploy to Cloudflare Pages.
