# One More Chapter

A responsive entertainment gallery featuring twelve books by Lars Kepler: 
the eleven Joona Linna novels and the standalone thriller Playground. 

Built for Work Requirement 3 in PRO2001 - Interactive Frontend. 

The interface and descriptions are in English, while the book titles match the Norwegian editions shown on the covers. 

## Run the app 

You need Node.js and npm installed. 

Clone the repository: 

```bash
git clone https://github.com/mbekkhus/WorkReq3_PRO2001.git
```

Enter the project folder: 

```bash
cd WorkReq3_PRO2001 
```

Install dependencies: 

```bash
npm install 
```

Start the development server: 

```bash
npm run dev 
```

Open the local URL displayed in the terminal. 

## Code checks

Run the linter: 

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build locally after building: 

```bash 
npm run preview
```

## Features 

- Twelve book cards with covers, titles and short descriptions. 
- Series numbers for the Joona Linna books. 
- A separate label for the standalone novel. 
- A button to mark each book as read or unread. 
- A shared counter showing how many books are marked as read. 

Reading status is saved in localStorage and restored when the app opens. The saved choices belong to the current browser and site address. They are not synced between devices. 

## Responsive layout 

The gallery uses React Bootstrap's Container, Row and Col components. 

Each column uses xs={12}, md={6} and lg={4}: 

- Below 768px: one card per row. 
- From 768px: two cards per row. 
- From 992px: three cards per row. 

The row uses g-5 for spacing between cards. 
Custom CSS controls the card appearance and image spacing. 

The cover areas use a 2:3 aspect ratio. 
object-fit: contain keeps the entire cover visible without cropping. 

## Reusable components and props 

BookCard is reused for every book in the gallery. 

Its props are defined in BookCardProps: 

- book: the book's data, typed using the Book interface. 
- isRead: whether the book is marked as read. 
- onToggleRead: the function called when the reading-status button is clicked. 

Book data is stored separately in src/data/books.ts

## Shared state and custom hook 

The useReadingList hook manages an array of IDs for books marked as read.

It returns: 

- readBookIds: the IDs currently marked as read. 
- toggleRead: a function that adds or removes a book ID. 
- readCount: the number of books marked as read. 

App calls the hook once and passes the status and toggle function to each BookCard through props. App also displays the reading counter. 

This gives the cards and counter one shared source of state.
Clicking a card's button updates both its status and the counter. 

## Accessibility 

- Book covers have descriptive alternative text. 
- Reading-status controls use native buttons. 
- aria-pressed communicates each button's selected state. 
- Each button has an accessible label identifying the book and action. 
- Decorative symbols are hidden from screen readers. 
- The reading counter uses aria-live="polite". 
- Book titles use h2 headings below the page's h1. 

## Image and content sources 

Book covers were downloaded on 7 October 2026. 
The table records their source pages. 

Book descriptions are short English paraphrases of the linked book summaries. The covers belong to their respective rights holders and are not included as assets under an open-source licence. 

| Image file (in public/images) | Source page |
| --- | --- |
| hypnotisoren.webp | [Bonnier – Hypnotisøren](https://bonnierforlag.no/products/hypnotisoren) |
| paganinikontrakten.webp | [Bonnier – Paganinikontrakten](https://bonnierforlag.no/products/paganinikontrakten) |
| ildvitnet.webp | [Bonnier – Ildvitnet](https://bonnierforlag.no/products/ildvitnet) |
| sandmannen.webp | [Bonnier – Sandmannen](https://bonnierforlag.no/products/sandmannen-kriminalroman) |
| stalker.webp | [Bonnier – Stalker](https://bonnierforlag.no/products/stalker) |
| kaninjegeren.webp | [Bonnier – Kaninjegeren](https://bonnierforlag.no/products/kaninjegeren-kriminalroman) |
| lazarus.webp | [Bonnier – Lazarus](https://bonnierforlag.no/products/lazarus-kriminalroman) |
| speilmannen.webp | [Bonnier – Speilmannen](https://bonnierforlag.no/products/speilmannen) |
| edderkoppen.webp | [Bonnier – Edderkoppen](https://bonnierforlag.no/products/edderkoppen) |
| sovngjengeren.jpg | [Bonnier – Søvngjengeren](https://bonnierforlag.no/products/sovngjengeren-2) |
| medusa.webp | [Bonnier – Medusa](https://bonnierforlag.no/products/medusa) |
| playground.webp | [Norli – Playground](https://www.norli.no/boker/skjonnlitteratur/krimboker/playground-4) |