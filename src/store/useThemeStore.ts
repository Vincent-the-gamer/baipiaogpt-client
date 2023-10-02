import { defineStore } from "pinia";

// 控制主题
const useThemeStore = defineStore("themeStore", {
    state: () => {
        return {
            theme: "light"
        }
    },
    actions: {
        setTheme(mode: string) {
            this.theme = mode;
        }
    },
    getters: {
        getTheme(): string{
            return this.theme
        }
    }
})

export default useThemeStore