import { Fragment } from 'react'
import Chat from './Chat';
import Search from './Search';
import './Ui.css'

const Ui = (pros) => {
  return (
    <Fragment >
      <div className="Warrper">
        <Chat />
        <Search />
      </div>

    </Fragment>

  )
}
export default Ui;