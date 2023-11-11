import './App.css';
import Counter from './components/Counter';
import UserList from './components/UserList';

function App() {
    return (
        <div className='App'>
            <h1>Hello React!</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam veritatis repellat, similique voluptates labore beatae, necessitatibus iusto delectus vitae laudantium ipsa quaerat quidem. Eaque ab similique officiis dignissimos quae nihil?</p>

            <Counter />
            <UserList />

        </div>
    );
}

export default App;
