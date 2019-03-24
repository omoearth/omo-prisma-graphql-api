const axios = require('axios')

bookISBNs = [
  "0553211285",
  "9789875504950",
  "9780439203524",
  "9780883017500",
  "9781402766442",
  "9781585101634",
  "9780393044720",
  "9780143105947",
  "9780881033731"
]

module.exports = function (api) {
  api.loadSource(async store => {
    let books = []

    for (const isbn of bookISBNs) {
      const res = await axios.get(`http://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`)

      if (res.data[`ISBN:${isbn}`]) {
        books.push(res.data[`ISBN:${isbn}`])
      }
    }

    const contentType = store.addContentType({
      typeName: 'BookEntry',
      route: 'showcase/:id'
    })

    for (const item of books) {
      contentType.addNode({
        title: item.title,
        date: item.publish_date,
        fields: {
          ...item
        }
      })
    }
  })
}