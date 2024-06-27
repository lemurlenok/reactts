import React, { FC } from 'react';
import Character from "./Components/Character/Character";
import './App.css'; // Переконайтеся, що стилі головного компонента App вірно імпортовані

const App: FC = () => {
    return (
        <>
            <Character
                image={'https://flomaster.top/uploads/posts/2022-07/1656813528_3-flomaster-club-p-mumii-troll-risunok-krasivo-3.png'}
                name={'Мумі-троль'}
            >
                Його добре серце і великий живіт зроблять його відразу ж улюбленцем. У реакті він би виглядав теплим і здатним зрозуміти почуття інших, завжди готовий допомогти.
            </Character>
            <Character
                name={'Снусмумрік'}
                image={'https://pm1.aminoapps.com/7206/e04596c0dc452466f45a6ff85f1be5beb300a92er1-500-707v2_hq.jpg'}
            >
                Він завжди готовий до пригод і винахідливих розваг. У реакті він би був цікавим і трохи загадковим, завжди здатним знайти вихід з будь-якої складної ситуації.
            </Character>
        </>
    );
}

export default App;