var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sage-cell",
  "level": "1",
  "url": "sage-cell.html",
  "type": "Section",
  "number": "1.1",
  "title": "Sage Cell",
  "body": " Sage Cell  This is a sage cell. Run some sage code!        "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.2",
  "title": "Section Title",
  "body": " Section Title  Text of section.   A figure generated with TikZ in latex     🔗 "
},
{
  "id": "fig-tikz",
  "level": "2",
  "url": "sec-section-name.html#fig-tikz",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " A figure generated with TikZ in latex     "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
