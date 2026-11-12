const contentCreatorsData_ptBR = [
    {
        name: 'Junior Martins',
        role: 'Engenheiro Mobile',
        image: 'assets/images/junior.jpg',
        link: 'https://www.linkedin.com/in/jrmartins/',
    },
    {
        name: 'Gabriel Moro',
        role: 'Engenheiro Mobile',
        image: 'assets/images/moro.jpg',
        link: 'https://gabrielbmoro.dev/',
    },
    {
        name: 'Pedro Alvarez',
        role: 'Engenheiro Mobile',
        image: 'assets/images/pedro.jpg',
        link: 'https://www.linkedin.com/in/pedro-alvarez94/',
    }
]

const contentCreatorsData_enUs = [
    {
        name: 'Junior Martins',
        role: 'Mobile Engineer',
        image: 'assets/images/junior.jpg',
        link: 'https://www.linkedin.com/in/jrmartins/',
    },
    {
        name: 'Gabriel Moro',
        role: 'Mobile Engineer',
        image: 'assets/images/moro.jpg',
        link: 'https://gabrielbmoro.dev/',
    },
    {
        name: 'Pedro Alvarez',
        role: 'Mobile Engineer',
        image: 'assets/images/pedro.jpg',
        link: 'https://www.linkedin.com/in/pedro-alvarez94/',
    }
]

function fetchContentCreatorsData() {
    if(isPtBR()) {
        return contentCreatorsData_ptBR;
    } else {
        return contentCreatorsData_enUs;
    }
};