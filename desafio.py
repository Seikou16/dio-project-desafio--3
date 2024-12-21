# Define a classe principal
class GenericHero:
    def __init__(self, name, age, hero_type):
        self.name = name
        self.age = age
        self.hero_type = hero_type

    def atack(self):
        if self.hero_type == "mago":
            atack = "magia"
            print(f"O {self.hero_type} atacou usando {atack}.")
        
        elif self.hero_type == "guerreiro":
            atack = "espada"
            print(f"O {self.hero_type} atacou usando {atack}.")
        
        elif self.hero_type == "monge":
            atack = "artes marciais"
            print(f"O {self.hero_type} atacou usando {atack}.")
        
        elif self.hero_type == "ninja":
            atack = "shuriken"
            print(f"O {self.hero_type} atacou usando {atack}.")
        
        else:
            print("Tipo de herói desconhecido, não pode atacar!")

# Mensagem inicial
print("----------------------")

print("Bem vindo a sua aventura. Você pode escolher entre os seguintes tipos de heróis: 'mago', 'guerreiro', 'monge' e 'ninja'. Escolha com cuidado! ")

print("----------------------")

# Criar um objeto da classe
hero_atack = GenericHero(input("digite o nome do seu personagem: "), input("digite a idade do seu personagem: "), input("digite o tipo do seu personagem: "))

# Chamar o método atack
hero_atack.atack()
print("----------------------")

# Mensagem final 
print(f"O herói {hero_atack.name} está avançando em sua aventura de {hero_atack.hero_type}!")