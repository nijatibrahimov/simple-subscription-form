window.addEventListener('load', function () {

  const registrationForm = document.querySelector('.rl-fields')

  const checkbox = document.querySelector('#confirm')

  registrationForm.addEventListener('submit', function (event) {

    event.preventDefault();

    console.log(checkbox.checked)

    // fetch("form.php", {
    //   method: 'POST',
    //   mode: 'same-origin',
    //   credentials: 'same-origin',
    //   body: new FormData(registrationForm)
    // })
    //   .then(function (response) {
    //     return response.json()
    //   })
    //   .then(function (data) {
    //     if (data.success) {
    //       alert(data.message)
    //     } else {
    //       alert(data.message)
    //     }
    //   })

  })




  const showBtn = document.querySelector('.popup-btn')
  const closeBtn = document.querySelector('.popup-close')

  const popupLayout = document.querySelector('.popup-layout')

  showBtn.addEventListener('click', function () {
    popupLayout.setAttribute('data-status', 'true')
  })

  closeBtn.addEventListener('click', function () {
    popupLayout.setAttribute('data-status', 'false')
  })


})