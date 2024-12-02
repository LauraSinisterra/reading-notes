// this is the date for holding pages
let pageNumber = 0

// content for pages

const subject = [
    {copy: "interaction design", quote: "“We’ve come to a stage when computer technology needs to be designed as part of everyday culture, so that it’s beautiful and intriguing, so that it has emotive as well as functional qualities.”", color: "#FF0000", author:"Bill Moggridge", book:"Designing interactions"},
    {copy: "understanding media", quote: "“Any technology gradually creates a totally new human environment. Environments are not passive wrappings but active processes.”", color: "#0E5E37", author:"Marshal McLuhan", book:"Understanding media"},
    {copy: "philosophy of technology", quote: "“To take measure is to interpret. Humans are self-interpreters, but not necessarily in terms of a self-enclosed self reference. They more often take their measurements in relation to other realms of being.”", color: "#063882", author:"Don Ihde", book:"Technology and the lifeworld: from garden to earth"},
    {copy: "diagrams", quote:"“The process of constructing a diagram is as follows: (1) defining a representation for the components; (2) recording the correspondences.”", color: "#5A7579", author:" Jacques Bertin", book:"Semiology of graphics"},
    {copy: "interaction design", quote: "“Good spatial patterns within buildings and towns are mostly created not by architects, but rather by the inhabitants themselves.”", color: "#F15618", author:"Jan Borchers", book:"A patterns approach to interaction design"},
    {copy: "philosophy of technology", quote: "“Postmodern consumers purchase objects less for their materiality than for their ability to express the kind of person they want to be taken as.”", color: "#2c14c5", author:"Peter-Paul Verbeek", book:"What things do"},
    {copy: "diagrams", quote: "“To envision information- and what bright and splendid visions can result—is to work at the intersection of image, word, number, art.”", color: "#5B0E70", author:"Edward Tufte", book:"Envisioning information"},
    {copy: "interaction design", quote: "“A design may communicate its purpose clearly, so that it’s obvious what it is and what we should do with it. But its qualities, its aesthetic qualities particularly, speak to people in a different way. Consciously or not, people read meanings into artifacts.”", color: "#FF0000", author:"Bill Moggridge", book:"Designing interactions"},
    {copy: "diagrams", quote:"“A diagram permits the rapid and precise internal processing of information having three components, but it does not permit introducing the information into a universal system of visual memorization and geographic comparison. It is a closed graphic system, limited solely to the information being processed.”", color: "#5A7579", author:" Jacques Bertin", book:"Semiology of graphics"},
    {copy: "philosophy of technology", quote: "“What is needed is a much more radically demythologized story of the structures and limits of human-technology and of the non-technological possibilities of relation to an environment, or ''world.””", color: "#063882", author:"Don Ihde", book:"Technology and the lifeworld: from garden to earth"},
    {copy: "diagrams", quote: "“Escaping this flatland is the essential task of envisioning information— for all the interesting worlds (physical, biological, imaginary, human) that we seek to understand are inevitably and happily multivariate in nature.”", color: "#5B0E70", author:"Edward Tufte", book:"Envisioning information"},
    {copy: "understanding media", quote: "“In the electric age, when our central nervous system is technologically extended to involve us in the whole of mankind and to incorporate the whole of mankind in us, we necessarily participate, in depth, in the consequences of our every action.”", color: "#0E5E37", author:"Marshal McLuhan", book:"Understanding media"},
    {copy: "philosophy of technology", quote: "“The cultural or, better, cultural-technological forms of life which circumscribe all our empirical human societies are also contextual in terms of holistic gestalts. Virtually all human activities implicate material culture, and this in turn forms the context for our larger perceptions.”", color: "#063882", author:"Don Ihde", book:"Technology and the lifeworld: from garden to earth"},
    {copy: "interaction design", quote: "“If we only design the function of something, not what it also communicates, we risk our design being misinterpreted. Worse, we waste an opportunity to enhance everyday life.”", color: "#FF0000", author:"Bill Moggridge", book:"Designing interactions"},
    {copy: "diagrams", quote: "“We envision information in order to reason about, communicate, document, and preserve that knowledge-activities nearly always carried out on two-dimensional paper and computer screen.”", color: "#5B0E70", author:"Edward Tufte", book:"Envisioning information"},
    {copy: "interaction design", quote: "“To designing for usability, utility, satisfaction, and communicative qualities, we should add a fifth imperative: designing for sociability.", color: "#FF0000", author:"Bill Moggridge", book:"Designing interactions"},
    {copy: "diagrams", quote: "“Standards of excellence for information design are set by high quality maps, with diverse bountiful detail, several layers of close reading combined with an overview, and rigorous data from engineering surveys.”", color: "#5B0E70", author:"Edward Tufte", book:"Envisioning information"},
    {copy: "interaction design", quote: "“When new technologies are born, we tend to think of the new in terms of the familiar. When cinema started, people thought of it as pointing a camera at a theater stage, and divided silent films with “chapter headings” as if they were books. New “languages” eventually emerged that were true to, and fully exploited, the unique qualities of cinema itself—Eisenstein’s language of montage, for instance. But the old analogies never lose their validity: films continue to use the conventions of the theater and the novel. They are just augmented by the new languages.”", color: "#FF0000", author:"Bill Moggridge", book:"Designing interactions"},
    {copy: "interaction design", quote: "“New exploratory, creative, and cooperative systems need to fulfill high user expectations, ideally by having the computer vanish;”", color: "#F15618", author:"Jan Borchers", book:"A patterns approach to interaction design"},
    {copy: "diagrams", quote: "“Display of closely-read data surely requires the skilled craft of good graphic and poster design: typography, object representation, layout, color, production techniques, and visual principles that inform criticism and revision.”", color: "#5B0E70", author:"Edward Tufte", book:"Envisioning information"},
    {copy: "interaction design", quote: "“Human-Computer Interaction (...) has to take into account that the user interface of an interactive computer system is a dynamic environment that will usually change its appearance and behaviour substantially over the course of an interaction.”", color: "#F15618", author:"Jan Borchers", book:"A patterns approach to interaction design"},
    {copy: "interaction design", quote: "“A design pattern is a structured textual and graphical description of a proven solution to a recurring design problem. A pattern language is a hierarchy of design patterns ordered by their scope. High-level patterns address large-scale design issues and reference lower-level patterns to describe their solution.”", color: "#F15618", author:"Jan Borchers", book:"A patterns approach to interaction design"},
]


