
const characterName = kolobok('дедушка', 'заяц', 'лиса')

console.log(kolobok('дедушка'))
console.log(kolobok('заяц'))
console.log(kolobok('лиса'))
console.log(kolobok('кот'))


function kolobok (characterName) {
    switch(characterName) {
        case 'дедушка':
            return 'Я от дедушки ушёл'
            break;
        case 'заяц':
            return 'Я от бабушки ушёл'
            break;
        case 'лиса':
            return 'Меня съели'
            break;
        default:
            return 'неизвестно'
    }
}


const dedMoroz = 'Дед Мороз';
const snegurochka = 'Снегурочка';
const phrase1 = `${dedMoroz}! ${dedMoroz}! ${dedMoroz}!`;
const phrase2 = `${snegurochka}! ${snegurochka}! ${snegurochka}!`;
const names = newYear(dedMoroz,snegurochka)

function newYear(names) {
    if (names === dedMoroz) {
        return phrase1;
    } else if (names === snegurochka) {
        return phrase2;
    } else {
        return 'новый год';
    }
}

console.log(newYear(dedMoroz))
console.log(newYear(snegurochka))