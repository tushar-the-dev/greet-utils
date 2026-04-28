const {GoogleGenAI} = require("@google/genai");

class setGreet{
    constructor({apiKey}){
        this.apiKey = apiKey;
        this.ai = new GoogleGenAI({apiKey: apiKey});
    }

    async Greet(name){
       const res =  await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `My name is ${name}. only greet me very well. don't ask any questions`
    });

    return res.text;
    }
}

module.exports = setGreet;