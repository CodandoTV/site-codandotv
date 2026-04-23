# CodandoTV — Skill do Projeto

## Convenções de nomenclatura

- Módulos de dados: sufixo `_data.js`, exportam função `fetchXxx()`
- Módulos utilitários: pasta `util/`, exportam funções helper
- Chaves de texto: dot notation — `"section.key.detail"`
- IDs em HTML: snake_case — `section_key_detail` (equivale à chave com `.` → `_`)
- Idiomas: underscore — `general_data_en_US.js` (não hífen)

---

## Arquivos principais
- Site: `index.html` — HTML com placeholders de IDs para conteúdo dinâmico
- Estilos: `assets/css/style.css` — Design system com CSS custom properties
- Aplicação: `assets/js/app.js` — Lógica principal (renderização, event handlers)
- Dados: `assets/js/data/` — Módulos de dados separados
  - `general_data.js` — Textos, traduções, strings de UI
  - `content_creators_data.js` — Perfis de criadores
  - `library_content_data.js` — Projetos open-source (libs)
  - `speech_content_data.js` — Vídeos YouTube (Vídeos úteis)
- Utilitários: `assets/js/util/` — Funções auxiliares
  - `translation_check.js` — Detecção de idioma
  - `langs_section_handler.js` — Renderização de tags de linguagem
  - `speech_tags_handler.js` — Renderização de tags de vídeo
- Skill: `skill_site_codandotv.md` — Guia de desenvolvimento

---

## Arquitetura de Dados (Data-Driven)

A partir da refatoração v5 (Suporte a Internacionalização), todo conteúdo é **data-driven**:

### Fluxo de Renderização
1. **HTML**: Contém apenas `<div id="SECTION_KEY">` vazios — sem conteúdo hard-coded
2. **app.js**: Carrega dados ao `DOMContentLoaded`, chama `fetchXxxData()` de cada módulo
3. **Módulos de dados**: Retornam arrays/objetos com conteúdo estruturado
4. **Renderização**: `app.js` popula `.innerHTML` dos elementos com IDs matching das chaves de dados

### Exemplo: Textos
- Chave em `general_data.js`: `"home.welcome.title"`
- ID em `index.html`: `<h1 id="home_welcome_title"></h1>`
- Renderização: `document.getElementById("home_welcome_title").textContent = data["home.welcome.title"]`

### Exemplo: Creators
- Dados em `content_creators_data.js`: array com `{ name, role, image, linkedin }`
- Renderização em `app.js`: mapeia array em HTML de cards + fallback de iniciais
- ID do container: `id="creators_list"`

### Exemplo: Libraries (Libs)
- Dados em `library_content_data.js`: array com `{ title, description, languages: [], media, video }`
- Função `onLibsContentRender(index)`: muda aba clicada, renderiza conteúdo dinâmico
- Botões de aba renderizados dinamicamente também

### Exemplo: Vídeos (Speech/Talks)
- Dados em `speech_content_data.js`: array com `{ id, title, description, tags: [] }`
- Tags renderizadas por `speech_tags_handler.js` com cores por categoria
- Grid de 6 cards renderizado em `app.js`

---

## Regras de edição (SEMPRE seguir)

- **Nunca usar regex** para substituir HTML — usar `str_replace` exato
- **Sempre verificar** com `grep` antes de editar
- **Script JS**: dentro do `<head>` antes do `</head>` — Cloudflare injeta scripts no final do body e quebra funções globais
- **Funções globais** (ex: `onLibsContentRender`): devem estar no topo do script, fora de qualquer closure
- **Emails**: nunca usar `href="mailto:"` — Cloudflare ofusca ao baixar. Usar `onclick="window.location.href='mai'+'lto:email'"`
- **Nunca** deixar scripts do Cloudflare (`cdn-cgi`) no arquivo
- **Ícones**: usar SVG inline — sem arquivos externos, sem dependência de assets
- **Botões do hero** (WhatsApp + GitHub): `width: 148px; justify-content: center` para ficarem do mesmo tamanho
- **Textos de descrição**: sem hífen (`—`) — soa artificial. Usar ponto final ou vírgula
- **Tags de vídeo**: renderizadas dinamicamente via `speech_tags_handler.js` — cada tag é `<span class="speech-tag tag-NomeDaTag">`
- **IDs de HTML**: devem SEMPRE corresponder às chaves em dados (`section_key_detail` em HTML = `"section.key.detail"` em JS)
- **Renderização dinâmica**: Use `.innerHTML` com cuidado — validar dados antes de renderizar para evitar XSS

