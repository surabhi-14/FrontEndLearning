const Person = {
    play:(name) => {
        return `Hey ${name} is playing`;
    },
    dance:(name) => {
        return `${name} can dance`
    },
    walk:(name) => {
        return `I am sure ${name} can walk `
    },
}
 
console.log(Person.play("play function"));
console.log(Person.dance("dance function"));
console.log(Person.walk("walk function"));