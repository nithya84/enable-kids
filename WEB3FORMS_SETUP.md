# Web3Forms Setup Instructions

Simple 3-step setup to enable the email signup form on enable.kids.

## 1. Get Your Access Key

1. Go to https://web3forms.com/
2. Enter your email: **nithya@enable.kids**
3. Click **"Create Access Key"**
4. Copy the access key (looks like: `a1b2c3d4-5678-90ab-cdef-1234567890ab`)
5. Check your email and click the verification link

## 2. Update index.html

Replace `YOUR_ACCESS_KEY_HERE` in `index.html` with your actual access key:

**Find this line:**
```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
```

**Replace with:**
```html
<input type="hidden" name="access_key" value="a1b2c3d4-5678-90ab-cdef-1234567890ab">
```
(use your actual access key)

## 3. Commit and Push

```bash
cd /Users/nithya/Documents/projects/enable-kids-portfolio
git add index.html
git commit -m "feat: Add Web3Forms access key"
git push
```

## Done!

That's it! Once deployed to Cloudflare Pages:
- Form submissions will be emailed to **nithya@enable.kids**
- Users will see the thank-you page after submitting

## What You'll Receive

Each submission email will include:
- **Name** - User's name
- **Email** - User's email address
- **Roles** - Selected checkboxes (neurodivergent, parent, therapist, other)
- **Message** - Their feedback or questions

## Web3Forms Free Tier

- **250 submissions/month** (free forever)
- Spam filtering with reCAPTCHA
- No ads or branding
- Email notifications
- No dashboard needed - just emails

## Optional: Add reCAPTCHA

To prevent spam, you can add Google reCAPTCHA:

1. Get reCAPTCHA site key from https://www.google.com/recaptcha
2. Add to form:
```html
<input type="hidden" name="recaptcha_site_key" value="YOUR_RECAPTCHA_SITE_KEY">
```

But start without it - Web3Forms has built-in spam protection.

## Troubleshooting

**Not receiving emails?**
- Check spam folder
- Verify your email at web3forms.com
- Check access key is correct in index.html

**Form not redirecting?**
- Make sure thank-you.html is deployed
- Check redirect URL in form matches your domain
