# 🚀 EmailJS Complete Setup Guide - Step by Step

## What is EmailJS?

EmailJS is a service that lets you send emails directly from your website's contact form **without needing a backend server**. It's free for up to 200 emails per month.

---

## 📋 What You'll Get

After this setup, you'll have **3 important IDs**:

1. **Service ID** - Connects to your Gmail account
2. **Template ID** - Defines how your email looks
3. **Public Key** - Allows your website to use EmailJS

---

## 🎯 Step-by-Step Setup

### Step 1: Create EmailJS Account

1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up"** (top right corner)
3. Fill in:
   - Your name: Nilanjan Nayak
   - Email: nilanjannayak665@gmail.com
   - Password: (create a strong password)
4. Click **"Sign Up"**
5. Check your email and **verify your account**

---

### Step 2: Create Email Service (Get Service ID)

After logging in:

1. Click **"Email Services"** in the left sidebar
2. Click **"Add New Service"** button
3. Choose **"Gmail"** from the list
4. You'll see a popup:
   - Click **"Connect Account"**
   - Sign in with: **nilanjannayak665@gmail.com**
   - Allow EmailJS to access your Gmail
5. After connecting, you'll see:
   - **Service ID**: `service_xxxxxxx` ← **COPY THIS!**
   - Service Name: Gmail (or whatever you named it)
6. Click **"Create Service"**

**✅ You now have your SERVICE ID!**

Example: `service_abc1234`

---

### Step 3: Create Email Template (Get Template ID)

This is what defines how your emails will look.

1. Click **"Email Templates"** in the left sidebar
2. Click **"Create New Template"** button
3. You'll see a template editor with two sections:

#### **Template Settings:**
- Template Name: `Contact Form` (you can name it anything)

#### **Email Content:**

Replace the default content with this:

**Subject Line:**
```
New Contact Form Message: {{subject}}
```

**Email Body:**
```
Hello Nilanjan,

You have received a new message from your portfolio contact form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FROM: {{from_name}}
EMAIL: {{from_email}}
SUBJECT: {{subject}}

MESSAGE:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This message was sent from your portfolio website contact form.
Sent on: {{reply_to}}

To reply, simply respond to this email.
```

**To Email:**
```
nilanjannayak665@gmail.com
```

**From Name:**
```
{{from_name}}
```

**From Email:**
```
{{from_email}}
```

**Reply To:**
```
{{from_email}}
```

4. Click **"Save"** button
5. You'll see your template with:
   - **Template ID**: `template_xxxxxxx` ← **COPY THIS!**

**✅ You now have your TEMPLATE ID!**

Example: `template_xyz5678`

---

### Step 4: Get Your Public Key

1. Click **"Account"** in the left sidebar
2. Click **"General"** tab
3. Scroll down to **"API Keys"** section
4. You'll see:
   - **Public Key**: `xxxxxxxxxxxxxxxx` ← **COPY THIS!**

**✅ You now have your PUBLIC KEY!**

Example: `abcd1234efgh5678`

---

## 🔑 What Are These IDs?

### 1. **Service ID** (`service_xxxxxxx`)
- **What it is**: Links EmailJS to your Gmail account
- **What it does**: Tells EmailJS which email account to send from
- **Example**: `service_abc1234`

### 2. **Template ID** (`template_xxxxxxx`)
- **What it is**: Defines the format and content of your emails
- **What it does**: Structures how the message appears in your inbox
- **Example**: `template_xyz5678`
- **Contains**: Subject line, email body, sender info, reply-to address

### 3. **Public Key** (`xxxxxxxxxxxxxxxx`)
- **What it is**: Your API key for EmailJS
- **What it does**: Allows your website to authenticate with EmailJS
- **Example**: `abcd1234efgh5678`

---

## 📝 Now Update Your Code

### Option 1: Direct in Code (Quick)

Open `src/components/Contact.tsx` and find lines 33-35:

```typescript
// BEFORE:
const serviceId = 'service_your_id';
const templateId = 'template_your_id';
const publicKey = 'your_public_key';

// AFTER (replace with YOUR actual values):
const serviceId = 'service_abc1234'; // ← Your Service ID
const templateId = 'template_xyz5678'; // ← Your Template ID
const publicKey = 'abcd1234efgh5678'; // ← Your Public Key
```

### Option 2: Environment Variables (Recommended - More Secure)

1. Create a file named `.env.local` in your project root
2. Add this content (replace with YOUR actual values):

```env
VITE_EMAILJS_SERVICE_ID=service_abc1234
VITE_EMAILJS_TEMPLATE_ID=template_xyz5678
VITE_EMAILJS_PUBLIC_KEY=abcd1234efgh5678
```

3. Update `src/components/Contact.tsx` lines 33-35:

