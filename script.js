

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
];

const proxy = new Proxy(library, {
  get(target, book) {
    for (value of target) {
      if (value.book === book) {
        return value.book.split(' ').map(letter => letter[0].toUpperCase() + letter.substring(1)).join(' ')
      }
    }
    alert('Такой книги НЭМА((')
  },

  set(target, prop, value) {
    for (val of target) {
      if (value === value.book) {
        alert("Такое уже есть");
        return;
      }
    }
    return target.push({ book: value.toLowerCase() });
  }
})

console.log(proxy['колобок']);
proxy.newBook = "морозко";
console.log(proxy);
console.log(proxy['сказка о золотой рыбке'])