
function customRender(reactElement, container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute("href",reactElement.prop.href)
    // domElement.setAttribute("target",reactElement.prop.target)

    

    // container.appendChild(domElement)


    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for(const props in reactElement.prop){
        if(props == 'children') continue

        domElement.setAttribute(props, reactElement.prop[props])
    }

    container.appendChild(domElement)
}




const reactElement = {
    type: 'a',
    prop:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"click me to visit google"
}

const mainContainer = document.querySelector("#root")

customRender(reactElement,mainContainer)