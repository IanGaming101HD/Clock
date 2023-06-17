const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

hours.innerText = (0).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
})
minutes.innerText = (0).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
})
seconds.innerText = (0).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
})

let time;
setInterval(() => {
    time = new Date()
    hours.innerText = time.getHours().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })
    minutes.innerText = time.getMinutes().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })
    seconds.innerText = time.getSeconds().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })
}, 1000)


const clockContainer = document.getElementById('clock-container')
clockContainer.addEventListener('contextmenu', (event) => {
    event.preventDefault()
});