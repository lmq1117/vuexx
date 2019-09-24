(function (Vue) {
    const items = [
        {
            id: 1,
            content: 'vue.js',
            completed: false
        },
        {
            id: 2,
            content: 'java',
            completed: true
        },
        {
            id: 3,
            content: 'php',
            completed: true
        },
        {
            id: 4,
            content: 'go lang',
            completed: false
        },
    ]

    var app = new Vue({
        el: '#todoapp',
        data: {
            items
        },
        methods: {
            addItem(event) {
                console.log(event.target.value)
                const content = event.target.value.trim()
                if (!content.length) {
                    return
                }
                const id = this.items.length + 1
                this.items.push({
                    id,
                    content,
                    completed: false
                })
                event.target.value = ''
            }
        }
    })

})(Vue);
