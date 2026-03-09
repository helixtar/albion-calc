async function loadItems(){

const res = await fetch("data/items.json")
const items = await res.json()

const itemString = items.join(",")

const url = `https://west.albion-online-data.com/api/v2/stats/prices/${itemString}.json`

const response = await fetch(url)
const data = await response.json()

render(data)

}

function render(data){

const container = document.getElementById("market-list")

container.innerHTML=""

data.forEach(item=>{

const icon = `https://render.albiononline.com/v1/item/${item.item_id}.png`

const html = `

<div class="item">

<img src="${icon}">

<h3>${item.item_id}</h3>

<p>Low: ${item.sell_price_min}</p>

<p>High: ${item.sell_price_max}</p>

</div>

`

container.innerHTML += html

})

}

loadItems()
