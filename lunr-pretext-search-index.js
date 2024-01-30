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
  "id": "intro-sage",
  "level": "1",
  "url": "intro-sage.html",
  "type": "Section",
  "number": "1.1",
  "title": "Getting Started with SageMath",
  "body": " Getting Started with SageMath  SageMath is a free open-source mathematics software system. The easiest way to get started is by running SageMath online. However, if you do not have reliable internet, you can also install the software locally on your own computer.  Begin your journey with SageMath by following these steps:   Navigate to the SageMath website and click on Sage on CoCalc .   Create a CoCalc account .  Go to Your Projects on CoCalc and create a new project.  Start your new project and create a new worksheet. Choose the SageMath Worksheet option.  Enter SageMath code into the worksheet and run it by clicking Run or using the shortcut cmd + shift .  Save your worksheet as a PDF for your records.   To learn more about SageMath worksheets, refer to the official documentation .  "
},
{
  "id": "intro-python",
  "level": "1",
  "url": "intro-python.html",
  "type": "Section",
  "number": "1.2",
  "title": "Introduction to Python Programming",
  "body": " Introduction to Python Programming  Python is a versatile programming language used for a wide range of applications. understanding Python basics is essential for effective use of SageMath.  SageMath is a Python-based system, integrating various open-source mathematics software packages. Learning Python allows users to fully utilize SageMath and equips them with broader applicable skills.   Basic Data Types in Python  Python has several built-in data types. These include:   Integers : Whole numbers without a fractional part. Example: 42 , -7 .  Floats : Numbers with a decimal point. Example: 3.14 , -0.001 .  Strings : Sequence of characters used for text. Example: \"Hello\" , 'World' .  Booleans : Represents truth values. Only two possible objects: True and False .  Lists : Ordered, mutable collections of items. Example: [1, 2, 3] .  Tuples : Ordered, immutable collections. Example: (1, 2, 3) .  Dictionaries : Collections of key-value pairs. Example: {\"name\": \"Alice\", \"age\": 25} .     Data Types in SageMath  SageMath, while utilizing Python's syntax, introduces additional data types specific to mathematical computations.   Sage Integers and Rationals: Enhanced versions of Python's numerical types with support for arbitrary precision and advanced mathematical operations.  Symbolic Expressions: Represent mathematical expressions symbolically, allowing for algebraic manipulations.  Matrices and Vectors: Specialized types for linear algebra operations.  Polynomials and Power Series: Types for handling polynomial and series operations effectively.  Graphs and Geometry Objects: For representing and manipulating mathematical structures in graph theory and geometry.   These specialized types make SageMath a powerful tool for mathematical computation, extending beyond Python's native capabilities.  While SageMath builds upon Python's data types, it enhances them with more mathematically robust and versatile options. For instance, integers in SageMath are of arbitrary size, compared to Python's fixed-precision integers. Similarly, SageMath's symbolic expressions allow for direct manipulation of algebraic formulas, a feature not natively present in Python.    Creating Variables and Assigning Values  Variables in Python are created upon first assignment. Python's dynamic typing means no prior declaration is necessary.   x = 5 # An integer  y = \"Hello\" # A string  z = 3.14 # A floating-point number     Reserved Words in Python and SageMath  Reserved words, or keywords, in Python are words that have special syntactic significance and cannot be used as identifiers for variables, functions, classes, or any other naming purposes. They are the building blocks of Python syntax and program structure.  In Python, these reserved words include:   Control flow keywords like if , else , elif , while , for , break , continue , return , try , except , finally , and raise .  Function and class-related keywords such as def , class , and lambda .  Logical operators like and , or , and not .  Other keywords including True , False , None , in , is , async , await , and others.   It's important for Python programmers, especially those new to the language, to recognize these keywords and understand their special functions within the language.  In the context of SageMath, the situation is slightly different. While SageMath is built upon Python, it also introduces additional functions and objects specific to mathematical computing. Some Python keywords might have additional functionalities or be used in specific mathematical contexts within SageMath. However, the core Python keywords retain their original meanings and should be treated with the same syntactic care as in standard Python programming.   "
},
{
  "id": "set-theory",
  "level": "1",
  "url": "set-theory.html",
  "type": "Section",
  "number": "2.1",
  "title": "Set Theory",
  "body": " Set Theory  To learn more about sets with SageMath visit the documentation    Create a Set  Create a variable. Do not use reserved word or white space for a variable name. After the variable, we use an equal sign to assign (store) value. Define a set by listing the contents separated by commas in between a pair of curly braces.     Intersection  There are two different ways we can ask sage to calculate the intersection. One advantage of the intersection() method is that it can take an arbitrary number of sets as arguments. This means you can find the intersection of more than two sets in a single call.   The & operator only works for two sets at a time. To find the intersection of more than two sets, you would have to use the operator repeatedly.     Union  Find the union of A and B      Difference  Calculate the difference of A and B     Ways to Create a Set  There are two ways we can define a set.    Curly Brackets - Sets: {}  Definition: Curly brackets are used to define a mathematical set.  Characteristics:   Unordered: The elements in a set do not have a specific order.  Unique Elements: Sets cannot have duplicate elements. If you try to add a duplicate element to a set, it will be ignored.  Mathematical Set Operations: Sets support operations like union, intersection, difference, etc.   Use-Case Example: Sets are ideal when you need to maintain a collection of unique items and are interested in performing set operations. For instance, when dealing with distinct mathematical objects like prime numbers, graph vertices, or unique solutions to an equation.    Square Brackets - Lists: []  Definition: Square brackets are used to define a list.  Characteristics:   Ordered: The elements in a list maintain a specific order.  Duplicates Allowed: Lists can have duplicate elements.  Indexing and Slicing: You can access elements by their position and slice parts of the list.   Use-Case Example: Lists are suitable for ordered collections of items where duplicates are allowed or required, and when you need to perform operations like iteration in a specific order, indexing, slicing, etc.      Cardinality     Cartesian Product     Subsets    "
},
{
  "id": "p-24",
  "level": "2",
  "url": "set-theory.html#p-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Curly Brackets - Sets: "
},
{
  "id": "p-25",
  "level": "2",
  "url": "set-theory.html#p-25",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Definition: "
},
{
  "id": "p-26",
  "level": "2",
  "url": "set-theory.html#p-26",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Characteristics: "
},
{
  "id": "p-27",
  "level": "2",
  "url": "set-theory.html#p-27",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Use-Case Example: "
},
{
  "id": "p-28",
  "level": "2",
  "url": "set-theory.html#p-28",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Square Brackets - Lists: "
},
{
  "id": "p-29",
  "level": "2",
  "url": "set-theory.html#p-29",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Definition: "
},
{
  "id": "p-30",
  "level": "2",
  "url": "set-theory.html#p-30",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Characteristics: "
},
{
  "id": "p-31",
  "level": "2",
  "url": "set-theory.html#p-31",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Use-Case Example: "
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
