import React, { useState } from 'react'
import { Container, TitleWrapper, CardWrapper } from './styles'
import { Navbar } from '../../components/Navbar'
import { RecipeCard } from '../../components/RecipeCard'
import { RecipeRegisterModal } from '../../components/RecipeRegisterModal'
import { RecipeModal } from '../../components/RecipeModal'
import { Navigate, useNavigate } from 'react-router-dom'
import { DefaultModal } from '../../components/DefaultModal'

export function Home() {
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const navigate = useNavigate()

  const nome = localStorage.getItem('@ReceitaOnline:nome') != undefined ? localStorage.getItem('@ReceitaOnline:nome') : 'Nelson-Son';

  return <Container>
    <Navbar nome={nome} />
    <main>
      <TitleWrapper>
        <h2>Receitas</h2>
        <DefaultModal buttonText="Cadastrar - Receita" >
          <RecipeRegisterModal />
        </DefaultModal>

      </TitleWrapper>

      <CardWrapper>
        <DefaultModal buttonChild={<RecipeCard />} buttonText="Receita Modal" >
          <RecipeModal />
        </DefaultModal>
        <RecipeCard onClick={() => {
          navigate('/modal')
        }} />
        <RecipeCard onClick={() => {
          navigate('/modal')
        }} />
        <RecipeCard onClick={() => {
          navigate('/modal')
        }} />
        <RecipeCard onClick={() => {
          navigate('/modal')
        }} />
        <RecipeCard onClick={() => {
          navigate('/modal')
        }} />
        <RecipeCard onClick={() => {
          navigate('/modal')
        }} />
      </CardWrapper>
    </main>
    <footer></footer>
  </Container>
}
