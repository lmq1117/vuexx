(function (Vue) {

    var STORATE_KEY = 'vue-todo-items'

    const itemStorage = {
        fetch: function () {
            return JSON.parse(localStorage.getItem(STORATE_KEY) || '[]')
        },
        save: function (items) {
            localStorage.setItem(STORATE_KEY, JSON.stringify(items))
        }
    }

    const items = []

    Vue.directive('app-focus', {
        inserted(el, binding) {
            el.focus()
        }
    })

    var app = new Vue({
        el: '#todoapp',
        data: {
            items: itemStorage.fetch(),
            currentItem: null,
            filterStatus: 'all'
        },
        watch: {
            items: {
                deep: true,
                handler: function (newItems, oldItems) {
                    itemStorage.save(newItems)
                }
            }
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
            },
            filterItems() {
                switch (this.filterStatus) {
                    case "active":
                        return this.items.filter(item => !item.completed)
                        break
                    case "completed":
                        return this.items.filter(item => item.completed)
                        break
                    default:
                        return this.items

                }
            }
        }
    })

    window.onhashchange = function () {
        console.log('hash has change' + window.location.hash)
        // #/
        var hash = window.location.hash.substr(2) || 'all'
        app.filterStatus = hash

    }
    window.onhashchange()

})(Vue);
