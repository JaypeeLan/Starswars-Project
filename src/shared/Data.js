export const cardInfo = [
	{
		title: 'Films',
		fill: '#A9FFE0',
		number: '200',
		desc: '20 More than than yesterday',
	},
	{
		title: 'Starships',
		fill: '#A9C1FF',
		number: '200',
		desc: '20 More than than yesterday',
	},
	{
		title: 'People',
		fill: '#FFA9EC',
		number: '200',
		desc: '20 More than than yesterday',
	},
	{
		title: 'Species',
		fill: '#FDFFA9',
		number: '200',
		desc: '20 More than than yesterday',
	},
]
export const filmsColumn = [
	{
		field: 'title',
		headerName: 'Title',
		width: 130,
	},
	{ field: 'release_date', headerName: 'Release Date', width: 130 },

	{
		field: 'director',
		headerName: 'Director',
		width: 160,
	},
	{
		field: 'producer',
		headerName: 'Producer',
		description: 'This column has a value getter and is not sortable.',
	},
	{
		field: 'episode_id',
		headerName: 'Episode_Id',
		description: 'This column has a value getter and is not sortable.',
	},
	{
		field: 'characters',
		headerName: 'Characters',
		width: 160,
	},
]
export const peopleColumn = [
	{ field: 'name', headerName: 'Name', width: 130 },
	{ field: 'birth_year', headerName: 'Birth Year', width: 130 },
	{
		field: 'gender',
		headerName: 'Gender',
		width: 160,
		// valueGetter: (params) =>
		// 	`${params.row.gender || ''}`,
	},
	{
		field: 'hair_color',
		headerName: 'Hair Color',
		description: 'This column has a value getter and is not sortable.',
		// valueGetter: (params) =>
		// 	`${params.row.firstName || ''} ${params.row.lastName || ''}`,
	},
	{
		field: 'height',
		headerName: 'Height',
		description: 'This column has a value getter and is not sortable.',
		// valueGetter: (params) =>
		// 	`${params.row.firstName || ''} ${params.row.lastName || ''}`,
	},
	{
		field: 'created',
		headerName: 'Created',
		width: 160,
		// valueGetter: (params) =>
		// 	`${params.row.firstName || ''} ${params.row.lastName || ''}`,
	},
]
export const speciesColumn = [
	{ field: 'name', headerName: 'Name', width: 130 },
	{ field: 'classification', headerName: 'Classification', width: 130 },
	{
		field: 'eye_colors',
		headerName: 'Eye Colors',
		width: 160,
	},
	{
		field: 'hair_colors',
		headerName: 'Hair Colors',
		width: 160,
	},
	{
		field: 'average_height',
		headerName: 'Height',
		width: 160,
	},
	{
		field: 'created',
		headerName: 'Created',
		width: 160,
	},
]
export const starshipColumn = [
	{ field: 'name', headerName: 'Name', width: 130 },
	{ field: 'model', headerName: 'Model', width: 130 },
	{
		field: 'starship_class',
		headerName: 'Class',
		width: 160,
	},
	{
		field: 'passengers',
		headerName: 'Passengers',
		description: 'This column has a value getter and is not sortable.',
	},
	{
		field: 'length',
		headerName: 'Length',
		description: 'This column has a value getter and is not sortable.',
	},
	{
		field: 'films',
		headerName: 'Films',
		width: 160,
	},
]
