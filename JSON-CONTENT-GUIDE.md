# JSON Content Management Guide

## Overview

This guide explains how to manage and update website content using the JSON-based content management system. All website content is stored in JSON files within the `src/data/` directory, making it easy to update text, images, links, and other content without touching the code.

## JSON Files Structure

### 1. Global Configuration

#### `site-config.json`
Global website configuration including meta tags, contact info, and social media links.

```json
{
  "icons": {
    "favicon": "URL to favicon",
    "appleTouchIcon": "URL to Apple touch icon",
    "logo": "URL to main logo"
  },
  "meta": {
    "title": "Website Title",
    "description": "Website description",
    "keywords": "SEO keywords",
    "author": "Author name",
    "copyright": "Copyright text",
    "og": {
      "title": "Open Graph title",
      "description": "Open Graph description",
      "image": "Open Graph image URL",
      "url": "Website URL",
      "type": "website"
    },
    "twitter": {
      "card": "Twitter card type",
      "title": "Twitter title",
      "description": "Twitter description",
      "image": "Twitter image URL"
    }
  },
  "contact": {
    "phone": "Phone number",
    "email": "Email address",
    "address": "Physical address",
    "whatsapp": "WhatsApp URL"
  },
  "social": {
    "facebook": "Facebook URL",
    "twitter": "Twitter URL",
    "instagram": "Instagram URL"
  }
}
```

**How to update:**
- **Company Name**: Update in `meta.title`, `meta.author`, `meta.copyright`
- **Contact Info**: Update phone, email, address in `contact` section
- **Social Media**: Update URLs in `social` section
- **Logo/Favicon**: Update URLs in `icons` section

### 2. Page Content

#### `pages.json`
Home page content including hero section, about section, features, and FAQ.

```json
{
  "home": {
    "hero": {
      "slides": [
        {
          "id": 1,
          "title": "Hero slide title",
          "subtitle": "Hero slide subtitle",
          "description": "Hero slide description",
          "image": "Image URL",
          "primaryCta": "Primary button text",
          "secondaryCta": "Secondary button text"
        }
      ]
    },
    "about": {
      "title": "About section title",
      "content": "About section content (paragraphs separated by \\n\\n)",
      "images": ["Image URL 1", "Image URL 2", "Image URL 3"]
    },
    "whyChooseUs": {
      "title": "Why choose us section title",
      "features": [
        {
          "id": 1,
          "icon": "Lucide icon name",
          "title": "Feature title",
          "description": "Feature description"
        }
      ]
    },
    "howItWorks": {
      "title": "How it works section title",
      "steps": [
        {
          "id": 1,
          "title": "Step title",
          "description": "Step description"
        }
      ]
    },
    "faq": {
      "title": "FAQ section title",
      "items": [
        {
          "id": 1,
          "question": "FAQ question",
          "answer": "FAQ answer"
        }
      ]
    }
  }
}
```

**How to update:**
- **Hero Slides**: Add/remove slides, update text and images
- **About Content**: Update title, content paragraphs, and images
- **Features**: Modify features in `whyChooseUs.features`
- **Steps**: Update process steps in `howItWorks.steps`
- **FAQ**: Add/remove FAQ items in `faq.items`

### 3. Services

#### `services.json`
Services offered by the company.

```json
{
  "services": [
    {
      "id": 1,
      "title": "Service title",
      "icon": "Lucide icon name",
      "description": "Service description",
      "image": "Service image URL"
    }
  ]
}
```

**How to update:**
- **Add Service**: Add new object to `services` array with unique `id`
- **Update Service**: Modify existing service properties
- **Remove Service**: Remove service object from array
- **Reorder**: Change array order to reorder services

### 4. Fleet

#### `fleet.json`
Vehicle categories and fleet information.

```json
{
  "categories": [
    {
      "id": 1,
      "title": "Category title",
      "image": "Category image URL",
      "description": "Category description",
      "features": ["Feature 1", "Feature 2", "Feature 3"]
    }
  ]
}
```

**How to update:**
- **Add Category**: Add new object to `categories` array
- **Update Category**: Modify title, image, description, or features
- **Remove Category**: Remove category object from array

### 5. Sightseeing

