# Contact Form - Quick Setup

## 🚀 Quick Start (5 Minutes)

### Step 1: Sign up for EmailJS
Visit [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account.

### Step 2: Get Your Credentials
After setting up your service and template (see detailed guide), you'll have:
- Service ID: `service_xxxxxxx`
- Template ID: `template_xxxxxxx`
- Public Key: `xxxxxxxxxxxxxxxx`

### Step 3: Update Contact.tsx
Open `src/components/Contact.tsx` and find lines 33-35:

```typescript
const serviceId = 'service_your_id'; // ← Replace this
const templateId = 'template_your_id'; // ← Replace this
const publicKey = 'your_public_key'; // ← Replace this
```

Replace with your actual values.

### Step 4: Test!
1. Fill out the contact form on your website
2. Click "Send Message"
3. Check your email: **nilanjannayak665@gmail.com**

---

## 📧 Where Messages Are Sent

All contact form submissions will be sent to:
**nilanjannayak665@gmail.com**

This email is configured in:
- `src/components/Contact.tsx` (line 48)
- `src/data/portfolio.ts` (contact data)

---

## 🔧 Alternative: Environment Variables (Recommended)

For better security, create a `.env.local` file:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

Then update Contact.tsx (lines 33-35):

```typescript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

**Important:** Restart your dev server after creating `.env.local`

---

## 📍 Contact Section Location

The contact form appears on:
- **Main Portfolio Page** - Last section before footer
- **Navigation Menu** - "Contact" link
- **Direct URL** - `/#contact`

---

## ✨ Features

✅ Real-time email delivery  
✅ Form validation  
✅ Success/error notifications  
✅ Responsive design  
✅ Premium animations  
✅ Anti-spam protection (EmailJS)  

---

## 🆘 Need Help?

See the detailed guide: `EMAILJS_SETUP_GUIDE.md`

Or contact me directly at: nilanjannayak665@gmail.com
