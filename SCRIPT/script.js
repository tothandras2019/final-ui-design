console.log(beers)

const Card = ({ title, sub, text }, index) => {
  return `
      <div>
        <div>${index}</div>
        <h2>${title}</h2>
        <h4>${sub}</h4>
        <p>${text}</p>
        <button>details</button>
      </div>`
}

const CardContainer = document.querySelector('.card-container')

const { cards } = beers
const BeerCardsElements = cards.map((card, i) => Card(card, i))

CardContainer.innerHTML = BeerCardsElements.join('')
