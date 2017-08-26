class AppWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.messagesStore = MessagesStore(() => this.forceUpdate());
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-12 col-md-6 col-md-offset-3 col-sm-offset-0">
                    <Messages messages={this.messagesStore.getMessages()} />
                    <Message onMessage={this.messagesStore.addMessage}/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<AppWrapper />, document.getElementById('root'));