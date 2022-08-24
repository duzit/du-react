import React from "react";
import { ThemeContext, themes } from './theme-context';
import ThemeButton from "./theme-button";

function Toolbar(props: any) {
  return (
    <ThemeButton onClick={props.changeTheme}>
      Change Theme
    </ThemeButton>
  )
}

class Index extends React.Component {
  // toogleTheme: () => void;
  constructor(props: any) {
    super(props);

    this.state = {
      theme: themes.light
    };

    this.toogleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }))
    }
  }

  render() {
    return (
      <>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toogleTheme}></Toolbar>
        </ThemeContext.Provider>
        <ThemeButton >Default</ThemeButton>
      </>
    )
  }
}

export default Index;