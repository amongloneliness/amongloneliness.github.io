'use strict'

var about_text_ru = 'Здравствуйте! Я Вугар Керимов - музыкант и программист. Возможно, на первый взгляд, это кажется несовместимыми занятиями, однако я убежден, что на самом деле они имеют глубокую связь и сильное взаимодействие. Как говорил Джордж Оруэл, "искусство - это не что иное, как жизнь сама, а жизнь - это технология, используемая для создания искусства".\n' +
    'Я считаю, что и программирование, и музыка представляют собой форму творческого процесса. Когда я занимаюсь музыкой, я могу погрузиться в процесс создания и открыть для себя новые грани творчества. Аналогично, когда я пишу код, я имею возможность применять свой творческий подход к созданию инновационных продуктов и решению сложных задач.\n' +
    'Поэтому я готов применить свои навыки и опыт в обоих сферах, чтобы помочь вам достичь ваших целей и создать нечто поистине уникальное и полезное. Я готов создать для вас музыкальный проект, который будет настоящим отражением вашей личности и потребностей, а также разработать инновационные программные продукты, которые помогут вам достичь ваших бизнес-целей.\n' +
    'Кроме того, я также считаю, что программирование и музыка могут взаимодействовать друг с другом, чтобы создать еще более уникальные и захватывающие проекты. Например, я могу использовать свой опыт в области программирования для создания новых инструментов создания музыки, которые помогут музыкантам быть более продуктивными и творческими.\n' +
    'Я готов сотрудничать с вами на любом этапе проекта, начиная с идеи и заканчивая полноценным выпуском продукта. Я готов предоставить вам полную техническую поддержку, чтобы ваш проект прошел успешно и дал результаты, которые вы ожидаете. Я готов работать как с индивидуальными, так и с коммерческими проектами, и всегда стремлюсь к тому, чтобы мои заказчики остались довольны результатом.\n' +
    'Независимо от того, разрабатываю я музыку для игры или приложения, пишу программу для автоматизации бизнес-процессов или создаю сайт, я всегда стараюсь воспользоваться всем моим опытом и знаниями, чтобы создать продукт, который не только удовлетворяет требованиям, но и удивляет и вдохновляет.\n' +
    'Если вы ищете талантливого программиста и музыканта, который сможет воплотить ваши идеи в жизнь, не стесняйтесь связаться со мной. Я всегда открыт для новых проектов и готов создавать что-то особенное и неповторимое для вас и вашей аудитории.';

var about_text_en = 'Hello! I am Vugar Kerimov - musician and programmer. At first glance, these may seem like incompatible activities, but I am convinced that in fact they have a deep connection and strong interaction. As George Orwell said, "Art is nothing but life itself, and life is the technology used to create art."\n' +
    'I believe that both programming and music are a form of the creative process. When I make music, I can immerse myself in the process of creation and discover new facets of creativity. Similarly, when I write code, I have the opportunity to apply my creativity to create innovative products and solve complex problems.\n' +
    'Therefore, I am ready to apply my skills and experience in both areas to help you achieve your goals and create something truly unique and useful. I am ready to create for you a musical project that will be a true reflection of your personality and needs, as well as to develop innovative software products that will help you achieve your business goals.\n' +
    'In addition, I also believe that programming and music can interact with each other to create even more unique and exciting projects. For example, I can use my programming experience to create new music production tools that will help musicians be more productive and creative.\n' +
    'I am ready to cooperate with you at any stage of the project, from the idea to the full release of the product. I am ready to provide you with full technical support so that your project is successful and gives you the results you expect. I am ready to work with both individual and commercial projects, and I always strive to ensure that my customers are satisfied with the result.\n' +
    'Whether I\'m designing music for a game or app, writing a business process automation program, or creating a website, I always try to use all my experience and knowledge to create a product that not only meets the requirements, but also surprises and inspires. \n' +
    'If you are looking for a talented programmer and musician who can bring your ideas to life, feel free to contact me. I am always open to new projects and ready to create something special and unique for you and your audience.';

let is_about = false;

function add_text_about() {
    if (is_about)
        return;
        
    let about = document.body.getElementsByClassName('about');
    let about__text = document.getElementsByClassName('about__text_content');
    let body__container = document.getElementsByClassName('body__container');

    is_about = true;

    about[0].style.cssText += 'pointer-events: none;';

    for (let i = 0, delay = 505; i < about_text_ru.length || i < about_text_en.length; i++, delay += 5) {

        // текст русского языка
        if (i < about_text_ru.length) {
            if (about_text_ru[i] == '\n') {
                sleep(delay).then(() => {about__text[0].innerHTML += '<br>' + '<br>';});
            } else {
                sleep(delay).then(() => {about__text[0].innerHTML += about_text_ru[i];});
            }

        }

        // текст английского языка
        if (i < about_text_en.length) {
            if (about_text_en[i] == '\n') {
                sleep(delay).then(() => {about__text[1].innerHTML += '<br>' + '<br>';});
            } else {
                sleep(delay).then(() => {about__text[1].innerHTML += about_text_en[i];});
            }
        }
    }

    return;
}