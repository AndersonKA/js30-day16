const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; //this sets the distance the hover text will move

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if(this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

// setting the color and direction of the hover text
  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 gray,
    ${xWalk * -1}px ${yWalk}px 0 lightblue
    `;
}

hero.addEventListener('mousemove', shadow);
