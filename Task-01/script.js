const root = document.querySelector('html');

const DATA = [
  {
    description: 'Team',
    name: 'Avengers',
  },
  {
    description: 'Member 1',
    name: 'Vishu Datta',
  },
  {
    description: 'Member 2',
    name: 'Sidharth A V',
  },
  {
    description: 'Member 3',
    name: 'Varnika Sood'
  },
  {
    description: 'Member 4',
    name: 'Abhiram Krishna'
  }
]

const cursor = document.createElement('div');
cursor.classList.add('cursor');
root.appendChild(cursor);


const follower = document.createElement('div');
follower.classList.add('cursor', 'cursor__follower');
root.appendChild(follower);

let current = 0;

function showPrev(){
  if(current > 0)
    current--;
  
   document.getElementById('mem_name').innerText = DATA[current].name;
   document.getElementById('mem_title').innerText = DATA[current].description;
};

function showNext(){
  if(current<4)
    current++;
  
   document.getElementById('mem_name').innerText = DATA[current].name; 
   document.getElementById('mem_title').innerText = DATA[current].description; 
};

root.addEventListener('mousemove', e => {
  setPosition(follower, e);
  setPosition(cursor, e);
});

function setPosition(element, e) {
  element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
}