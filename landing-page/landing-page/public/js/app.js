AOS.init({
    duration: 1100,
})
document.querySelectorAll(".header-nav .list-item").forEach(item => item.addEventListener('click', () => {
    document.querySelector('.header-nav').classList.remove('show');
    document.querySelector('html').classList.remove('overflow-hidden');
}))
function openBurger() {
    document.querySelector(".header-nav").classList.toggle('show');
    document.querySelector('html').classList.toggle('overflow-hidden');
}
emailjs.init("SxAUKuV9pUjMd-8I9");
function sendEmail() {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name === "") {
        alert("Пожалуйста, введите ваше имя!");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Пожалуйста, введите корректный email!");
        return;
    }
    emailjs.send("service_4fubv57", "template_5dhc4nb", {
        name: name,
        email: email
    }).then(response => {
        alert("Сообщение успешно отправлено!");
    }).catch(error => {
        alert("Произошла ошибка: " + error.text);
    });

}

ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [59.935381, 30.316227],
        zoom: 16,
        controls: [],
    });

    var myPlacemark = new ymaps.Placemark([59.935381, 30.316227], {});

    myMap.geoObjects.add(myPlacemark);
}