import React, {Component} from 'react';
import {connect} from 'react-redux';
import Select from '../UI/forms/select'
import {getAllCountriesAction} from '../actions/actions';


class SearchBar extends Component {

    // Gestion des changements des inputs dans le formulaire
    handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
    };

    componentDidMount() {
         this.props.getAllCountriesAction();
    }

    render() {

        return (
            <u>
                <Select
                    name="customer"
                    label="Client"
                    value="contry"
                    error=""
                    onChange={this.handleChange}
                >
                    {this.props.countries.map(country => (
                        <option key={country.alpha2Code} value={country.alpha2Code}>
                            {country.name}
                        </option>
                    ))}
                </Select>
            </u>
        );
    }

}

const mapStateToProps = store => {
    return {
        countries: store.countriesRootReducer.countries
    };
};

const mapDispatchToProps = {
    getAllCountriesAction
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);