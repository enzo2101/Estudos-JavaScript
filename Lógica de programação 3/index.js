const divisao = () => {
    for (let i = 0; i <= 100; i++) {
        let fizz = '';
        let buzz = '';

        if (i % 3 === 0) {
            fizz = 'fizz';
        }
        if (i % 5 === 0) {
            buzz = 'buzz';
        }

        console.log(fizz + buzz || i);
    }
};

divisao();
