export default (string) => { 
    console.log("getKeyWords!")
    const words = string.split(" ");
    console.log("words=", words);
    const keywords = words.join('+');
    console.log("keywords=", keywords);
    return keywords;
}