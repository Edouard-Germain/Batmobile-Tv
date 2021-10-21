// ## 2 - TV

// - Créer une class `TV` avec les propriétés `brand`, `channel`, `volume`. La chaine par défaut sera 1, et le volume par défaut sera 50
// - Ajouter deux méthodes pour baisser et augmenter le volume. Le volume ne peut pas aller en dessous de 0, et pas au dessus de 100
// - Ajouter une méthode pour changer de chaine. Notre télé a seulement 50 chaines, si on essaye de changer une chaine au dessus de 50, on restera sur la chaine courante. Pareil pour une chaine en dessous de 0
// - Ajouter une méthode pour reset les paramètres de notre `TV`, qui remettra la chaine et le volume de base
// - Ajouter une méthode `describe` qui va afficher les infos de notre `TV`
// - Testez votre classe et ses méthodes avec différentes valeurs


class Tv{
    constructor(brand){
        this.brand=brand
        this.channel= 1 
        this.volume= 50 
        // let// defaultvolume =50
        // defaultchannel = 1
    }

    volumeUp(num){
        if(this.volume<100){
            this.volume += num
        }
    }
    volumeDown(num){
        if(this.volume>0){
            this.volume -= num
        }
    }
    channelUp(){
        if(this.channel<50){
            this.channel ++
        }
    }
    channelDown(){
        if(this.channel>0){
            this.channel --
        }
    }
    channelInput(num){
        if(num >0 && num <50){
            this.channel = num
        }
    }

    resetTv(){
        this.channel = 1
        this.volume =50
    }
    
    describeTv(){
        console.log(`this tv is a ${this.brand} it's on channel ${this.channel} and its volume is at ${this.volume}`)
    }
    
}

let toshiba = new Tv("Toshiba")
// console.log(toshiba)
toshiba.channelUp()
console.log(toshiba)
toshiba.channelInput(60)
console.log(toshiba)
toshiba.channelInput(40)
console.log(toshiba)
toshiba.volumeUp(40)
toshiba.channelDown()
toshiba.volumeDown(10)
toshiba.describeTv()
toshiba.resetTv()
toshiba.describeTv()