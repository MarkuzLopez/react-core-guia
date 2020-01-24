const user1 = { 
    name: 'Markuz Lopez',
    username: 'luxfenix',
    country: 'Mexico',
    social: { 
        facebook: 'https://fb...',
        twitter: 'https://tw...'
    }
}

const saluda = (user) => { 
    console.log(`Hola soy ${user.name} y vivo en ${user.country}`);
}

saluda(user1);