export default function createNewList () {
  return {
    functional: true,
    render: function (h, context) {
      // console.log(context)
      let lists = context.props.items.map((item) => {
        return <li>{item}</li>
      })

      const showClazz =  () => {
        return false
      }

      const data = {
        class: [
          'new-list-hello',
          'new-list-hi',
          {
            'show-class': showClazz()
          }
        ],
        style: {
          'color': 'red'
        }
      }

      return (
        <ul {...data}>
          {lists}
        </ul>
      )
    },
    props: {
      items: {
        type: Array,
        required: true
      },
      isOrdered: Boolean
    }
  }
}