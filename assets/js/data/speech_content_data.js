const speechContentData_ptBR = [
    {
        youtubeTitle: "Como Entrar em TI: Guia Completo de Carreiras",
        youtubeDescription: "16 profissionais explicam cada área: Produto, Cloud, Mobile, IA, DevOps e muito mais.",
        youtubeUrl: "https://www.youtube.com/embed/Biqa9X2LDTo",
        youtubeCategories: ["Carreira"]
    },
    {
        youtubeTitle: "8 Estágios de Confiabilidade da IA para Devs",
        youtubeDescription: "Claude Code, Cursor, agentes e produtividade. Como a confiança no uso de IA evoluindo na prática.",
        youtubeUrl: "https://www.youtube.com/embed/syEhtDfAbBM",
        youtubeCategories: ["IA"]
    },
    {
        youtubeTitle: "CraftD: Server Driven UI para Todas as Plataformas",
        youtubeDescription: "Telas dinâmicas sem release. A solução open source da comunidade CodandoTV para SDUI multiplataforma.",
        youtubeUrl: "https://www.youtube.com/embed/Co-e1QPD73M",
        youtubeCategories: ["Android", "Flutter", "iOS"]
    },
    {
        youtubeTitle: "Kotzilla no Compose Multiplatform: Setup Completo",
        youtubeDescription: "Observabilidade gratuita para open source. Analise comportamento, performance e issues do seu app KMP.",
        youtubeUrl: "https://www.youtube.com/embed/O9g7RX6OrRI",
        youtubeCategories: ["CMP", "Observabilidade"]
    },
    {
        youtubeTitle: "Mockito no Flutter: Testes Unitários com Mocks",
        youtubeDescription: "Como usar mocks para criar testes unitários mais confiáveis, rápidos e desacoplados no ecossistema Flutter.",
        youtubeUrl: "https://www.youtube.com/embed/uLNIxp5YZ9k",
        youtubeCategories: ["Flutter", "Testes"]
    },
    {
        youtubeTitle: "O Que é Kotlin Multiplatform em 10 Minutos",
        youtubeDescription: "Compartilhe código entre Android, iOS e Web. Entenda como o KMP funciona e como começar a usar nos seus projetos.",
        youtubeUrl: "https://www.youtube.com/embed/Hf7DV8asMT8",
        youtubeCategories: ["Kotlin"]
    }
];

const speechContentData_enUs = [
    {
        youtubeTitle: "How to Get Into Tech: Complete Career Guide",
        youtubeDescription: "16 professionals explain each area: Product, Cloud, Mobile, AI, DevOps and much more.",
        youtubeUrl: "https://www.youtube.com/embed/Biqa9X2LDTo",
        youtubeCategories: ["Career"]
    },
    {
        youtubeTitle: "8 Stages of AI Reliability for Devs",
        youtubeDescription: "Claude Code, Cursor, agents and productivity. How trust in AI use is evolving in practice.",
        youtubeUrl: "https://www.youtube.com/embed/syEhtDfAbBM",
        youtubeCategories: ["AI"]
    },
    {
        youtubeTitle: "CraftD: Server Driven UI for All Platforms",
        youtubeDescription: "Dynamic screens without release. The open source solution from the CodandoTV community for multiplatform SDUI.",
        youtubeUrl: "https://www.youtube.com/embed/Co-e1QPD73M",
        youtubeCategories: ["Android", "Flutter", "iOS"]
    },
    {
        youtubeTitle: "Kotzilla on Compose Multiplatform: Complete Setup",
        youtubeDescription: "Free observability for open source. Analyze behavior, performance and issues of your KMP app.",
        youtubeUrl: "https://www.youtube.com/embed/O9g7RX6OrRI",
        youtubeCategories: ["CMP", "Observability"]
    },
    {
        youtubeTitle: "Mockito in Flutter: Unit Testing with Mocks",
        youtubeDescription: "How to use mocks to create more reliable, faster and decoupled unit tests in the Flutter ecosystem.",
        youtubeUrl: "https://www.youtube.com/embed/uLNIxp5YZ9k",
        youtubeCategories: ["Flutter", "Testing"]
    },
    {
        youtubeTitle: "What is Kotlin Multiplatform in 10 Minutes",
        youtubeDescription: "Share code between Android, iOS and Web. Understand how KMP works and how to start using it in your projects.",
        youtubeUrl: "https://www.youtube.com/embed/Hf7DV8asMT8",
        youtubeCategories: ["Kotlin"]
    }
];

function fetchSpeechContentData() {
    if (isPtBR()) {
        return speechContentData_ptBR;
    } else {
        return speechContentData_enUs;
    }
};