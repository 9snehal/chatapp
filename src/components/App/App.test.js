import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './features/Home';
import Login from './features/Login'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

/*describe('Login component', () => {
test('should render correctly', () => {
      expect(render(
        <Login />
      )).toMatchSnapshot()
  })
})

it('renders correctly text component', () => {
 const InputTextComponent = renderer.create(<Home />).toJSON();
 expect(InputTextComponent).toMatchSnapshot();
});*/
