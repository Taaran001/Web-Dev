function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    /*
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
    */
    for (const prop in reactElement.props) {
        // console.log(prop);

        if (prop === 'children')
            continue;
            domElement.setAttribute(prop, reactElement.props[prop])
            // console.log(reactElement.props[prop]);
        }
    container.appendChild(domElement)

}
const reactElement = {
    type:"a",
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Click to visit google"
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
