import React from 'react';
import './Dropdown.css';


class Dropdown extends React.Component {
constructor(){
    super();

    this.state = {
        displayMenu: false,
        text:"I'm Looking For",
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);    
};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  changeText(choice)
  {
    this.setState({text:choice});
  }

  async displayChoice(choice)
  {
    await this.changeText(choice.term);
    this.props.onChange(choice);
  }

  render() {
    return (
        <div className="dropdown">
         <div className="button" onClick={this.showDropdownMenu}>{this.state.text}</div>

          { this.state.displayMenu ? (
          <nav>
          <ul>
            <li className="droplist">Food</li>
            {this.props.category.Food.map(subcategory => (<li><button className="listbutton" onClick={this.displayChoice.bind(this, subcategory)}>{subcategory.term}</button></li>))}
            <li className="droplist">Entertainment</li>
            {this.props.category.Entertainment.map(subcategory => (<li><button className="listbutton" onClick={this.displayChoice.bind(this, subcategory)}>{subcategory.term}</button></li>))}
            <li className="droplist">Sightseeing</li>
            {this.props.category.Sightseeing.map(subcategory => (<li><button className="listbutton" onClick={this.displayChoice.bind(this, subcategory)}>{subcategory.term}</button></li>))}
          </ul>
          </nav>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default Dropdown;