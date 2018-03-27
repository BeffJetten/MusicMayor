
var elements = document.getElementsByTagName('*');
var lastNameSeen; //variable to handle more complicated regex logic
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            if (text.includes("Betten") || text.includes("betten")){
               lastNameSeen = true;
            }
            var replacedText = text.replace(/Jeff Betten|Jeff|Betten/i, 'The straight up pussy bitch');

            if (replacedText !== text && lastNameSeen == true) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
