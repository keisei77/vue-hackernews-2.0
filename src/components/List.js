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
        return h(
          'ul',
          {
            'class': {
              'list-hello': true,
              'list-hi': true
            }
          },
          this.items.map((item) => {
            return h('li', {
              domProps: {
                innerHTML: this.text
              }
            }, item.name)
          })
        )
      } else {
        return h('p', 'No items found.')
      }
    }
  }
}