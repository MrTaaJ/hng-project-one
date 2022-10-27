import { useState } from "react";
import './App.css';
import Header from './components/header';
import Main from './components/main';

function App() {

  const btnDetails =
    [
      {
        id: 'twitter',
        text: 'Twitter Link',
        link: 'https://twitter.com/mrtaajDeveloper',
      },
      {
        id: 'slack',
        text: 'Slack Channel',
        link: 'hng9.slack.com',
      },
      {
        id: 'btn_zuri',
        text: 'Zuri Team',
        link: 'https://training.zuri.team/',
      },
      {
        id: 'books',
        text: 'Zuri Books',
        link: 'https://books.zuri.team',
      },
      {
        id: 'book_python',
        text: 'Python Books',
        link: 'https://books.zuri.team/python-fir-beginners?ref_id=saheedtajudeen',
      },
      {
        id: 'pitch',
        text: 'Background Check for Coders',
        link: 'https://background.zuri.team',
      },
      {
        id: 'book_design',
        text: 'Design Books',
        link: 'https://books.zuri.team/design-rules',
      }
    ]

  return (
    <div className="container">
      <Header />
      <Main btnDetails={btnDetails}/>
    </div>
  );
}

export default App;
