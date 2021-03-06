const knowledge = [
    ["Конденсатор", "- это", " устройство, способное накапливать электрический заряд. Такую же функцию выполняет и аккумуляторная батарея, но в отличие от неё конденсатор может моментально отдать весь накопленный заряд."],
    ["Установка", "работает", "так, как рассказано на видео '<br><video style='width:100%' controls src='../Video/Рорик1.mp4'>"],
    ["Ёмкость конденсатора", "измеряется", "в фарадафх. "],
    ["Ёмкостью конденсатора", "называется", " физическая величина, которая численно равна отношению заряда, одного из проводников конденсатора к разности потенциалов между его обкладками."],
    ["Молярную массу", "можно найти", "из уравнения газового состояния <br><img id='bigImg'  onmousedown='showBigimage(this)' src='Resources/Img/KnowledgeImg/molmas.jpg'>"],
    ["Диэлектрик", "- это", "материал, относительно плохо проводящий электрический ток."],
    ["Электрический заряд", "- это", "физическая величина, характеризующая способность частиц или тел вступать в электромагнитные взаимодействия."],
    ["Электрическое поле", "- это", "одна из двух компонент электромагнитного поля, представляющая собой векторное поле, существующее вокруг тел или частиц, обладающих электрическим зарядом, а также возникающее при изменении магнитного поля (например, в электромагнитных волнах)."],
    ["Площадь круга", "- это", "πR²"],
    ["Ёмкость конденсатора", "- это", "ε0*ε*S/d"],
    ["Индуктивность", "измеряется", "Генри (Гн). Индуктивностью в 1 Гн обладает электрическая цепь, в которой возникает ЭДС самоиндукции в 1 Вольт при равномерном изменении тока в этой цепи, со скоростью 1 Ампер в секунду."],
    ["Индуктивность", "- это", "коэффициент пропорциональности между электрическим током, текущим в каком-либо замкнутом контуре, и полным магнитным потоком, называемым также потокосцеплением, создаваемым этим током через поверхность, краем которой является этот контур."],
    ["Катушка индуктивности", "- это", "Винтовая, спиральная или винтоспиральная катушка из свёрнутого изолированного проводника, обладающая значительной индуктивностью при относительно малой ёмкости и малом активном сопротивлении. Как следствие, при протекании через катушку переменного электрического тока наблюдается её значительная инерционность."],
    ["Диэлектрическая проницаемость", "измеряется", "Эта величина безразмерная и всегда æ > 0"],
    ["Скорость", "измеряется", "в метрах в секунду"],
    ["Диэлектрическая проницаемость", "- это", "то физическая величина, которая показывает, во сколько раз напряженность электрического поля в диэлектрике меньше напряженности электрического поля в вакууме. "],
    ["Температура", "измеряется", "в градусах цельсия."],
    ["Структура установки", "выглядят", "так '<br><iframe id='bigFrame'  onmousedown='showBigFrame()' style='width:100%; height: 40%;' src='../pages/MapFrame.html'>Структура установки</iframe><br><input type='button' onmousedown='showBigFrame(this)' value='Показать на весь экран'/>"],
    ["Состоянием", "является", " понятие, обозначающее множество устойчивых значений переменных параметров объекта."],
    ["Сосуд", "- это", "герметически закрытая ёмкость, предназначенная для ведения химических, тепловых и других технологических процессов, а также для хранения и транспортировки газообразных, жидких и других веществ."],
    ["Уравнение", "- это", "математическое равенство с одной или несколькими неизвестными величинами."],
    ["Измеритель добротности", "- это", "прибор для измерения добротности колебательных контуров, катушек индуктивности и конденсаторов. Д. и. содержат (рис.): перестраиваемый генератор колебаний ВЧ; измерит, контур, образуемый образцовым перем. конденсатором С0 с градуированной шкалой и катушкой индуктивности Lx измеряемого контура или вспомогательной (образцовой) катушкой индуктивности L0; индикатор резонанса, в качестве к-рого обычно используется ламповый вольтметр."],
    ["Выражение", "- это", "любое сочетание чисел, букв и знаков операций."],
    ["Изменение", "- это", "переход от одной ситуации к другой."],
    ["Объём", "измеряется", "в см3"],
    ["Вещество", "- это", "вид материи, обладающий в противоположность полю массой покоя."],
    ["Образец", "- это", "в-ва (материалы) с достаточно точно известными и официально аттестованными значениями величин."],
    ["Эффективный", "- это", "действенный, оптимальный"],
    ["Молярная масса смеси газов", "может быть рассчитана", "теоретически, если известны относительное содержание и молярная масса каждого из газов, входящих в смесь."],
    ["Полярные диэлектрики", "- это", "это вещества (H2O, NH4, SO2, CO и др.), молекулы которых имеют асимметричное строение, т. е. центры «сосредоточения» положительных и отрицательных зарядов не совпадают и эти молекулы обладают дипольным моментом."],
    ["Неполярные диэлектрики", "- это", " это вещества (N2, H2, O2, CO2, CH4 и др.), молекулы которых имеют симметричное строение, т. е. центры «сосредоточения» положительных и отрицательных зарядов в отсутствие внешнего электрического поля совпадают и ди польный момент этих молекул в данном случае равен нулю."],
    ["Ионно-кристаллические диэлектрики", "- это", " вещества (NaCl, KCl, KBr и др.), которые имеют ионное строение. Ионные кристаллы представляют собой пространственные решетки с правильным чередованием ионов разных знаков."],
    ["Плотность", "измеряется", "в килограммах на метр кубический"],
    ["Дипольная поляризация", "- это", "В результате преимущественной ориентации дипольных моментов молекул вдоль направления внешнего поля на противоположных гранях образца возникают поляризационные заряды разных знаков, тогда как внутри диэлектрика заряды разных знаков в среднем скомпенсированы. Такого рода поляризация называется ориентационной."],
    ["Формула", "- это", "в математике, а также физике и прикладных науках, символическая запись высказывания, либо формы высказывания."],
    ["Дипольный момент", "- это", "химическое свойство, которое указывает, насколько неоднородно электрические заряды распределяются в молекуле."],
    ["Дипольный момент", "измеряется", "в дебаях (сокращение — Д): 1 Д = 10 −18 единиц СГСЭ момента электрического диполя, 1 Д = 3,33564·10 −30 Кл·м."],
    ["Диэлектрическая проницаемость воздуха", "равна", " в нормальных условиях относительная равна 1,0006."],
    ["Вольтметр", "- это", "лектроизмерительный прибор, который предназначен для измерения электрического напряжения на полюсах источника тока или на каком-нибудь участке электрической цепи."],
    ["Добротность", "- это", "параметр колебательной системы, определяющий ширину резонанса и характеризующий, во сколько раз запасы энергии в системе больше, чем потери энергии за время изменения фазы на 1 радиан."],
    ["Колебания", "- это", " движение, повторяющееся через определённые интервалы времени, при котором тело поочерёдно отклоняется то в одну, то в другую сторону от положения равновесия."],
    ["Погрешность измерения", "- это", "отклонение измеренного значения величины от её истинного (действительного) значения."],
    ["Тепловым движением", "называется", "процесс хаотичного (беспорядочного) движения частиц, образующих вещество. Чем выше температура, тем больше скорость движения частиц."],
    ["Векторная сумма дипольных моментов всех молекул", "равна", "нулю."],
    ["Молекула", "- это", "наименьшая частица определенного вещества, которая обладает его химическими свойствами. Состав и химическое строение молекулы определяют ее химические свойства. Все вещества состоят из молекул, а молекулы из атомов."],
    ["Атом", "- это", "наименьшая частица химического элемента, входящая в состав молекул простых и сложных веществ, это электронейтральная частица, которая состоит из положительно заряженного ядра атома и отрицательно заряженных электронов, вращающихся вокруг ядра."],
    ["Диэлектрики", "- это", "вещества состоящие из нейтральных атомов или молекул, практически не содержат свободных носителей заряда и потому плохо проводят электрический ток (т. е. являются в обычных условиях изоляторами)."],
    ["Атомное ядро", "состоит", "из  протонов (Z) и  нейтронов (N), имеет положительный заряд, равный по величине количеству протонов (или электронов в нейтральном атоме) и совпадает с порядковым номером элемента в периодической таблице."],
    ["Неполярная молекула", "- это", "симметричные молекулы в отсутствие внешнего электрического поля центры тяжести положительных и отрицательных зарядов совпадают. Такие молекулы не обладают собственным дипольным моментом и называются неполярными."],
    ["Резонанс", "- это", "астотно-избирательный отклик колебательной системы на периодическое внешнее воздействие, который проявляется в резком увеличении амплитуды стационарных колебаний при совпадении частоты внешнего воздействия с определёнными значениями, характерными для данной системы."],
    ["Ион", "- это", "заряженная частица, состоящая из отдельных атомов или групп химически связанных атомов, имеющих избыток или недостаток электронов."],
    ["Физика", "- это", "наука о природе (естествознание) в самом общем смысле (часть природоведения)."],
    ["Энергия", "- это", "скалярная физическая величина, характеризующая состояние тела или системы тел, общая количественная мера движения и взаимодействия всех видов материи."],
    ["Сила", "- это", "векторная физическая величина – мера взаимодействия тел, равна произведению массы тела на сообщаемое этой силой ускорение"],
    ["Теплота", "- это", "форма беспорядочного (теплового) движения образующих тело частиц."],
    ["Период", "- это", "время одного полного колебания, время, в течение которого система возвращается в исходное положение"],
    ["Частота", "- это", "Отношение числа колебаний ко времени, в течение которого они совершаются."],
    ["Дипольный момент", "можно найти", "по формуле'<img id='bigImg'  onmousedown='showBigimage(this)' src='../Images/picture for theory/формула31.1.JPG'>"],
    ["Грань", "- это", "плоская поверхность предмета, составляющая угол с другой такой же поверхностью."],
    ["Ионные кристаллы", "- это", "пространственные решетки с правильным чередованием ионов разных знаков."],
    ["Напряжённость электрического поля", "- это", "Векторная физическая величина, характеризующая электрическое поле в данной точке и численно равная отношению силы действующей на неподвижный точечный заряд, помещенный в данную точку поля, к величине этого заряда."],
    ["Напряжённость электрического поля", "равна", "<img id='bigImg'  onmousedown='showBigimage(this)' src='../Images/picture for theory/формула31.3.JPG'>"],
    ["Жидкость", "- это", "вещество, находящееся в жидком агрегатном состоянии, занимающем промежуточное положение между твёрдым и газообразным состояниями."],
    ["Идеальная жидкость", "- это", "воображаемая жидкость (сжимаемая или несжимаемая), в которой отсутствуют вязкость и теплопроводность."],
    ["Масса", "- это", "скалярная физическая величина, определяющая инерционные и гравитационные свойства тел в ситуациях, когда их скорость намного меньше скорости света. <br><img id='bigImg'  onmousedown='showBigimage(this)' src='Resources/Img/KnowledgeImg/vesi.jpg'>"],
    ["Коэффициент теплового расширения", "- это", "физическая величина, характеризующая относительное изменение объёма или линейных размеров тела с увеличением температуры на 1 К при постоянном давлении."],
    ["Механизм", "- это", "внутреннее устройство машины, прибора, аппарата, приводящее их в действие."],
    ["Нуклон", "- это", "общее название для составляющих атомное ядро протонов и нейтронов. <br><img id='bigImg'  onmousedown='showBigimage(this)' src='Resources/Img/KnowledgeImg/sila.png'>"],
    ["Парциальное давление", "- это", "давление отдельно взятого компонента газовой смеси."],
    ["Приведённая длина", "- это", "величина, измеряемая в единицах длины и условно вводимая для описания физического объекта в тех или иных задачах, но, возможно, не связанная напрямую с его размером."],
    ["Свет", "- это", "в физической оптике электромагнитное излучение, воспринимаемое человеческим глазом."],
    ["Система отсчёта", "- это", "то совокупность неподвижных относительно друг друга тел (тело отсчёта), по отношению к которым рассматривается движение (в связанной с ними системе координат), и отсчитывающих время часов (системы отсчёта времени), по отношению к которой рассматривается движение каких-либо тел."],
    ["Скорость", "- это", " векторная физическая величина, характеризующая быстроту перемещения и направление движения материальной точки относительно выбранной системы отсчёта."],
    ["Скорость света", "- это", "абсолютная величина скорости распространения электромагнитных волн в вакууме."],
    ["Сплошная среда", "- это", "механическая система, обладающая бесконечным числом внутренних степеней свободы."],
    ["Температура", "- это", " физическая величина, характеризующая термодинамическую систему и количественно выражающая интуитивное понятие о различной степени нагретости тел."],
    ["Проводники", "- это", "тела или материалы, через которые электрические заряды могут свободно переходить от заряженного тела к незаряженному. "],
    ["Температура плавления", "- это", "температура твёрдого кристаллического тела (вещества), при которой оно совершает переход в жидкое состояние."],
    ["Диэлектрическая восприимчивость вещества", "- это", "физическая величина, мера способности вещества поляризоваться под действием электрического поля."],
    ["Диэлектрическая восприимчивость вещества", "измеряется", "в ничём (безразмерная величина)."],
    ["Диэлектрическую восприимчивость вещества", "можно найти", "<img src='../Images/picture for theory/формула31.4.JPG'>"],
    ["Поляризуемость молекулы", "- это", " способность частицы к поляризации. "],
    ["Поляризуемость молекулы", "измеряется", "в Кл2 • м2/Дж"],
    ["Концентрация молекул", "- это", " физическая величина, равная отношению числа частиц."],
    ["Концентрация молекул", "измеряется", "как число молекул N на единицу объема."],
    ["Элементарная частица", "- это", "обирательный термин, относящийся к микрообъектам в субъядерном масштабе, которые на практике невозможно расщепить на составные части."],
    ["Диэлектрическая восприимчивость полярного диэлектрика", "- это", "физическая величина, мера способности вещества поляризоваться под действием электрического поля."],
    ["Концентрация молекул", "может быть рассчитана", "<img id='bigImg'  onmousedown='showBigimage(this)' src='../Images/picture for theory/формула(n).JPG'>"],
    ["Диэлектрическая восприимчивость полярного диэлектрика", "может быть рассчитана", "<img id='bigImg'  onmousedown='showBigimage(this)' src='../Images/picture for theory/формула31.6.JPG'>"],
    ["Напряженность электрического поля", "- это", "Векторная физическая величина, характеризующая электрическое поле в данной точке и численно равная отношению силы действующей на неподвижный точечный заряд, помещенный в данную точку поля, к величине этого заряда."],
    ["Напряженность электрического поля", "может быть рассчитана", "<img id='bigImg'  onmousedown='showBigimage(this)' src='../Images/picture for theory/формула31.7.JPG'>"],
    ["Ионы", "- это", "заряженные частицы, которые образуются из атомов или групп атомов после отдачи или присоединения электронов."],
    ["Ионная решетка", "- это", "егулярная структура твёрдого вещества, в узлах которой расположены положительно и отрицательно заряженные ионы."],
    ["Связанные заряды", "- это", " Заряды, которые входят в состав нейтральных атомов и молекул, а также заряды ионов в кристаллических диэлектриках с ионной решеткой"],
    ["Удельный объём", "измеряется", "в метре кубическом деленном на килограмм"],
    ["Асимметрией", "называется", "характеристика системы, изменяющей свое исходное состояние (положение) в зависимости от пространственного переноса, поворота; а также систем, в которых проводится различение правого и левого."],
    ["Тепловое движение", "- это", "процесс хаотичного (беспорядочного) движения частиц"],
    ["Тепловая энергия", "измеряется", "в джоулях"],
    ["Теплоёмкость", "измеряется", "в джоулях на градус кельвина"],
    ["Период", "измеряется", "в секундах"],
    ["Квазиупругими диполями", "называется", "Молекула приобретает дипольный момент , который пропорционален напряженности Е внешнего поля. Такие диполи, возникающие при «деформации» атомов и молекул во внешнем электрическом поле."],
    ["Энергия", "измеряется", "в джоулях"]
]