---

## Paleta de cores

```
--bg: #080B10
--surface: #0F1318
--card: #141920
--border: rgba(255,255,255,0.07)
--accent: #38b6ff        (azul turquesa)
--accent2: #8c52ff       (lilás)
--primary: #6e35d1       (roxo principal)
--primary-dark: #4c17b9  (roxo escuro / hover)
--odd: #38b6ff           (seções ímpares)
--even: #6e35d1          (seções pares)
--text: #F0F2F5
--muted: #8A909C
```

---

## Fontes

- **Display/corpo**: `Sora`
- **Logo "Codando"**: `Plus Jakarta Sans` weight 800, cor branco `#fff`
- **Logo `<TV/>`**: `Outfit` weight 900, cor `var(--primary)` roxo
- **Mono**: `JetBrains Mono` (labels, badges, section-label)

---

## Estrutura das seções

1. **Nav** — fixo, logo + links de navegação (sem botão inscrever-se)
2. **#home (Hero)** — badge, título Codando`<TV/>`, subtexto, botões (WhatsApp + GitHub com borda roxa, botão YT vermelho grande)
3. **#canal (even-section)** — Conheça o Canal: 3 parágrafos + `<video>` com `assets/videos/conheca_canal.mp4`
4. **#creators (odd-section)** — RV em destaque acima (150px, azul turquesa) + 3 creators abaixo em grid
5. **#comunidade (even-section)** — 4 stat cards + abas de libs + 6 vídeos úteis (speech cards)
6. **#iniciativas (odd-section)** — 4 cards horizontais com mídia à direita (WhatsApp+Discord, Medium, Spotify, Curso KMP)
7. **Footer** — Logo | ícones sociais SVG inline | botão "Fale conosco" | copyright

---

## Creators

| Sigla | Nome | Arquivo | Role |
|-------|------|---------|------|
| RV | Rodrigo Vianna | `assets/images/rodrigo.jpg` | Fundador · Engenheiro Mobile |
| JM | Junior Martins | `assets/images/junior.jpg` | Engenheiro Mobile |
| GM | Gabriel Moro | `assets/images/moro.jpg` | Engenheiro Mobile |
| PA | Pedro Alvarez | `assets/images/pedro.jpg` | Engenheiro Mobile |

Todos têm `onerror` — se imagem não existir, mostra iniciais coloridas.

---

## Libs — Abas da seção Codando Comunidade

| Tab | Título | Lang | Mídia |
|-----|--------|------|-------|
| 0 | CraftD | Android/iOS/Flutter/KMP | `assets/images/libs/CraftD.mp4` (video autoplay) |
| 1 | popcorn-guineapig | Kotlin | `assets/images/libs/popcorn-guineapig.png` |
| 2 | eagle-eye | Dart | `assets/images/libs/eagle-eye.png` |
| 3 | jujubaSVG | Kotlin | `assets/images/libs/jujubaSVG.png` |
| 4 | Netflix | Kotlin | `assets/images/libs/Netflix.png` |

O campo `video: true` no array `data[]` do JS controla se renderiza `<video>` ou `<img>` na aba.

---

## Vídeos úteis para começar (6 cards)

| # | ID YouTube | Título | Tags |
|---|-----------|--------|------|
| 1 | `Biqa9X2LDTo` | Como Entrar em TI: Guia Completo de Carreiras | Carreira |
| 2 | `syEhtDfAbBM` | 8 Estágios de Confiabilidade da IA para Devs | IA |
| 3 | `Co-e1QPD73M` | CraftD: Server Driven UI para Todas as Plataformas | Android, Flutter, iOS |
| 4 | `O9g7RX6OrRI` | Kotzilla no Compose Multiplatform: Setup Completo | Observabilidade |
| 5 | `uLNIxp5YZ9k` | Mockito no Flutter: Testes Unitários com Mocks | Flutter |
| 6 | `Hf7DV8asMT8` | O Que é Kotlin Multiplatform em 10 Minutos | Kotlin |

