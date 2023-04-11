import img1 from '../../assets/undraw_online_payments_re_y8f2.svg'
import img2 from '../../assets/undraw_transfer_money_re_6o1h.svg'

export const heroObj = {
  id: 'hero',
  colorBg: false,
  dark: true,
  topLine: 'title of hero',
  headLine: "Sample headline goes here",
  description: 'Here we will place a detailed description of the service we are providing',
  button: true,
  buttonLabel: 'Garantir minha vaga',
  rowReverse: false,
  img: img1,
  alt: 'image description',
}

export const aboutObj = {
  id: 'about',
  colorBg: '#f2f2c4',
  dark: false,
  topLine: 'title of about',
  headLine: "Sample headline goes here",
  description: 'Here we will place a detailed description of the service we are providing',
  button: false,
  buttonLabel: '',
  rowReverse: true,
  img: img2,
  alt: 'image description',
}

export const planObj = {
  id: 'plan',
  colorBg: false,
  dark: true,
  textAlign: 'center',
  topLine: 'title of plan',
  headLine: "Sample headline goes here",
  description: 'Here we will place a detailed description of the service we are providing',
  buttonLabel: 'Garantir minha vaga',
}

export const faqObj = {
  id: 'fac',
  colorBg: false,
  dark: true,
  topLine: 'FAQ',
  headLine: "Tudo o que você precisa saber sobre ...",
  description: 'Here we will place a detailed description of the service we are providing',
  button: false,
  questions: [
    {
      title: 'O que é o ...?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Ac turpis egestas sed tempus. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida.'
    },
    {
      title: 'Quanto custa?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Ac turpis egestas sed tempus. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida.'
    },
    {
      title: 'Por quanto tempo terei acesso?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Ac turpis egestas sed tempus. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida.'
    },
    {
      title: 'Vocês oferecem certificado?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Ac turpis egestas sed tempus. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida.'
    },
    {
      title: 'Ainda estou com dúvida, o que eu faço?',
      content: 'Estamos sempre por aqui. Então se precisar falar com a gente basta enviar um email para paulo.marinho@email.com'
    }
  ]
}

export const footerObj = {
  id: 'about',
  colorBg: false,
  dark: true,
  textAlign: 'center',
  topLine: 'title of footer',
  headLine: "Sample headline goes here",
  description: 'Here we will place a detailed description of the service we are providing',
  button: true,
  buttonLabel: 'Garantir minha vaga'
}

export const numbersObj = {
  id: 'about',
  colorBg: false,
  dark: true,
  numbers: [
    {
      value: '+900 aulas',
      content: 'Para você assistir quando quiser',
    },
    {
      value: '+200 horas',
      content: 'De conteúdo técnico e teórico para você se especializar',
    },
    {
      value: '5 módulos',
      content: 'Completos com tudo o que você precisa saber',
    }
  ]
}