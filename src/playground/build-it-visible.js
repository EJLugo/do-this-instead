let visibility = false; //by default, details shouldn't show

const toggleVisibility = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
            {visibility ? 'Hide Details' : 'Show details'}
             </button>
             {visibility && (
                 <div>
                    <p>
                        These are details you can now see!
                    </p>
                 </div>
             )}
        </div>

    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();