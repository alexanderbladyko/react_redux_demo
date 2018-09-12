import React from 'react'

class EmployeesPlaces extends React.Component {
    renderPlace(place, index) {
        return (
            <div key={index} className="row">
                <div className="col-6 p-3">
                    {index !== undefined && `Этаж ${index + 1}.`} Количество человек: {place.people.length}
                </div>
                {
                    place.people.length > 3 &&
                    <div className="col-6">
                        <div className="alert alert-danger" role="alert">
                            Переполнено!
                        </div>
                    </div>
                }
            </div>
        )
    }
    render() {
        return (
            <div className="container">
                <div className="row align-items-center p-3 my-3 bg-light rounded box-shadow">
                    <div className="col-6 p-3">
                        <h3>
                            Офис: Волна
                        </h3>
                        <p>
                            Время: {this.props.employees.date.toLocaleString()}
                        </p>
                    </div>
                </div>
                <h4 className="p-3">
                    Столовая
                </h4>
                {this.renderPlace(this.props.employees.canteen)}
                <h4 className="p-3">
                    Офис
                </h4>
                {this.props.employees.floors.map(this.renderPlace)}
            </div>
        )
    }
}

export default EmployeesPlaces