import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import 'ag-grid-community/dist/styles/ag-theme-dark.css';
import Toggle from 'react-toggle-component';
import 'react-toggle-component/styles.css';


export class Movies extends Component {
    constructor(props) {
        super(props);

    this.state={
        defaultColDef: {
            resizable: true
        },
        columnDefs: [
            {headerName: "Movie Title", field: "movie_title"},
            {headerName: "Director", field: "director_name"},
            {headerName: "Main Actor", field: "actor_1_name"},
            {headerName: "Supoorting Actor", field: "actor_2_name"},
            {headerName: "Genre", field: "genres", unSortIcon: true},
            {headerName: "Language", field: "language",unSortIcon: true},
            {headerName: "Country", field: "country",unSortIcon: true},
            {headerName: "Rating", field: "content_rating"},
            {headerName: "Budget", field: "budget",unSortIcon: true},
            {headerName: "Year", field: "title_year",unSortIcon: true},
            {headerName: "Keywords", field: "plot_keywords"},
            {headerName: "More Details", field: "movie_imdb_link"}
        ],
        rowData:[],
    };
    
}

onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
};

onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }
   

    componentDidMount(){
       
        axios.get(`https://cors-anywhere.herokuapp.com/http://starlord.hackerearth.com/movies`)
        .then(res=>{
            this.setState({rowData:res.data});
            console.log(this.state.rowData);
        })
            }
     

  render() {
    if((this.state.rowData).length!==499){
        return (<Spinner/>);
    }
   
    else{
    
    return (
        <>
        <Toggle label="Dark Theme" style={{padding:"25px", fontSize:"12px"}}
                    checked={this.state.checked}
                    onToggle={value => { this.setState( { checked : !this.state.checked } )}}/>
        <br/>
        <div className={this.state.checked ? "ag-theme-dark" : "ag-theme-material"}>
            <AgGridReact  
                enableSorting={true} animateRows={true}
                enableFilter={true}
                pagination={true} paginationPageSize="10"
                columnDefs={this.state.columnDefs}
                rowData={this.state.rowData}
                defaultColDef={this.state.defaultColDef}
                onGridReady={this.onGridReady}
                onFirstDataRendered={this.onFirstDataRendered.bind(this)}
                >
            </AgGridReact>
        </div>
        
      </>
    );
    
  }}

  
}



export default Movies;
