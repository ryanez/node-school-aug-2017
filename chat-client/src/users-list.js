class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    userRow(user) {
        let selected = !!this.state[user.key];

        return (
            <tr key={user.key} className={selected ? 'info' : ''} onClick={e => this.rowClick(user)}>
                <td>{user.first}</td>
                <td>{user.last}</td>
                <td>{user.username}</td>
            </tr>
        );
    }

    rowClick(user) {
        let state = {};
        state[user.key] = !this.state[user.key];
        this.setState(state);
    }

    render() {
        return (
            <table className='table table-bordered'>
            <thead>
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Username</td>
                </tr>
            </thead>
            <tbody>
                { this.props.users.map(user => this.userRow(user)) }
            </tbody>
            </table>            
        )
    }
}
