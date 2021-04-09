ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.758595, 37.418398],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'НЕЙРОЛЭНД'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/map_pointer.png',
            // Размеры метки.
            iconImageSize: [93, 93],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});