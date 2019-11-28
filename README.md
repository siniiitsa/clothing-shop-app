## Demonstration - https://youtu.be/5fVzQTHuahM
# Запуск backend 
    - Для запуска нужно создать файл default.json, в него поместить следующее 
        {
        "mongoURI": "mongodb+srv://yourlogin:yourpassword@dan-tld42.mongodb.net/goods?retryWrites=true&w=majority",
        "jwtSecret": "dfgjksdgkjnsdvgjhsdgjsdg"
        }

# Интерфейс компонента Button
    - Простое подключение <Button /> без props, произойдет рендер кнопки без текста и фона
    - Чтобы отрендерить кнопку черного цвета, нужно подключить компонент кнопки вот так <Button black />
    - Чтобы отрендерить кнопку белого цвета, нужно подлючить компонент кнопки вот так <Button white />
    - Чтобы добавить дополнительные настройки для кнопки, например, настройки позиционированя, нужно в jss-файле со стилями того компонента, в котором подключается кнопка, создать класс с названием btnSettings, прописать в нем нужные стили, а затем в подключить компонент кнопки вот так <Button black btnSettings={classes.btnSettings} />

# Интерфейс компонента Container
    - компонент Container это привычный нам div.container, у которого стоит margin: 0 auto; и max-width соответствующий нашему макету
    - там, где нужно обернуть код в Container мы делаем передаем в компонент Container jsx разметку в качестве children.
      Вот так <Container><div><p>Контент</p></div></Container>
