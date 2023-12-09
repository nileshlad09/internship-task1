import React from 'react'
import { data } from '../Data/userdata'
import Graph from '../Graph/Graph';
import Graph2 from '../Graph/Graph2';
import Sidebar from '../Sidebar/Sidebar';
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="sidebarSection">
      <Sidebar/>
      </div>
      <div className="genderChart">
        <h2>Kay Performance indices</h2>
        <div className="section1">
          <Graph data={data}/>
        </div>
        <hr />
        <div className="section2">
        <Graph2 data={data} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
