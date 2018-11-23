document.addEventListener('DOMContentLoaded', () => {
  console.log('Hi World, DOM loading');

  // this has added event listener for when a form is submitted
  const submit = document.querySelector('form');
  submit.addEventListener('submit', handlesubmit)
})

// end of DOM loaded listener - all handles below

const handlesubmit = function(){
  event.preventDefault();
  console.log('submit is submitting');

  // create variables for values in instance
  const name = this.heroName.value;
  const universe = this.heroUniverse.value;
  const role = this.heroRole.value;

  // create variable injection into HTML
  const inject = document.querySelector('#hero-list');

  // create hero div
  const newHero = document.createElement('div');
  newHero.classList.add('hero-details');

  // create child div(s)

  const newName = document.createElement('div');
  newName.classList.add('heroName')
  newName.textContent = name;

  const newUniverse = document.createElement('div');
  newUniverse.classList.add('heroUniverse');
  newUniverse.textContent = universe;

  const newRole = document.createElement('div');
  newRole.classList.add('heroRole');
  newRole.textContent = role;

  // attach child to hero div
  newHero.appendChild(newName);
  newHero.appendChild(newUniverse);
  newHero.appendChild(newRole);

  // attach hero to injection point
  inject.appendChild(newHero);


};
