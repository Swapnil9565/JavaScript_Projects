let body = document.querySelector("body");
let container = document.querySelector(".container");
let input = document.getElementById("searchInput");
let btn = document.getElementById("btn");

function getNews(){
  let keyword = input.value;
  const URL = `https://newsdata.io/api/1/latest?apikey=pub_51259f561ee0750a733a6dd655608ba31e3fd&q=${keyword}`;
  let getNewsData = async () => {
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);

    let dataSet = data.results;
    dataSet.forEach((result) => {
      let mainDiv = document.createElement("div");
      mainDiv.classList.add("newsContainer");
      container.append(mainDiv);

      let imgDiv = document.createElement("div");
      imgDiv.classList.add("image");
      let img = document.createElement("img");
      let infoDiv = document.createElement("div");
      infoDiv.classList.add("news-info");
      let heading4 = document.createElement("h4");
      let heading1 = document.createElement("h1");
      let paragraph = document.createElement("p");
      let buttonDiv = document.createElement("div");
      buttonDiv.classList.add("btn");
      let button = document.createElement("button");
      let link = document.createElement("a");
      link.textContent = "Read More..";
      button.appendChild(link);
      mainDiv.append(imgDiv);
      mainDiv.append(infoDiv);
      mainDiv.append(buttonDiv);
      buttonDiv.appendChild(button);
      imgDiv.appendChild(img);
      infoDiv.appendChild(heading4);
      infoDiv.appendChild(heading1);
      infoDiv.appendChild(paragraph);

      let newSrc = result.image_url;
      img.src = newSrc;
      let newLink = result.link;
      link.setAttribute("target", "_blank");
      link.href = newLink;

      heading4.textContent = result.country;
      heading4.textContent = heading4.textContent.toUpperCase();
      heading1.textContent = result.title;
      paragraph.textContent = result.description;

      let description = paragraph.textContent;
      let maxWords = 120;
      if (description.length > maxWords) {
        let trimDesc = description.substring(0, maxWords) + "......";
        paragraph.textContent = trimDesc;
      } else {
        paragraph.textContent = description;
      }
    });
  };
  getNewsData();
}
btn.addEventListener("click",getNews);
