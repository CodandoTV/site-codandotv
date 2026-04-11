var data = [
    { title: 'CraftD', desc: 'Um framework para implementar Server-Driven UI de forma rápida e simples em Android, iOS, Flutter e KMP. Permite que as interfaces sejam controladas pelo servidor, tornando as atualizações mais ágeis e sem necessidade de publicar uma nova versão do app.', netflix: false, dart: false, craftd: true, img: 'assets/images/libs/CraftD.mp4', video: true },
    { title: 'popcorn-guineapig', desc: 'Um plugin leve para forçar regras de arquitetura em projetos multi-módulo. Garante que as fronteiras entre módulos sejam respeitadas sem esforço.', netflix: false, dart: false, craftd: false, img: 'assets/images/libs/popcorn-guineapig.png', video: false },
    { title: 'eagle-eye', desc: 'Uma ferramenta CLI em Dart para enforçar regras de arquitetura em projetos Flutter/Dart. Mantém o código organizado e as dependências sob controle.', netflix: false, dart: true, craftd: false, img: 'assets/images/libs/eagle-eye.png', video: false },
    { title: 'jujubaSVG', desc: 'Uma biblioteca para manipular arquivos SVG em apps Android e Flutter, criada pela CodandoTV para facilitar o uso de SVGs dinâmicos no mobile.', netflix: false, dart: false, craftd: false, img: 'assets/images/libs/jujubaSVG.png', video: false },
    { title: 'Netflix', desc: 'StreamPlayerApp virou dois projetos de estudo para a comunidade, com exemplos de arquitetura moderna e boas práticas em Android nativo e Kotlin Multiplatform.', netflix: true, dart: false, craftd: false, img: 'assets/images/libs/Netflix.png', video: false }
];

function selectLib(i, btn) {
    document.querySelectorAll('.libs-tab').forEach(function (t) { t.classList.remove('active'); });
    btn.classList.add('active');
    var d = data[i];
    var lc = document.getElementById('libsContent');
    if (!lc) return;
    var dotColor = d.dart ? '#00B4AB' : '#7C52FF';
    var lang = d.dart ? 'Dart' : 'Kotlin';
    var langHtml;
    if (d.craftd) {
        langHtml = '<div class="libs-lang"><span style="width:10px;height:10px;border-radius:50%;background:#7C52FF;display:inline-block;margin-right:4px;"></span>Android <span style="width:10px;height:10px;border-radius:50%;background:#38b6ff;display:inline-block;margin:0 4px 0 8px;"></span>iOS <span style="width:10px;height:10px;border-radius:50%;background:#54C5F8;display:inline-block;margin:0 4px 0 8px;"></span>Flutter <span style="width:10px;height:10px;border-radius:50%;background:#B069FF;display:inline-block;margin:0 4px 0 8px;"></span>KMP</div>';
    } else {
        langHtml = '<div class="libs-lang"><span style="width:10px;height:10px;border-radius:50%;background:' + dotColor + ';display:inline-block;margin-right:6px;"></span>' + lang + '</div>';
    }
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