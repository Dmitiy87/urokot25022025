// Задача: Вывести на страницу HTML таблицу
// с 4-мы сезонами года.
// V Для каждого месяца указать название 
// Фон покрасить средствами JS+CSS

function create_season_table() {

}

window.addEventListener(
    'load',
    create_season_table
)

function getWrittenMonth(){
    const date = new Date();  // Текущая дата и время
    // date.getMonth() в JS возвращает месяцы С НУЛЯ
    const all_names = [  // Квадратные скобки - литерал списка
        'января',   // 0
        'февраля',  // 1
        'марта',    // 2
        'апреля',   // 3
        'мая',      // 4
        'июня',     // 5
        'июля',     // 6
        'августа',  // 
        'сентября',
        'октября',
        'ноября',
        'декабря'
    ];
    // return all_names[4];  // Вернули май
    const month_number = date.getMonth();
    return all_names[month_number];
}
    
    

    month = date.getMonth()+1

    if (month == 1){
        return 'января'
    }
    else if (month == 2){
        return 'февраля'
    }
    else if (month == 3){
        return 'марта'
    }
    else if (month == 4){
        return 'апреля'
    }
    else if (month == 5){
        return 'мая'
    }
    else if (month == 6){
        return 'июня'
    }
    else if (month == 7){
        return 'июля'
    }
    else if (month == 8){
        return 'августа'
    }
    else if (month == 9){
        return 'сентября'
    }
    else if (month == 10){
        return 'октября'
    }
    else if (month == 11){
        return 'ноября'
    }
    else if (month == 12){
        return 'декабря'
    }
}