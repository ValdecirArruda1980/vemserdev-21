import { useState } from "react";

import { FaSearch } from "react-icons/fa";

import { getUserDetails } from "../../api/github";

import { Container, Content } from './styles'

export const Dashboard = () => {
  const[username, setUserName] = useState('')
  const [loading, setLoading] = useState(false)
  
  function handleSetUser(event) {
    setUserName(Event.target.value)
  }

  async function handleGetDetaisl() {
    try {
      setLoading(true)
      const result = await getUserDetails(username)

      console.log(result)

    } catch (error) {
      console.error(error.message)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <Container>
      <Content>
        <label htmlFor="nickname">
          Digite o usúario GIT
          <input id="nickname" type="text" placeholder="Digite aqui seu usúario"/>
        </label>
       

        <button>Buscar <FaSearch /></button>
      </Content>
    </Container>
  )
}