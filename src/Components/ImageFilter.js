import React from 'react'
import alimentacao from '../assets/images/alimentacao.svg'
import saude from '../assets/images/saude.svg'
import transporte from '../assets/images/transporte.svg'
import utilidades from '../assets/images/utilidades.svg'
import outros from '../assets/images/outros.svg'

import {IconeTheme} from './UI'

export default (type) => {
  const Images = {
    Restaurante: <IconeTheme src={alimentacao} alt="Restaurante" />,
    Utilidades: <IconeTheme src={utilidades} alt="Utilidades" />,
    Saude: <IconeTheme src={saude} alt="Saude" />,
    Transporte: <IconeTheme src={transporte} alt="Transporte" />,
    default: <IconeTheme src={outros} alt="Outro" />,
  }

  return Images[type] || Images.default
}
