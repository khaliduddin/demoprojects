function solution(message, K) {
    // write your code in JavaScript (Node.js 8.9.4)

    let sampleText = "The quick brown fox jumps over the lazy dog"
    const limit = 39

    let words = sampleText.split(" ")

    console.log(sampleText.length)

    let finalText = ""

    for(let i=0; i<words.length; i++){
        console.log(finalText.length)
        
        console.log(words[i])

        if((finalText.length + words[i].length) <= limit) {
            finalText = finalText + " " + words[i]
            finalText = finalText.trim()            
            continue
        } else if (finalText.length > limit) {            
            finalText = finalText.substring(1, finalText.lastIndexOf(" "))
            break
        } else {
            break
        }

        //console.log(finalText)
    }    

    finalText = finalText.trim()
    
    console.log('Final Text > ', finalText)
    console.log('Final Text > ', finalText.length)
}