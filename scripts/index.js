const cards = [
  {
    name: "Gurka",
    image: "/assets/images/cucumber.jpg",
    tags: ["Blommor","Ätbart","Grönska"],
    desc: "Gurka växer snabbt, är enkel att odla och ger mängder med gurkor, bara man är noga med vattning, omplantering, duschning och gödsling.",
    author: "Coolio",
    timeStamp: "2024-04-01"
  },
   {
    name: "Tomat",
    image: "/assets/images/tomato.jpg",
    tags: ["Solälskande","Lättodlat","Ätbart"],
    desc: "En perfekt grönsak att odla på balkongen eller i trädgården. Ger riklig skörd under sommaren.",
    author: "Anna Odlare",
    timeStamp: "2024-12-05"
  },
   {
    name: "Pelargon",
    image: "/assets/images/geranium.jpg",
    tags: ["Dekorativ","Färgstark","Tålig","Blommor"],
    desc: "En vacker och lättskött blomma som trivs både inne och ute under sommaren.",
    author: "Blomsterkalle",
    timeStamp: "2024-12-03"
  },
   {
    name: "Basilika",
    image: "/assets/images/basil.jpg",
    tags: ["Dekorativ","Färgstark","Tålig"],
    desc: "En fantastisk krydda för pastarätter och sallader. Trivs bäst i ett soligt fönster.",
    author: "Krydd-Malin",
    timeStamp: "2024-12-07"
  },
  {
    name: "Sallad",
    image: "/assets/images/lettuce.jpg",
    tags: ["Snabbväxande","Ätbart","Grönska"],
    desc: "Sallad är en av de enklaste grönsakerna att odla och ger snabba resultat för färska måltider.",
    author: "Grönis",
    timeStamp: "2024-12-06"
  },
  {
    name: "Ormbunke",
    image: "/assets/images/fern.jpg",
    tags: ["Luftfuktande","Grönska","Dekorativ"],
    desc: "En klassisk växt som passar perfekt i badrummet eller på skuggiga platser.",
    author: "Naturvännen",
    timeStamp: "2024-12-08"
  },
];


const colorMap =  new Map();

colorMap.set("Blommor", "#800000");
colorMap.set("Ätbart", "#4c7200ff");
colorMap.set("Grönska", "#007600ff");
colorMap.set("Solälskande", "#774700ff");
colorMap.set("Lättodlat", "#006ab1ff");
colorMap.set("Dekorativ", "#6600ff");
colorMap.set("Färgstark", "#9b27c2ff");
colorMap.set("Tålig", "#0033cc");
colorMap.set("Snabbväxande", "#52527a");
colorMap.set("Luftfuktande", "#003300");

const cardGrid = document.getElementById("card-grid");


/*
FUNCTION TO GENERATE A CARD. TO REDUCE BLOAT IN HTML.
*/

const createCard = (card) => {
  const cardArticle = document.createElement("article");
  const img = document.createElement("img");
  img.classList.add("main-card-image")
  img.src = card.image;
  img.alt =""
  cardArticle.appendChild(img);
  const spanWrapper = document.createElement("div");
  spanWrapper.classList.add("span-wrapper")

  card.tags.forEach(tag => {
    
    const span = document.createElement("span");
    span.textContent = tag;
    span.style.backgroundColor = colorMap.get(tag);
    spanWrapper.appendChild(span);

  });

  cardArticle.appendChild(spanWrapper);

  const h3 = document.createElement("h3");
  h3.textContent = card.name;

  cardArticle.appendChild(h3);

  const desc = document.createElement("p");
  desc.classList.add("card-desc")
  desc.textContent = card.desc;

  cardArticle.appendChild(desc);

  const authorWrapper = document.createElement("div");
  authorWrapper.classList.add("author-wrapper");

  const authorImg = document.createElement("img");
  authorImg.alt="avatar of user"
  authorImg.src = "/assets/images/icon-avatar.svg";

  authorWrapper.appendChild(authorImg);

  const authorNameAndTimestamp = document.createElement("div");
  authorNameAndTimestamp.classList.add("author-timestamp")
  const authorName = document.createElement("p");
  authorName.textContent = card.author;
  authorNameAndTimestamp.appendChild(authorName);

  const timeStamp = document.createElement("time");
  timeStamp.textContent = card.timeStamp;
  authorNameAndTimestamp.appendChild(timeStamp);

  authorWrapper.appendChild(authorNameAndTimestamp);

  cardArticle.appendChild(authorWrapper);
  cardGrid.appendChild(cardArticle);
};


/*
LOOP TO GENERATE ALL CARDS FROM CARDS ARRAY
*/
for (let i = 0; i < 12; i++) {

  // small hack to loop over the array twice.
  let index = i % 6;
  createCard(cards[index]);
}
