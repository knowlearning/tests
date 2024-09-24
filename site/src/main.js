import Agent from '@knowlearning/agents'
import { createApp } from 'vue'
import './style.css'
import * as SCENARIOS from './scenarios.js'
import App from './App.vue'

window.Agent = Agent

const SCENARIO = window.location.pathname.slice(1)
SCENARIOS[SCENARIO]?.()

createApp(App).mount('#app')

