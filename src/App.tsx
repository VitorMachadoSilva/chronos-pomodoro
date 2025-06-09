import { PlayCircleIcon } from "lucide-react";
import { Container } from "./components/Container";
import { CountDown } from "./components/CountDown";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { DefaultInput } from "./components/DefaultInput";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu/>
      </Container>

      <Container>
        <CountDown/>
      </Container>

      <Container>
        <form className="form" action=''>
          <div className="formRow">
            <DefaultInput 
            id="meuInput" 
            type="text" 
            labelText="task" 
            placeholder="Digite algo"
            />
          </div>

          <div className='formRow'>Add commentMore actions
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles/>
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon/>} color="green"/>
            <DefaultButton icon={<PlayCircleIcon/>} color="red"/>
          </div>
        </form>
      </Container>
    </>
  );
}
