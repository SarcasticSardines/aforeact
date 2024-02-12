async function HelloFetch(userName){
    const promise = await fetch(`https://allforoneapi.azurewebsites.net/api/SayHello/GetName/${userName}`)
    const data = await promise.text();
    return data;
}

async function SumFetch(num1, num2){
    const promise = await fetch (`https://allforoneapi.azurewebsites.net/api/Sums/GetNumbers/${num1}/${num2}`)
    const data = await promise.text();
    return data;
}

async function SentenceFetch(myName, myZodiac){
    const promise = await fetch (`https://allforoneapi.azurewebsites.net/api/MakeSentence/GetBoth/${myName}/${myZodiac}`)
    const data = await promise.text();
    return data;
}

async function GreaterFetch(numA, numB){
    const promise = await fetch (`https://allforoneapi.azurewebsites.net/api/Alligator/GorL/${numA}/${numB}`)
    const data = await promise.text();
    return data;
}

async function MadFetch(adject1, charaName, adject2, noun1, noun2, noun3, color1, noun4, adject3, noun5, adject4, onomat1, adject5, color2, noun6, noun7){
    const promise = await fetch (`https://allforoneapi.azurewebsites.net/api/MadLibs/Madness/${adject1}/${charaName}/${adject2}/${noun1}/${noun2}/${noun3}/${color1}/${noun4}/${adject3}/${noun5}/${adject4}/${onomat1}/${adject5}/${color2}/${noun6}/${noun7}`)
    const data = await promise.text();
    return data;
}

async function EOFetch(myNum){
    const promise = await fetch (`https://allforoneapi.azurewebsites.net/api/OddorEven/GetEorO/${myNum}`)
    const data = await promise.text();
    return data;
}

async function RAlphaFetch(reverseAlpha){
    const promise = await fetch (`https://allforoneapi.azurewebsites.net/api/ReverseAlpha/GetRAlpha/${reverseAlpha}`)
    const data = await promise.text();
    return data;
}

async function RNumFetch(reverseNum){
    const promise = await fetch (`https://allforoneapi.azurewebsites.net/api/ReverseNum/GetRNum/${reverseNum}`)
    const data = await promise.text();
    return data;
}

async function MagicFetch(myQuestion){
    const promise = await fetch (`https://allforoneapi.azurewebsites.net/api/Magic8/GetMagic/${myQuestion}`)
    const data = await promise.text();
    return data;
}

async function FoodFetch(myChoice){
    const promise = await fetch (`https://allforoneapi.azurewebsites.net/api/FeedMe/GetFood/${myChoice}`)
    const data = await promise.text();
    return data;
}


export {HelloFetch}
export {SumFetch}
export {SentenceFetch}
export {GreaterFetch}
export {MadFetch}
export {EOFetch}
export {RAlphaFetch}
export {RNumFetch}
export {MagicFetch}
export {FoodFetch}