import './App.css';
import Footer from './components/footer';
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
        id: 'btn__zuri',
        text: 'Zuri Team',
        link: 'https://training.zuri.team/',
      },
      {
        id: 'books',
        text: 'Zuri Books',
        link: 'https://books.zuri.team',
      },
      {
        id: 'book__python',
        text: 'Python Books',
        link: 'https://books.zuri.team/python-for-beginners?ref_id=saheedtajudeen',
      },
      {
        id: 'pitch',
        text: 'Background Check for Coders',
        link: 'https://background.zuri.team',
      },
      {
        id: 'book__design',
        text: 'Design Books',
        link: 'https://books.zuri.team/design-rules',
      }
    ]

  return (
    <div className="container">
      <Header />
      <Main btnDetails={btnDetails}/>
      <Footer />
    </div>
  );
}

export default App;
