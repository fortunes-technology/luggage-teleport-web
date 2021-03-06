import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom'
import { getCurrentUser } from '../aws_cognito';
import { FormGroup, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { PassBookData } from '../actions'

import FaPlane from 'react-icons/lib/fa/plane';
import FaClockO from 'react-icons/lib/fa/clock-o';
import FaCalendar from 'react-icons/lib/fa/calendar';
import MdHotel from 'react-icons/lib/md/hotel';
import FaUser from 'react-icons/lib/fa/user';
import FaClose from 'react-icons/lib/fa/close';
import '../App.css';

class HotelToAirport extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            PhoneNumber: '',
            dateType: 'text',
            timeType: 'text',
            Hotel: '',
            Airport: '',
            Airline: '',
            HotelBookingRef: '',
            NameUnderHotelRsv: '',
            PickupDatetime: '',
            FlightNumber: '',
            DepartureTime: '',
            BookingType: 'HTA'
        }

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    PopupModal() {
        return (
            <div>
                <button
                    className="btn btn-lg"
                    onClick={this.handleOpenModal}
                    type="button"
                    style={{ backgroundColor: 'yellow', width: '260px' }}>
                    Next
                </button>
                <Modal
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleCloseModal}
                    style={{ position: 'fixed' }}
                >
                    <div className="popup-image">
                        <button style={{ margin: 5 }} className="btn btn-sm btn-danger" onClick={this.handleCloseModal}><FaClose /></button>

                        <div align="center" style={{ marginTop: '10px' }}>
                            <img
                                src="https://www.luggageteleport.com/wp-content/themes/luggage/images/logo.png"
                                style={{ padding: '10px', margin: '20px' }}
                            />
                            <div style={{ marginTop: '3em' }}>
                                <Link to="/login"><button className="btn btn-lg btn-default">Login</button></Link>
                                <h3 style={{ marginTop: '2em' }}>Or</h3>
                                <Link to="/register"><button className="btn btn-lg btn-default">Sign Up</button></Link>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }

    buttonSubmit() {
        return (
            <Link to="/htareview" style={{color: 'black'}}>
                <button
                    className="btn btn-lg"
                    onClick={() => this.SubmitHotelToAirportData()}
                    type="button"
                    style={{ backgroundColor: 'yellow', width: '260px' }}>
                    Next
                </button>
            </Link>
        )
    }

    SubmitHotelToAirportData() {
        let datas = [];
        datas.push(this.state);
        this.props.PassBookData(datas);
    }

    componentDidMount() {
        console.log('this.props', this.props.user);
        const { Email, PhoneNumber } = this.props.user;
        this.setState({ Email, PhoneNumber })
    }

    render() {
        // const { email } = this.props.user.user;
        const currentUser = getCurrentUser()
        return (
            <div class="polaroid">
                <div class="container">
                    <div className="form-inline">
                        <div className="form-group">
                            {/**
                         * Hotel Section
                         */}
                            <form>
                                <FormGroup>
                                    <InputGroup>
                                        <select
                                            className="inputResponsive"
                                            style={{ height: '35px', width: '260px' }}
                                            onChange={event => this.setState({ Hotel: event.target.value })}>
                                            <option value="" selected disabled>Hotel for Pick up</option>
                                            <option value="Shantika Hotel Jakarta">Shantika Hotel Jakarta</option>
                                            <option value="Ritz-Carlton Hotel">Ritz-Carlton Hotel</option>
                                        </select>
                                    </InputGroup>
                                </FormGroup>
                                <hr />
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Addon style={{ backgroundColor: 'white' }}><MdHotel style={{ color: '#00bfff' }} /></InputGroup.Addon>
                                        <input
                                            type='text'
                                            onChange={e => this.setState({ HotelBookingRef: e.target.value })}
                                            placeholder="Hotel Booking Reference"
                                            className="inputResponsive"
                                            style={{ width: '220px' }}
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <hr />
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Addon style={{ backgroundColor: 'white' }}><FaUser style={{ color: '#00bfff' }} /></InputGroup.Addon>
                                        <input
                                            type='text'
                                            onChange={e => this.setState({ NameUnderHotelRsv: e.target.value })}
                                            placeholder="Name under Hotel Reservation"
                                            className="inputResponsive"
                                            style={{ width: '220px' }}
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <hr />
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Addon style={{ backgroundColor: 'white' }}><FaCalendar style={{ color: '#00bfff' }} /></InputGroup.Addon>
                                        <input
                                            type={this.state.dateType}
                                            className="inputResponsive"
                                            placeholder="Pick up Date and Time"
                                            onChange={e => this.setState({ PickupDatetime: e.target.value })}
                                            onFocus={() => this.setState({ dateType: 'datetime-local' })}
                                            onBlur={() => this.setState({ dateType: 'text' })}
                                            style={{ width: '220px' }}
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <hr />
                                {
                                    /**
                                     * Airport Section
                                     */
                                }
                                <FormGroup>
                                    <InputGroup>
                                        <select
                                            className="inputResponsive"
                                            style={{ height: '35px', width: '260px' }}
                                            onChange={event => this.setState({ Airport: event.target.value })}>
                                            <option value="" selected disabled>Choose Airport for Drop off</option>
                                            <option value="San Fransisco intl Airport">San Fransisco intl Airport</option>
                                            <option value="Soekarno-Hatta intl Airport">Soekarno-Hatta intl Airport</option>
                                        </select>
                                    </InputGroup>
                                </FormGroup>
                                <hr />
                                <FormGroup>
                                    <InputGroup>
                                        <select
                                            className="inputResponsive"
                                            style={{ height: '35px', width: '260px' }}
                                            onChange={event => this.setState({ Airline: event.target.value })}>
                                            <option value="" selected disabled>Airline</option>
                                            <option value="American Airlines">American Airlines</option>
                                            <option value="Garuda Airlines">Garuda Airlines</option>
                                        </select>
                                    </InputGroup>
                                </FormGroup>
                                <hr />
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Addon style={{ backgroundColor: 'white' }}><FaPlane style={{ color: '#e6e600' }} /></InputGroup.Addon>
                                        <input
                                            type="text"
                                            onChange={e => this.setState({ FlightNumber: e.target.value })}
                                            placeholder="Flight Number"
                                            className="inputResponsive"
                                            style={{ width: '220px' }}
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <hr />
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Addon style={{ backgroundColor: 'white' }}><FaClockO style={{ color: '#e6e600' }} /></InputGroup.Addon>
                                        <input
                                            type={this.state.timeType}
                                            placeholder="Departure Time"
                                            className="inputResponsive"
                                            onChange={e => this.setState({ DepartureTime: e.target.value })}
                                            onFocus={() => this.setState({ timeType: 'time' })}
                                            onBlur={() => this.setState({ timeType: 'text' })}
                                            style={{ width: '220px' }}
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <hr />
                                {
                                    !currentUser ?
                                        this.PopupModal()
                                        : this.buttonSubmit()
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapsStateToProps(state) {
    const { user } = state;
    return {
        user
    }
}

export default connect(mapsStateToProps, { PassBookData })(HotelToAirport);