(function (window, document) {
  // 1.
  const r = document.querySelector("#red");
  const g = document.querySelector("#green");
  const b = document.querySelector("#blue");

  const implementColor = () => {
    console.count("implementColor");
    const rgb = `rgb(${r.value}, ${g.value}, ${b.value})`;
    document.querySelector(
      "#colorDiv"
    ).innerHTML = `<div style="width: 50vw; height: 100px; background-color: ${rgb}">${rgb}</div>`;
  };

  implementColor();

  r.addEventListener("input", implementColor);
  g.addEventListener("input", implementColor);
  b.addEventListener("input", implementColor);

  // 2.
  const text = document.querySelector("#text");
  colorizeTextFunc = () => {
    const innerText = text.innerText;
    const rgb = `rgb(${r.value}, ${g.value}, ${b.value})`;
    const colorizedText = innerText
      .split(" ")
      .map((word) =>
        word.length > 7 ? `<span style="color: ${rgb}">${word}</span>` : word
      )
      .join(" ");
    text.innerHTML = colorizedText;
  };

  r.addEventListener("input", colorizeTextFunc);
  g.addEventListener("input", colorizeTextFunc);
  b.addEventListener("input", colorizeTextFunc);
})(window, document);