const endings =
    [
        ["такое", "- это"],
        ["считается", "является"],
        ["размера", "имеет"],
        ["есть", "- это"],
        ["равна", "равна"],
        ["состоит", "состоит"],
        ["измеряется", "измеряется"],
        ["рассчитать", "может быть рассчитана"],
        ["называется", "называется"],
        ["найти","можно найти"],

        ["ет", "(ет|ут|ют)"],
        ["ут", "(ет|ут|ют)"],
        ["ют", "(ет|ут|ют)"],		     //1 спряжение

        ["ит", "(ит|ат|ят)"],
        ["ат", "(ит|ат|ят)"],
        ["ят", "(ит|ат|ят)"],		     //2 спряжение

        ["ется", "(ет|ут|ют)ся"],
        ["утся", "(ет|ут|ют)ся"],
        ["ются", "(ет|ут|ют)ся"], //1 спряжение, возвратные

        ["ится", "(ит|ат|ят)ся"],
        ["атся", "(ит|ат|ят)ся"],
        ["ятся", "(ит|ат|ят)ся"],     //2 спряжение, возвратные

        ["ен", "ен"],
        ["ена", "ена"],
        ["ено", "ено"],
        ["ены", "ены"],		    //краткие прилагательные

        ["ан", "ан"],
        ["ана", "ана"],
        ["ано", "ано"],
        ["аны", "аны"],		    //краткие прилагательные

        ["жен", "жен"],
        ["жна", "жна"],
        ["жно", "жно"],
        ["жны", "жны"],  	    //краткие прилагательные
    ];