// pick tags
const nextTag = document.querySelector("footer img.next")
const previousTag = document.querySelector("footer img.prev")
const randomTag = document.querySelector("footer img.random")
const outputTag = document.querySelector("div p.number")
const subjectTag = document.querySelector("section h2.subject")
const quoteTag = document.querySelector("section div.quote p.quote-text")
const circleTag = document.querySelector("section div.circle")
const bodyTag = document.querySelector("body")
const borderTag = document.querySelector("section div.quote")
const footerTag = document.querySelector("footer")
const footerImgTag = document.querySelector("footer img")
const authorTag = document.querySelector("section div.quote span.author")
const bookTag = document.querySelector("section div.quote span.book")

// increase page number
const next = function () {
    pageNumber += 1
    if (pageNumber > subject.length - 1) {
        pageNumber = 0
    }
    updateSection()
}

// reduce page number
const previous = function () {
    pageNumber -= 1
    if (pageNumber < 0 ) {
        pageNumber = subject.length - 1
    }
    updateSection()
}

// select a random page

const random = function () {
    pageNumber = Math.floor(Math.random() * subject.length)

    updateSection()
}

// update sections content and style
const updateSection = function(){
    outputTag.innerHTML = pageNumber
    subjectTag.innerHTML = subject[pageNumber].copy
    quoteTag.innerHTML = subject[pageNumber].quote
    circleTag.style.borderColor = subject[pageNumber].color
    bodyTag.style.color = subject[pageNumber].color
    subjectTag.style.backgroundColor = subject[pageNumber].color
    borderTag.style.borderColor = subject[pageNumber].color
    footerTag.style.borderColor = subject[pageNumber].color
    footerImgTag.style.fill = subject[pageNumber].color
    authorTag.innerHTML = subject[pageNumber].author
    bookTag.innerHTML = subject[pageNumber].book
}

// what happens on click
nextTag.addEventListener("click", function(){
    next()
})
previousTag.addEventListener("click", function(){
    previous()
})
randomTag.addEventListener("click",function(){
    random()
})

// what happens on keyboard tap

document.addEventListener("keyup", function(event){
    console.log(event)

    if (event.key == "ArrowRight"){
        next()
    }
    if (event.key == "ArrowLeft"){
        previous()
    }
})
