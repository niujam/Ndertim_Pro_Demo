# 🏗️ Ndërtim Pro - Premium Construction Website Template

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-EULA-red.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

A professional, modern, and feature-rich website template designed specifically for construction companies, contractors, and building service providers. Built with cutting-edge web technologies and packed with premium features to help your business stand out online.

---

## 📋 Table of Contents

- [Introduction](#introduction)
- [Key Features](#key-features)
- [Live Demo](#live-demo)
- [Technologies Used](#technologies-used)
- [Installation Guide](#installation-guide)
- [Folder Structure](#folder-structure)
- [Customization Guide](#customization-guide)
- [Multi-Language Support](#multi-language-support)
- [Browser Compatibility](#browser-compatibility)
- [License & Usage Rights](#license--usage-rights)
- [Support](#support)
- [Credits](#credits)

---

## 🎯 Introduction

**Ndërtim Pro** is a premium website template specifically crafted for construction companies, renovation services, and building contractors. This template combines modern design aesthetics with powerful functionality to create an engaging online presence that converts visitors into clients.

With a **fully responsive design**, **multi-language support (English/Albanian)**, and **interactive features** like a cost calculator and smooth scroll animations, this template provides everything you need to launch a professional construction website.

### Why Choose Ndërtim Pro?

✅ **Ready to Use** - No coding knowledge required for basic setup  
✅ **Professional Design** - Modern glassmorphism effects and premium UI/UX  
✅ **SEO Optimized** - Clean code structure and semantic HTML  
✅ **Performance Focused** - Lightweight and fast-loading  
✅ **Easy Customization** - Well-documented code with clear variable structure  
✅ **Regular Updates** - Ongoing support and improvements included  

---

## ✨ Key Features

### 🌐 Multi-Language System (EN/SQ)
- **Seamless language switching** with flag icons
- **150+ translation keys** covering all pages
- **localStorage persistence** - remembers user's language choice
- **Easy to extend** - add more languages with simple JSON configuration
- **No page reload required** - instant translation switching

### 🧮 Interactive Cost Calculator
- **Real-time price estimation** for construction projects
- **Multiple service types** (New Construction, Renovation, Gypsum, Painting, Facade)
- **Additional options** (Premium Materials, Express Delivery, Design Consultation)
- **Professional results display** with cost breakdown
- **Fully translatable** - works in all supported languages

### 🎨 Modern Design Elements
- **Glassmorphism effects** on header and components
- **Smooth scroll animations** with Intersection Observer API
- **Parallax hero section** with dynamic overlay
- **Premium card designs** with hover effects
- **Gradient backgrounds** and modern color schemes
- **Custom animated counters** for statistics

### 📱 Fully Responsive
- **Mobile-first approach** with optimized layouts
- **Tablet & desktop optimizations** for all screen sizes
- **Touch-friendly navigation** for mobile devices
- **Collapsible mobile menu** with smooth animations
- **Responsive images** and flexible grids

### 🎭 Premium UI Components
- **Sticky navigation** with glassmorphism effect on scroll
- **Back-to-top button** with smooth scroll
- **Contact form** with Firebase integration ready
- **Service cards** with detailed information
- **Team member profiles** with professional styling
- **Working hours display** with clear formatting
- **Social media integration** with icon links

### ⚡ Performance Optimized
- **Vanilla JavaScript** - no heavy frameworks
- **Optimized CSS** with custom properties
- **Lazy loading ready** for images
- **Minimal HTTP requests** - consolidated resources
- **Clean, semantic HTML5** code
- **Fast page load times** (< 2 seconds)

### 📄 Complete Page Set
1. **Home** - Hero section, services overview, cost calculator, CTA
2. **About Us** - Company history, mission/vision, team, values
3. **Services** - Detailed service descriptions (coming soon placeholder)
4. **Contact** - Contact form, info cards, working hours, map placeholder

---

## 🚀 Live Demo

**[View Live Demo](#)** *(https://niujam.github.io/Ndertim_Pro_Demo/)*

Experience all features in action:
- Switch between English and Albanian
- Test the cost calculator
- View responsive design on different devices
- Interact with smooth animations

---

## 🛠️ Technologies Used

### Core Technologies
- **HTML5** - Semantic markup with proper structure
- **CSS3** - Modern styling with custom properties, flexbox, and grid
- **JavaScript (ES6+)** - Pure vanilla JS with modern syntax

### CSS Features
- **CSS Variables** - Easy customization with `:root` properties
- **Flexbox & Grid** - Modern layout techniques
- **CSS Transitions** - Smooth animations and interactions
- **Media Queries** - Responsive breakpoints
- **Backdrop Filter** - Glassmorphism effects

### JavaScript Features
- **ES6 Modules** - Organized code structure
- **Intersection Observer API** - Scroll animations
- **LocalStorage API** - Language preference storage
- **Fetch API** - Loading translation files
- **Event Delegation** - Efficient event handling

### Third-Party Resources
- **Font Awesome 6.5.1** - Icon library
- **Google Fonts** - Typography (can be customized)
- **Firebase (Optional)** - Contact form backend
- **Flagcdn.com** - Country flag images

---

## 📦 Installation Guide

### Quick Start (5 Minutes)

1. **Extract the ZIP file**
   ```
   ndertim-pro/
   ```

2. **Upload files to your server**
   - Use FTP client (FileZilla, Cyberduck, etc.)
   - Or use your hosting control panel file manager
   - Upload all files to your website's root directory or subdirectory

3. **Configure contact form (Optional)**
   - Open `contact.html`
   - Find line 339: Firebase configuration
   - Replace with your Firebase credentials
   - If not using Firebase, form will work with client-side validation only

4. **Test your website**
   - Open your website URL in a browser
   - Test language switcher (🇦🇱 SQ / 🇬🇧 EN)
   - Try the cost calculator
   - Submit a test contact form
   - Check responsiveness on mobile

### Detailed Installation Steps

#### Step 1: File Upload
Ensure all files maintain their structure:
```
root/
├── index.html
├── about.html
├── contact.html
├── main.js
├── style.css
├── languages.json          ← CRITICAL: Must be in root
├── assets/
│   ├── favicon.png
│   ├── hero-bg.jpg
│   └── about-team.jpg
└── ... (other files)
```

#### Step 2: Firebase Setup (Optional)
If you want contact form submissions to Firebase:

1. Create a Firebase project at [firebase.google.com](https://firebase.google.com)
2. Enable Firestore Database
3. Copy your configuration
4. Paste into `contact.html` at line 337

#### Step 3: Domain Configuration
- Update all absolute URLs if needed
- Check internal links work correctly
- Test all navigation between pages

#### Step 4: Final Checks
- ✅ All pages load correctly
- ✅ Language switcher works
- ✅ Images display properly
- ✅ Calculator functions correctly
- ✅ Contact form submits
- ✅ Mobile menu works
- ✅ All links are functional

---

## 📁 Folder Structure

```
ndertim-pro/
│
├── index.html                 # Homepage
├── about.html                 # About Us page
├── contact.html               # Contact page
├── main.js                    # Main JavaScript (includes i18n module)
├── style.css                  # Main stylesheet
├── languages.json             # Translation file (EN/SQ)
│
├── assets/                    # Media files
│   ├── favicon.png           # Website icon
│   ├── hero-bg.jpg           # Hero section background
│   ├── about-team.jpg        # About page image
│   └── (add your images here)
│
└── documentation/            # Additional docs
    ├── README.md             # This file
    ├── LICENSE.txt           # End-User License Agreement
    ├── INSTALL-GUIDE.pdf     # Detailed installation guide
    └── CUSTOMIZATION.md      # Customization examples
```

### File Descriptions

| File | Description | Size |
|------|-------------|------|
| `index.html` | Homepage with hero, services, calculator | ~17KB |
| `about.html` | Company info, team, values | ~15KB |
| `contact.html` | Contact form and information | ~24KB |
| `main.js` | All JavaScript functionality | ~25KB |
| `style.css` | Complete styling | ~29KB |
| `languages.json` | All translations (150+ keys) | ~29KB |

**Total Package Size:** ~140KB (without images)

---

## 🎨 Customization Guide

### Changing Colors

All colors are defined using CSS variables in the `:root` selector for easy customization.

**Location:** `style.css` - Lines 17-49

```css
:root {
  /* Primary Colors - Change these for your brand */
  --primary-color: #FFD700;           /* Gold */
  --primary-dark: #ccac00;            /* Darker gold */
  --primary-light: #fff4cc;           /* Light gold */
  
  /* Secondary Colors */
  --secondary-color: #1A1A1A;         /* Dark corporate black */
  --secondary-light: #2d2d2d;         /* Lighter black */
  
  /* Your custom colors below */
}
```

#### Quick Color Change Examples

**Example 1: Blue Theme**
```css
:root {
  --primary-color: #007BFF;           /* Blue */
  --primary-dark: #0056b3;            /* Darker blue */
  --primary-light: #cce5ff;           /* Light blue */
}
```

**Example 2: Green Theme**
```css
:root {
  --primary-color: #28a745;           /* Green */
  --primary-dark: #218838;            /* Darker green */
  --primary-light: #d4edda;           /* Light green */
}
```

**Example 3: Orange Theme**
```css
:root {
  --primary-color: #FF6B35;           /* Orange */
  --primary-dark: #cc5529;            /* Darker orange */
  --primary-light: #ffe5dc;           /* Light orange */
}
```

### Changing Company Information

#### 1. Company Name
**Files to update:**
- `index.html`, `about.html`, `contact.html` - Logo in header
- `languages.json` - Update `"site_name"` key for both languages

#### 2. Contact Information
**File:** All HTML pages - Footer section
```html
<!-- Phone -->
<a href="tel:+355691234567">+355 69 123 4567</a>

<!-- Email -->
<a href="mailto:info@ndertimpro.al">info@ndertimpro.al</a>

<!-- Address -->
<span>Tiranë, Shqipëri</span>
```

#### 3. Social Media Links
**File:** All HTML pages - Footer and contact page
```html
<a href="YOUR_FACEBOOK_URL" aria-label="Facebook">...</a>
<a href="YOUR_INSTAGRAM_URL" aria-label="Instagram">...</a>
<a href="YOUR_LINKEDIN_URL" aria-label="LinkedIn">...</a>
```

### Changing Images

#### Hero Background
**File:** `style.css` - Search for `hero-bg.jpg`
```css
.hero {
  background-image: url('assets/your-image.jpg');
}
```

#### Favicon
**Files:** All HTML pages - `<head>` section
```html
<link rel="icon" type="image/png" href="assets/your-favicon.png">
```

#### Team Photos
Replace placeholder images in `assets/` folder with your team photos.

### Customizing the Cost Calculator

**File:** `index.html` - Lines 196-203

```html
<select id="projectType">
  <option value="ndertim" data-price="400">New Construction (€400/m²)</option>
  <!-- Change prices as needed -->
</select>
```

**Don't forget to update `languages.json` with matching translations!**

### Adding More Languages

**File:** `languages.json`

1. Add your language code:
```json
{
  "en": { ... },
  "sq": { ... },
  "de": {
    "nav_home": "Startseite",
    "nav_about": "Über uns",
    ...
  }
}
```

2. Update `main.js` - Line 26:
```javascript
languages: ['en', 'sq', 'de']  // Add your language code
```

3. Add flag in dropdown - `main.js` - Line 130:
```javascript
<div class="language-option" data-lang="de">
  <img src="https://flagcdn.com/w40/de.png" alt="German Flag">
  <span>Deutsch</span>
</div>
```

---

## 🌍 Multi-Language Support

### How It Works

The template includes a powerful, lightweight internationalization (i18n) system:

1. **Translation File** - All text is stored in `languages.json`
2. **Data Attributes** - HTML elements use `data-i18n="key"` attributes
3. **JavaScript Module** - The `i18n` object in `main.js` handles everything
4. **Automatic Detection** - Language preference is saved in browser localStorage

### Supported Languages

- 🇬🇧 **English (EN)** - Complete translation
- 🇦🇱 **Albanian (SQ)** - Complete translation

### Translation Coverage

- ✅ Navigation menu (4 links)
- ✅ Hero section (title, subtitle, buttons)
- ✅ Statistics (3 counters)
- ✅ Service cards (3 services with features)
- ✅ Cost calculator (all labels, options, results)
- ✅ CTA banners
- ✅ Footer (all sections)
- ✅ About page (mission, vision, team, values)
- ✅ Contact page (form, cards, working hours)

**Total:** 150+ translation keys

### Adding Custom Translations

1. Open `languages.json`
2. Add your key to both languages:
```json
{
  "en": {
    "your_custom_key": "Your English Text"
  },
  "sq": {
    "your_custom_key": "Teksti Juaj Shqip"
  }
}
```

3. Add to HTML:
```html
<h2 data-i18n="your_custom_key">Default Text</h2>
```

---

## 🌐 Browser Compatibility

### Fully Supported

| Browser | Minimum Version |
|---------|----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Opera | 76+ |

### Mobile Support

| Platform | Minimum Version |
|----------|----------------|
| iOS Safari | iOS 14+ |
| Chrome Mobile | Android 10+ |
| Samsung Internet | 14+ |

### Features Requiring Modern Browsers

- **Intersection Observer API** - Scroll animations
- **CSS Grid & Flexbox** - Layout
- **CSS Custom Properties** - Theming
- **ES6+ JavaScript** - Modern syntax
- **Backdrop Filter** - Glassmorphism effects

### Graceful Degradation

For older browsers:
- Layout remains functional
- Animations may not work
- Some visual effects disabled
- Core functionality preserved

---

## 📜 License & Usage Rights

### End-User License Agreement (EULA)

This template is sold under a **restrictive End-User License Agreement**. Please read carefully before use.

#### ✅ What You CAN Do:

1. **Use for ONE website/domain** (single license)
2. **Modify and customize** the code for your needs
3. **Use for commercial projects** (your client's website)
4. **Create client websites** if you're a web developer/agency
5. **Combine with other resources** (images, fonts, etc.)

#### ❌ What You CANNOT Do:

1. **❌ RESELL or redistribute** this template (in any form)
2. **❌ Share with others** (friends, colleagues, online)
3. **❌ Upload to code repositories** (GitHub, GitLab, etc.)
4. **❌ Include in "website builder" products**
5. **❌ Use on multiple websites** without additional licenses
6. **❌ Claim as your own creation**
7. **❌ Remove or modify copyright notices**
8. **❌ Create derivative products for resale**

#### 🔒 License Verification

- Each purchase includes a **unique license key**
- License key format: `NP-2026-XXXXX-XXXXX`
- Keep your license key safe for verification purposes
- **Verification ID** is embedded in CSS (Line 2-3)

```css
/* Author: Avni Hasani 
   License: Proprietary - Unauthorized resale is prohibited.
   Verification ID: NP-2026-UNIQUE-ID
*/
```

#### ⚖️ Legal Enforcement

**Unauthorized resale or distribution is illegal and will result in:**

- Immediate license termination
- Legal action under copyright law
- Financial penalties as per EULA agreement
- DMCA takedown notices

We actively monitor for unauthorized copies and take legal action when necessary.

#### 🔄 Extended Licensing

Need to use on multiple websites? Contact us for:

- **Developer License** - Use on up to 10 websites
- **Agency License** - Unlimited client projects
- **White Label License** - Custom branding options

Email: **licensing@ndertimpro.com**

#### 📄 Full License Text

The complete End-User License Agreement (EULA) is included in:
- `LICENSE.txt` (in this package)
- Available at purchase on our website

**By using this template, you agree to all terms and conditions.**

---

## 🆘 Support

### Documentation

- 📖 **README.md** - This file (overview)
- 📘 **INSTALL-GUIDE.pdf** - Step-by-step installation
- 🎨 **CUSTOMIZATION.md** - Detailed customization examples
- 📜 **LICENSE.txt** - Complete EULA terms

### Getting Help

**Support is included with your purchase for 6 months.**

#### What's Covered:
✅ Installation assistance
✅ Bug fixes
✅ Configuration help
✅ Basic customization guidance
✅ Compatibility issues

#### What's NOT Covered:
❌ Custom feature development
❌ Third-party integration
❌ Hosting/server setup
❌ Content creation
❌ SEO optimization

### Contact Support

- **📧 Email:** support@ndertimpro.com
- **⏰ Response Time:** Within 24-48 hours (business days)
- **🌐 Support Portal:** [support.ndertimpro.com](#)
- **📝 Ticket System:** For tracked support requests

### Before Contacting Support

Please provide:
1. Your **license key**
2. **Website URL** where template is installed
3. **Browser and version** you're using
4. **Detailed description** of the issue
5. **Screenshots** if applicable
6. **Console errors** (F12 > Console tab)

### Common Issues & Solutions

#### Issue 1: Language Switcher Not Working
**Solution:** Ensure `languages.json` is in root directory, check browser console for errors.

#### Issue 2: Calculator Not Calculating
**Solution:** Verify JavaScript is enabled, check console for errors, ensure all form fields are present.

#### Issue 3: Images Not Loading
**Solution:** Check file paths, ensure images are in `assets/` folder, verify file extensions.

#### Issue 4: Mobile Menu Not Opening
**Solution:** Clear browser cache, check JavaScript loads correctly, test in different browser.

#### Issue 5: Form Not Submitting
**Solution:** Configure Firebase or implement your own backend, check console for errors.

---

## 🎓 Additional Resources

### Helpful Links

- **HTML5 Documentation:** [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- **CSS3 Reference:** [CSS-Tricks](https://css-tricks.com)
- **JavaScript Guide:** [JavaScript.info](https://javascript.info)
- **Firebase Documentation:** [firebase.google.com/docs](https://firebase.google.com/docs)

### Recommended Tools

- **Code Editors:** VS Code, Sublime Text, Atom
- **FTP Clients:** FileZilla, Cyberduck
- **Image Optimization:** TinyPNG, ImageOptim
- **Testing Tools:** BrowserStack, Chrome DevTools

### Video Tutorials

*(Available to premium buyers)*

- Installation walkthrough
- Customization examples
- Firebase setup guide
- Multi-language configuration

---

## 👏 Credits

### Template Created By
**Ndërtim Pro Development Team**  
Website: [www.ndertimpro.com](#)  
Email: info@ndertimpro.com

### Technologies & Libraries
- **Font Awesome** - Icon library (Free license)
- **Google Fonts** - Typography
- **Firebase** - Optional backend (Google)
- **Flagcdn.com** - Country flags

### Special Thanks
- Our beta testers for valuable feedback
- The web development community
- All our customers for their support

---

## 📊 Version History

### Version 1.0.0 (February 2026)
- 🎉 Initial release
- ✅ Multi-language support (EN/SQ)
- ✅ Cost calculator feature
- ✅ Responsive design
- ✅ Scroll animations
- ✅ Contact form with Firebase
- ✅ Complete documentation

### Upcoming Features
- 🔜 Services page (detailed)
- 🔜 Portfolio/Gallery section
- 🔜 Blog functionality
- 🔜 Advanced SEO features
- 🔜 More language options
- 🔜 Dark mode toggle

---

## 📝 Final Notes

### Before Going Live

- [ ] Update all company information
- [ ] Replace placeholder images
- [ ] Configure contact form
- [ ] Test on multiple devices
- [ ] Verify all links work
- [ ] Check language translations
- [ ] Add your Google Analytics
- [ ] Set up meta tags for SEO
- [ ] Configure SSL certificate
- [ ] Test form submissions

### SEO Recommendations

1. **Update Meta Tags** - Each page's `<head>` section
2. **Add Schema Markup** - For better search results
3. **Optimize Images** - Compress and add alt tags
4. **Create Sitemap** - Submit to Google Search Console
5. **Set up Analytics** - Track visitor behavior

### Performance Tips

1. **Compress Images** - Use WebP format when possible
2. **Enable GZIP** - On your server
3. **Use CDN** - For faster global delivery
4. **Lazy Load Images** - Improve initial load time
5. **Minify CSS/JS** - For production (optional)

---

## 🌟 Thank You!

Thank you for choosing **Ndërtim Pro**! We're confident this template will help you create a stunning website for your construction business.

If you're happy with this template, please consider:
- ⭐ **Leaving a review** on our marketplace
- 📧 **Sharing feedback** to help us improve
- 🔗 **Following us** on social media
- 💡 **Suggesting features** for future updates

### Stay Connected

- 🌐 Website: [https://niujam.github.io/Ndertim_Pro_Demo/](#)
- 📧 Email: avnihasa68@gmail.com
- 💬 Facebook: [@ndertimpro](#)
- 📸 Instagram: [@ndertimpro](#)
- 💼 LinkedIn: [Ndërtim Pro](#)

---

**Built with ❤️ by professionals, for professionals.**

*Last Updated: February 15, 2026*  
*Version: 1.0.0*  
*License: EULA - Single Site License*

---

© 2026 Ndërtim Pro. All Rights Reserved.  
Unauthorized resale or redistribution is strictly prohibited and legally enforceable.
