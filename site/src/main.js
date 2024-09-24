import Agent from '@knowlearning/agents'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

window.Agent = Agent

createApp(App).mount('#app')
