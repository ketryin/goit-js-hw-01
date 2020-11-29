// Задание 5
// Пользователь может оформить доставку товара к себе в страну, 
// указав ее при посещении страницы в prompt.Учти, пользователь может ввести имя страны не только буквами 
// нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. 
// Обязательно используй switch.Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 
// 'В вашей стране доставка не доступна'.

let country = prompt('Введите страну доставки:');
let deliveryCost;

switch (country.toLowerCase()) {
    case 'китай': deliveryCost = 100; break;
    case 'чили': deliveryCost = 250; break;
    case 'австралия': deliveryCost = 170; break;
    case 'индия': deliveryCost = 80; break;
    case 'ямайка': deliveryCost = 120; break;
    
    default:
        alert('В вашей стране доставка не доступна');
}

if (deliveryCost !== undefined) {
    console.log(`Доставка в ${country} будет стоить ${deliveryCost} кредитов`);
}
