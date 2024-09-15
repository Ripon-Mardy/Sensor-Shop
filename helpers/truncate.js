export default function truncate(str, limit) {
    const noTags = str.replace(/<\/?[^>]+(>|$)/g, "");

    const parser = new DOMParser();
    let decodedString = parser.parseFromString(noTags, "text/html").documentElement.textContent;
    decodedString = decodedString.replace(/&nbsp;/g, " ");

    if (decodedString.length > limit) {
        let truncated = decodedString.substring(0, limit);

        if (decodedString.charAt(limit) !== ' ') {
            truncated = truncated.substring(0, truncated.lastIndexOf(" "));
        }

        decodedString = truncated + "...";
    }
    
    return decodedString;
}