#### `sightseeing.json`
Mumbai sightseeing places and tourist attractions.

```json
{
  "places": [
    {
      "id": 1,
      "name": "Place name",
      "image": "Place image URL",
      "description": "Place description"
    }
  ]
}
```

**How to update:**
- **Add Place**: Add new object to `places` array
- **Update Place**: Modify name, image, or description
- **Remove Place**: Remove place object from array

### 6. Gallery

#### `gallery.json`
Image gallery data.

```json
{
  "images": [
    {
      "id": 1,
      "src": "Full-size image URL",
      "thumb": "Thumbnail image URL",
      "alt": "Alt text",
      "caption": "Image caption"
    }
  ]
}
```

**How to update:**
- **Add Image**: Add new object to `images` array
- **Update Image**: Modify URLs, alt text, or caption
- **Remove Image**: Remove image object from array

### 7. Testimonials

#### `ratings.json`
Customer testimonials and ratings.

```json
{
  "count": 65656,
  "average": 4.8,
  "items": [
    {
      "id": 1,
      "name": "Customer name",
      "rating": 5,
      "comment": "Customer testimonial"
    }
  ]
}
```

**How to update:**
- **Update Rating Stats**: Modify `count` and `average`
- **Add Testimonial**: Add new object to `items` array
- **Update Testimonial**: Modify name, rating, or comment
- **Remove Testimonial**: Remove testimonial object from array

### 8. Partners

#### `partners.json`
Client and partner logos.

```json
{
  "clients": [
    {
      "id": 1,
      "name": "Client name",
      "logo": "Client logo URL"
    }
  ]
}
```

**How to update:**
- **Add Client**: Add new object to `clients` array
- **Update Client**: Modify name or logo URL
- **Remove Client**: Remove client object from array

### 9. Navigation

#### `navigation.json`
Navigation menu items and footer links.

```json
{
  "mainNav": [
    {
      "id": 1,
      "name": "Menu item name",
      "href": "Menu item link"
    }
  ],
  "footerLinks": {
    "quickLinks": [
      {
        "id": 1,
        "name": "Link name",
        "href": "Link URL"
      }
    ],
    "legalLinks": [
      {
        "id": 1,
        "name": "Legal link name",
        "href": "Legal link URL"
      }
    ]
  }
}
```

**How to update:**
- **Main Navigation**: Modify `mainNav` array
- **Footer Quick Links**: Update `footerLinks.quickLinks` array
- **Legal Links**: Update `footerLinks.legalLinks` array

### 10. Pricing

#### `pricing.json`
Pricing section content and categories.

```json
{
  "pricing": {
    "title": "Pricing section title",
    "subtitle": "Pricing section subtitle",
    "mainTitle": "Main pricing title",
    "mainDescription": "Main pricing description",
    "badge": {
      "text": "Badge text",
      "icon": "Lucide icon name"
    },
    "categories": [
      {
        "id": 1,
        "name": "Category name",
        "description": "Category description",
        "buttonText": "Button text"
      }
    ],
    "includedFeatures": {
      "title": "Features section title",
      "features": [
        {
          "id": 1,
          "text": "Feature text"
        }
      ]
    }
  }
}
```

**How to update:**
- **Section Content**: Update title, subtitle, mainTitle, mainDescription
- **Badge**: Modify badge text and icon
- **Categories**: Update pricing categories array
- **Features**: Modify included features array

### 11. Popular Ride

#### `popular-ride.json`
Popular ride section content and slider settings.

```json
{
  "popularRide": {
    "title": "Section title",
    "description": "Section description",
    "features": [
      {
        "id": 1,
        "text": "Feature text",
        "icon": "check"
      }
    ],
    "sliderSettings": {
      "slidesPerView": 2,
      "spaceBetween": 30,
      "loop": true,
      "autoplay": {
        "delay": 2000,
        "disableOnInteraction": false,
        "pauseOnMouseEnter": true
      },
      "breakpoints": {
        "640": {
          "slidesPerView": 3,
          "spaceBetween": 40
        }
      }
    }
  }
}
```

**How to update:**
- **Section Content**: Update title and description
- **Features**: Modify features array
- **Slider Settings**: Adjust slider configuration

### 12. Footer

