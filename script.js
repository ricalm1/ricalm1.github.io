const button = document.getElementById('click');


button.addEventListener('click', async function () {
  if (selection === 'cats') {
    const response = await fetch('https://meowfacts.herokuapp.com/');
    const facts = await response.json()
    document.getElementById('catFact').innerText = facts.data[0]
  } else {
    const response = await fetch('https://dog-api.kinduff.com/api/facts?number=1')
    const facts = await response.json()
    document.getElementById('catFact').innerText = facts.facts[0]
  }
});

let selection = 'cats'
document.getElementById('cats').addEventListener('click', function () {
  selection = 'cats'
})
document.getElementById('dogs').addEventListener('click', function () {
  selection = 'dogs'
});

