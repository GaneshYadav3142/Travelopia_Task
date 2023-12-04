

const jsdom = require('jsdom');
const { JSDOM } = jsdom;


const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;


const { toggleContent } = require('./index'); 


const showMoreBtn = document.createElement('a');
showMoreBtn.id = 'show-more-btn';
document.body.appendChild(showMoreBtn);

test('toggleContent shows anchor tag if screen width is 700px or less', () => {
  
  global.window.innerWidth = 700;

 
  toggleContent();


  expect(showMoreBtn.style.display).toBe('block');
});

test('toggleContent hides anchor tag if screen width is greater than 700px', () => {

  global.window.innerWidth = 701;


  toggleContent();


  expect(showMoreBtn.style.display).toBe('none');
});
