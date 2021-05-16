const fs = require('fs');

const levenshteinDistance = require('./levenshtein.js');

var dictionaryPath = 'dictionary.json';
var dictJson = {};
var pokemonPath = 'pokemon.json';
var pokeJson = {};

var reverseDict = {};

function loadDictionaries(){
    fs.readFile(dictionaryPath, function(err, data){
        if(err){ throw err;}

        dictJson = JSON.parse(data);
        for(var key in dictJson){
            reverseDict[dictJson[key]] = key;
        }
    })

    fs.readFile(pokemonPath, function(err, data){
        if(err){ throw err;}

        pokeJson = JSON.parse(data);
        for(var pokemon of pokeJson){
            reverseDict[pokemon['ipa']] = pokemon['name'];
        }
    })
}

loadDictionaries();

var inputText = "The quick brown fox jumped over the lazy dog!";

function convertToIPA(text){
    var string_copy = text.toLowerCase()
                        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""); 
    var split_array = string_copy.split(' ');
    var ipa = [];
    split_array.forEach(word => {
        if ( word in dictJson){
            ipa.push(dictJson[word]);
        }else{
            ipa.push(word);
        }
    });
    return ipa.join(' ');
}

function getMatchScore(word, sentence){
    var matchWord = '';
    var score = Number.MAX_VALUE;
    var splitArray = sentence.split(" ");
    for ( var currWord of splitArray){
        var currScore = levenshteinDistance(currWord, word) / currWord.length;
        if ( currScore < score){
            matchWord = currWord;
            score = currScore;
        }
    }
    return [matchWord, score];
}

function replacePuns(sentence){
    var minMatch = Number.MAX_VALUE;
    var minWord = '';
    var minPokemon = '';
    for(var pokemon of pokeJson){
        var word_score = getMatchScore(pokemon['ipa'], sentence)
        var word = word_score[0];
        var score = word_score[1];
        
        if(score < minMatch){
            minWord = word;
            minPokemon = pokemon['ipa'];
            minMatch = score;
        }
    }
    
    return sentence.replace(minWord, minPokemon);
}

function convertToText(phonetic){
    var splitArray = phonetic.split(" ");
    var resultArray = [];
    for ( var currWord of splitArray){
        if(currWord in reverseDict){
            resultArray.push(reverseDict[currWord]);
        }else{
            resultArray.push(currWord);
        }
    }
    return resultArray.join(" ");
}


setTimeout(function(){
    var ipa = convertToIPA(inputText);
    var replaced = replacePuns(ipa);
    var result = convertToText(replaced);
    console.log(result);
}, 500);