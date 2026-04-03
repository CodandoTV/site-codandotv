# CodandoTV — Skill do Projeto

## Arquivos principais
- Site: `index.html` — HTML/CSS/JS em arquivo único
- Skill: `SKILL_codandotv.md`

---

## Regras de edição (SEMPRE seguir)

- **Nunca usar regex** para substituir HTML — usar `str_replace` exato
- **Sempre verificar** com `grep` antes de editar
- **Script JS**: dentro do `<head>` antes do `</head>` — Cloudflare injeta scripts no final do body e quebra funções globais
- **Funções globais** (ex: `selectLib`): devem estar no topo do script, fora de qualquer closure
- **Emails**: nunca usar `href="mailto:"` — Cloudflare ofusca ao baixar. Usar `onclick="window.location.href='mai'+'lto:email'"`
- **Nunca** deixar scripts do Cloudflare (`cdn-cgi`) no arquivo
- **Ícones**: usar SVG inline — sem arquivos externos, sem dependência de assets
- **Botões do hero** (WhatsApp + GitHub): `width: 148px; justify-content: center` para ficarem do mesmo tamanho
- **Textos de descrição**: sem hífen (`—`) — soa artificial. Usar ponto final ou vírgula
- **Tags de vídeo**: cada tag é um `<span class="speech-tag tag-NomeDaTag">` separado, com cor sólida e texto branco

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
└── videos/
    ├── fundo1.mp4               ← vídeo de fundo do hero (~600KB)
    └── conheca_canal.mp4        ← seção "Conheça o Canal"
```

Nenhum arquivo de ícone é necessário — todos são SVG inline no HTML.

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

## Como usar esse MD para criar o site (guia de gravação)

O fluxo recomendado para recriar o site a partir do zero:

1. **Anexe este MD + o HTML template inicial** no chat com o Claude
2. Peça seção por seção — não tudo de uma vez. Exemplo: "Cria a seção Hero conforme o MD"
3. Para cada seção, valide visualmente antes de avançar
4. Use `python3 -m http.server 8080` para testar localmente durante a gravação
5. Adicione os assets reais por último — o site funciona com placeholders/onerror antes disso

O resultado não será pixel-perfect, mas ficará muito próximo com o MD como guia.

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

## Próximos passos
- Hospedar no GitHub + Vercel/Netlify
