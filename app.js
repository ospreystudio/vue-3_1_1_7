const app = Vue.createApp({
    data() {
        return {

            friends: [
                {
                id: 'moreyl',
                name: 'Justin Moreyl',
                phone: '12345 3545 5344',
                email: 'moreyl@mail.ru'
            },
                {
                    id: 'olga',
                    name: 'Olga Moreyl',
                    phone: '14545 4545 5454',
                    email: 'olga@mail.ru'
                },
            ]
        }
    },

})

app.component('friend-content', {
    template: `
           <li>
            <h2>{{ friend.name }}</h2>
            <button @click="toggleDetails">{{ detailAreVisible ? 'hide' : 'show'}} Details</button>
            <ul v-if="detailAreVisible">
                <li><strong>Phone:</strong> {{ friend.phone }} </li>
                <li><strong>Email:</strong> {{ friend.email }} </li>
            </ul>
          </li>
    `,
    data() {
        return {
            detailAreVisible: false,
            friend: {
                id: 'olga',
                name: 'Olga Moreyl',
                phone: '14545 4545 5454',
                email: 'olga@mail.ru'
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailAreVisible = !this.detailAreVisible
        }
    }
})

app.mount('#app')