export default function createNewList () {
  return {
    functional: true,
    render: function (h, context) {
      // console.log(context)
      let lists = context.props.items.map((item) => {
        return <li>{item}</li>
      })
      return (
        <ul class="new-list-hello new-list-hi">
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