```typescript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

4. **IMPORTANT**: Restart your dev server:
   - Stop the current server (Ctrl+C in terminal)
   - Run `npm run dev` again

---

## 🧪 Test Your Setup

1. Go to your website: `http://localhost:5173`
2. Scroll to the Contact section
3. Fill out the form:
   - Name: Test User
   - Email: your-test-email@gmail.com
   - Subject: Test Message
   - Message: This is a test message from my contact form
4. Click **"Send Message"**
5. You should see: **"Message Sent Successfully!"**
6. Check your email: **nilanjannayak665@gmail.com**
7. You should receive the test email!

---

## 📧 What the Email Template Does

The **Template ID** defines the structure of emails you receive. Here's what each part means:

### Template Variables (Dynamic Content)

These are placeholders that get replaced with actual form data:

- `{{from_name}}` → User's name from the form
- `{{from_email}}` → User's email from the form
- `{{subject}}` → Subject from the form
- `{{message}}` → Message from the form
- `{{reply_to}}` → User's email (for replying)

### Example Email You'll Receive:

```
Subject: New Contact Form Message: Project Inquiry

Hello Nilanjan,

You have received a new message from your portfolio contact form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FROM: John Doe
EMAIL: john@example.com
SUBJECT: Project Inquiry

MESSAGE:
Hi Nilanjan, I'd like to discuss a potential project with you.
Can we schedule a call this week?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This message was sent from your portfolio website contact form.
Sent on: john@example.com

To reply, simply respond to this email.
```

---

## 🎨 Customize Your Template (Optional)

You can customize the template to include:

- Company logo
- Different colors
- Additional fields
- Auto-reply to the sender
- CC/BCC to other emails

To edit:
1. Go to EmailJS → Email Templates
2. Click on your template
3. Edit the content
4. Click Save

---

## 🔍 Where to Find Your IDs

### Service ID
- **Location**: EmailJS Dashboard → Email Services
- **Looks like**: `service_abc1234`
- **Found in**: Service list, each service shows its ID

### Template ID
- **Location**: EmailJS Dashboard → Email Templates
- **Looks like**: `template_xyz5678`
- **Found in**: Template list, each template shows its ID

### Public Key
- **Location**: EmailJS Dashboard → Account → General
- **Looks like**: `abcd1234efgh5678`
- **Found in**: API Keys section

---

## 📊 Your EmailJS Dashboard

After setup, you can monitor:

- **Email History**: See all sent emails
- **Usage Stats**: Track how many emails sent this month
- **Success Rate**: See delivery success rate
- **Error Logs**: Debug any issues

---

## 🆘 Troubleshooting

### "Invalid Service ID"
- Double-check you copied the Service ID correctly
- Make sure it starts with `service_`

### "Invalid Template ID"
- Double-check you copied the Template ID correctly
- Make sure it starts with `template_`

### "Invalid Public Key"
- Double-check you copied the Public Key correctly
- It should be a long alphanumeric string

### Emails Not Arriving
- Check your spam folder
- Verify your Gmail is connected in EmailJS
- Check EmailJS dashboard for error logs
- Make sure you verified your EmailJS account

### "Rate Limit Exceeded"
- Free plan: 200 emails/month
- Upgrade to paid plan if needed

---

## 💰 Pricing

**Free Plan** (Perfect for portfolio):
- 200 emails/month
- All features included
- No credit card required

**Paid Plans** (if you need more):
- Starting at $7/month for 1,000 emails
- Higher limits available

---

## ✅ Setup Checklist

- [ ] Created EmailJS account
- [ ] Verified email address
- [ ] Created Gmail service
- [ ] Copied Service ID
- [ ] Created email template
- [ ] Copied Template ID
- [ ] Copied Public Key
- [ ] Updated Contact.tsx with IDs
- [ ] Restarted dev server (if using .env.local)
- [ ] Tested contact form
- [ ] Received test email

---

## 🎯 Quick Reference

**Your EmailJS Credentials:**

```
Service ID:  service_______  (from Email Services)
Template ID: template______  (from Email Templates)
Public Key:  ______________  (from Account → General)
```

**Where to use them:**

File: `src/components/Contact.tsx`
Lines: 33-35

Or in `.env.local`:
```env
VITE_EMAILJS_SERVICE_ID=service_______
VITE_EMAILJS_TEMPLATE_ID=template______
VITE_EMAILJS_PUBLIC_KEY=______________
```

---

## 📞 Need Help?

- **EmailJS Docs**: https://www.emailjs.com/docs/
- **EmailJS Support**: support@emailjs.com
- **My Email**: nilanjannayak665@gmail.com

---

**🎉 You're all set! Your contact form will now send emails directly to your inbox!**

*Last Updated: December 2025*
