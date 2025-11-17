
/*
 Create a business name generator by combining list of adjectives and shop name and another word

 adjectives:
 Crazy
 Amazing
 Fire

Shop Name:
Engine
Foods
Garment

Another Word:
Bros
Limited
Hub

 */

let rand = Math.random()
        let first,sec,third
        if(rand<0.33){
            first = 'Crazy'
            sec = 'Engine'
            third='Bros'
        }
        else if(rand<0.66){
            first = 'Amazing'
            sec = 'Food'
            third='Limited'
        }
        else {
            first = 'Fire'
            sec = 'Garments'
            third='Hub'
        }
        console.log(`${first} ${sec} ${third }`);
