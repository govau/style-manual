---
layout: component/page-section
---

<h2 id="section4" class="au-display-xl">
  Create accessible images
</h2>

### General rules

1. Choose relevant and clear images that usefully add to the text content
2. Ensure the images are not culturally insensitive to any audience
3. Ensure there is sufficient contrast between any text and the background in images.
4. Create descriptive alternative text for images
5. Create contextual captions for images that are different from alt-text

### Create alternative text (alt text)

Images must have alt text to describe the information or function of the image.

Alt text appears to the user when:
- images are disabled or fail to load
- screen reader or text-to-speech software is used

### Create captions 

Add ‘Caption: description of the image…’ below the image.

Don’t use the same text in the caption and alt text. Otherwise a person listening to the page hears the same information twice.

If the caption clearly explains the image make the alt text blank (alt="").

In HTML5 use the ```<figcaption>``` tag in the ```<figure>``` element.

### Rules for different image types 

#### Decorative images
If an image is just decoration you should use a null (empty) alt text.

A common way of including decorative images is to add them using the CSS rather than the HTML code.

Never include an informative image with CSS as alt text cannot be applied to it.

<br>
<article class="sm-basic-example">
<h4>Examples</h4>
```alt=""``` (don’t add a space between the quotation marks)
</article>

#### Informative images 

Convey a simple concept or information that can be expressed in a short phrase or sentence.

An informative image needs:
text near the image that references it
short alt text that briefly describes the content (different from the caption)
