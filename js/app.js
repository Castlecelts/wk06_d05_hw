document.addEventListener('DOMContentLoaded', () => {
  console.log('Hi World, DOM loading');

  // this has added event listener for when a form is submitted
  const submit = document.querySelector('#hero-inputs');
  submit.addEventListener('submit', handlesubmit)

  const submitBackground = document.querySelector('#form-background');
  submitBackground.addEventListener('submit', handleBackgroundSubmit)
})

// end of DOM loaded listener - all handles below

const handlesubmit = function(){
  event.preventDefault();
  console.log('submit is submitting');

  // create variables for values in instance
  const name = this.heroName.value;
  const universe = this.heroUniverse.value;
  const role = this.heroRole.value;
  const equipment = this.equipment.value;

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

  const newEquipment = document.createElement('div');
  newEquipment.classList.add('equipment');
  newEquipment.textContent = equipment;

  // attach child to hero div
  newHero.appendChild(newName);
  newHero.appendChild(newUniverse);
  newHero.appendChild(newRole);
  newHero.appendChild(newEquipment);

  // attach hero to injection point
  inject.appendChild(newHero);
};

const handleBackgroundSubmit = function(){
  event.preventDefault();
  const background = this.backgroundChange.value;
  document.body.style.background = background;
  document.body.style.backgroundSize = cover;
  document.body.style.backgroundColor = "#f3f3f3";

}