---

## Tags de vídeo — classes CSS e cores

| Classe | Cor | Uso |
|--------|-----|-----|
| `tag-carreira` | Âmbar `#d97706` | Carreira |
| `tag-ia` | Roxo `#7c3aed` | Inteligência Artificial |
| `tag-android` | Verde `#059669` | Android |
| `tag-flutter` | Azul `#0284c7` | Flutter |
| `tag-ios` | Rosa `#db2777` | iOS |
| `tag-kotlin` | Laranja `#ea580c` | Kotlin / KMP |
| `tag-obs` | Roxo escuro `#6d28d9` | Observabilidade |

Todas com `color: #fff !important` e `border-color: transparent`.

---

## Outras Iniciativas (4 cards)

| Card | Mídia | Links |
|------|-------|-------|
| WhatsApp & Discord | `assets/images/comunidade.png` | WhatsApp: `https://chat.whatsapp.com/BA3c4f1zJifCN9k1c4YaFj` / Discord: `https://discord.gg/zhgzdeTp` |
| Medium | `assets/images/artigos.png` | `https://medium.com/codandotv/all` |
| Spotify | iframe embed `episode/3gCgHlOGJS9ZAlWDUHZhVa` | player direto |
| Curso KMP | iframe YouTube `2_dYJr1s5Ak` | embed direto |

Cards com `min-height: 260px`, mídia com `width: 420px`, `position: relative` e imagem `position: absolute; inset: 0`.

---

## Links e ações

| Item | Link |
|------|------|
| WhatsApp comunidade | `https://chat.whatsapp.com/BA3c4f1zJifCN9k1c4YaFj` |
| Discord | `https://discord.gg/zhgzdeTp` |
| GitHub | `https://github.com/CodandoTV` |
| YouTube | `https://www.youtube.com/c/CodandoTV` |
| LinkedIn | `https://www.linkedin.com/in/rviannaoliveira/` |
| Medium | `https://medium.com/codandotv/all` |
| Email | `codando.tv@gmail.com` (via onclick, não href) |

---

## Footer — ícones sociais

Todos SVG inline, sem arquivos externos. Ordem: YouTube → WhatsApp → LinkedIn → Medium → GitHub.
LinkedIn e Medium usam SVG inline dos ícones oficiais de cada plataforma.

---

## Estrutura de Dados Detalhada

### general_data.js
```javascript
export async function fetchGeneralData() {
  return {
    "home.welcome.title": "Codando<TV/>",
    "home.welcome.subtitle": "...",
    "nav.link.home": "Home",
    "nav.link.canal": "Canal",
    // ... todas as strings da UI
  }
}
```

### content_creators_data.js
```javascript
export async function fetchContentCreatorsData() {
  return [
    { 
      id: "rv",
      name: "Rodrigo Vianna",
      role: "Fundador · Engenheiro Mobile",
      image: "assets/images/rodrigo.jpg",
      linkedin: "https://www.linkedin.com/in/rviannaoliveira/",
      featured: true  // Renderizado maior no topo
    },
    { id: "jm", name: "Junior Martins", ... },
    { id: "gm", name: "Gabriel Moro", ... },
    { id: "pa", name: "Pedro Alvarez", ... }
  ]
}
```

### library_content_data.js
```javascript
export async function fetchLibraryContentData() {
  return [
    {
      id: 0,
      title: "CraftD",
      description: "Server-Driven UI para...",
      languages: ["Android", "iOS", "Flutter", "KMP"],
      media: "assets/images/libs/CraftD.mp4",
      video: true  // true = <video>, false = <img>
    },
    { id: 1, title: "popcorn-guineapig", ... },
    // ... 6 abas total
  ]
}
```

### speech_content_data.js
```javascript
export async function fetchSpeechContentData() {
  return [
    {
      id: "Biqa9X2LDTo",
      title: "Como Entrar em TI: Guia Completo",
      description: "Neste vídeo...",
      tags: ["Carreira"]
    },
    { id: "syEhtDfAbBM", title: "8 Estágios de IA", tags: ["IA"] },
    // ... 6 vídeos total
  ]
}
```

