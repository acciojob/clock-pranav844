let para = document.querySelector("#timer")


function currentTime() {
	let date = new Date()
	let hours = date.getHours()
	let minutes = date.getMinutes()
	let sec = date.getSeconds()
	let day = date.getDay()
	let month = date.getMonth()
	let year = date.getFullYear()
	let ArrayOfTime = converTime(hours ,minutes , sec)
    for (let i = 0; i <=2 ; i++) {
        ArrayOfTime[i] = AddZero(ArrayOfTime[i])
    }
    let time = `${ArrayOfTime[0]}:${ArrayOfTime[1]}:${ArrayOfTime[2]} :${ArrayOfTime[3]}`
	para.innerHTML = `${month}/${day}/${year}, ${time}`
}

//converting time in 12hours 
function converTime(hr,min,sec) {
    if (hr>12) {
        hr = hr-12
        return [hr,min,sec, "PM"]
    }
    else if (hr ==0) {
        return [12,min,sec, "PM"]
    }
    else if (hr<12) {
        return [hr,min,sec,"AM"]
    }
    else if (hr == 12) {
        return [hr,min,sec, "PM"]
    }

}
function AddZero(k) {
    if (k<10) {
        return "0"+k
    }else{
        return k
    }
}


setInterval(currentTime,1000) 
