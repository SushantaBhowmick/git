// const root = document.getElementById('root')

function crateElement(node){
    if(typeof node === 'string'){
        return document.createTextNode(node);
    }
        const $el = document.createElement(node.type);
  node.children
    .map(createElement)
    .forEach($el.appendChild.bind($el));
  return $el;
}

const a = (
  <ul class="list">
    <li>item 1</li>
    <li>item 2</li>
  </ul>
);

const $root = document.getElementById('root');
$root.appendChild(createElement(a));