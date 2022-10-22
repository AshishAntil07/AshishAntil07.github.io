window.onload = e => document.querySelector('.loader').remove();

const textElem = document.querySelector('.intro');

const params = new URL(location.href).searchParams;
const lines = [
  'A tech enthusiast,',
  'Self-taught programmer,',
  'Experienced web developer.'
]
const timePerChar = 100;
const rest = 1000;

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

document.querySelector('.content').innerHTML += `Hey! I'm Ashish, a ${new Date().getFullYear() - 2008} year old fam. I'm currently studying at <a href='https://tikarammodelschool.com' target='_blank'>Tika Ram Model School</a>, based in Sonepat, Haryana. I started coding in 6th standard, and fell in love with it the next year. I love to build stuff on the web. I have acquired great skills in web development with my ${new Date().getFullYear() - 2019} years of experience in coding. I am also a good sportsman. I've got a few awards from my school, including silver medal in 'Interclass Chess Competition' in 2018, a gold medal in 'Interclass Chess Competition' in 2019, 'Best Boy of the Year Award' in 2019, etc.<br>&nbsp;&nbsp;&nbsp;&nbsp;I've also made a number of projects that you may visit on <a href='https://github.com/AshishAntil07' target='_blank'>Github</a>, and <a href='https://codepen.io/AshishAntil07'>CodePen</a>.<br><br><b style='font-weight: 500;'>Looking for how to get in touch?</b> Here's the email: <a href='mailto:ashishantil248@gmail.com'>ashishantil248@gmail.com</a>`;