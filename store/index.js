function randomInt(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand)
  return rand
}

export const state = () => ({
  zarechnii: {
    city: 'zarechnii',
    headerCityLogo: true,
    colorThemeClasses: {
      section: 'section-color-theme_zarechnii',
      leftCircleImage: 'left-circle-image-color-theme_zarechnii',
      rightCircleImage: 'right-circle-image-color-theme_zarechnii',
      bottomCircleImage: 'bottom-circle-image-color-theme_zarechnii',
      footer: 'footer-color-theme_zarechnii',
      formColor: 'color-theme_zarechnii'
    },
    cityName: 'Заречный',
    helloText: 'Уважаемые зареченцы!',
    helloTextMain:
      'Перед вами портал «Умный город Росатома — Заречный». Это сервисы для взаимодействия с жителей с властью и городскими службами. Сейчас портал работает в пилотном режиме, и нам важно ваше мнение. С вашей помощью количество и качество сервисов будет расти, а их возможности – расширяться!',
    headOfCityName: 'Олег Климанов',
    headOfCityOccupation: 'глава города Заречный',
    slogan: 'Открой',
    slogan2: 'для себя',
    secondSlideGraphicBalls: true,
    contur: 'los-contur',
    howManyUsers: randomInt(1200, 20000),
    howManyCompanies: randomInt(10, 200),
    howManyCategories: randomInt(1, 50),
    footerCityLogo: true
  },
  sarov: {
    city: 'sarov',
    headerCityLogo: true,
    colorThemeClasses: {
      section: 'section-color-theme_sarov',
      leftCircleImage: 'left-circle-image-color-theme_sarov',
      rightCircleImage: 'right-circle-image-color-theme_sarov',
      bottomCircleImage: 'bottom-circle-image-color-theme_sarov',
      footer: 'footer-color-theme_sarov',
      formColor: 'color-theme_sarov'
    },
    cityName: 'Саров',
    helloText: 'Уважаемые саровчане!',
    helloTextMain:
      'Перед вами портал «Умный город Росатома — Саров». Это сервисы для взаимодействия с жителей' +
      ' с властью и городскими службами. Сейчас портал работает в пилотном режиме, и нам важно ваше мнение. С вашей помощью количество и качество сервисов будет расти, а их возможности – расширяться!',
    headOfCityName: 'Алексей Голубев',
    headOfCityOccupation: 'глава администрации г. Саров',
    howManyUsers: randomInt(1200, 20000),
    howManyCompanies: randomInt(10, 200),
    howManyCategories: randomInt(1, 50),
    footerCityLogo: true
  },
  lesnoi: {
    city: 'lesnoi',
    headerCityLogo: true,
    colorThemeClasses: {
      section: 'section-color-theme_lesnoi',
      leftCircleImage: 'left-circle-image-color-theme_lesnoi',
      rightCircleImage: 'right-circle-image-color-theme_lesnoi',
      bottomCircleImage: 'bottom-circle-image-color-theme_lesnoi',
      footer: 'footer-color-theme_lesnoi',
      formColor: 'color-theme_lesnoi'
    },
    cityName: 'Лесной',
    helloText: 'Уважаемые жители городского округа «Город Лесной»!',
    helloTextMain:
      'Приветствую вас на портале «Умный город Росатома- Лесной»!\n' +
      'Мы начинаем реализацию проекта по цифровизации городского пространства.\n' +
      'На портале представлены сервисы для взаимодействия жителей с властью и городскими службами. Это ещё одна возможность совместными усилиями наиболее эффективно решать актуальные вопросы жизнедеятельности нашего Лесного. Вместе меняем город к лучшему!',
    headOfCityName: 'Сергей Черепанов',
    headOfCityOccupation: 'глава городского округа «Город Лесной»',
    slide2PositionOptions: 'slide2-position-options_lesnoi',
    howManyUsers: randomInt(1200, 20000),
    howManyCompanies: randomInt(10, 200),
    howManyCategories: randomInt(1, 50),
    footerCityLogo: true
  },
  glazov: {
    city: 'glazov',
    headerCityLogo: false,
    colorThemeClasses: {
      section: 'section-color-theme_glazov',
      leftCircleImage: 'left-circle-image-color-theme_glazov',
      rightCircleImage: 'right-circle-image-color-theme_glazov',
      bottomCircleImage: 'bottom-circle-image-color-theme_glazov',
      footer: 'footer-color-theme_glazov',
      formColor: 'color-theme_glazov'
    },
    cityName: 'Глазов',
    helloText: 'Уважаемые жители города Глазова!',
    helloTextMain:
      'Перед вами портал «Умный город Росатома - Глазов». Здесь представлен комплекс цифровых инструментов, которые помогут упростить взаимодействие горожан с Администрацией ЗАТО г. Глазов и городскими службами. Сейчас портал работает в пилотном режиме, и для нас важно узнать ваше мнение о нем. С вашей помощью количество и качество сервисов будет расти, а их возможности - расширяться. ',
    headOfCityName: 'Сергей Коновалов',
    headOfCityOccupation: 'глава города Глазова',
    slide2PositionOptions: 'slide2-position-options_glazov',
    howManyUsers: randomInt(1200, 20000),
    howManyCompanies: randomInt(10, 200),
    howManyCategories: randomInt(1, 50),
    footerCityLogo: true
  },
  zelenogorsk: {
    city: 'zelenogorsk',
    headerCityLogo: false,
    colorThemeClasses: {
      section: 'section-color-theme_zelenogorsk',
      leftCircleImage: 'left-circle-image-color-theme_zelenogorsk',
      rightCircleImage: 'right-circle-image-color-theme_zelenogorsk',
      bottomCircleImage: 'bottom-circle-image-color-theme_zelenogorsk',
      footer: 'footer-color-theme_zelenogorsk',
      formColor: 'color-theme_zelenogorsk'
    },
    cityName: 'Зеленогорск',
    helloText: 'Уважаемые жители города Зеленогорска!!',
    helloTextMain:
      'Перед вами портал «Умный город Росатома - Зеленогорск». Здесь представлен комплекс цифровых инструментов, которые помогут упростить взаимодействие горожан с Администрацией ЗАТО г. Зеленогорска и городскими службами. Сейчас портал работает в пилотном режиме, и для нас важно узнать ваше мнение о нем. С вашей помощью количество и качество сервисов будет расти, а их возможности - расширяться. ',
    headOfCityName: 'Михаил Сперанский',
    headOfCityOccupation: 'глава ЗАТО г. Зеленогорска',
    contur: 'slide2-contur_zelenogorsk',
    slide2PositionOptions: 'slide2-position-options_zelenogorsk',
    slide2InterestingPlace: true,
    slide2InterestingPlaceStyle: 'slide2-interesting-place',
    howManyUsers: randomInt(1200, 20000),
    howManyCompanies: randomInt(10, 200),
    howManyCategories: randomInt(1, 50),
    footerCityLogo: true
  },
  novouralsk: {
    city: 'novouralsk',
    headerCityLogo: false,
    colorThemeClasses: {
      section: 'section-color-theme_novouralsk',
      leftCircleImage: 'left-circle-image-color-theme_novouralsk',
      rightCircleImage: 'right-circle-image-color-theme_novouralsk',
      bottomCircleImage: 'bottom-circle-image-color-theme_novouralsk',
      footer: 'footer-color-theme_novouralsk',
      formColor: 'color-theme_novouralsk'
    },
    cityName: 'Новоуральск',
    helloText: 'Уважаемые жители Новоуральского городского округа!',
    helloTextMain:
      'Перед вами портал «Умный город Росатома — Новоуральск». \n' +
      'Это сервисы для взаимодействия жителей с властью и городскими службами. Сейчас портал работает в пилотном режиме, и нам крайне важно ваше мнение. С вашей помощью количество и качество сервисов будет расти, а их возможности – расширяться!',
    headOfCityName: 'Владимир Цветов',
    headOfCityOccupation: 'Глава Новоуральского городского округа',
    slide2PositionOptions: 'slide2-position-options_novouralsk',
    howManyUsers: randomInt(1200, 20000),
    howManyCompanies: randomInt(10, 200),
    howManyCategories: randomInt(1, 50),
    footerCityLogo: true
  },
  ozersk: {
    city: 'ozersk',
    headerCityLogo: false,
    colorThemeClasses: {
      section: 'section-color-theme_ozersk',
      leftCircleImage: 'left-circle-image-color-theme_ozersk',
      rightCircleImage: 'right-circle-image-color-theme_ozersk',
      bottomCircleImage: 'bottom-circle-image-color-theme_ozersk',
      footer: 'footer-color-theme_ozersk',
      formColor: 'color-theme_ozersk'
    },
    cityName: 'Озерск',
    helloText: 'Уважаемые жители города Озерска!',
    helloTextMain:
      'Перед вами портал «Умный город Росатома - Озерск». Здесь представлен комплекс цифровых инструментов, которые помогут упростить взаимодействие горожан с Администрацией ЗАТО г. Озерска и городскими службами. Сейчас портал работает в пилотном режиме, и для нас важно узнать ваше мнение о нем. С вашей помощью количество и качество сервисов будет расти, а их возможности - расширяться. ',
    headOfCityName: 'Евгений Щербаков',
    headOfCityOccupation: 'Глава Озерского городского округа',
    slide2PositionOptions: 'slide2-position-options_ozersk',
    slide2InterestingPlace: true,
    slide2InterestingPlaceStyle: 'slide2-interesting-place',
    howManyUsers: randomInt(1200, 20000),
    howManyCompanies: randomInt(10, 200),
    howManyCategories: randomInt(1, 50),
    footerCityLogo: false
  },
  seversk: {
    city: 'seversk',
    headerCityLogo: false,
    colorThemeClasses: {
      section: 'section-color-theme_seversk',
      leftCircleImage: 'left-circle-image-color-theme_seversk',
      rightCircleImage: 'right-circle-image-color-theme_seversk',
      bottomCircleImage: 'bottom-circle-image-color-theme_seversk',
      footer: 'footer-color-theme_seversk',
      formColor: 'color-theme_seversk'
    },
    cityName: 'Северск',
    helloText: 'Уважаемые жители города Северска!',
    helloTextMain:
      'Перед вами портал «Умный город Росатома - Северск». Здесь представлен комплекс цифровых инструментов, которые помогут упростить взаимодействие горожан с Администрацией ЗАТО г. Северск и городскими службами. Сейчас портал работает в пилотном режиме, и для нас важно узнать ваше мнение о нем. С вашей помощью количество и качество сервисов будет расти, а их возможности - расширяться.',
    headOfCityName: 'Николай Диденко',
    headOfCityOccupation: 'Глава Администрации ЗАТО Северск',
    slide2PositionOptions: 'slide2-position-options_seversk',
    slide2InterestingPlace: true,
    slide2InterestingPlaceStyle: 'slide2-interesting-place',
    howManyUsers: randomInt(1200, 20000),
    howManyCompanies: randomInt(10, 200),
    howManyCategories: randomInt(1, 50),
    footerCityLogo: false
  },
  zarechniiSverdl: {
    city: 'zarechniiSverdl',
    headerCityLogo: false,
    colorThemeClasses: {
      section: 'section-color-theme_zarechniiSverdl',
      leftCircleImage: 'left-circle-image-color-theme_zarechniiSverdl',
      rightCircleImage: 'right-circle-image-color-theme_zarechniiSverdl',
      bottomCircleImage: 'bottom-circle-image-color-theme_zarechniiSverdl',
      footer: 'footer-color-theme_zarechniiSverdl',
      formColor: 'color-theme_zarechniiSverdl'
    },
    cityName: 'Заречный',
    helloText: 'Уважаемые жители города Заречный!',
    helloTextMain:
      'Перед вами портал «Умный город Росатома - Заречный». Здесь представлен' +
      ' комплекс цифровых инструментов, которые помогут упростить взаимодействие горожан с' +
      ' Администрацией городского округа Заречный и городскими службами. Сейчас портал работает в пилотном режиме, и для нас важно узнать ваше мнение о нем. С вашей помощью количество и качество сервисов будет расти, а их возможности - расширяться.',
    headOfCityName: 'Андрей Захарцев',
    headOfCityOccupation: 'Глава городского округа Заречный',
    slide2PositionOptions: 'slide2-position-options_zarechniiSverdl',
    howManyUsers: randomInt(1200, 20000),
    howManyCompanies: randomInt(10, 200),
    howManyCategories: '30'
  },
  snezhinsk: {
    city: 'snezhinsk',
    headerCityLogo: false,
    colorThemeClasses: {
      section: 'section-color-theme_snezhinsk',
      leftCircleImage: 'left-circle-image-color-theme_snezhinsk',
      rightCircleImage: 'right-circle-image-color-theme_snezhinsk',
      bottomCircleImage: 'bottom-circle-image-color-theme_snezhinsk',
      footer: 'footer-color-theme_snezhinsk',
      formColor: 'color-theme_snezhinsk'
    },
    cityName: 'Снежинск',
    helloText: 'Уважаемые жители города Снежинска!',
    helloTextMain:
      'Перед вами портал «Умный город Росатома - Снежинск». Здесь представлен комплекс цифровых инструментов, которые помогут упростить взаимодействие горожан с Администрацией ЗАТО г. Снежинск и городскими службами. Сейчас портал работает в пилотном режиме, и для нас важно узнать ваше мнение о нем. С вашей помощью количество и качество сервисов будет расти, а их возможности - расширяться.',
    headOfCityName: 'Игорь Сапрыкин',
    headOfCityOccupation: 'Глава Снежинского городского округа',
    slide2PositionOptions: 'slide2-position-options_snezhinsk',
    slide2InterestingPlace: true,
    slide2InterestingPlaceStyle: 'slide2-interesting-place',
    howManyUsers: randomInt(1200, 20000),
    howManyCompanies: randomInt(10, 200),
    howManyCategories: randomInt(1, 50),
    footerCityLogo: false
  },
  zheleznogorsk: {
    city: 'zheleznogorsk',
    headerCityLogo: false,
    colorThemeClasses: {
      section: 'section-color-theme_zheleznogorsk',
      leftCircleImage: 'left-circle-image-color-theme_zheleznogorsk',
      rightCircleImage: 'right-circle-image-color-theme_zheleznogorsk',
      bottomCircleImage: 'bottom-circle-image-color-theme_zheleznogorsk',
      footer: 'footer-color-theme_zheleznogorsk',
      formColor: 'color-theme_zheleznogorsk'
    },
    cityName: 'Железногорск',
    helloText: 'Уважаемые жители города Железногорска!',
    helloTextMain:
      'Перед вами портал «Умный город Росатома - Железногорск». Здесь представлен комплекс цифровых инструментов, которые помогут упростить взаимодействие горожан с Администрацией ЗАТО г. Железногорска и городскими службами. Сейчас портал работает в пилотном режиме, и для нас важно узнать ваше мнение о нем. С вашей помощью количество и качество сервисов будет расти, а их возможности - расширяться.',
    headOfCityName: 'Игорь Куксин',
    headOfCityOccupation: 'Глава ЗАТО г.Железногорск',
    slide2PositionOptions: 'slide2-position-options_zheleznogorsk',
    slide2InterestingPlace: true,
    slide2InterestingPlaceStyle: 'slide2-interesting-place',
    howManyUsers: randomInt(1200, 20000),
    howManyCompanies: randomInt(10, 200),
    howManyCategories: randomInt(1, 50),
    footerCityLogo: false
  },
  trehgornii: {
    city: 'trehgornii',
    headerCityLogo: true,
    colorThemeClasses: {
      section: 'section-color-theme_trehgornii',
      leftCircleImage: 'left-circle-image-color-theme_trehgornii',
      rightCircleImage: 'right-circle-image-color-theme_trehgornii',
      bottomCircleImage: 'bottom-circle-image-color-theme_trehgornii',
      footer: 'footer-color-theme_trehgornii',
      formColor: 'color-theme_trehgornii'
    },
    cityName: 'Трехгорный',
    helloText: 'Уважаемые жители города Трехгорного!',
    helloTextMain:
      'Перед вами портал «Умный город Росатома — Трехгорный». \n' +
      'Данный портал помогает упростить взаимодействие жителей города с органами власти и городскими службами. Сейчас портал находится в тестовом режиме, и нам важно ваше мнение. Со временем количество и качество сервисов будет расти, а их возможности – расширяться!',
    headOfCityName: 'Евгений Сычев',
    headOfCityOccupation: 'глава города Трехгорного',
    slide2PositionOptions: 'slide2-position-options_trehgornii',
    slide2InterestingPlace: true,
    slide2InterestingPlaceStyle: 'slide2-interesting-place',
    howManyUsers: randomInt(1200, 20000),
    howManyCompanies: randomInt(10, 200),
    howManyCategories: randomInt(1, 50),
    footerCityLogo: true
  }
})

export const getters = {
  // GET_CITY: state => state.zarechnii,
}

export const mutations = {}

export const actions = {}
