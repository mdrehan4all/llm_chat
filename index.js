class LLMChat {
    constructor () {
        console.log("LLMChat")
    }

    generate(text, model, apikey){
        return "generated test response";
    }
}

module.exports = new LLMChat() // Create a singleton automatically for backwards compatability
module.exports.LLMChat = LLMChat // Allow users to `say = new LLMChat.LLMChat()`