import Home from './components/Home.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import Stocks from './components/stocks/Stocks.vue'
import Form from './components/stocks/Form.vue'
import Notes from './components/notes/notes.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/inventory', component: Portfolio },
    { path: '/order', component: Stocks },
    { path: '/notes', component: Notes }

]