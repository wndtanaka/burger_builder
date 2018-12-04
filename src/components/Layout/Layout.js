import React from 'react';
import classess from './Layout.css'

const layout = (props) => (
  <>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classess.Content}>
      {props.children}
    </main>
  </>
);

export default layout;