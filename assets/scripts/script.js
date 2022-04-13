window.addEventListener('load', function () {

  const showBtn = document.querySelector('.popup-btn')
  const closeBtn = document.querySelector('.popup-close')

  const popupLayout = document.querySelector('.popup-layout')

  let popupDataSet = popupLayout.getAttribute('data-status')

  showBtn.addEventListener('click', function () {
    popupLayout.setAttribute('data-status', 'true')
  })

  closeBtn.addEventListener('click', function () {
    popupLayout.setAttribute('data-status', 'false')
  })

})