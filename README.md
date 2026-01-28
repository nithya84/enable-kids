# enable.kids Portfolio

This directory contains the landing page for enable.kids, which serves as a portfolio hub for multiple educational games and projects.

## Architecture

```
enable.kids/                 → This portfolio landing page
enable.kids/memory-game/*    → Proxies to CloudFront (d19me0v65pp4hx.cloudfront.net)
enable.kids/future-project/* → Future additions
```

## Files

- **index.html** - Portfolio landing page with project cards
- **styles.css** - Responsive styling with kid-friendly design
- **_redirects** - Cloudflare Pages redirect rules for reverse proxy

## Deployment

### Cloudflare Pages Setup

1. **Connect Repository:**
   - In Cloudflare dashboard, go to Workers & Pages > Pages
   - Click "Create application" > "Connect to Git"
   - Select this repository
   - Set build directory: `portfolio/`
   - No build command needed (static HTML)

2. **Configure Custom Domain:**
   - Add custom domain: `enable.kids`
   - Cloudflare will provide nameservers

3. **Update DNS (Gandi):**
   - Log into Gandi
   - Go to Domain Settings → Nameservers
   - Replace with Cloudflare nameservers
   - Wait for propagation (usually 1-24 hours)

## Reverse Proxy Configuration

The `_redirects` file uses Cloudflare Pages redirect syntax:

```
/memory-game/*  https://d19me0v65pp4hx.cloudfront.net/:splat  200
/memory-game    https://d19me0v65pp4hx.cloudfront.net/        200
```

The `200` status code creates a proxy (rewrite) instead of a redirect, so users stay on the enable.kids URL.

## Adding New Projects

To add a new project:

1. Deploy the project to any hosting (Vercel, CloudFront, Netlify, etc.)
2. Add redirect rule to `_redirects`:
   ```
   /new-project/*  https://your-project-url.com/:splat  200
   ```
3. Add project card to `index.html`:
   ```html
   <a href="/new-project" class="project-card">
       <div class="project-icon">🎮</div>
       <h3>New Project</h3>
       <p>Description of your project</p>
       <span class="project-status">Play Now</span>
   </a>
   ```

## Local Testing

To test locally:

```bash
# Serve the portfolio directory
cd portfolio
python3 -m http.server 8000
# Visit http://localhost:8000
```

Note: The reverse proxy won't work locally - it requires Cloudflare Pages infrastructure.

## Verification

After deployment, verify:
- [ ] Portfolio loads at `https://enable.kids/`
- [ ] Memory game loads at `https://enable.kids/memory-game`
- [ ] Game assets (images, CSS, JS) load correctly
- [ ] Game functionality works
- [ ] Mobile responsive design

## Notes

- The memory game has been updated with `base: '/memory-game/'` in Vite config
- React Router uses `basename="/memory-game"` to handle subdirectory routing
- Redeploy the game with `./deploy.sh dev` after these changes
