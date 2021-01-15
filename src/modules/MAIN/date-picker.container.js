import React, {Component} from 'react';
import DateCard from './date-picker.view';
import { store } from 'react-notifications-component';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class DatePickerContainer extends Component{
    constructor(props){
        super(props);
        
        this.state  = {
            date1: '',
            date2: '',
            valuesList: [ {
                startDate: '01/04/2021',
                endDate: '01/09/2021'
            }]
        }
    
    }
    getFormattedDate = (date) =>{
        let year = date.getFullYear();
        let month = (1 + date.getMonth()).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
      
        return month + '/' + day + '/' + year;
    }

    handleSaveClick = (e) => {
        e.stopPropagation();
        console.log('btn clicked');

        if ( this.state.date1 != '' && this.state.date2 != ''){

            const dateCombo =  {
                startDate: this.getFormattedDate(this.state.date1),
                endDate: this.getFormattedDate(this.state.date2),
            }

            const tempList = [...this.state.valuesList];
            tempList.push(dateCombo);

            this.setState({valuesList: tempList});

            store.addNotification({
                title: "Success!",
                message: "New Date Range added to savelist",
                type: "success",
                insert: "top",
                container: "bottom-center",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                  duration: 4000,
                  onScreen: true
                }
            });

            // must add some input validation here later. Will check if any of the new dates are different from the old times "statewise"
        }
        else alert('empty entry');

    }

    // these can be eliminated with the oporations wihtin the onChange method itself
    handleStartDateChange = (date) => {
        // this.setState({date1: e.target.value})
        console.log({date});
        this.setState({date1: date})
    }

    handleEndDateChange = (date) => {
        //console.log('end date: ' , e.target.value);
        this.setState({date2: date})
    }

    handleDeleteClick = (e, givenIndex) => {
        e.stopPropagation();

        console.log('Delete Clicked');
        console.log({givenIndex});
        
        const tempList = [...this.state.valuesList];
        const tempSpliceResult = tempList.splice(givenIndex, 1);
    
        this.setState({ valuesList: [...tempList] });

        store.addNotification({
            title: "Delete",
            message: "The Date Range has now been deleted",
            type: "warning",
            insert: "top",
            container: "bottom-center",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 4000
            }
        });

    }

    render(){
        return(
            <div className="container">
                <div className="row card" style={{marginTop: "-6rem"}}>
                    <div >
                        <div class="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="heading-container">
                                        <div className="mini-heading">Select Dates</div>
                                        <div className="main-heading">Click any input to make selection</div>
                                    </div>
                                    <div class="card" >
                                        <div class="card-body">
                                            <div className="row" >
                                                <div className="col-md-12">
                                                    <div class="input-group mb-3">
                                                        <DatePicker 
                                                            wrapperClassName="col-12" 
                                                            selected={this.state.date1} 
                                                            dateFormat='MM/dd/yyyy' 
                                                            selectsStart 
                                                            onChange={(date) => this.handleStartDateChange(date)} 
                                                            startDate={this.state.date1}
                                                            endDate={this.state.date2}
                                                            />
                                                        {/* <input type="date" class="form-control" value={this.state.date1} onChange={this.handleStartDateChange}/> */}
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div class="input-group mb-3">
                                                            <DatePicker 
                                                                wrapperClassName="col-12" 
                                                                selected={this.state.date2} 
                                                                dateFormat='MM/dd/yyyy' 
                                                                selectsEnd 
                                                                onChange={(date) => this.handleEndDateChange(date)} 
                                                                startDate={this.state.date1}
                                                                endDate={this.state.date2}
                                                            />
                                                        {/* <input type="date" class="form-control" value={this.state.date2} onChange={this.handleEndDateChange}/> */}
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div class="input-group mb-3">
                                                    <button class="btn btn-success col-md-12" type="button" selectsEnd onClick={(e) => this.handleSaveClick(e)}>Add to datelist</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row" >
                                                <div className="col-md-12 text-align justify-content-md-center mt-3">
                                                    {/* <img src="../../assets/png/pale-at-the-airport.png" alt="" style={{width: "80%"}}/> */}
                                                    {/* <img src="../../assets/png/green-bush.png" alt="" style={{width: "100%"}}/> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-6"> 
                                <div className="heading-container">
                                    <div className="mini-heading">Date List</div>
                                    <div className="main-heading">View your saved dates here</div>
                                </div>
                                <div class="row justify-content-center">
                                    <ul class="list-group">
                                    {
                                        this.state.valuesList.map((valsObj, index) => {
                                            return (                        
                                                    <DateCard 
                                                        start={valsObj.startDate}
                                                        end={valsObj.endDate}
                                                        handleDeleteClick={this.handleDeleteClick}
                                                        key={index}
                                                        index={index}
                                                    /> ?? <p>None here</p> 
                                            )
                                        })
                                    }
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
                <p></p>
            </div>
        );
    }
}

export default DatePickerContainer;


/*

    () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker
        closeOnScroll={e => e.target === document}
        selected={startDate}
        onChange={date => setStartDate(date)}
        />
        );
    };


                    <ul class="list-group">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>


                        <div class="row justify-content-md-center">               
                            <ul class="list-group">
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Cras justo odio
                                    <span class="badge bg-danger rounded-pill text-white">14</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Dapibus ac facilisis in
                                    <span class="badge bg-danger rounded-pill text-white">14</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    Morbi leo risus
                                    <span class="badge bg-danger rounded-pill text-white">14</span>
                                </li>
                            </ul>
                        </div>


*/