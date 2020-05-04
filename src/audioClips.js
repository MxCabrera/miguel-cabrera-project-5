// audio imports 
import walter from './assets/walterWhite1.mp3';
import walter2 from './assets/walter2.mp3';
import walter3 from './assets/walter3.mp3';
import jesse from './assets/jessePinkman2.mp3';
import jesse2 from './assets/jessePinkman3.mp3';
import jesse3 from './assets/jesse3.mp3';
import hank from './assets/Hank.mp3';
import hank2 from './assets/hank2.mp3';
import gus2 from './assets/gus2.mp3';
import gus3 from './assets/gus3.mp3';
import gus4 from './assets/gus4.mp3'
import skyler from './assets/skylarWhite2.mp3';
import skyler2 from './assets/skylarWhite1.mp3';
import walterJr from './assets/walterJr.mp3';
import walterJr2 from './assets/waltJr.mp3';
import mikeE from './assets/mikeEhrmantraut2.mp3';
import mike2 from './assets/mikeEhrmantraut.mp3';
import saul from './assets/saulGoodman.mp3';
import saul2 from './assets/saul2.mp3';
import saul3 from './assets/saul3.mp3';
import saul4 from './assets/saul4.mp3';
import hectorS from './assets/hectorSalamanca.mp3';
import hectorS2 from './assets/hector2.mp3';
import tucoS from './assets/tucoSalamanca.mp3';
import tucoS2 from './assets/tuco2.mp3';
import tucoS3 from './assets/tuco3.mp3';
import lydiaR from './assets/lydia2.mp3';
import lydiaR2 from './assets/lydia3.mp3';
import lydiaR3 from './assets/lydia4.mp3';
import todd from './assets/toddAlquist.mp3';
import todd2 from './assets/todd2.mp3';
import todd3 from './assets/todd3.mp3';
import jane from './assets/janeMargolis1.mp3';
import jane2 from './assets/janeMargolis2.mp3';
import marie from './assets/marieSchrader.mp3';
import marie2 from './assets/marie2.mp3';
import marie3 from './assets/marie3.mp3';
import domingo from './assets/domingoMolina.mp3';
import domingo2 from './assets/domingo2.mp3';
import domingo3 from './assets/domingo3.mp3';
import salamanca from './assets/salamanca.mp3';
import salamanca2 from './assets/salamanca2.mp3';
import salamanca3 from './assets/salamanca3.mp3';

// audio object containing several objects used to make the sound board
// each object contains array of mp3 sounds imported, name, the quote and link to actor

const audioClips = {
   'Walter White': { 
   sound: [walter, walter2, walter3], 
   label: 'Walter', 
   quote: '.. I am the Danger', 
   link: 'https://en.wikipedia.org/wiki/Bryan_Cranston'
},
   'Jesse Pinkman': { 
   sound: [jesse2, jesse, jesse3], 
   label: 'Jesse', 
   quote: 'Yo, yo, yo', 
   link: 'https://en.wikipedia.org/wiki/Aaron_Paul'
},
   'Skyler White': { 
   sound: [skyler, skyler2],
   label: 'Skyler', 
   quote: '.. That is veggie bacon', 
   link: 'https://en.wikipedia.org/wiki/Anna_Gunn'
},
   'Walter White Jr.': { 
   sound: [walterJr, walterJr2], 
   label: 'Walter Jr.', 
   quote: '.. Can you buy us a 6-pack?', 
   link: 'https://en.wikipedia.org/wiki/RJ_Mitte'
},
   'Henry Schrader': { 
      sound: [hank, hank2], 
   label: 'Henry', 
   quote: '.. It makes me want to cry', 
   link: 'https://en.wikipedia.org/wiki/Dean_Norris'
},
   'Marie Schrader': { 
      sound: [marie, marie2, marie3],
   label: 'Marie', 
   quote: '..I should be changing bed pans', 
   link: 'https://en.wikipedia.org/wiki/Betsy_Brandt'
},
   'Mike Ehrmantraut': { 
   sound: [mikeE, mike2], 
   label: 'Mike', 
   quote: 'You are not the guy!', 
   link: 'https://en.wikipedia.org/wiki/Jonathan_Banks'
},
   'Saul Goodman': { 
   sound: [saul, saul2, saul3, saul4], 
   label: 'Saul', 
   quote: '.. Cause I believed it!', 
   link: 'https://en.wikipedia.org/wiki/Bob_Odenkirk'
},
   'Gustavo Fring': { 
   sound: [gus2, gus3, gus4], 
   label: 'Gustavo', 
   quote: '.. A man provides, Walter', 
   link: 'https://en.wikipedia.org/wiki/Giancarlo_Esposito'
},
   'Hector Salamanca': { 
   sound: [hectorS, hectorS2], 
   label: 'Hector', 
   quote: '*Ding Ding*', 
   link: 'https://en.wikipedia.org/wiki/Mark_Margolis'
},
   'Domingo Molina': { 
   sound: [domingo, domingo2, domingo3], 
   label: 'Domingo', 
   quote: 'I know your little punk ass..', 
   link: 'https://en.wikipedia.org/wiki/Maximino_Arciniega'
},
   'Tuco Salamanca': { 
   sound: [tucoS, tucoS2, tucoS3], 
   label: 'Tuco', 
   quote: 'Booyah! Woo!', 
   link: 'https://en.wikipedia.org/wiki/Raymond_Cruz'
},
   'Marco & Leonel Salamanca': { 
   sound: [salamanca, salamanca2, salamanca3], 
   label: 'Marco & Leonel', 
   quote: '*pew pew*', 
   link: 'https://en.wikipedia.org/wiki/Luis_Moncada'
},
   'Lydia Rodarte-Quayle': { 
   sound: [lydiaR, lydiaR2, lydiaR3], 
   label: 'Lydia', 
   quote: '.. Im talking about an ocean', 
   link: 'https://en.wikipedia.org/wiki/Laura_Fraser'
},
   'Todd Alquist': { 
   sound: [todd, todd2, todd3], 
   label: 'Todd', 
   quote: '.. But this is millions', 
   link: 'https://en.wikipedia.org/wiki/Jesse_Plemons'
},
   'Jane Margolis': { 
   sound: [jane, jane2], 
   label: 'Jane', 
   quote: 'Pen and paper', 
   link: 'https://en.wikipedia.org/wiki/Krysten_Ritter'
}
};

export default audioClips;
