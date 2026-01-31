# enable.kids Deployment

## Status: ✅ Live

**Live Site:** https://enable.kids
**Repository:** https://github.com/nithya84/enable-kids

## Architecture

```
enable.kids/                 → Portfolio landing page (Cloudflare Pages)
enable.kids/memory-game/*    → Proxies to CloudFront game
enable.kids/about            → About page
```

## Hosting

- **Cloudflare Pages** - Hosts static portfolio site
- **Cloudflare Workers** - Proxies /memory-game requests to CloudFront
- **DNS** - Managed via Cloudflare nameservers (set up in Gandi)

## Deploy Updates

1. Make changes to HTML/CSS files
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "description"
   git push
   ```
3. Cloudflare Pages auto-deploys from GitHub (takes ~1-2 minutes)

## Adding New Projects

1. Deploy the project to your chosen host (Vercel, CloudFront, etc.)
2. Add proxy route to `_worker.js`
3. Add project card to `index.html`
4. Commit and push

## Infrastructure Reference

| Resource | Value |
|----------|-------|
| Memory Game CloudFront | `d19me0v65pp4hx.cloudfront.net` |
| Memory Game API | `cr03bj6k02.execute-api.us-east-1.amazonaws.com/dev` |
| Email Form | Web3Forms → nithya@enable.kids |
