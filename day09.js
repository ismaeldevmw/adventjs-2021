let group1 = [{age: 23}, {age: 24}]
let group2 = [
  { title: 'JavaScript: The Good Parts', rating: 8 },
  { title: 'Eloquent JavaScript', rating: 9 },
  { title: 'Aprendiendo Git', rating: 10 },
  { title: 'Clean Code', rating: 9 },
]
let group3 = [6.1, 4.2, 6.3]
let group4 = [1397639141184, 1363223700000]
let group5 = ['one', 'two', 'three']

function groupBy(collection, it) {
  let acumulator = {};
	collection.map((element) => {
		let prop = typeof it === 'function' ? it(element) : element[it];
		
    acumulator[prop] = acumulator[prop]
			? acumulator[prop].concat(element)
			: [element];
	});
	return acumulator;
}

console.log(groupBy(group2, 'rating' ))