export default function createNewList () {
  return {
    functional: true,
    render: function (h, context) {
      console.log(context)
      return (<p>33331</p>)
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