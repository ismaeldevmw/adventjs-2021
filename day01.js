const sheeps = [
	{ name: 'Noa', color: 'azul' },
	{ name: 'Euge', color: 'rojo' },
	{ name: 'Navidad', color: 'rojo' },
	{ name: 'Ki Na Ma', color: 'rojo' }
];

function countSheeps(sheeps) {
	return sheeps.filter((sheep) => sheep.color === 'rojo').filter((sheep) => `${sheep.name}`.match(/[na]/gi));
	// return sheeps.filter(sheep => sheep.color === 'rojo')
	// .filter(sheep => `${sheep.name}`.toLowerCase().includes('n'))
	// .filter(sheep => `${sheep.name}`.toLowerCase().includes('a'))
}

const filteredSheeps = countSheeps(sheeps);
console.log(filteredSheeps);
