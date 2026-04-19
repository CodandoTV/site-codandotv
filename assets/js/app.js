

function _onLoadContentCreators() {
    var cc = document.getElementById('codandotv_creators');
    if (!cc) return;

    fetchContentCreatorsData().forEach(function (c, i) {
        var cardHtml = '<div class="creator-card fade-in" style="transition-delay: ' + ((i + 1) * 0.1) + 's;">' +
            '<a href="' + c.linkedin + '" target="_blank" style="text-decoration:none;">' +
            '<div class="creator-avatar-sm">' +
            '<img src="' + c.image + '" alt="' + c.name + '" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\';">' +
            '<div class="avatar-placeholder" style="display:none;font-family:var(--font-mono);font-size:1.1rem;font-weight:700;color:var(--accent);">' +
            c.name.split(' ').map(n => n[0]).join('') +
            '</div>' +
            '</div>' +
            '</a>' +
            '<div class="creator-card-name">' + c.name + '</div>' +
            '<div class="creator-card-role">' + c.role + '</div>' +
            '</div>';
        cc.innerHTML += cardHtml;
    });
}

function _onLoadSpeechContent() {
    var sc = document.getElementById('speeches-content');
    if (!sc) return;

    fetchSpeechContentData().forEach(function (s, i) {
        var cardHtml = '<div class="speech-card fade-in" style="transition-delay: ' + ((i + 1) * 0.1) + 's;">' +
            '<div class="video-embed" style="border-radius:12px 12px 0 0;">' +
            '<iframe src="' + s.youtubeUrl + '" title="' + s.youtubeTitle + '" allowfullscreen ' +
            'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>' +
            '</div>' +
            '<div class="speech-info">' +
            getSpeechTags(s.youtubeCategories) +
            '<div class="speech-title">' + s.youtubeTitle + '</div>' +
            '<div class="speech-event">' + s.youtubeDescription + '</div>' +
            '</div>' +
            '</div>';
        sc.innerHTML += cardHtml;
    });
}

function onLibsContentRender(i, btn) {
    document.querySelectorAll('.libs-tab').forEach(function (t) { t.classList.remove('active'); });
    btn.classList.add('active');
    const data = fetchLibraryContentData();
    var d = data[i];
    var lc = document.getElementById('libsContent');
    if (!lc) return;
    var langHtml = langsSectionHtml(d.support);

    var titleHtml = d.netflix
        ? '<div style="display:flex;gap:12px;margin-bottom:12px;flex-wrap:wrap;"><div style="flex:1;min-width:140px;background:#1a1f2a;border:1px solid rgba(56,182,255,.2);border-radius:10px;padding:14px;"><div style="font-size:1rem;font-weight:800;color:#F0F2F5;margin-bottom:4px;">Netflix-Android</div><div style="font-size:.72rem;color:#8A909C;">&#9733; 59</div></div><div style="flex:1;min-width:140px;background:#1a1f2a;border:1px solid rgba(56,182,255,.2);border-radius:10px;padding:14px;"><div style="font-size:1rem;font-weight:800;color:#F0F2F5;margin-bottom:4px;">Netflix-KMP</div><div style="font-size:.72rem;color:#8A909C;">&#9733; 27</div></div></div>'
        : '<div class="libs-title">' + d.title + '</div>';
    var mediaHtml = d.video
        ? '<video autoplay muted loop playsinline style="width:100%;height:100%;object-fit:cover;border-radius:10px;"><source src="' + d.img + '" type="video/mp4"></video>'
        : '<img src="' + d.img + '" alt="' + d.title + '" style="width:100%;height:100%;object-fit:cover;border-radius:10px;" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'"><div style="display:none;align-items:center;justify-content:center;width:100%;height:100%;color:var(--muted);font-size:0.72rem;font-family:var(--font-mono);letter-spacing:.06em;">print / demo em breve</div>';
    lc.innerHTML = '<div class="libs-info">' + langHtml + titleHtml + '<p class="libs-desc">' + d.desc + '</p></div><div class="libs-media" style="background:#0a0e14;padding:0;overflow:hidden;">' + mediaHtml + '</div>';
}

