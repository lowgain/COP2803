var banner = [
["index.html", "img/image1.jpg"],
["index.html", "img/image2.jpg"],
["index.html", "img/image3.jpg"],
["index.html", "img/image4.jpg"]
];

function shuffle(list) {
  let i = list.length;

  while (i > 0) {
    let randomNum = Math.floor(Math.random() * i);
    i -= 1;

    let tmp = list[i];
    list[i] = list[randomNum];
    list[randomNum] = tmp;
  };
  return list;
};

shuffle(banner);

document.getElementById('ad-container').innerHTML = '<a href="'+banner[0][0]+'" target="_blank" rel="nofollow"><img src="'+banner[0][1]+'" alt="Banner Ad"></a>';
