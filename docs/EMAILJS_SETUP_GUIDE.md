# EmailJS Configuration Guide

## Setup Instructions

To enable the contact form to send emails to your inbox, follow these steps:

### 1. Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

### 2. Create an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the instructions to connect your Gmail account (nilanjannayak665@gmail.com)
5. Copy the **Service ID** (looks like: `service_xxxxxxx`)

### 3. Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and copy the **Template ID** (looks like: `template_xxxxxxx`)

### 4. Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (looks like: `xxxxxxxxxxxxxxxx`)

### 5. Update the Contact Component

Open `src/components/Contact.tsx` and replace these values around line 33-35:

```typescript
const serviceId = 'service_your_id'; // Replace with your Service ID
const templateId = 'template_your_id'; // Replace with your Template ID
const publicKey = 'your_public_key'; // Replace with your Public Key
```

### 6. Test the Form

1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox (nilanjannayak665@gmail.com)
4. You should receive the message!

## Alternative: Using Environment Variables (Recommended)

For better security, you can use environment variables:

1. Create a `.env.local` file in the root directory
2. Add your credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

3. Update the Contact component to use these variables:

```typescript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

4. Restart your dev server after adding environment variables

## Troubleshooting

- **Emails not sending?** Check your EmailJS dashboard for error logs
- **Rate limit exceeded?** Free plan allows 200 emails/month
- **Gmail blocking?** Make sure you've authorized EmailJS in your Gmail settings
- **CORS errors?** EmailJS handles CORS automatically, but check your service is active

## Email Notification Settings

To receive instant notifications:
1. Enable Gmail notifications on your phone
2. Or set up email forwarding to another address
3. Or check your EmailJS dashboard for message logs

---

**Current Email:** nilanjannayak665@gmail.com
**Status:** Ready to configure
**Monthly Limit:** 200 emails (free tier)
