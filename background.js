var words = {
    'stay': '留',
    'stop': '停',
    'document' : '文件',
    'documents' : '文件s',
    'door': '門',
    'doors': '門s',
    'computer': '電腦',
    'domestic': '國內',
    'apple': '蘋果',
    'user': '用戶',
    'users': '用戶s',
    'dictionary': '字典',
    'dictionaries': '字典s',
    'battery': '電池',
    'batteries': '電池s',
    'inside': '裡面',
    'price': '價格',
    'prices': '價格s',
    'status': '情況',
    'situation': '情況',
    'search': '搜索',
    'detail': '詳情',
    'details': '詳情s',
};

function walk(node, fn) {
    if (node) do {
        if (node.tagName == 'A') {
            // do nothing
        } if (node.nodeType == Node.TEXT_NODE) {
          fn(node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          walk(node.firstChild, fn);
        }
    } while (node = node.nextSibling);
}

function repl(match, offset, string) {
    match = match.toLowerCase();
    if (words[match]) {
        return words[match];
    }
    return match;
}

// Create the regular expression
var buf = [];
for (var key in words) {
    buf.push(key);
}
var restr = "\\b(" + buf.join("|") + ")\\b";
console.log(restr);
var re = new RegExp(restr, "gi");
console.log(re);

// Make the changes
walk(document.body, function(node) {
    node.nodeValue = node.nodeValue.replace(re, repl);
});