#### `footer.json`
Footer section content and configuration.

```json
{
  "footer": {
    "companyDescription": "Company description text",
    "sections": {
      "companyInfo": {
        "title": "Company Info section title"
      },
      "quickLinks": {
        "title": "Quick Links section title"
      },
      "contactInfo": {
        "title": "Contact Info section title"
      },
      "rating": {
        "title": "Rating section title"
      }
    },
    "newsletter": {
      "title": "Newsletter title",
      "placeholder": "Email placeholder text",
      "buttonText": "Subscribe button text"
    },
    "bottomBar": {
      "designer": {
        "name": "Designer name",
        "url": "Designer URL"
      }
    },
    "socialMedia": {
      "youtube": "#"
    }
  }
}
```

**How to update:**
- **Company Description**: Update company description
- **Section Titles**: Modify section titles
- **Newsletter**: Update newsletter text
- **Designer Info**: Modify designer information
- **Social Media**: Add/modify social media links

### 13. Contact

#### `contact.json`
Contact section content and information.

```json
{
  "contact": {
    "section": {
      "title": "Contact section title",
      "description": "Contact section description"
    },
    "info": {
      "title": "Contact info title",
      "items": [
        {
          "id": 1,
          "type": "phone",
          "label": "Phone label",
          "value": "Phone number",
          "icon": "Phone"
        }
      ]
    },
    "quickActions": {
      "title": "Quick actions title",
      "actions": [
        {
          "id": 1,
          "text": "Action text",
          "url": "Action URL",
          "color": "green",
          "icon": "MessageCircle"
        }
      ]
    }
  }
}
```

**How to update:**
- **Section Content**: Update title and description
- **Contact Info**: Modify contact items
- **Quick Actions**: Update action buttons

## Best Practices

### 1. JSON Validation
- Use JSON validators to ensure syntax is correct
- Check for trailing commas
- Ensure proper quoting of strings
- Validate array and object structures

### 2. Image Management
- Use consistent image sizes
- Optimize images for web
- Use descriptive alt text
- Host images on reliable CDN

### 3. Content Updates
- Make small, incremental changes
- Test changes locally before deploying
- Keep backup of original JSON files
- Document changes for future reference

### 4. SEO Optimization
- Include relevant keywords in titles and descriptions
- Use descriptive alt text for images
- Keep meta descriptions under 160 characters
- Update content regularly for freshness

### 5. Performance
- Use appropriate image sizes
- Minimize JSON file sizes
- Avoid deeply nested structures
- Use consistent naming conventions

## Common Updates

### 1. Updating Phone Number
1. Open `site-config.json`
2. Find `"contact"` → `"phone"`
3. Update the phone number
4. Save the file

### 2. Adding New Service
1. Open `services.json`
2. Add new object to `services` array
3. Set unique `id`
4. Fill in title, icon, description, image
5. Save the file

### 3. Updating Hero Slide
1. Open `pages.json`
2. Navigate to `"home"` → `"hero"` → `"slides"`
3. Find the slide by `id`
4. Update title, subtitle, description, or image
5. Save the file

### 4. Adding New Testimonial
1. Open `ratings.json`
2. Add new object to `items` array
3. Set unique `id`
4. Fill in name, rating, comment
5. Update `count` and `average` if needed
6. Save the file

## Troubleshooting

### 1. JSON Parse Errors
- Check for syntax errors
- Validate JSON using online validator
- Ensure proper quoting and escaping
- Check for missing commas or brackets

### 2. Content Not Displaying
- Verify JSON file is properly formatted
- Check if component is importing correct JSON file
- Ensure data structure matches component expectations
- Look for typos in property names

### 3. Images Not Loading
- Verify image URLs are correct
- Check if images exist at specified locations
- Ensure proper image formats
- Verify CDN accessibility

### 4. Navigation Issues
- Check `navigation.json` for correct links
- Verify href attributes are valid
- Ensure all menu items have proper structure
- Check for duplicate IDs

## Support

For additional support:
1. Check this documentation
2. Review existing JSON files for examples
3. Test changes in development environment
4. Contact development team for complex changes

---

**Remember**: Always backup your JSON files before making changes and test thoroughly in a development environment before deploying to production.