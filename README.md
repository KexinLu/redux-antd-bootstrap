
## Structure of general flow of data
-> user interactions with react components dispatching actions.
-> redux-saga listens for action events and handle async actions with events.
-> redux reducers handles events and manipulate redux store.
-> reselect is responsible to retrieve data from redux store, filtering also happens in reselect.
-> react component display values supplied by reselect.

redux-saga is also used for daemon behaviours if required.

## What could be improved
- Test coverage was intentionally left on a low due to time limit to implement the data flow.
- This setup is using a bootstrap I created sometime ago. In that bootstrap High Order Component was used to simply CRUD of entities, it was simplified in this demo.
- TypeScript and ImmutableJS should be used.
- Context was not used due to redux.

## Library Used
## Important Libraries

styled-components: Enables stylings with props on the fly.
antd: Enterprise level component library includes almost everything we need right out of the box.
antd-mobile: Less developed than antd, but is mobile-first. Some of the elements are used to replace antd elements to ensure mobile first.
redux-saga: Simply better solution than redux-thunk. Event driven. 
styled-components: Style components on the fly, enabling us to style components with props.
reselect: Memoized selectors, save computation when things are not changed.

### Core Libraries
react
redux
redux-saga
react-redux
react-router
connected-react-router (replacemeng for react-router-redux)
reselect
antd
antd-mobile
styled-components

### Other Libraries
moment JS - For time and timezone related
less - For antd and antd-mobile theme
normalizr - to flatten data (Not used in demo) 
react-app-rewired - to override webpack config without eject
Yarn - for the Lock
Eslint - Airbnb Standard for code style
Jest, Babel-Jest - for unit testing
sinon - for mocking ( Not used in this code sample but is used in real life project )
axios - for rest communication ( Not used )
enzyme - for testing rendering ( Not used in this demo)
classnames - for programmatically change class name ( Not used )
lodash - utility ( Not used )

