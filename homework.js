1)
//создайте новый элемент и добавьте его в блок ниже с помощью append
<div id='block'></div>
const block=document.querySelector('.block')
const p=document.createElement("p")
const add=document.createTextNode("something...")
p.append(add)
block.append('h1')

2)
//создайте новый элемент и добавьте его в блок ниже с помощью insertBefore
<div id='block'></div>
const block2=document.querySelector('.block')
const element=document.createElement("p")
const child=document.createTextNode("something...")
neww2.insertBefore(child,element)


3)
//удалите тег 'p' из скрипта ниже с помощью DOM метода
<div id='block'>
    <p>Some text</p>
</div>
document.querySelector('p').remove()
4)
//замените тег 'p' на <i>Hello World</i>
<div id='block'>
    <p>Some text</p>
</div>
const parent =document.querySelector('.block')
const child2 =document.createTextNode('Hello World')
const p1=document.querySelector('p')
parent.replaceChild(child,p1)

5)
//выведите в консоли коллекцию всех элементов с классом .block
const collection=document.querySelectorAll('p')
console.log(collection);
6)
//выведите в консоли первый элемент из ранее созданной коллекции
console.log(collection[0]);

7)
//выведите в консоли количество элементов в ранее созданной коллекции
console.log(collection.length);

8)
//в чем разница между nodeList и HtmlCollection
// Некоторые (более старые) браузеры возвращают объект NodeList вместо HTMLCollection