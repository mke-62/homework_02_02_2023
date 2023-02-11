import albumSilense from './img/400x400bb.jpg';
import albumEcliptica from './img/maxresdefault.jpg';
import albumWinterheart from './img/55.jpg';
import blin from './img/big_57276.jpg';


import './App.css';

function App() {
  const books = {
    name:'Всадник без головы',
    autorName: 'Томаса Майн Рид',
    genreBook: 'Роман',
    numberPages: '672',
    recense: [
         'Книга хорошая.Да не много страшная. Но есть и плюс она длинная.',
         'Роман понравился. Прекрасные герои. Открываешь с трепетом книгу, что ждет там? И вот ты уже от страха закрываешь глаза и открываешь от радости.'
    ],
  };
  const music = {
        name:'Sonata Arctica',
        participants: [ "Тони Какко", "Джани Лииматайнен", "Элиас Вильянен", "Паси Кауппинен", "Хенрик Клингенберг", "Marco Paasikoski", "Томми Портимо"],
        albums: ['Ecliptica ', 'Winterheart’s Guild','Silence '],
        covers: [albumSilense, albumEcliptica,albumWinterheart]
    };
  const recipe = {
        name:'Блины тонкие',
        Ingredients: [ "Яйца - 3 шт.", "Молоко - 250 мл (1 стакан)", "Вода - 300-400 мл (1-2 стакана)", "Сахар - 2 ст. ложки", "Мука - 240 г (1,5 стакана)", "Масло растительное - 1-2 ст. ложки"],
        stages: ['Яйца смешать с сахаром и половиной стакана молока. ',
        'Постепенно подсыпать муку, тщательно перемешивать.', 'Когда вся мука введена в тесто, влить оставшееся молоко, тщательно перемешать',
        'Постепенно влить воду и масло, продолжая тщательно перемешивать тесто',
        'Разогретую сковороду смазать небольшим количеством растительного масла',
        'Налить на середину сковороды немного теста (примерно 0,5 обычного половника).',
            ' Наклоняя сковороду в разные стороны, распределить тесто по поверхности.',
            ' Жарить на среднем огне 0,5 минуты. Блин по краям должен начать отходить от стенок сковороды.',
        'Затем аккуратно приподнять блин (руками или лопаточкой), перевернуть его на другую сторону и жарить еще 10-30 секунд.' ,
            'Вкусные тонкие блинчики готовы. Приятного аппетита!'],
        photos: [blin]
    };



    return (
    <div className="App">
        <div className="zd"><h3>Задание 1</h3>
            <ol>
                <li><b>Название книги:</b> <ins>{books.name}</ins></li>
                <li><b>Имя Автора:</b> <ins>{books.autorName}</ins></li>
                <li><b>Жанр:</b> <ins>{books.genreBook}</ins></li>
                <li><b>Колличество страниц:</b> <ins>{books.numberPages}</ins></li>
                <li><b>Рецензии:</b>
                    <ol>{books.recense.map((book)=>(
                        <li><ins>{book}</ins></li>

                    ))}</ol>
                </li>
            </ol>
        </div>

        <div className="zd"><h3>Задание 2</h3>
            <ol>
                <li><b>Название группы:</b> <ins>{music.name}</ins></li>
                <li><b>Участники:</b> <ins>
                    <ol>{music.participants.map((participant)=>(
                        <li><ins>{participant}</ins></li>
                    ))}</ol>
                </ins></li>
                <li><b>Альбомы:</b> <ins>
                    <ol>{music.albums.map((album)=>(
                        <li><ins>{album}</ins></li>
                    ))}</ol>
                </ins></li>
                <li><b>Обложки альбомов:</b>
                   <div className="cards"> {music.covers.map((cover)=>(
                        <img className="card" src={cover} alt="Silense" />
                         ))}
                   </div>
                </li>
            </ol>
        </div>

        <div className="zd"><h3>Задание 3</h3>
            <ol>
                <li><b>Название группы:</b> <ins>{music.name}</ins></li>
                <li><b>Ингредиенты:</b> <ins>
                    <ol>{recipe.Ingredients.map((Ingredient)=>(
                        <li><ins>{Ingredient}</ins></li>
                    ))}</ol>
                </ins></li>
                <li><b>Последовательность приготовления:</b> <ins>
                    <ol>{recipe.stages.map((stage)=>(
                        <li><ins>{stage}</ins></li>
                    ))}</ol>
                </ins></li>
                <li><b>Фотография готового блюда:</b>
                    <div className="cards"> <img className="card" src={blin} alt="Silense" />
                    </div>
                </li>
            </ol>
        </div>
    </div>

  );
}



export default App;
