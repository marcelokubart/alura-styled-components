import {
  fundoClaro,
  conteudoFundoClaro,
  textoFundoClaro,
  fundoEscuro,
  conteudoFundoEscuro,
  textoFundoEscuro
} from './variaveis'

export const lightTheme = {
  body: fundoClaro,
  inside: conteudoFundoClaro,
  text: textoFundoClaro,
  filter: ''
}

export const darkTheme = {
  body: fundoEscuro,
  inside: conteudoFundoEscuro,
  text: textoFundoEscuro,
  filter: 'invert(100)'
}
