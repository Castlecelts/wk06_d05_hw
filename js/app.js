document.addEventListener('DOMContentLoaded', () => {
  console.log('Hi World, DOM loading');

  // this has added event listener for when a form is submitted
  const submit = document.querySelector('#hero-inputs');
  submit.addEventListener('submit', handlesubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

  const submitBackground = document.querySelector('#form-background');
  submitBackground.addEventListener('submit', handleBackgroundSubmit);

  // add filter function ???
  const filterHeroList = document.querySelector('#filter-hero-list');
  filterHeroList.addEventListener('submit', handleFilterHeroRole);
})

// end of DOM loaded listener - all handles below

const handlesubmit = function(){
  event.preventDefault();
  console.log('submit is submitting');

  // create variables for values in instance
  const name = this.heroName.value;
  const universe = this.heroUniverse.value;
  const role = this.heroRole.value;
  const equipment = document.getElementsByName('equipment');
  const perk = this.perk.value;

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
    let equipmentStr = "";
      for (var i = 0; i < equipment.length; i++) {
        if (equipment[i].checked === true) {
          equipmentStr += equipment[i].value + " ";
        }
      }
  newEquipment.textContent = equipmentStr;


  const newPerk = document.createElement('div');
  newPerk.classList.add('perk');
  newPerk.textContent = perk;

  // attach child to hero div
  newHero.appendChild(newName);
  newHero.appendChild(newUniverse);
  newHero.appendChild(newRole);
  newHero.appendChild(newEquipment);
  newHero.appendChild(newPerk);

  // attach hero to injection point
  inject.appendChild(newHero);
};

const handleDeleteAllClick = function (event) {
  const heroList = document.querySelector('#hero-list');
  heroList.innerHTML = '';
}



const handleBackgroundSubmit = function(){
  event.preventDefault();
  const background = this.backgroundChange.value;
  document.body.style.background = background;
  document.body.style.backgroundSize = cover;
  document.body.style.backgroundColor = "#f3f3f3";

}


const handleFilterHeroRole = function(){
  event.preventDefault();
  const heroFilter = this.heroRoleFilter.value;

//   filterSelection("all")
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("filterDiv");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }
//
// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//   }
// }
//
// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }
}
