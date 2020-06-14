import React from "react"
import { Header, Title, Main, Subtitle, Section, Div, P, Button, Input } from "./design-native"
import { View, StatusBar } from "react-native"

export default function () {
  return (
    <Div style={{marginTop: 25,}} onMove={() => alert("Você clicou!")}>
      <StatusBar barStyle="dark-content" backgroundColor="#00ccaa" translucent />
      <Header>
        Header
      </Header>
      <Main>
        <Title>Título com Design Native</Title>
        <Subtitle>
          Subtítulo
        </Subtitle>
        <P>
          Lorem Ipsum Kaiqu uis de raus latur munir nexir yiuiu baisb reqi kaupio
          gyiu poi sgduu sid hdio
        </P>
        <Input placeholder="Digite aqui" placeholderTextColor="#00ccaa" />
        <Button>
          CLIQUE AQUI
        </Button>
      </Main>
    </Div>
  )
}