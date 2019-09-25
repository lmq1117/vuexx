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

    Vue.directive('app-focus', {
        inserted(el, binding) {
            el.focus()
        }
    })

    var app = new Vue({
        el: '#todoapp',
        data: {
            items,
            currentItem: null
        },
        directives: {
            'todo-focus': {
                update(el, binding) {
                    if (binding.value) {
                        el.focus()
                    }
                }
            }
        },
        methods: {
            addItem(event) {
                console.log(event.target.value)
                const content = event.target.value.trim()
                if (!content.length) {
                    return
                }
                const id = this.items.length + 1
                //push 在结尾添加 unshift在开头添加
                this.items.unshift({
                    id,
                    content,
                    completed: false
                })
                //todo 存数据到mysql
                event.target.value = ''
            },
            removeItem(index) {
                this.items.splice(index, 1)
            },
            removeCompleted() {
                this.items = this.items.filter(item => !item.completed)
            },
            toEdit(item) {
                this.currentItem = item
            },
            cancelEdit() {
                console.log(123456)

                this.currentItem = null
            },
            finishEdit(item, index, event) {
                const content = event.target.value.trim()
                if (!event.target.value.trim()) {
                    this.removeItem(index)
                    return
                }
                item.content = content
                this.currentItem = null
            }
        },
        computed: {
            remaining() {
                //箭头函数
                return this.items.filter(item => !item.completed).length
            },
            toggleAll: {
                get() {
                    console.log(this.remaining)
                    return this.remaining === 0
                },
                set(newStatus) {
                    this.items.forEach((item) => {
                        item.completed = newStatus
                    })
                }
            }
        }
    })

})(Vue);
