function getSpeechTags(youtubeCategories) {
    var content = '<div class="speech-tags">';
    youtubeCategories.forEach(c => {
        if (c === 'Carreira' || c === 'Career') {
            content += '<div class="speech-tag tag-carreira">' + c + '</div>';
        } else if (c === 'IA' || c === 'AI') {
            content += '<div class="speech-tag tag-ia">' + c + '</div>';
        } else if (c === 'Android') {
            content += '<div class="speech-tag tag-android">' + c + '</div>';
        } else if (c === 'Flutter') {
            content += '<div class="speech-tag tag-flutter">' + c + '</div>';
        } else if (c === 'iOS') {
            content += '<div class="speech-tag tag-ios">' + c + '</div>';
        } else if (c === 'Kotlin') {
            content += '<div class="speech-tag tag-kotlin">' + c + '</div>';
        } else if (c === 'CMP') {
            content += '<div class="speech-tag tag-cmp">' + c + '</div>';
        } else if (c === 'Observabilidade' || c === 'Observability') {
            content += '<div class="speech-tag tag-observabilidade">' + c + '</div>';
        }
    });
    content += '</div>';
    return content;
}
