class LLMChat {
    constructor () {
        console.log("Hello from LLMChat")
    }
}

module.exports = new LLMChat() // Create a singleton automatically for backwards compatability
module.exports.LiteTTS = LLMChat // Allow users to `say = new LLMChat.LLMChat()`