import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransationsModal: () => void
}

export function Header ({onOpenNewTransationsModal}: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button 
          onClick={onOpenNewTransationsModal}
          type="button"
        >
          Nova transação
        </button>
      </Content>
    </Container>
  )
}