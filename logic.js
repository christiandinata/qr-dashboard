let randomData = [
    {
        id: 1,
        name: 'John Doe',
        username: 'johnd'
    },
    {
        id: 2,
        name: 'Wallace Smith',
        username: 'wsmith'
    },
]

randomData = randomData.map(item => ({...item, active: true}));

console.log(randomData);