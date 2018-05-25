# Choose accessible formats

<p class="componentheader__body abstract">
Plan to create accessible content from the start, whether you’re writing a policy, publishing a news story, making a video or guiding users through a transaction.
</p>

Everyone involved from creation through to publishing is responsible for ensuring accessibility. Senior executives, managers, subject matter experts, online content experts and publishing teams each play a role and should know the risks of not complying.


<nav class="au-inpage-nav-links">
  <h2 class="au-inpage-nav-links__heading">Contents</h2>
  <ul class="au-link-list">
    <li><a href="#section1">Use HTML as the default</a></li>
    <li><a href="#section2">Push back on PDFs</a></li>
    <li><a href="#section3">Create accessible images</a></li>
    <li><a href="#section4">Create accessible videos</a></li>
  </ul>
</nav>

<h2 id="section1" class="au-inpage-nav-section au-display-xl">
  Use HTML as the default
</h2>

HTML is the default format for all government information. 

When choosing formats, adopt the practice of creating a web page in the first instance. 

Web content is usually published within a content management system (CMS) that has inbuilt styles that help content authors to conform with accessibility.

<h2 id="section2" class="au-inpage-nav-section au-display-xl">
  Push back on PDFs
</h2>

When we put the user first, we ask on their behalf if a PDF is really how they need to access the information. 

PDFs are not accessible on mobile devices. People need to use a desktop or laptop to use assistive technologies to read PDFs. 

It’s difficult for many users to access PDFs on smaller screens as they don’t resize and reformat to fit the screen.

### Offer an alternative format to PDF

When there is a strong evidence of a user need to have content available in PDFs, you must first publish the content in HTML. The non-HTML format is published as secondary information. 

If you are relying on PDF as the accessible format, then the document needs a HTML landing page. 

The landing page should contain an overview of the document and outcomes, as relevant. 

Provide a contact (an email address) so users can request the information in a different format.

### Make it clear you’re linking to a PDF file

Be mindful of data costs for users downloading large files (over 1MB). Downloading large files can be difficult in regional and remote places.  

Use the link to tell your users that they are downloading a PDF and how big it is.

<br>
<article class="sm-basic-example">
<h4>Examples</h4>
Sustainable Farming Guide 472KB PDF
<br>
The Sustainable Farming Guide tells you how to …
Email digital@digital.gov.au to ask for this guide in a different format
</article>

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

<br>
<article class="sm-basic-example">
<h4>Example</h4>
<img src="/assets/img/example-do-dont.png"/>
<p>Alternative text is usually not visible; it is included in this example just so you can see what it is.</p>
</article>

#### Diagrams, graphs, charts and other complex images

A complex image needs:
- text near the image that explains why it is there and what it shows or highlights
- short alt text that briefly describes the content and is different from the caption
- text link to a page with a long text description (and possibly the associated data)

Graphs need dots, dashes and patterns, in addition to colour, to show the difference between data.

<br>
<article class="sm-basic-example">
<h4>Example</h4>
<img src="/assets/img/example-2.png"/>
<p>Alternative text is usually not visible; it is included in this example just so you can see what it is.</p>
</article>

#### Long text descriptions for complex images 

A long text description is a full description of a complex image or the table of data used to generate a graph or chart.

Long text helps people who don’t understand graphs or diagrams as well as those who can’t see them.

To write long text imagine you’re describing the essential elements of a complex image in a radio interview or over the phone. Explain the important aspects, not necessarily the detail.

<h2 id="section5" class="au-display-xl">
  Create accessible videos
</h2>

Video is not just difficult for users with visual impairment. Think about:
- hearing impairment
- mobility — for example, restricted keyboard access
- flickering and moving content
- language difficulty
- the user’s environment — for example a noisy location or a workplace where the sound disturbs colleagues

### General rules for creating accessible videos 

#### Create a transcript

All videos must have transcripts for people who don’t want to watch the video, and for search engine indexing. 

Add the HTML transcript to the same page as the video. Or add a link below or beside the video to a page with the transcript.

Include all speech content and the speakers’ names.

If there is only 1 speaker you can leave out their name, unless their identity is crucial to the content.

Write relevant non-verbal information in square brackets.

<br>
<article class="sm-basic-example">
<h4>Example</h4>
‘…to get to the other side [laughing].’
</article>

End the transcript with ‘End of transcript’.

#### Create closed captions 

All videos must have closed captions for people who can’t hear the dialogue and other sounds.

#### Use audio description for important visual-only information

All videos must have an audio description for people who can’t see the video that explains any important visual-only detail. 

Provide audio description for any text displayed in the video.

Use audio description to give context if it is not obvious from the title.

You don’t need audio description for dialogue delivered straight to camera (‘talking heads’).
