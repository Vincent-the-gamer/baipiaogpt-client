import { defineStore } from "pinia";
import { invoke } from "@tauri-apps/api"
import ChatContent from "@/interfaces/ChatContent";


const useChatStore = defineStore("chatStore", {
    state: () => {
        return {
             // 选择模型下拉框, 默认legacy模式
            model: "gpt3.5",  // "legacy"或"gpt3.5"
            chatContents: [] as ChatContent[],
            scrollToLastMessage: () => {} // 在onMounted钩子中把操作函数传进来，不然document会是undefined
        }
    },
    actions: {
        /**
         * 上下文聊天(GPT-3.5-Turbo)请求函数
         */
        requestAnswer(content: string){
            this.scrollToLastMessage()
            invoke("page_chat", { content }).then(
                res => {
                    const result: string = res as string
                    this.chatContents[this.chatContents.length - 1].content = result
                }
            ).catch(err => {
                this.chatContents[this.chatContents.length - 1].content = "发生错误了，请重新提问o(╥﹏╥)o: \n" + err
            })    
        },
        /**
         * 无上下文聊(Legacy)请求函数
         */
        requestAnswerWithoutContext(content: string){
            this.scrollToLastMessage()
            invoke("page_chat", { content }).then(
                res => {
                    const result: string = res as string
                    this.chatContents[this.chatContents.length - 1].content = result
                }
            ).catch(err => {
                this.chatContents[this.chatContents.length - 1].content = "发生错误了，请重新提问o(╥﹏╥)o: \n" + err
            }) 
        },
        /**
         * 重新生成答案
         */
        regenerateAnswer(){
            this.scrollToLastMessage()
            this.chatContents[this.chatContents.length - 1].content = "重新生成中..."
            invoke("page_regenerate").then(
                res => {
                    const result: string = res as string
                    this.chatContents[this.chatContents.length - 1].content = result
                }
            ).catch(err => {
                this.chatContents[this.chatContents.length - 1].content = "发生错误了，请重新提问o(╥﹏╥)o: \n" + err
            })
        },

        /**
         * 和ai聊天，获取新上下文
         */
        chat(text: string){
            // 先增加UI作为过渡
            this.chatContents.push({
                role: "user",
                content: text
            })
            this.chatContents.push({
                role: "assistant",
                content: "稍等哈，咱正在组织语言(*^▽^*)....."
            })
            // 直接和机器人聊天
            if(this.model === "gpt3.5"){
                this.requestAnswer(text)
            }
            else {
                this.requestAnswerWithoutContext(text)
            }
        },

        /**
         * 清空对话
         */
        async clearChat(){
            // 清空上下文
            invoke("page_clear_context")
            this.chatContents = []
        },
        /**
         * 清空前端对话内容
         */
        clearScreen(){
            this.chatContents = []
        },

        /**
         * 重新生成答案
         */
        regenerate(){
            if(this.chatContents.length < 1){
                alert("消息为空")
            }
            else{
               this.regenerateAnswer()
            }
        }
    }
})

export default useChatStore