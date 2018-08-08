import React, { Component } from 'react';
import { Navbar, NavItem, SideNav, SideNavItem, Button, Input } from 'react-materialize';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar brand='logo' right>
          <NavItem onClick={() => console.log('Filter markers ...')}>I'm a customer</NavItem>
          <NavItem href='#'>I'm a supplier</NavItem>
        </Navbar>
        <Map/>

        <SideNav
          trigger={<Button>Find It!</Button>}
          >
          <SideNavItem>
            <Input placeholder="Type to filter..." s={6} label="Filter" />
          </SideNavItem>
          <SideNavItem>Category 1</SideNavItem>
          <SideNavItem>Category 1</SideNavItem>
          <SideNavItem>Собутыльники</SideNavItem>
          <SideNavItem>Category 2</SideNavItem>
          <SideNavItem>Category 3</SideNavItem>
          <SideNavItem>Category 4</SideNavItem>
          <SideNavItem>Category 5</SideNavItem>
          <SideNavItem>Category 6</SideNavItem>
          <SideNavItem>Category 7</SideNavItem>
          <SideNavItem>Category 8</SideNavItem>
          <SideNavItem>Category 9</SideNavItem>

          <SideNavItem waves href='#'>Something... 18+</SideNavItem>
        </SideNav>
      </div>
    );
  }
}

export default App;
