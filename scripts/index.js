const cards = [
  {
    name: "Gurka",
    image: "/assets/images/doggo.jpg",
    tags: ["Blommor","Ätbart","Grönska"],
    desc: "Gurka växer snabbt, är enkel att odla och ger mängder med gurkor, bara man är noga med vattning, omplantering, duschning och gödsling.",
    author: "Coolio",
    timeStamp: "2024-04-01"
  },
   {
    name: "Gurka",
    image: "/assets/images/doggo.jpg",
    tags: ["Blommor","Ätbart","Grönska"],
    desc: "Gurka växer snabbt, är enkel att odla och ger mängder med gurkor, bara man är noga med vattning, omplantering, duschning och gödsling.",
    author: "Coolio",
    timeStamp: "2024-04-01"
  },
   {
    name: "Gurka",
    image: "/assets/images/doggo.jpg",
    tags: ["Blommor","Ätbart","Grönska"],
    desc: "Gurka växer snabbt, är enkel att odla och ger mängder med gurkor, bara man är noga med vattning, omplantering, duschning och gödsling.",
    author: "Coolio",
    timeStamp: "2024-04-01"
  },
   {
    name: "Gurka",
    image: "/assets/images/doggo.jpg",
    tags: ["Blommor","Ätbart","Grönska"],
    desc: "Gurka växer snabbt, är enkel att odla och ger mängder med gurkor, bara man är noga med vattning, omplantering, duschning och gödsling.",
    author: "Coolio",
    timeStamp: "2024-04-01"
  },

  
];


const colorMap =  new Map();

colorMap.set("Blommor", "red");
colorMap.set("Ätbart", "darkgreen");
colorMap.set("Grönska", "green");
colorMap.set("Solälskande", "orange");
colorMap.set("Lättodlat", "blue");
colorMap.set("Dekorativ", "purple");
colorMap.set("Färgstark", "pink");
colorMap.set("Tålig", "darkblue");
colorMap.set("Snabbväxande", "grey");
colorMap.set("Luftfuktande", "darkgreen");

//{Blommor:"red", Ätbart: "darkgreen", Grönska: "green", Solälskande: "orange", Lättodlat: "blue", Dekorativ: "purple",Färgstark: "pink", Tålig:"darkblue", Snabbväxande: "grey", Luftfuktande: "darkgreen"}

const cardGrid = document.getElementById("card-grid");

const createCard = (card) => {
  const cardArticle = document.createElement("article");
  const img = document.createElement("img");
  img.src = card.image;

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
  desc.textContent = card.desc;

  cardArticle.appendChild(desc);

  const authorWrapper = document.createElement("div");
  authorWrapper.classList.add("author-wrapper");

  const authorImg = document.createElement("img");
  authorImg.src = "/assets/images/icon-avatar.svg";

  authorWrapper.appendChild(authorImg);

  const authorNameAndTimestamp = document.createElement("div");
  authorNameAndTimestamp.classList.add("author-timestamp")
  const authorName = document.createElement("p");
  authorName.textContent = card.name;
  authorNameAndTimestamp.appendChild(authorName);

  const timeStamp = document.createElement("time");
  timeStamp.textContent = card.timeStamp;
  authorNameAndTimestamp.appendChild(timeStamp);

  authorWrapper.appendChild(authorNameAndTimestamp);

  cardArticle.appendChild(authorWrapper);
  cardGrid.appendChild(cardArticle);

  return card;
};
for (let i = 0; i < 4; i++) {
  createCard(cards[i]);
}
