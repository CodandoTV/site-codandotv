const libraryContentData_ptBR = [
    {
        title: 'CraftD',
        support: ['Android', 'iOS', 'Flutter', 'CMP'],
        desc: 'Um framework para implementar Server-Driven UI de forma rápida e simples em Android, iOS, Flutter e KMP. Permite que as interfaces sejam controladas pelo servidor, tornando as atualizações mais ágeis e sem necessidade de publicar uma nova versão do app.',
        img: 'assets/images/libs/CraftD.mp4',
        video: true,
        multirepo: []
    },
    {
        title: 'Popcorn Guineapig',
        support: ['Gradle', 'Detekt'],
        desc: 'O Popcorn Gradle Plugin (PopcornGP) valida dependências entre módulos em projetos multi-módulo, enquanto a Popcorn Guineapig Detekt Rule realiza a validação a nível de código-fonte (import). Ambas as ferramentas oferecem um modelo de configuração flexível, permitindo definir e aplicar regras de arquitetura de acordo com as necessidades específicas do seu projeto.',
        img: 'assets/images/libs/popcorn-guineapig.png',
        video: false,
        multirepo: [
            { name: 'popcorn-guineapig', stars: '22', url: 'https://github.com/CodandoTV/popcorn-guineapig' },
            { name: 'popcorn-guineapig-detekt-rule', stars: '1', url: 'https://github.com/CodandoTV/popcornguineapig-detekt-rule' },
        ]
    },
    {
        title: 'eagle-eye',
        support: ['Dart'],
        desc: 'Uma ferramenta CLI em Dart para enforçar regras de arquitetura em projetos Flutter/Dart. Mantém o código organizado e as dependências sob controle.',
        img: 'assets/images/libs/eagle-eye.png',
        video: false,
        multirepo: []
    },
    {
        title: 'jujubaSVG',
        support: ['Android', 'Flutter'],
        desc: 'Uma biblioteca para manipular arquivos SVG em apps Android e Flutter, criada pela CodandoTV para facilitar o uso de SVGs dinâmicos no mobile.',
        img: 'assets/images/libs/jujubaSVG.png',
        video: false,
        multirepo: []
    },
    {
        title: 'Netflix',
        support: ['Android', 'CMP'],
        desc: 'StreamPlayerApp virou dois projetos de estudo para a comunidade, com exemplos de arquitetura moderna e boas práticas em Android nativo e Kotlin Multiplatform.',
        img: 'assets/images/libs/Netflix.png',
        video: false,
        multirepo: [
            { name: 'Netflix-Android', stars: '59', url: 'https://github.com/CodandoTV/Netflix-Android' },
            { name: 'Netflix-KMP', stars: '27', url: 'https://github.com/CodandoTV/Netflix-CMP' }
        ]
    }
];

const libraryContentData_enUs = [
    {
        title: 'CraftD',
        support: ['Android', 'iOS', 'Flutter', 'CMP'],
        desc: 'A framework to implement Server-Driven UI quickly and easily on Android, iOS, Flutter, and KMP. It allows interfaces to be controlled by the server, making updates faster and without the need to publish a new version of the app.',
        img: 'assets/images/libs/CraftD.mp4',
        video: true,
        multirepo: []
    },
    {
        title: 'Popcorn Guineapig',
        support: ['Gradle', 'Detekt'],
        desc: 'The Popcorn Gradle Plugin (PopcornGP) validates dependencies between modules in multi-module projects, while the Popcorn Guineapig Detekt Rule performs validation at the source-code level by analyzing imports. Both tools provide a flexible configuration model, allowing you to define and enforce architectural rules tailored to your project\'s specific needs.',
        img: 'assets/images/libs/popcorn-guineapig.png',
        video: false,
        multirepo: [
            { name: 'popcorn-guineapig', stars: '22', url: 'https://github.com/CodandoTV/popcorn-guineapig' },
            { name: 'popcorn-guineapig-detekt-rule', stars: '1', url: 'https://github.com/CodandoTV/popcornguineapig-detekt-rule' }
        ]
    },
    {
        title: 'eagle-eye',
        support: ['Dart'],
        desc: 'A CLI tool in Dart to enforce architecture rules in Flutter/Dart projects. It keeps the code organized and dependencies under control.',
        img: 'assets/images/libs/eagle-eye.png',
        video: false,
        multirepo: []
    },
    {
        title: 'jujubaSVG',
        support: ['Android', 'Flutter'],
        desc: 'A library to manipulate SVG files in Android and Flutter apps, created by CodandoTV to facilitate the use of dynamic SVGs in mobile.',
        img: 'assets/images/libs/jujubaSVG.png',
        video: false,
        multirepo: []
    },
    {
        title: 'Netflix',
        support: ['Android', 'CMP'],
        desc: 'StreamPlayerApp turned into two study projects for the community, with examples of modern architecture and best practices in native Android and Kotlin Multiplatform.',
        img: 'assets/images/libs/Netflix.png',
        video: false,
        multirepo: [
            { name: 'Netflix-Android', stars: '59', url: 'https://github.com/CodandoTV/Netflix-Android' },
            { name: 'Netflix-KMP', stars: '27', url: 'https://github.com/CodandoTV/Netflix-CMP' }
        ]
    }
];

function fetchLibraryContentData() {
    if (isPtBR()) {
        return libraryContentData_ptBR;
    } else {
        return libraryContentData_enUs;
    }
};