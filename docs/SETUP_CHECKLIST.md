# ✅ EmailJS Setup Checklist - Follow These Steps

## 🎯 Your Mission: Get 3 IDs from EmailJS

You need to get these 3 IDs:
1. ✅ Service ID (from Gmail service)
2. ✅ Template ID (from email template)
3. ✅ Public Key (from account settings)

---

## 📋 Step-by-Step Instructions

### STEP 1: Create Your Account ⏱️ 2 minutes

1. Click the **"Sign Up Free"** button (top right)
2. Fill in the form:
   - **Name**: Nilanjan Nayak
   - **Email**: nilanjannayak665@gmail.com
   - **Password**: (create a strong password)
3. Click **"Sign Up"**
4. Check your email and click the verification link
5. Log in to EmailJS

✅ **Done? Check this box when complete**

---

### STEP 2: Create Gmail Service (Get Service ID) ⏱️ 3 minutes

1. After logging in, click **"Email Services"** in the left sidebar
2. Click **"Add New Service"** button
3. Select **"Gmail"** from the list
4. Click **"Connect Account"**
5. Sign in with: **nilanjannayak665@gmail.com**
6. Allow EmailJS to access your Gmail
7. You'll see your service created with a **Service ID**

**📝 COPY YOUR SERVICE ID HERE:**
```
Service ID: service_________________
```

Example: `service_abc1234`

✅ **Done? Check this box when complete**

---

### STEP 3: Create Email Template (Get Template ID) ⏱️ 3 minutes

1. Click **"Email Templates"** in the left sidebar
2. Click **"Create New Template"** button
3. You'll see a template editor

**Fill in these fields:**

**Template Name:**
```
Portfolio Contact Form
```

**Subject:**
```
New Contact: {{subject}}
```

**Content (Email Body):**
```
Hello Nilanjan,

You received a new message from your portfolio contact form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FROM: {{from_name}}
EMAIL: {{from_email}}
SUBJECT: {{subject}}

MESSAGE:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This message was sent from your portfolio website.
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
5. You'll see your **Template ID** displayed

**📝 COPY YOUR TEMPLATE ID HERE:**
```
Template ID: template_________________
```

Example: `template_xyz5678`

✅ **Done? Check this box when complete**

---

### STEP 4: Get Your Public Key ⏱️ 1 minute

1. Click **"Account"** in the left sidebar
2. Click **"General"** tab
3. Scroll down to **"API Keys"** section
4. You'll see your **Public Key**

**📝 COPY YOUR PUBLIC KEY HERE:**
```
Public Key: _________________
```

Example: `abcd1234efgh5678`

✅ **Done? Check this box when complete**

---

## 🎉 You Got All 3 IDs!

Now paste them here:

```
Service ID:  service_________________
Template ID: template_________________
Public Key:  _________________
```

---

## 🚀 NEXT: Update Your Code

Once you have all 3 IDs, I'll help you:
1. Create a `.env.local` file with your IDs
2. Update the Contact.tsx component
3. Test the contact form
4. Verify emails are being sent

---

## 💡 Quick Tips

- **Service ID** starts with `service_`
- **Template ID** starts with `template_`
- **Public Key** is a long alphanumeric string
- Keep these IDs safe (don't share publicly)

---

## 🆘 Having Trouble?

**Can't find Email Services?**
- Look in the left sidebar after logging in

**Can't connect Gmail?**
- Make sure you're using: nilanjannayak665@gmail.com
- Allow EmailJS permissions when prompted

**Template editor confusing?**
- Just copy-paste the content I provided above
- The `{{variables}}` are placeholders - don't change them

**Can't find Public Key?**
- Account → General → Scroll down to "API Keys"

---

## 📞 Ready to Continue?

Once you have all 3 IDs, tell me:
"I have my IDs" and paste them, then I'll:
1. Set up your `.env.local` file
2. Update your Contact component
3. Test everything
4. Make sure emails work!

---

**🎯 Current Step: Get your 3 IDs from EmailJS**

**Next Step: I'll configure everything for you!**
