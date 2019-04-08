import * as React from "react";

export interface DashboardProps {}

export interface DashboardState {}

export class Dashboard extends React.Component<DashboardProps, DashboardState> {

  componentDidMount() {
    this.getWeather(); 
  }

  getWeather = () => {
    // 
  }

  render() {
    return <div>
        
        <h1>Dashboard</h1>

    </div>;
  }
}
