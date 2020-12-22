

let library = [{ book: 'красная шапочка' },
            { book: 'колобок' },
            { book: 'федорино горе' },
            { book: 'летучий корабль' },
            { book: 'сказка о царе солтане' },
            { book: 'муха цокотуха' },
            { book: 'три богатыря' },
            { book: 'три поросенка' },
            { book: 'марья искусница' },
            { book: 'лиса и журавль' },
]

const proxy = new Proxy(library, {
    get(target, book) {
        for( value of target) {
            if ( value.book === book) {
                return value.book
            }
            else { 
                alert('Такой книги НЭМА((') }
        }
    }
  });

 console.log(proxy['колобок']);