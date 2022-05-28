window.addEventListener('load',
  function() {
    [ 1, 2, 3, 4, 5, 6, 7, 8 , 9 ].forEach(element => {
      const newDiv = document.createElement("div");
      const randomColor = `#${Math.floor( Math.random() * 16777215 ).toString(16)}`;
      newDiv.style.backgroundColor = randomColor
      newDiv.style.height = '200px'
      newDiv.style.width  = '200px'
      newDiv.style.display  = 'inline-block'
      newDiv.addEventListener('click', () => {  })
      const anchorTag = document.createElement("a");
      newDiv.appendChild(anchorTag);
      anchorTag.innerHTML = randomColor
      anchorTag.href = `https://www.google.com/search?q=${randomColor}`
      document.body.appendChild(newDiv)
    });
  })
