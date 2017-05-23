export default function createList () {
  return {
    data () {
      return {
        items: [
          { name: 'hello' },
          { name: 'world!' }
        ]
      }
    },
    props: {
      text: {
        type: String
      }
    },
    render: function (h) {
      if (this.items.length) {
        let self = this.$parent
        return h('ul', this.items.map(function (item) {
          return h('li', {
            domProps: {
              innerHTML: self.textValue
            }
          }, item.name)
        }))
      } else {
        return h('p', 'No items found.')
      }
    }
  }
}