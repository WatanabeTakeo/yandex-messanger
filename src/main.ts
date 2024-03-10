import './style.scss';

import hbs from 'handlebars';

import * as Atoms from "./atoms";
import * as Molecules from "./molecules";

Object.entries(Atoms).forEach(([name, component]) => hbs.registerPartial(name, component));
Object.entries(Molecules).forEach(([name, component]) => hbs.registerPartial(name, component));


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('app')!.innerHTML = hbs.compile(Molecules.MessageCard)();
});