const blacklist = ["замена", "замены", "атрибут", "маршрут", "член", "нет", "планет"];

function findIntelAnswer() {
    //ввод значения
    let question = document.getElementById('input_string').value;
    //вписывание вопроса в тело сообщения
    if (question != "") {
        let qDiv = document.createElement('div');
        qDiv.className = "question";
        document.getElementById("HelperBody").appendChild(qDiv);
        let innerqDiv = document.createElement('div');
        innerqDiv.innerText = question;
        qDiv.appendChild(innerqDiv);
        document.getElementById("input_string").value = "";
    }
    //приведение к нижнему регистру и деление на слова
    let string = question.toLowerCase();
    let separators = "'\",.!?()[]\\/";
    for (let i = 0; i < separators.length; i++) {
        string = string.replaceAll(separators[i], " ");
        string = string.replaceAll("  ", " ");
    }
    string.trim();
    let words = string.split(' ');

    let answerIndex = -1;
    let answerIsFound = false;

    //поиск в базе по ключевым словам
    for (let i = 0; i < words.length; i++) {
        let endingIndex = getEndingIndex(words[i]);
        if (endingIndex === -1) continue;
        else {
            let actionTemplate = words[i].substring(0, words[i].length - endings[endingIndex][0].length)
                + endings[endingIndex][1];
            let actionRegexPredicate = new RegExp(actionTemplate);
            let wordTemplate = words.slice(i + 1).join(".*");
            let wordRegexPredicate = new RegExp(wordTemplate);
            if (wordTemplate.length >= 3) {

                for (let j in knowledge) {
                    if (wordRegexPredicate.test(knowledge[j][0].toLowerCase())
                        && actionRegexPredicate.test(knowledge[j][1].toLowerCase())) {
                        answerIndex = j;
                        answerIsFound = true;
                    }
                    if (answerIsFound === true) break;
                }
            }
        }
        if (answerIsFound === true) break;
    }

    let answerString = "Результатов не найдено...";
    if (answerIndex !== -1) {
        answerString = prepareAnswerString(answerIndex);
    }

    if (answerString != "") {
        let aDiv = document.createElement('div');
        aDiv.className = "answer";
        document.getElementById("HelperBody").appendChild(aDiv);
        let inneraDiv = document.createElement('div');
        inneraDiv.innerHTML = answerString;
        inneraDiv.innerHTML += textToAudio(answerString);
        aDiv.appendChild(inneraDiv);
    }

}

