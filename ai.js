let request = document.querySelector('.ai-request')
let reply = document.querySelector('.ai-reply')

request.innerHTML = '在吗？'
Ai()

function Ai() {
  let request_val = request.value

  if (request_val.length > 0) {
    request_val = request_val.replace(/吗/g, '')
    request_val = request_val.replace(/\?/g, '!')
    request_val = request_val.replace(/？/g, '！')

    reply.innerHTML += `<div>${request_val}</div>`
    reply.scrollTop += 50
  } else {
    alert('你吗呢？')
  }
}

function send() {
  let btn = document.querySelector('.ai-send--btn')
  btn.addEventListener('click', function () {
    Ai()
  }, false)
}

function send_press() {
  request.addEventListener('keypress', function (e) {
    if (e.keyCode == "13") {
      e.preventDefault();
      Ai()
    }
  }, false)
}

function clear() {
  let clear_btn = document.querySelector('.ai-foot--btn')
  clear_btn.addEventListener('click', function () {
    reply.innerHTML = '<div>小障の回复:</div>'
  })
}

send()
send_press()
clear()