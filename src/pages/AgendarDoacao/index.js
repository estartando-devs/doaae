import * as S from "./styles";
import { HeaderBar } from "../../components/HeaderBar";
import { Input } from "../../components/Input";
import { CheckBox } from "../../components/Checkbox";
import { Button } from "../../components/Button";
import { LogoBall } from "../../components/LogoBall";

const AgendarDoacao = () => {
  const DATA_USER = {
    isLogged: true,
    profileImage: undefined,
  };

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <S.Container>
      <S.ContainerHeader>
        <S.Header>
          <HeaderBar
            isLogged={DATA_USER.isLogged}
            profileImage={DATA_USER.profileImage}
          >
            Agendar doação
          </HeaderBar>
        </S.Header>
        <p>Preencha os dados de acordo com sua doação</p>
        <h1>Agendando doação para ONG Mais</h1>
      </S.ContainerHeader>
      <S.ContainerInfo>
        <LogoBall backTo="instituicoes" />
        <S.ContainerText>
          <h1>Agende uma doação</h1>
          <p>Preencha os dados de acordo com sua doação</p>
        </S.ContainerText>
      </S.ContainerInfo>

      <S.ContainerMasterForm>
        <S.ContainerForm>
          <S.Form onSubmit={submit}>
            <Input
              inputType="text"
              id="itens"
              htmlFor="itens"
              label="Itens para doar"
              errorMessage={null}
            />

            <textarea
              name="descricao"
              id="descricao"
              placeholder="Detalhes (se preferir, dê mais detalhes sobre sua doação)"
            />

            <S.Check>
              <CheckBox />
            </S.Check>

            <span>Quando seria um bom dia para você ir entregar a doação?</span>

            <S.DateContainer>
              <Input inputType="date" errorMessage={null} />
            </S.DateContainer>

            <Button>Avançar</Button>
          </S.Form>
        </S.ContainerForm>
      </S.ContainerMasterForm>
    </S.Container>
  );
};

export default AgendarDoacao;