function getEndingIndex(word) {
    if (blacklist.indexOf(word) !== -1) return -1;
    for (let j = 0; j < endings.length; j++) {
        if (word.substring(word.length - endings[j][0].length) === endings[j][0])
            return j;
    }
    return -1;
}

function prepareAnswerString(answerIndex) {
    const word = knowledge[answerIndex][0].charAt(0).toUpperCase()
        + knowledge[answerIndex][0].slice(1);
    return word + " " + knowledge[answerIndex][1] + " " + knowledge[answerIndex][2];
}

function Open() {
    document.getElementById("Helper").style.visibility = 'visible';
    document.getElementById("OpenButton").style.visibility = 'hidden';
}

function Close() {
    document.getElementById("Helper").style.visibility = 'hidden';
    document.getElementById("OpenButton").style.visibility = 'visible';
}

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

var recognizer = new webkitSpeechRecognition();
recognizer.interimResults = true;
recognizer.lang = 'ru-Ru';
recognizer.onresult = function (event) {
    var result = event.results[0][0].transcript;
    console.log(result);
    document.getElementById('input_string').value = result + "?";
}

function speech() {
    recognizer.start();
}


function getVoice(name) {
    const voices = window.speechSynthesis.getVoices();
    for (const voice of voices) {
      if (voice.name == name) {
        return voice;
      }
    }
    return null;
  }

