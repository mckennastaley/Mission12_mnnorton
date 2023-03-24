import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from 'react-bootstrap/Card';
import data from '/Users/mckennastaley/Documents/School/Winter 2023/IS 413/Mission12_mnnorton/frontend/src/CollegeBasketballTeams.json';
import '/Users/mckennastaley/Documents/School/Winter 2023/IS 413/Mission12_mnnorton/frontend/src/team.css';

interface ITeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

const teamJSON = data;

function Welcome(){
  return(<h1>Welcome! View NCAA March Madness Information here.</h1>);
}

class Team extends React.Component<ITeamProps> {
  render() {
    const { school, name, city, state } = this.props;
    
    return (
      <Card className="team-card">
        <Card.Body>
          <Card.Title>{school}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{name}</Card.Subtitle>
          <Card.Text>
            {city}, {state}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

function TeamList() {
  return (
    <div>
      {teamJSON.teams.map(oneTeam => <Team
        key={oneTeam.tid}
        school={oneTeam.school}
        name={oneTeam.name}
        city={oneTeam.city}
        state={oneTeam.state}
      />)}
    </div>
  );
}


function App() {
  return(
    <div>
      <Welcome/>
      <TeamList/>
    </div>
  )
}

export default App;
