const almacen = {
  estanteria1: {
    cajon1: {
      producto1: 'coca-cola',
      producto2: 'fanta',
      producto3: 'sprite',
    },
  },
  estanteria2: {
    cajon1: 'vacio',
    cajon2: {
      producto1: 'pantalones',
      producto2: 'camiseta', // <- ¡Está aquí!
    },
  },
};

function iterateStore(store) {
  if (typeof store === 'string') {
    return store;
  } else {
    return Object.values(store).map(iterateStore).flat();
  }
}

function contains(store, product) {
  const stock = iterateStore(store);
  return stock.includes(product);
}

console.log(contains(almacen, 'camiseta')); // true
