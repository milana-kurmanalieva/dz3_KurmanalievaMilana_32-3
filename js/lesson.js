

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [25793]\d{2} \d{2}-\d{2}-\d{2}$/
phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    }else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
let tabNumber = 0

const hideTabContent = ()=>{
    tabContentBlocks.forEach(tabCard =>{
        tabCard.style.display = 'none'
    })
    tabs.forEach(tab =>{
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (tabIndex = 0)=>{
    tabContentBlocks[tabIndex].style.display = 'block'
    tabs[tabIndex].classList.add('tab_content_item_active')
    tabNumber=tabIndex
}

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabs.forEach((tab, tabIndex) => {
            if (event.target === tab){
                hideTabContent()
                showTabContent(tabIndex)
            }
        })
    }
}

const tabsAuto = () => {
    setInterval(() => {
        tabNumber++
        if (tabNumber > tabContentBlocks.length - 1){
            tabNumber = 0
        }
        hideTabContent()
        showTabContent(tabNumber)
    }, 3000)
}
tabsAuto()

setTimeout(()=> openModal(), 10000)

scrollEnd()
