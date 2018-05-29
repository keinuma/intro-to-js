let escapeHtml = (str) => {
    if (!str) { return ''; }
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/'/g, '&#39;');
    return str
};


// 分解されたtemplatesとvaluesを順に連結
let e = (templates, ...values) => {
    let result = '';
    for (let i = 0, len = templates.length; i < len; i++) {
        console.log(templates[i], values[i]);
        result += templates[i] + escapeHtml(values[i]);
    }
    return result;
};

// テンプレート文字列をエスケープ処理
let name = '<"Mario" & \'Luigi\'>';
console.log(e`こんにちは、${name}さん`);
