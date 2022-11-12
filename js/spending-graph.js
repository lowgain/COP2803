"use strict"

function createBarChart(data) {

  let chart = document.createElement("div");

  let height = 0;
  data.forEach(val => height = Math.max(height, val.spending));

  chart.style.position = "relative";
  chart.style.height = (height / 5 + 15) + "px";
  chart.style.borderBottom = "2px solid #111";

  let barPos = 15;
  let barWidth = 50;

  data.forEach(val => {
    let bar = document.createElement("div");
    bar.className = "spending-bar";
    bar.style.position = "absolute";
    bar.style.left = barPos + "px";
    bar.style.width = barWidth + "px";
    bar.style.backgroundColor = val.color;
    bar.style.height = val.spending / 5 + "px";
    bar.style.bottom = "0px";
    bar.style.borderRadius = "5px 5px 0 0";
    bar.style.boxShadow = "2px 2px 5px rgba(0,0,0,0.2), 5px 5px 10px rgba(0,0,0,0.2)";

    let text = document.createElement("div");

    text.className = "graph-desc";
    text.style.position = "absolute";
    text.style.bottom = "15px";
    text.style.left = barPos + (barWidth/4) + "px";
    text.style.width = barWidth + "px";
    text.style.writingMode = "vertical-lr";

    text.innerHTML = val.category;

    chart.appendChild(bar);
    chart.appendChild(text);

    barPos += barWidth + 15;

  });

  return chart;

};

function reset() {
  let msPerFrame = 1;
  let bars = document.getElementsByClassName("spending-bar");
  for (let i=0; i < bars.length; i++) {
    let barHeight = parseInt(bars[i].style.height);
    let intervalID = setInterval(() => {
      if (barHeight > 0) {
        barHeight -= 1;
        bars[i].style.height = barHeight + "px";
      } else {
        clearInterval(intervalID)
      };
    }, msPerFrame);
  };
};

window.onload = () => {

  const expenses = [
    { category: "Food and Dining", spending: 2005.00, color: "red" },
    { category: "Auto and Transport", spending: 1471.31, color: "skyblue" },
    { category: "Shopping", spending: 892.86, color: "green" },
    { category: "Bills and Utilities", spending: 531.60, color: "magenta" },
    { category: "Mortgage", spending: 1646.00, color: "yellow" },
    { category: "Entertainment", spending: 179.52, color: "brown" }
  ];

  let chart = createBarChart(expenses);
  document.body.appendChild(chart);

  document.querySelector("#reset-graph").onclick = reset;
};