document.addEventListener('DOMContentLoaded', function () {
    const generalData = fetchGeneralData();
    document.getElementById("home_topbar_home").textContent = generalData["home.topbar.home"];
    document.getElementById("home_topbar_codandocreators").textContent = generalData["home.topbar.codandocreators"];
    document.getElementById("home_topbar_community").textContent = generalData["home.topbar.community"];
    document.getElementById("home_topbar_initiatives").textContent = generalData["home.topbar.initiatives"];
    document.getElementById("home_welcome_title").textContent = generalData["home.welcome.title"];
    document.getElementById("home_welcome_description").textContent = generalData["home.welcome.description"];
    document.getElementById("home_welcome_youtube_title").textContent = generalData["home.welcome.youtube_title"];
    document.getElementById("home.welcome.youtube_subtitle").textContent = generalData["home.welcome.youtube_subtitle"];
    document.getElementById("home_community_title").textContent = generalData["home.community.title"];
    document.getElementById("home_community_description_part1").textContent = generalData["home.community.description_part1"];
    document.getElementById("home_community_description_part2").textContent = generalData["home.community.description_part2"];
    document.getElementById("home_community_description_part3").textContent = generalData["home.community.description_part3"];
    document.getElementById("home_community_header_part1").textContent = generalData["home.community.header_part1"];
    document.getElementById("home_community_header_part2").textContent = generalData["home.community.header_part2"];
    document.getElementById("home_codandocreators_title").textContent = generalData["home.codandocreators.title"];
    document.getElementById("home_codandocreators_description").textContent = generalData["home.codandocreators.description"];
    document.getElementById("home_codandocreators_rods_description").textContent = generalData["home.codandocreators.rods.description"];
    document.getElementById("home_initiatives_title").textContent = generalData["home.initiatives.title"];
    document.getElementById("home_initiatives_header_part2").textContent = generalData["home.initiatives.header_part2"];
    document.getElementById("home_initiatives_description").textContent = generalData["home.initiatives.description"];
    document.getElementById("home_initiatives_see_on_github").textContent = generalData["home.initiatives.see_on_github"];
    document.getElementById("home_initiatives_stars_description").textContent = generalData["home.initiatives.stars_description"];
    document.getElementById("home_initiatives_open_source_description").textContent = generalData["home.initiatives.open_source_description"];
    document.getElementById("home_initiatives_downloads_description").textContent = generalData["home.initiatives.downloads_description"];
    document.getElementById("home_initiatives_contributors_description").textContent = generalData["home.initiatives.contributors_description"];
    document.getElementById("home_initiatives_youtube_title").textContent = generalData["home.initiatives.youtube_title"];
    document.getElementById("home_initiatives_youtube_header_part1").textContent = generalData["home.initiatives.youtube_header_part1"];
    document.getElementById("home_initiatives_youtube_header_part2").textContent = generalData["home.initiatives.youtube_header_part2"];
    document.getElementById("home_initiatives_contact_title").textContent = generalData["home.initiatives.contact_title"];
    document.getElementById("home_initiatives_contact_header_part1").textContent = generalData["home.initiatives.contact_header_part1"];
    document.getElementById("home_initiatives_contact_header_part2").textContent = generalData["home.initiatives.contact_header_part2"];
    document.getElementById("home_initiatives_contact_description").textContent = generalData["home.initiatives.contact_description"];
    document.getElementById("home_initiatives_contact_community").textContent = generalData["home.initiatives.contact_community"];
    document.getElementById("home_initiatives_contact_community_description").textContent = generalData["home.initiatives.contact_community_description"];
    document.getElementById("home_initiatives_contact_articles").textContent = generalData["home.initiatives.contact_articles"];
    document.getElementById("home_initiatives_contact_articles_read_more").textContent = generalData["home.initiatives.contacts_articles_read_more"];
    document.getElementById("home_initiatives_contact_articles_description").textContent = generalData["home.initiatives.contact_articles_description"];
    document.getElementById("home_initiatives_contact_podcast").textContent = generalData["home.initiatives.contact_podcast"];
    document.getElementById("home_initiatives_contact_podcast_description").textContent = generalData["home.initiatives.contact_podcast_description"];
    document.getElementById("home_initiatives_contact_course").textContent = generalData["home.initiatives.contact_course"];
    document.getElementById("home_initiatives_contact_course_read_more").textContent = generalData["home.initiatives.contact_course_read_more"];
    document.getElementById("home_initiatives_contact_course_header").textContent = generalData["home.initiatives.contact_course_header"];
    document.getElementById("home_initiatives_contact_course_description").textContent = generalData["home.initiatives.contact_course_description"];
    document.getElementById("home_initiatives_contact_course_quote").textContent = generalData["home.initiatives.contact_course_quote"];
    document.getElementById("home_get_in_touch_title").textContent = generalData["home.get_in_touch.title"];
    document.getElementById("home_join_on_whatsapp").textContent = generalData["home.join_whatsapp"];
    document.getElementById("home_join_on_discord").textContent = generalData["home.join_discord"];

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

    onLibsContentRender(0, document.querySelector('.libs-tab.active'));
    _onLoadContentCreators();
    _onLoadSpeechContent();
});