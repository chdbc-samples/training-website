import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Population() {
  return (
    <main className="container px-4 py-4">
      <div className="row">
        <aside className="col-md-3">
          <nav className="sticky-top pt-3" aria-label="Зміст сторінки">
            <h2 className="h4">Зміст</h2>
            <ul className="nav flex-column">
              <a href="#continentsList" className="nav-link" data-bs-toggle="collapse">Континенти</a>
              <a href="#subcontinentsList" className="nav-link" data-bs-toggle="collapse">Субконтиненти</a>
              <a href="#countriesList" className="nav-link" data-bs-toggle="collapse">Країни</a>
              <a href="#introducedList" className="nav-link" data-bs-toggle="collapse">Інтродуковані в</a>
              <a href="#biogeographicList" className="nav-link" data-bs-toggle="collapse">Біогеографічні зони</a>
              <a href="#biomesList" className="nav-link" data-bs-toggle="collapse">WWF Біоми</a>
            </ul>
          </nav>
        </aside>

        <article className="col-md-9">
          <h2 className="h2 text-success mb-4">Ареал поширення косаток</h2>
          
          <section id="continents" className="mt-4">
            <h3>
              <button className="btn btn-success w-100 text-start" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#continentsList" 
                      aria-expanded="false" 
                      aria-controls="continentsList">
                Континенти
              </button>
            </h3>
            <div className="collapse" id="continentsList">
              <ul className="list-group mb-3">
                   <li class="list-group-item">Африка</li>
                   <li class="list-group-item">Океанія</li>
                   <li class="list-group-item">Північна Антарктика</li>
                   <li class="list-group-item">Південна Америка</li>
                   <li class="list-group-item">Північна Америка</li>
                   <li class="list-group-item">Азія</li>
                   <li class="list-group-item">Європа</li>
              </ul>
            </div>
          </section>

          <section id="subcontinents" className="mt-4">
            <h3>
              <button className="btn btn-success w-100 text-start" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#subcontinentsList" 
                      aria-expanded="false" 
                      aria-controls="subcontinentsList">
                Субконтиненти
              </button>
            </h3>
            <div className="collapse" id="subcontinentsList">
              <ul className="list-group mb-3">
                <li class="list-group-item">Північна Африка</li>
                <li class="list-group-item">Карибські о-ви</li>
                <li class="list-group-item">Південна Азія</li>
                <li class="list-group-item">Центральна Америка</li>
                <li class="list-group-item">Африка на південь від Сахари</li>
                <li class="list-group-item">Південно-східна Азія</li>
                <li class="list-group-item">Східна Азія</li>
                <li class="list-group-item">Західна Азія</li>
              </ul>
            </div>
          </section>

          <section id="countries" className="mt-4">
            <h3>
              <button className="btn btn-success w-100 text-start" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#countriesList" 
                      aria-expanded="false" 
                      aria-controls="countriesList">
                Країни
              </button>
            </h3>
            <div className="collapse" id="countriesList">
              <ul className="list-group mb-3 list-columns">
                <li class="list-group-item">Алжир</li>
                <li class="list-group-item">Антигуа і Барбуда</li>
                <li class="list-group-item">Аргентина</li>
                <li class="list-group-item">Австралія</li>
                <li class="list-group-item">Багами</li>
                <li class="list-group-item">Бангладеш</li>
                <li class="list-group-item">Барбадос</li>
                <li class="list-group-item">Беліз</li>
                <li class="list-group-item">Бенін</li>
                <li class="list-group-item">Бразилія</li>
                <li class="list-group-item">Бруней</li>
                <li class="list-group-item">Камбоджа</li>
                <li class="list-group-item">Камерун</li>
                <li class="list-group-item">Канада</li>
                <li class="list-group-item">Кабо-Верде</li>
                <li class="list-group-item">Чилі</li>
                <li class="list-group-item">Китай</li>
                <li class="list-group-item">Колумбія</li>
                <li class="list-group-item">Коморські Острови</li>
                <li class="list-group-item">Конго</li>
                <li class="list-group-item">Демократична Республіка Конго</li>
                <li class="list-group-item">Коста-Рика</li>
                <li class="list-group-item">Кот-д’Івуар</li>
                <li class="list-group-item">Куба</li>
                <li class="list-group-item">Данія</li>
                <li class="list-group-item">Джибуті</li>
                <li class="list-group-item">Домініка</li>
                <li class="list-group-item">Домініканська Республіка</li>
                <li class="list-group-item">Еквадор</li>
                <li class="list-group-item">Сальвадор</li>
                <li class="list-group-item">Екваторіальна Гвінея</li>
                <li class="list-group-item">Фарерські Острови</li>
                <li class="list-group-item">Фіджі</li>
                <li class="list-group-item">Франція</li>
                <li class="list-group-item">Габон</li>
                <li class="list-group-item">Гамбія</li>
                <li class="list-group-item">Гана</li>
                <li class="list-group-item">Гренада</li>
                <li class="list-group-item">Гваделупа</li>
                <li class="list-group-item">Гватемала</li>
                <li class="list-group-item">Гвінея</li>
                <li class="list-group-item">Гвінея-Бісау</li>
                <li class="list-group-item">Гаяна</li>
                <li class="list-group-item">Гондурас</li>
                <li class="list-group-item">Ісландія</li>
                <li class="list-group-item">Індія</li>
                <li class="list-group-item">Індонезія</li>
                <li class="list-group-item">Іран</li>
                <li class="list-group-item">Ірландія</li>
                <li class="list-group-item">Ізраїль</li>
                <li class="list-group-item">Італія</li>
                <li class="list-group-item">Ямайка</li>
                <li class="list-group-item">Японія</li>
                <li class="list-group-item">Кенія</li>
                <li class="list-group-item">Кірибаті</li>
                <li class="list-group-item">Ліберія</li>
                <li class="list-group-item">Мадагаскар</li>
                <li class="list-group-item">Малайзія</li>
                <li class="list-group-item">Мальдіви</li>
                <li class="list-group-item">Маршаллові Острови</li>
                <li class="list-group-item">Мавританія</li>
                <li class="list-group-item">Мексика</li>
                <li class="list-group-item">Федеративні Штати Мікронезії</li>
                <li class="list-group-item">Монако</li>
                <li class="list-group-item">Марокко</li>
                <li class="list-group-item">Мозамбік</li>
                <li class="list-group-item">М’янма</li>
                <li class="list-group-item">Намібія</li>
                <li class="list-group-item">Науру</li>
                <li class="list-group-item">Нідерланди</li>
                <li class="list-group-item">Нова Зеландія</li>
                <li class="list-group-item">Нікарагуа</li>
                <li class="list-group-item">Нігерія</li>
                <li class="list-group-item">Норвегія</li>
                <li class="list-group-item">Оман</li>
                <li class="list-group-item">Пакистан</li>
                <li class="list-group-item">Палау</li>
                <li class="list-group-item">Панама</li>
                <li class="list-group-item">Папуа-Нова Гвінея</li>
                <li class="list-group-item">Перу</li>
                <li class="list-group-item">Філіппіни</li>
                <li class="list-group-item">Португалія</li>
                <li class="list-group-item">Росія</li>
                <li class="list-group-item">Сент-Кіттс і Невіс</li>
                <li class="list-group-item">Сент-Люсія</li>
                <li class="list-group-item">Сент-Вінсент і Гренадини</li>
                <li class="list-group-item">Самоа</li>
                <li class="list-group-item">Сенегал</li>
                <li class="list-group-item">Сьєрра-Леоне</li>
                <li class="list-group-item">Сінгапур</li>
                <li class="list-group-item">Соломонові Острови</li>
                <li class="list-group-item">Сомалі</li>
                <li class="list-group-item">Південно-Африканська Республіка</li>
                <li class="list-group-item">Іспанія</li>
                <li class="list-group-item">Шрі-Ланка</li>
                <li class="list-group-item">Суринам</li>
                <li class="list-group-item">Тайвань</li>
                <li class="list-group-item">Танзанія</li>
                <li class="list-group-item">Таїланд</li>
                <li class="list-group-item">Тимор-Лешті</li>
                <li class="list-group-item">Того</li>
                <li class="list-group-item">Тонга</li>
                <li class="list-group-item">Тринідад і Тобаго</li>
                <li class="list-group-item">Туніс</li>
                <li class="list-group-item">Об'єднані Арабські Емірати</li>
                <li class="list-group-item">Сполучене Королівство</li>
                <li class="list-group-item">Сполучені Штати Америки</li>
                <li class="list-group-item">Уругвай</li>
                <li class="list-group-item">Вануату</li>
                <li class="list-group-item">Венесуела</li>
                <li class="list-group-item">В'єтнам</li>
                <li class="list-group-item">Західна Сахара</li>
                <li class="list-group-item">Ємен</li>
                <li class="list-group-item">Німеччина</li>
              </ul>
            </div>
          </section>

          <section id="introduced" className="mt-4">
            <h3>
              <button className="btn btn-success w-100 text-start" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#introducedList" 
                      aria-expanded="false" 
                      aria-controls="introducedList">
                Інтродуковані види
              </button>
            </h3>
            <div className="collapse" id="introducedList">
              <ul className="list-group mb-3">
                <li class="list-group-item">Канада</li>
                <li class="list-group-item">Сполучені Штати Америки</li>
                <li class="list-group-item">Бразилія</li>
                <li class="list-group-item">Чилі</li>
                <li class="list-group-item">Аргентина</li>
                <li class="list-group-item">Уругвай</li>
                <li class="list-group-item">Парагвай</li>
                <li class="list-group-item">Болівія</li>
                <li class="list-group-item">Перу</li>
                <li class="list-group-item">Австралія</li>
                <li class="list-group-item">Нова Зеландія</li>
              </ul>
            </div>
          </section>

          <section id="biogeographic" className="mt-4">
            <h3>
              <button className="btn btn-success w-100 text-start" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#biogeographicList" 
                      aria-expanded="false" 
                      aria-controls="biogeographicList">
                Біогеографічні зони
              </button>
            </h3>
            <div className="collapse" id="biogeographicList">
              <ul className="list-group mb-3">
                <li class="list-group-item">Антарктичний</li>
                <li class="list-group-item">Неотропічний</li>
                <li class="list-group-item">Палеарктичний</li>
                <li class="list-group-item">Неарктичний</li>
                <li class="list-group-item">Океанічний</li>
                <li class="list-group-item">Австралазійський</li>
                <li class="list-group-item">Індомалайський</li>
                <li class="list-group-item">Афротропічний</li>
              </ul>
            </div>
          </section>

          <section id="biomes" className="mt-4">
            <h3>
              <button className="btn btn-success w-100 text-start" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#biomesList" 
                      aria-expanded="false" 
                      aria-controls="biomesList">
                Океани
              </button>
            </h3>
            <div className="collapse" id="biomesList">
              <ul className="list-group">
                <li class="list-group-item">Арктичний океан</li>
                <li class="list-group-item">Атлантичний океан</li>
                <li class="list-group-item">Тихий океан</li>
              </ul>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}

export default Population;