---

## Assets necessários

```
assets/
├── images/
│   ├── rodrigo.jpg
│   ├── junior.jpg
│   ├── moro.jpg
│   ├── pedro.jpg
│   ├── comunidade.png           ← card Outras Iniciativas > WhatsApp & Discord
│   ├── artigos.png              ← card Outras Iniciativas > Medium
│   └── libs/
│       ├── CraftD.mp4           ← demo animado (video autoplay, ~600KB)
│       ├── popcorn-guineapig.png
│       ├── eagle-eye.png
│       ├── jujubaSVG.png
│       └── Netflix.png
├── videos/
│   ├── fundo_hero.mp4           ← vídeo de fundo do hero (~600KB)
│   └── conheca_canal.mp4        ← seção "Conheça o Canal"
├── css/
│   └── style.css
└── js/
    ├── app.js
    ├── data/
    │   ├── general_data.js
    │   ├── content_creators_data.js
    │   ├── library_content_data.js
    │   └── speech_content_data.js
    └── util/
        ├── translation_check.js
        ├── langs_section_handler.js
        └── speech_tags_handler.js
```

**Nenhum arquivo de ícone é necessário** — todos são SVG inline no HTML.

---

## Otimização de vídeo (FFmpeg)

**Vídeos de fundo / hero:**
```bash
ffmpeg -i input.mp4 -vf scale=1280:-2 -vcodec libx264 -crf 32 -an -pix_fmt yuv420p output.mp4
```

**Demos de lib (CraftD.mp4):**
```bash
ffmpeg -i input.mp4 -vf scale=1280:-2 -vcodec libx264 -crf 26 -an -pix_fmt yuv420p output.mp4
```

**GIF → MP4:**
```bash
ffmpeg -i input.gif -vf scale=800:-2 -vcodec libx264 -crf 28 -pix_fmt yuv420p output.mp4
```

---

## Responsivo (mobile ≤ 768px)

- Nav links: `display: none`
- Canal inner: `grid-template-columns: 1fr`
- Libs content: `grid-template-columns: 1fr`
- Speeches grid: `grid-template-columns: 1fr`
- Stats grid: `grid-template-columns: 1fr 1fr`
- Iniciativa card: `flex-direction: column`
- Iniciativa media: `width: 100%; height: 220px; border-radius: 0 0 14px 14px; border-top: 2px solid var(--accent)`

---

## Fluxo de Desenvolvimento (Adições e Mudanças)

### Adicionar um novo creator
1. Salve a imagem em `assets/images/` (ex: `nome.jpg`)
2. Edite `assets/js/data/content_creators_data.js`:
   ```javascript
   { 
     id: "sigla",
     name: "Nome Completo",
     role: "Título · Especialidade",
     image: "assets/images/nome.jpg",
     linkedin: "https://linkedin.com/in/username",
     featured: false  // true apenas para o destaque no topo
   }
   ```
3. Se a imagem quebrar, o fallback renderiza as 2 primeiras iniciais com cor da paleta

### Adicionar uma nova lib/projeto
1. Salve o arquivo em `assets/images/libs/` (MP4 para vídeo, PNG/JPG para imagem)
2. Edite `assets/js/data/library_content_data.js`:
   ```javascript
   {
     id: 5,  // próximo número sequencial
     title: "Nome do Projeto",
     description: "Breve descrição...",
     languages: ["Kotlin", "Flutter"],  // tags de linguagem
     media: "assets/images/libs/projeto.mp4",
     video: true  // true para MP4, false para imagem
   }
   ```
3. Um novo botão de aba será renderizado automaticamente em `app.js`

### Adicionar um novo vídeo (YouTube)
1. Copie o ID da URL de embed: `youtube.com/embed/{ID_AQUI}`
2. Edite `assets/js/data/speech_content_data.js`:
   ```javascript
   {
     id: "ID_YOUTUBE",
     title: "Título do Vídeo",
     description: "Descrição/evento onde foi apresentado...",
     tags: ["Categoria1", "Categoria2"]  // veja tabela de tags abaixo
   }
   ```
3. As tags serão coloridas automaticamente por `speech_tags_handler.js`

