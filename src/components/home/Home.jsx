import Header from '../header';
import Main from '../main';

const Home = () => {
    const btnDetails =
    [
      {
        id: 'twitter',
        text: 'Twitter Link',
        link: 'https://twitter.com/mrtaajDeveloper',
      },
      {
        id: 'slack',
        text: 'Saheed Tajudeen',
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
      },
      {
        id: 'contact',
        text: 'Contact Me',
        link: '/contact',
      }
    ]
  return (
    <>
        <Header />
        <Main btnDetails={btnDetails}/>
    </>
  )
}

export default Home