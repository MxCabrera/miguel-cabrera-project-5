// audio imports 
import walter from './assets/walterWhite1.mp3';
import jesse from './assets/jessePinkman2.mp3';
import hank from './assets/Hank.mp3';
import gusFring from './assets/gusFring.mp3';
import skylar from './assets/skylarWhite2.mp3';
import walterJr from './assets/walterJr.mp3';
import mikeE from './assets/mikeEhrmantraut2.mp3';
import saul from './assets/saulGoodman.mp3';
import hectorS from './assets/hectorSalamanca.mp3';
import tucoS from './assets/tucoSalamanca.mp3';
import lydiaR from './assets/lydiaRodarte.mp3';
import todd from './assets/toddAlquist.mp3';
import jane from './assets/janeMargolis1.mp3';
import marie from './assets/marieSchrader.mp3';
import domingo from './assets/domingoMolina.mp3';
import salamanca from './assets/salamanca.mp3';

// audio array

const audioClips = {
   'Walter White': { sound: walter, label: 'Walter', quote: '.. I am the Danger', link: 'https://en.wikipedia.org/wiki/Bryan_Cranston'},
   'Jesse Pinkman': { sound: jesse, label: 'Jesse', quote: 'Yo, yo, yo', link: 'https://en.wikipedia.org/wiki/Aaron_Paul'},
   'Skyler White': { sound: skylar, label: 'Skyler', quote: '.. This is veggie bacon', link: 'https://en.wikipedia.org/wiki/Anna_Gunn'},
   'Walter White Jr.': { sound: walterJr, label: 'Walter Jr.', quote: '.. Can you buy us a 6-pack?', link: 'https://en.wikipedia.org/wiki/RJ_Mitte'},
   'Henry Schrader': { sound: hank, label: 'Henry', quote: '.. It makes me want to cry', link: 'https://en.wikipedia.org/wiki/Dean_Norris'},
   'Marie Schrader': { sound: marie, label: 'Marie', quote: '..I should be changing bed pans', link: 'https://en.wikipedia.org/wiki/Betsy_Brandt'},
   'Mike Ehrmantraut': { sound: mikeE, label: 'Mike', quote: 'You are not the guy!', link: 'https://en.wikipedia.org/wiki/Jonathan_Banks'},
   'Saul Goodman': { sound: saul, label: 'Saul', quote: '.. Cause I believed it!', link: 'https://en.wikipedia.org/wiki/Bob_Odenkirk'},
   'Gustavo Fring': { sound: gusFring, label: 'Gustavo', quote: '.. A man provides, Walter', link: 'https://en.wikipedia.org/wiki/Giancarlo_Esposito'},
   'Hector Salamanca': { sound: hectorS, label: 'Hector', quote: '*Ding Ding*', link: 'https://en.wikipedia.org/wiki/Mark_Margolis'},
   'Domingo Molina': { sound: domingo, label: 'Domingo', quote: 'I know your little punk ass..', link: 'https://en.wikipedia.org/wiki/Maximino_Arciniega'},
   'Tuco Salamanca': { sound: tucoS, label: 'Tuco', quote: 'Woo! Booyah!', link: 'https://en.wikipedia.org/wiki/Raymond_Cruz'},
   'Marco & Leonel Salamanca': { sound: salamanca, label: 'Marco & Leonel', quote: '*pew pew*', link: 'https://en.wikipedia.org/wiki/Luis_Moncada'},
   'Lydia Rodarte-Quayle': { sound: lydiaR, label: 'Lydia', quote: '.. Im talking a whole ocean', link: 'https://en.wikipedia.org/wiki/Laura_Fraser'},
   'Todd Alquist': { sound: todd, label: 'Todd', quote: '.. But this is millions', link: 'https://en.wikipedia.org/wiki/Jesse_Plemons'},
   'Jane Margolis': { sound: jane, label: 'Jane', quote: 'Pen and paper', link: 'https://en.wikipedia.org/wiki/Krysten_Ritter'}
}

export default audioClips;