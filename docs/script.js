window.onload = e => document.querySelector('.loader').remove();

const textElem = document.querySelector('.intro');

const lines = [
  'A tech enthusiast,',
  'Self-taught programmer,',
  'Experienced web developer.'
]
const timePerChar = 100;
const rest = 1000;

// Taken from https://github.com/AshishAntil07/TypingText

let j=0;
function lineTyper(line){
  line = lines[j].trim()
  const charInterval = setInterval(() => {
    if(!line[0]){
     clearInterval(charInterval)
     setTimeout(e => {
        const delInterval = setInterval(() => {
          textElem.innerHTML = textElem.innerHTML.slice(0, textElem.innerHTML.length-1);
          if(textElem.innerHTML === ''){
            clearInterval(delInterval);
            if(!(lines[++j])){
              j=0;
              setTimeout(e=>lineTyper(lines[j]), rest)
            }else{
              lineTyper(lines[j]);
            }
          }
        }, 20)
      }, rest);
    }else{
      textElem.innerHTML += line[0];
      line = line.slice(1, line.length);
    }
  }, timePerChar)
}
lineTyper(lines[j]);

document.querySelector('.content').innerHTML += `
Hey! I'm Ashish, a ${new Date().getFullYear() - 2008} year old fam. I'm currently studying at <a href='https://tikarammodelschool.com' target='_blank'>Tika Ram Model School</a>, based in Sonepat, Haryana. I started coding in 6th standard, and fell in love with it the next year. I love to build stuff on the web. I have acquired great skills in web development with my ${new Date().getFullYear() - 2019} years of experience in coding. I am also a good sportsman. I've got a few awards from my school, including silver medal in 'Interclass Chess Competition' in 2018, a gold medal in 'Interclass Chess Competition' in 2019, 'Best Boy of the Year Award' in 2019, etc.<br>&nbsp;&nbsp;&nbsp;&nbsp;I've also made a number of projects that you may visit on <a href='https://github.com/AshishAntil07' target='_blank'>Github</a>, and <a href='https://codepen.io/AshishAntil07'>CodePen</a>. A few of them are listed <a href='#projects'>below</a>...<br><br><span highlight>Looking for how to get in touch?</span><br> Here's the email: <a href='mailto:ashishantil248@gmail.com'>ashishantil248@gmail.com</a>
`;

document.querySelector('.formContainer').style.height = Number(getComputedStyle(document.querySelector('.formContainer')).height.replace('px', ''))-100+'px';

const form = document.querySelector('#contactForm');

let inputs = [];
form.querySelectorAll('label').forEach((label, index) => {
  label.style.height = getComputedStyle(label).height;
  const currElem = (index===3?form.querySelector('textarea'):form.querySelectorAll('input')[index]);
  inputs.push(currElem)
  currElem.addEventListener('focus', e => {
    label.style.transform = 'translate(5px, calc(50% - 4px))';
    label.style.fontSize = '12px';
    label.style.color = 'green';
    e.target.style.border = '1px solid green';
    e.target.addEventListener('focusout', e => {
      if(e.target.value === ''){
        label.style.transform = 'translate(5px, calc(100% + 2px))';
        label.style.fontSize = 'initial';
      }
      e.target.style.border = '1px solid gray';
      label.style.color = 'gray';
    })
    const inputFunc = e => {
      let booleans = [];
      inputs.forEach(input => booleans.push(input.value !== ''))
      if(!booleans.includes(false)) form.querySelector('button').disabled = false;
    }
    e.target.addEventListener('input', inputFunc);
  })
});

// not actually media queries for iframe

if(window.innerWidth <= 800){
  document.querySelector('iframe').contentWindow.document.documentElement.style.height = document.querySelector('iframe').contentWindow.document.documentElement.style.width = window.innerWidth<=(400+((1/5)*window.innerWidth))?((4/5)*window.innerWidth)+'px':'400px';
}