### Adicionar uma nova string de UI (i18n)
1. Edite `assets/js/data/general_data.js`:
   ```javascript
   {
     "section.chave.subchave": "Texto em Português",
     // ...
   }
   ```
2. No HTML, crie um elemento com ID matching:
   ```html
   <h1 id="section_chave_subchave"></h1>
   ```
3. `app.js` preencherá automaticamente ao carregar

### Adicionar suporte a novo idioma
1. Crie arquivo `assets/js/data/general_data_en_US.js` (exemplo: inglês)
2. Copie estrutura de `general_data.js` com textos traduzidos
3. Edite `assets/js/util/translation_check.js` com lógica de detecção
4. Wire up um seletor de idioma no HTML (ainda não implementado na UI)

---

## Como usar esse MD para criar o site (guia de gravação)

O fluxo recomendado para recriar o site a partir do zero:

1. **Anexe este MD + o HTML template inicial** no chat com o Claude
2. Peça seção por seção — não tudo de uma vez. Exemplo: "Cria a seção Hero conforme o MD"
3. Para cada seção, valide visualmente antes de avançar
4. Use `python3 -m http.server 8080` para testar localmente durante a gravação
5. **Estruture em camadas**:
   - Primeiro: HTML com placeholders (`<div id="section_key">`)
   - Segundo: CSS com design system
   - Terceiro: Módulos de dados (`general_data.js`, etc)
   - Quarto: `app.js` com lógica de renderização
   - Quinto: Adicione os assets reais por último

O resultado não será pixel-perfect, mas ficará muito próximo com o MD como guia. A abordagem data-driven facilita manutenção e adições futuras.

---

## Referências visuais das seções

Descreve o visual esperado de cada seção para orientar o Claude:

**#home (Hero)**
Fundo escuro com grid sutil de linhas roxas e glow roxo central. Vídeo mp4 com opacity 0.35 atrás. Badge pill azul turquesa com ponto piscando. Título gigante com "Codando" branco e `<TV/>` roxo. Dois botões outline roxo (mesmo tamanho) + botão vermelho YouTube grande com ícone de play à esquerda.

**#canal (Conheça o Canal)**
Layout duas colunas: texto à esquerda (3 parágrafos + link vermelho YouTube) e vídeo à direita com borda roxa. Fundo `--surface`.

**#creators (CodandoCreators)**
Centralizado. Um avatar grande (150px) com borda azul turquesa acima. Três avatares menores (120px) com borda azul em grid abaixo. Fallback de iniciais coloridas se imagem não carregar.

**#comunidade (Codando Comunidade)**
4 stat cards em grid. Abaixo, abas horizontais (tabs) que trocam o conteúdo: info da lib à esquerda + imagem/vídeo à direita em grid 2 colunas. Abaixo das abas, grid de 6 cards de vídeo do YouTube com tags coloridas e descrição.

**#iniciativas (Outras Iniciativas)**
4 cards horizontais empilhados. Cada card: texto à esquerda (`flex: 1`) e mídia à direita (420px, borda azul turquesa à esquerda). Mídia pode ser imagem, iframe Spotify ou iframe YouTube.

**Footer**
Três elementos em linha: logo | 5 ícones sociais SVG inline | botão "Fale conosco" azul turquesa. Abaixo, linha fina com copyright.

---

## Decisões de CSS relevantes

Detalhes que o Claude pode tomar diferente sem esse guia:

```css
/* Botões do hero — mesmo tamanho */
.btn-outline { width: 148px; justify-content: center; }

/* Seções alternadas de cor */
.even-section → cor roxa (--even: #6e35d1)
.odd-section  → cor azul (--odd: #38b6ff)

/* Libs — grid 2 colunas */
.libs-content { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }

/* Iniciativas — imagem preenche o container */
.iniciativa-media { display: block; position: relative; }
.iniciativa-media img { position: absolute; inset: 0; object-fit: cover; }

/* Iniciativas — borda lateral, não ao redor */
.iniciativa-media { border-left: 2px solid var(--accent); border-radius: 0 14px 14px 0; }

/* Speech grid — cards maiores para boa resolução no YouTube */
.speeches-grid { grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); }

/* Section label com linha decorativa */
.section-label::after { content: ''; flex: 1; max-width: 60px; height: 2px; background: currentColor; }

/* Nav padding responsivo */
nav { padding: 0 max(5%, calc((100% - 1280px) / 2)); }
```

