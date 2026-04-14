var data = [
    {
        title: 'CraftD',
        support: ['Android', 'iOS', 'Flutter', 'CMP'],
        desc: 'Um framework para implementar Server-Driven UI de forma rápida e simples em Android, iOS, Flutter e KMP. Permite que as interfaces sejam controladas pelo servidor, tornando as atualizações mais ágeis e sem necessidade de publicar uma nova versão do app.',
        img: 'assets/images/libs/CraftD.mp4',
        video: true,
        netflix: false
    },
    {
        title: 'popcorn-guineapig',
        support: ['Gradle'],
        desc: 'Um plugin leve para forçar regras de arquitetura em projetos multi-módulo. Garante que as fronteiras entre módulos sejam respeitadas sem esforço.',
        img: 'assets/images/libs/popcorn-guineapig.png',
        video: false,
        netflix: false
    },
    {
        title: 'eagle-eye',
        support: ['Dart'],
        desc: 'Uma ferramenta CLI em Dart para enforçar regras de arquitetura em projetos Flutter/Dart. Mantém o código organizado e as dependências sob controle.',
        img: 'assets/images/libs/eagle-eye.png',
        video: false,
        netflix: false
    },
    {
        title: 'jujubaSVG',
        support: ['Android', 'Flutter'],
        desc: 'Uma biblioteca para manipular arquivos SVG em apps Android e Flutter, criada pela CodandoTV para facilitar o uso de SVGs dinâmicos no mobile.',
        img: 'assets/images/libs/jujubaSVG.png',
        video: false,
        netflix: false
    },
    {
        title: 'Netflix',
        support: ['Android', 'CMP'],
        desc: 'StreamPlayerApp virou dois projetos de estudo para a comunidade, com exemplos de arquitetura moderna e boas práticas em Android nativo e Kotlin Multiplatform.',
        img: 'assets/images/libs/Netflix.png',
        video: false,
        netflix: true
    }
];

function _langsSectionHtml(support) {
    var langHtml = '';

    for (var i = 0; i < support.length; i++) {
        var margin = i === 0 ? '0 0 0 0' : '0 0 0 12px';
        var lang = support[i];
        var dotColor = '#38b6ff';
        switch (lang) {
            case 'Android':
                dotColor = '#2b8c38';
                break;
            case 'iOS':
                lang = 'iOS';
                dotColor = '#ff9c38';
                break;
            case 'Flutter':
                dotColor = '#38b6ff';
                break;
            case 'KMP':
                dotColor = '#B069FF';
                break;
            case 'CMP':
                dotColor = '#B069FF';
                break;
            case 'Gradle':
                dotColor = '#ff3838';
                break;
            case 'Dart':
                dotColor = '#38b6ff';
                break;
        }

        langHtml += '<div class="libs-lang">' +
            '<span style="width:10px;height:10px;border-radius:50%;background:' + dotColor + ';display:inline-block;margin:' + margin + '">' +
            '</span>' +
            lang +
            '</div>';
    }

    return langHtml;
}

function selectLib(i, btn) {
    document.querySelectorAll('.libs-tab').forEach(function (t) { t.classList.remove('active'); });
    btn.classList.add('active');
    var d = data[i];
    var lc = document.getElementById('libsContent');
    if (!lc) return;
    var langHtml = _langsSectionHtml(d.support);

    var titleHtml = d.netflix
        ? '<div style="display:flex;gap:12px;margin-bottom:12px;flex-wrap:wrap;"><div style="flex:1;min-width:140px;background:#1a1f2a;border:1px solid rgba(56,182,255,.2);border-radius:10px;padding:14px;"><div style="font-size:1rem;font-weight:800;color:#F0F2F5;margin-bottom:4px;">Netflix-Android</div><div style="font-size:.72rem;color:#8A909C;">&#9733; 59</div></div><div style="flex:1;min-width:140px;background:#1a1f2a;border:1px solid rgba(56,182,255,.2);border-radius:10px;padding:14px;"><div style="font-size:1rem;font-weight:800;color:#F0F2F5;margin-bottom:4px;">Netflix-KMP</div><div style="font-size:.72rem;color:#8A909C;">&#9733; 27</div></div></div>'
        : '<div class="libs-title">' + d.title + '</div>';
    var mediaHtml = d.video
        ? '<video autoplay muted loop playsinline style="width:100%;height:100%;object-fit:cover;border-radius:10px;"><source src="' + d.img + '" type="video/mp4"></video>'
        : '<img src="' + d.img + '" alt="' + d.title + '" style="width:100%;height:100%;object-fit:cover;border-radius:10px;" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'"><div style="display:none;align-items:center;justify-content:center;width:100%;height:100%;color:var(--muted);font-size:0.72rem;font-family:var(--font-mono);letter-spacing:.06em;">print / demo em breve</div>';
    lc.innerHTML = '<div class="libs-info">' + langHtml + titleHtml + '<p class="libs-desc">' + d.desc + '</p></div><div class="libs-media" style="background:#0a0e14;padding:0;overflow:hidden;">' + mediaHtml + '</div>';
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.fade-in').forEach(function (el) { el.classList.add('hidden'); });
    var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (e.isIntersecting) { e.target.classList.remove('hidden'); e.target.classList.add('visible'); obs.unobserve(e.target); }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(function (el) { obs.observe(el); });

    // Autoplay vídeo "Conheça o Canal" ao entrar na viewport
    var canalVideo = document.getElementById('canal-video');
    if (canalVideo) {
        var videoObs = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) {
                    canalVideo.play();
                } else {
                    canalVideo.pause();
                }
            });
        }, { threshold: 0.5 });
        videoObs.observe(canalVideo);
    }
});