var checkPlay = false;  

  function playPauseAudio() {
    const btnPlay = document.querySelector("#playpause");
  if (window.checkPlay) {
    speechSynthesis.pause();
    btnPlay.innerHTML = "⏸️";
    window.checkPlay = false;
  } else {
    speechSynthesis.resume();
    btnPlay.innerHTML = "▶️";
    window.checkPlay = true;
  }
  console.log(window.checkPlay);
}

function playAudio(){  
    utterance = new SpeechSynthesisUtterance(window.textAudio);
    utterance.lang = "ru-RU";
// голос женский
//utterance.voice = getVoice("Milena");
// или мужской
utterance.voice = getVoice("zahar");

// тембр и скорость по вкусу
utterance.pitch = 0.8;
utterance.rate = 1.1;
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
    window.checkPlay = true;
    btnPlay.innerHTML = "▶️";
    const btnPlay = document.querySelector("#playpause");
}

window.speechSynthesis.getVoices();

function textToAudio(texts){
    return "<audio controls='true' " +
        "src='https://tts.voicetech.yandex.net/generate?format=wav" +
        "&lang=ru-RU" +
        "&key=4a4d3a13-d206-45fc-b8fb-e5a562c9f587" +
        "&speaker=zahar" +
        "&text=" + texts + "'></audio>";
}

