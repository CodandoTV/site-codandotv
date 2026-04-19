function langsSectionHtml(support) {
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
