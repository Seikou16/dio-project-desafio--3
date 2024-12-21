// criando a classe principal
class genericHero {
    constructor(name, age, heroType) {
        this.name = name
        this.age = age
        this.heroType = heroType
    }

    atack(){
        if (this.heroType === "mago"){
            this.atack = "magia"
            console.log(`O ${this.heroType} atacou usando ${this.atack}`)
        } 

        else if (this.heroType === "guerreiro"){
            this.atack = "espada"
            console.log(`O ${this.heroType} atacou usando ${this.atack}`)
        } 

        else if (this.heroType === "monge"){
            this.atack = "artes marciais"
            console.log(`O ${this.heroType} atacou usando ${this.atack}`)
        } 

        else if (this.heroType === "ninja"){
            this.atack = "shuriken"
            console.log(`O ${this.heroType} atacou usando ${this.atack}`)
        }

        else {
            console.log("Tipo de herói inválido. Insira um valor dentre as opções dadas.")
        }
    }
}

// Mensagem inicial
console.log("----------------------")
console.log("Bem vindo a sua aventura. Você tem os seguintes tipos de heróis: 'mago', 'guerreiro', 'monge' e 'ninja'.")
console.log("----------------------")

// Criar um objeto na classe
heroAtack = new genericHero("generic_name", 30, "mago")

// Chamar o método atack
heroAtack.atack()

// Mensagem final 
if (heroAtack.heroType === "mago" || heroAtack.heroType === "guerreiro" || heroAtack.heroType === "monge" || heroAtack.heroType === "ninja"){
    console.log("----------------------")
    console.log(`O herói ${heroAtack.name} está avançando em sua aventura de ${heroAtack.heroType}!`)
}