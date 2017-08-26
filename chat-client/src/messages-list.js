class Messages extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    {this.props.messages.map(renderMessage)}
                </div>
            </div>
        )
    }
}

function renderMessage(message) {
    return (
        <p key={message.key} className='text-left text-primary'>
        {tokenize(message.value)}
        </p>
    );
}

function tokenize(text) {
    let splitExp = /(:fa-[a-zA-Z\-]*:)/g;
    let replaceExp = /(:)(fa-[a-zA-Z\-]*(?=:))(:)/;
    let values = text.split(splitExp);

    return values.map((value, i) => splitExp.test(value) 
        ? (<i key={i.toString()} className={`fa ${value.replace(replaceExp, '$2')} fa-lg`} aria-hidden="true"></i>) 
        : (<span key={i.toString()}>{value}</span>));
}