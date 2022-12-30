const cookieLuck = document.querySelector(`.click`)
const openCookie = document.querySelector(`button`)
const screen1 = document.querySelector(`.screen1`)
const screen2 = document.querySelector(`.screen2`)
const luckMessage =document.querySelector(`.message`)

const messages = [
    "Comece onde você está, use o que você tem e faça o que você pode.",
    "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
    "Não importa que você vá devagar, contanto que você não pare.",
    "Coragem é saber o que não temer",
    "Conhecer a si mesmo é o começo de toda sabedoria.",
    "Acredite em milagres, mas não dependa deles.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Dificuldades preparam pessoas comuns para destinos extraordinários",
    "Nenhum obstáculo será grande se a sua vontade de vencer for maior"
]

cookieLuck.addEventListener(`click`, () => {
    screen1.classList.toggle(`hide`)
    screen2.classList.toggle(`hide`)
    luckMessage.innerText = messages[Math.round(Math.random() * 9)]
})

openCookie.addEventListener(`click`, () => {
    screen1.classList.toggle(`hide`)
    screen2.classList.toggle(`hide`)
})
