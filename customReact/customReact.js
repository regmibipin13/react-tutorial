function elementRender(element, container) {
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    for(const prop in element.props) {
        if (prop == 'children') continue;
        domElement.setAttribute(prop, element.props[prop])
    }
    container.appendChild(domElement)
}   


const element = {
    type:'a',
    props:{
        href:'http://google.com',
        target:'_blank'
    },
    children:'Click Me to Visit Google'
}


const root = document.getElementById('root');

elementRender(element,root);

