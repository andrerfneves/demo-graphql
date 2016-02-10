// Requires
const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;

// Connect to GraphQL
const client = new Lokka({
  transport: new Transport('http://graphql-swapi.parseapp.com'),
});

// CLient Query
client.query(`
{
	films: allFilms{
		films{
			title,
			director
		}
	},
	people: allPeople{
		people{
			name,
			height,
			gender,
			mass
		}
	},
	starships: allStarships{
		starships{
			length,
			model,
			name,
			crew
		}
	}
}

`).then(result => {
  // change this in order to see the other objects outputted to the console
  console.log(result.starships);
});
