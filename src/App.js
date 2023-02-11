import logo from './logo.svg';
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
  return (
    <div className="App">
        <div><h3>Задание 1</h3>
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

        <div><h3>Задание 2</h3>
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
    </div>

  );
}



export default App;
