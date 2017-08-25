class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: '' };
        this.onSendClick = this.onSendClick.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.onKeyPressed = this.onKeyPressed.bind(this);
    }

    onSendClick() {
        if (this.props.onMessage) {
            this.props.onMessage(this.state.message);
        }

        this.setState({message: ''});
    }

    onMessageChange(e) {
        this.setState({message: e.target.value});
    }

    onKeyPressed(e) {
        if (e.charCode === 13) {
            e.preventDefault();
            this.onSendClick();
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-8 col-md-8">
                    <input type='text' className="form-control input-lg" placeholder="type a message..."
                        value={this.state.message} onChange={this.onMessageChange} 
                        onKeyPress={this.onKeyPressed} />
                </div>
                <div className="col-sm-4 col-md-4">
                    <button className='btn btn-primary btn-block btn-lg' onClick={this.onSendClick}>
                        <i className="fa fa-envelope-o fa-fw" aria-hidden="true"></i>Send</button>
                </div>
            </div>
        );
    }
}