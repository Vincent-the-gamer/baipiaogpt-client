<template>
    <Header/>
    <MainMenu v-if="chatStore.chatContents.length < 1"/>
    <div :class="themeStore.theme" v-else>
        <button @click="clearChat"
                :disabled="chatStore.isRequesting">清空对话</button>
        <Dialog/>
    </div>
    <Footer/>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import MainMenu from '@/components/MainMenu.vue';
import Dialog from '@/components/Dialog.vue';
import Footer from "@/components/Footer.vue";
import useChatStore from '@/store/useChatStore';
import useThemeStore from '@/store/useThemeStore';
import { onBeforeUnmount, onMounted, watch } from 'vue';
import dayjs from 'dayjs';

 const chatStore = useChatStore()
 const themeStore = useThemeStore()

 // 把对滚动条的操作在组件挂载后传给store
 onMounted(() => {
    let timer: any;
    chatStore.scrollToLastMessage = () => {
        // document.documentElement.scrollTo(0, document.documentElement.clientHeight)
        clearTimeout(timer)
        timer = setTimeout(() => {
            window.scrollTo({
                top: document.body.clientHeight,
                behavior: "smooth"
            })
        }, 500)
    }

    // 根据时间段获取默认主题
    themeStore.setTheme(getCurrentTheme())
 })


 // 改变body样式
watch(themeStore, (newVal) => {
    if(newVal.theme === "light"){
        document.body.style.backgroundColor = "white" 
        document.body.style.color = "black"
    }
    else {
        document.body.style.backgroundColor = "rgb(33, 33, 33)"
        document.body.style.color = "white"
    }
})

// 根据不同时间段设置默认主题，18点到次日早上7点是晚上，其他时候是白天
function getCurrentTheme(): string{
    const currentHour: number = dayjs().hour()
    if(currentHour >= 18 && currentHour <= 7) return "dark"
    else return "light"
}


 // 清空页面对话
 function clearChat(){
    if(chatStore.model === "gpt3.5"){
        chatStore.clearChat()
    }
    else chatStore.clearScreen()
 }


// 退出页面时清空上下文
onBeforeUnmount( async () => {
  chatStore.clearChat()
})
</script>


<style lang="stylus" scoped>
.dark
    button
        border: 3px solid rgb(255, 255, 255);
        color: white;
        &:hover
            background-color: rgb(255, 255, 255);
            color: black;
        
.light
    button
        border: 3px solid black;
        color: black;
        &:hover
            background-color: rgb(255, 1, 255);
            color: rgb(255, 255, 255);
        
button
    position: fixed;
    left: 5px;
    top: 55px;
    height: 40px;
    width: 100px;
    background-color: transparent;
    border-radius: 7px;
    z-index: 2;
    transition: background-color, 0.5s;
    &:hover
        cursor: pointer;
    
</style>