---

## Bug recorrente — Abas não clicam (selectLib is not defined)

**Causa**: Cloudflare injeta `email-decode.min.js` no final do body ao baixar, quebrando o script seguinte.

**Solução definitiva**: script dentro do `<head>`, antes do `</head>`. O Cloudflare não interfere ali.

---

## Testar localmente

```bash
cd /caminho/da/pasta/site-codandotv
python3 -m http.server 8080
```
Abre `http://localhost:8080/index.html` — vídeos e iframes funcionam normalmente.

---

## Checklist para novas features

Ao adicionar features (novos vídeos, creators, libs, etc):

- [ ] Dados adicionados ao módulo correto em `assets/js/data/`
- [ ] IDs em HTML (se novos) correspondem às chaves dos dados
- [ ] `app.js` renderiza o novo conteúdo ou função handler atualizada
- [ ] Imagens/vídeos testados localmente (`python3 -m http.server 8000`)
- [ ] Sem `href="mailto:"` — usar onclick com ofuscação
- [ ] Sem regex em edições HTML — sempre `str_replace` exato
- [ ] Funções globais fora de closures (acessíveis para `onclick=`)
- [ ] Scripts no `<head>`, antes do `</head>`

---

## Debugging & Troubleshooting

### Aba de libs não clica (selectLib is not defined)
→ Verificar se `onLibsContentRender()` está no topo do script, fora de closure.
→ Scripts devem estar em `<head>`, não no body (Cloudflare interfere).

### Imagem não aparece / mostra erro
→ Verificar caminho relativo (`assets/images/...`)
→ Elemento deve ter `onerror="this.style.display='none'"` para fallback gracioso
→ Para creators: fallback renderiza iniciais coloridas automaticamente

### Vídeo não toca / carrega
→ Verificar caminho do arquivo (`assets/videos/...`)
→ Atributos: `autoplay muted loop playsinline` para mobile
→ Iframe YouTube: URL deve ser `https://www.youtube.com/embed/{ID}` (não `?v=` format)

### Texto não aparece
→ ID do elemento em HTML deve ser `snake_case`: `home_welcome_title`
→ Chave em dados em `dot.notation`: `"home.welcome.title"`
→ Verificar `app.js` está importando o módulo de dados

### Tag de vídeo tem cor errada
→ Verificar nome exato em `speech_content_data.js` (case-sensitive)
→ Classe CSS deve ser `tag-NomeExato` (camelCase)
→ Tabela de cores em `assets/js/util/speech_tags_handler.js`

---

## Próximos passos e roadmap

- [ ] Ativar seletor de idioma na UI (i18n completa)
- [ ] Lazy load para imagens grandes (se necessário)
- [ ] Adicionar Dark Mode toggle (base já pronta com CSS vars)
- [ ] Analytics (Plausible, Fathom, etc)
- [ ] Formulário de contato com envio de email
- [ ] Hospedar no GitHub + Vercel/Netlify ou GitHub Pages

---

## Performance & Hosting

- **Sem frameworks externos** — carregamento instantâneo com JS mínimo
- **Cloudflare DNS** — CNAME aponta para GitHub Pages; scripts injetados no body podem quebrar funções globais (manter scripts no `<head>`)
- **Autoplay de vídeos** — atributos `autoplay muted loop playsinline` para suporte mobile
- **Imagens não têm lazy-load** — contagem pequena, iframes carregam sob demanda

---

## Contexto da última refatoração (PR #5 — i18n)

- Todo texto estático movido para `general_data.js`; HTML contém apenas placeholders com `id`
- Creators, libs e speeches agora são dados estruturados, renderizados dinamicamente por `app.js`
- Adicionados `langs_section_handler.js` e `speech_tags_handler.js` como utilitários de renderização
- `app.js` popula todo conteúdo no `DOMContentLoaded`, reduzindo o HTML em ~1300 linhas
- Nenhuma breaking change — comportamento do site estático preservado
