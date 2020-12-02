function reverseWord(word) {
    if (!word || !word.length) {
        throw Error("Invalid word.")
    }

    return word.split("").reverse().join("")
}

function reverseSentence(sentence) {
    if (!sentence || !sentence.length) {
        throw Error("Invalid String.")
    }

    return sentence.split(" ").map(word => reverseWord(word)).join(" ")
}

console.log(reverseWord("junyiacademy"))
console.log(reverseSentence("flipped class room is important"))