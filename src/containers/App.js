import React, {Component} from 'react';
import SearchBar from './SearchBar'


class App extends Component {

    render() {
        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="shadow-lg p-3 mb-5 bg-white rounded  col-md-12">
                       <SearchBar/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="shadow-lg p-3 mb-5 bg-white rounded col-md-auto">
                        <h1> tipls money</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
