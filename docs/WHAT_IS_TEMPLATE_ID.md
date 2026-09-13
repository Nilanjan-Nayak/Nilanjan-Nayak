# 📧 EmailJS - Simple Explanation

## What is Template ID?

**Template ID** is like a **blueprint** for your emails. It tells EmailJS:
- What the email subject should be
- How the email body should look
- What information to include
- Where to send the email

Think of it like a **mail merge template** - it has placeholders that get filled with actual data from your contact form.

---

## 🔑 The 3 IDs You Need

```
┌─────────────────────────────────────────────────────────┐
│                    EmailJS Setup                         │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  1️⃣ SERVICE ID (service_abc1234)                        │
│     ↓                                                    │
│     Connects to: nilanjannayak665@gmail.com             │
│     Purpose: Which email account to use                 │
│                                                          │
│  2️⃣ TEMPLATE ID (template_xyz5678)                      │
│     ↓                                                    │
│     Defines: Email format and content                   │
│     Purpose: How the email looks                        │
│                                                          │
│  3️⃣ PUBLIC KEY (abcd1234efgh5678)                       │
│     ↓                                                    │
│     Allows: Your website to use EmailJS                 │
│     Purpose: Authentication                             │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## 📝 What Each ID Does

### 1. Service ID
```
What: Links to your Gmail account
Where: Email Services → Your Gmail Service
Looks like: service_abc1234
Example: service_portfolio_gmail
```

### 2. Template ID (You asked about this!)
```
What: Email format/blueprint
Where: Email Templates → Your Template
Looks like: template_xyz5678
Example: template_contact_form

Contains:
  - Subject: "New Contact: {{subject}}"
  - Body: "From: {{from_name}}, Message: {{message}}"
  - To: nilanjannayak665@gmail.com
```

### 3. Public Key
```
What: Your API key
Where: Account → General → API Keys
Looks like: abcd1234efgh5678
Example: Xj9kL2mP4nQ6rS8t
```

---

## 🎯 How They Work Together

```
User fills contact form
        ↓
Form data: {
  name: "John Doe"
  email: "john@example.com"
  subject: "Project Inquiry"
  message: "I need a website"
}
        ↓
EmailJS uses PUBLIC KEY to authenticate
        ↓
EmailJS uses SERVICE ID to connect to Gmail
        ↓
EmailJS uses TEMPLATE ID to format the email:

Subject: New Contact: Project Inquiry
Body:
  From: John Doe
  Email: john@example.com
  Message: I need a website
        ↓
Email sent to: nilanjannayak665@gmail.com ✅
```

---

## 📧 Template ID - Detailed Example

When you create a template in EmailJS, you define:

### Template Content:
```
Subject: New Contact Form Message: {{subject}}

Hello Nilanjan,

You received a message from: {{from_name}}
Email: {{from_email}}

Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

### What {{variables}} mean:
- `{{from_name}}` = User's name from form
- `{{from_email}}` = User's email from form
- `{{subject}}` = Subject from form
- `{{message}}` = Message from form

### When someone submits the form:
```
Form Input:
  Name: "Sarah Smith"
  Email: "sarah@company.com"
  Subject: "Collaboration Opportunity"
  Message: "Let's work together!"

Email You Receive:
  Subject: New Contact Form Message: Collaboration Opportunity
  
  Hello Nilanjan,
  
  You received a message from: Sarah Smith
  Email: sarah@company.com
  
  Subject: Collaboration Opportunity
  
  Message:
  Let's work together!
  
  ---
  Sent from your portfolio contact form
```

---

## 🚀 Quick Setup Steps

### Step 1: Sign Up
- Go to https://www.emailjs.com/
- Create account with: nilanjannayak665@gmail.com

### Step 2: Create Service (Get Service ID)
- Email Services → Add New Service
- Choose Gmail
- Connect: nilanjannayak665@gmail.com
- Copy Service ID: `service_abc1234`

### Step 3: Create Template (Get Template ID)
- Email Templates → Create New Template
- Add email format (see example above)
- Copy Template ID: `template_xyz5678`

### Step 4: Get Public Key
- Account → General
- Copy Public Key: `abcd1234efgh5678`

### Step 5: Add to Your Code
Open `src/components/Contact.tsx` (lines 33-35):
```typescript
const serviceId = 'service_abc1234'; // Your Service ID
const templateId = 'template_xyz5678'; // Your Template ID
const publicKey = 'abcd1234efgh5678'; // Your Public Key
```

---

## 📍 Where to Find Each ID

### In EmailJS Dashboard:

```
EmailJS Dashboard
├── Email Services
│   └── Gmail Service
│       └── Service ID: service_abc1234 ← HERE
│
├── Email Templates
│   └── Contact Form Template
│       └── Template ID: template_xyz5678 ← HERE
│
└── Account
    └── General
        └── API Keys
            └── Public Key: abcd1234efgh5678 ← HERE
```

---

## 💡 Simple Analogy

Think of EmailJS like sending a letter:

- **Service ID** = Your mailbox (Gmail account)
- **Template ID** = The letter format/template
- **Public Key** = Your signature/authorization

When someone fills your contact form:
1. They write a message (form data)
2. EmailJS uses your **template** to format it nicely
3. EmailJS uses your **service** to send it from Gmail
4. EmailJS uses your **public key** to verify it's really you
5. Email arrives in your inbox!

---

## ✅ What You Need to Do

1. **Go to EmailJS**: https://www.emailjs.com/
2. **Sign up** with: nilanjannayak665@gmail.com
3. **Create Gmail Service** → Get Service ID
4. **Create Email Template** → Get Template ID
5. **Get Public Key** from Account settings
6. **Copy all 3 IDs** to `Contact.tsx`
7. **Test** your contact form!

---

## 📞 Still Confused?

**Template ID** is simply:
- A saved email format in EmailJS
- Like a reusable email template
- Defines what your emails look like
- You create it once, use it forever

**Where to get it:**
1. Log into EmailJS
2. Click "Email Templates"
3. Click "Create New Template"
4. Design your email
5. Save it
6. Copy the Template ID shown

---

**Need more help? See `EMAILJS_COMPLETE_SETUP.md` for detailed step-by-step instructions with screenshots!**