var textAudio = "";

// function textToAudio(texts) {
//     window.textAudio = texts;

//         return '<button onmousedown="playAudio()" style=" padding: .5rem 1rem;' 
//         + 'border: 1px solid #000;'
//         + 'border-radius: 0.25rem;'
//         + 'background-color: #fff;'
//         + 'font-size: 1rem;'
//         + 'cursor: pointer;">🎧 Слушать</button>'
//         + '<button id="playpause" style=" padding: .5rem 1rem;' 
//         + 'border: 1px solid #000;'
//         + 'border-radius: 0.25rem;'
//         + 'background-color: #fff;'
//         + 'font-size: 1rem;'
//         + 'cursor: pointer;" onmousedown="playPauseAudio()" data-playing>▶️</button>';
// }


let isBigimage = false;

function removeBigImg(){
    var description = document.getElementById("removeImg");
    description.remove();
    window.isBigimage = false;
}

var backSrc = '';

function showBigimage(element){
    
    if(window.backSrc == element.src && window.isBigimage)
        removeBigImg();
    else{
        if(window.isBigimage)
            removeBigImg();
        window.backSrc = element.src;
        console.log(window.isBigimage);
        $('body').append('<img id="removeImg" onmousedown="removeBigImg()" style="display: inline-block; top:25%; margin-top:auto; position: fixed; right: 25%;width: 50%; border: none; text-indent: 100%; z-index: 999;" src="'+element.src+'"/>');
        window.isBigimage = true;   
    }   
}

function showBigFrame(element){   
    if(window.backSrc == "../pages/MapFrame.html" && window.isBigimage){
        element.value = "Показать на весь экран";
        removeBigImg();
    }
    
    else{
        if(window.isBigimage)
            removeBigImg();
        window.backSrc = "../pages/MapFrame.html";
        console.log(window.isBigimage);
        $('body').append('<iframe id="removeImg" style=" top:5%; width:71%; height:80%; position: fixed; right: 14%; border: none; text-indent: 100%; z-index: 999;" src="../pages/MapFrame.html"/>');
        window.isBigimage = true;   
        element.value = "Скрыть";
    }   
}
